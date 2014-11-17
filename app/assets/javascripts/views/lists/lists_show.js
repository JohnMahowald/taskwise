Taskwise.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/show"],

  initialize: function () {
    this.attachCardForm();
    this.model.cards().each(this.addCard.bind(this));
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "removeCard", this.removeCard)
  },
  
  attributes: { class: "list"},
  
  events: {
    "click .delete-list": "deleteList",
    "sortstop": "saveCards",
    "sortreceive": "receiveCard",
    "sortremove": "loseCard"
  },
  
  saveCards: function (event, ui) {
    var view = this;
    var $cards = $(event.target).find(".card-show")
    $cards.each( function (idx, card) {
      
      /* Data is stored in the card link */
      var $cardLink = $(card).find('a[data-ord]')
      var ord = $cardLink.data('ord')
        
      if (ord != idx) {
        /* Update card with new order */
        var id = $cardLink.data('cardId')        
        var card = view.model.cards().getOrFetch(id)
          
        card.save({
          "ord": idx
        }, {
          wait: true
        });
      }
    });
  },
  
  receiveCard: function (event, ui) {
    var cardId = $(ui.item).find('a[data-card-id]').data('card-id');
    var card = this.model.cards().getOrFetch(cardId);
		card.save({
			"list_id": this.model.id
		}, {
			wait: true
		});
  },
  
  render: function(id) {
    var content = this.template({ 
      list: this.model 
    });
    
    this.$el.html(content);
    this.$el.data("list-id", this.model.id);
    this.attachSubviews();
    this.onRender();
    return this;
  },
  
  addCard: function(card) {
    var subView = new Taskwise.Views.CardsShow({ 
      model: card
    });
    this.addSubview(".list-cards", subView);
  },
  
  removeCard: function (subview) {
    this.removeSubview(".list-cards", subview)
  },
  
  attachCardForm: function() {
    var formView = new Taskwise.Views.CardForm({
      model: this.model
    }); 
    this.addSubview(".new-card", formView);
  },
  
  deleteList: function(event) {
    event.preventDefault();
    var subview = this;
    var collection = this.model.collection
    this.model.destroy({
      success: function() {
        collection.trigger('removeListView', subview);
      }
    }); 
  },
  
  onRender: function () {
    $('.list-cards').sortable({
      connectWith: '.list-cards',
      placeholder: 'card-placeholder',
      start: function (event, ui) {
        ui.item.addClass('tilt')
      },
      stop: function (event, ui) {
        ui.item.removeClass('tilt')
      }
    });
  }
});