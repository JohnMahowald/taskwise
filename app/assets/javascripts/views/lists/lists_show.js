TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.model.cards().each( function(card) {
      this.addCard(card)
    }.bind(this));
    
    this.listenTo(this.model.cards(), "add", this.addCard);
  },
  
  events: {
    "click .delete_list": "deleteList"
  },
  
  template: JST["lists/show"],
  
  render: function(id) {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.$(".list_show").sortable();
    return this;
  },
  
  addCard: function(card) {
    var subView = new TrelloClone.Views.CardsShow({ model: card });
    this.addSubview(".cards_container", subView);
  },
  
  deleteList: function(event) {
    event.preventDefault();
    this.model.destroy();
  }
});