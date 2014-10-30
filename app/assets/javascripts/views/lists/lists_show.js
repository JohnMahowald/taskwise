Taskwise.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/show"],

  initialize: function() {
    this.collection = this.model.cards();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.addCard);
  },
  
  addCard: function(card) {
    var subView = new Taskwise.Views.CardsShow({ 
      model: card 
    });
    this.addSubview(".list_cards", subView);
  },
  
  events: {
    "click .delete_list": "deleteList"
  },
  
  render: function(id) {
    var content = this.template({ 
      list: this.model 
    });
    
    this.$el.html(content);
    this.$el.data("list-id", this.model.id);
  
    this.renderCards();
    this.renderFooter();
    
    return this;
  },
  
  renderCards: function() {
    this.collection.each(this.addCard.bind(this));
    this.$('.list-cards').sortable();
  },
  
  renderFooter: function() {
    var formView = new Taskwise.Views.CardForm({
      collection: this.collection
    });
    
    this.addSubview(".new_card_form", formView);
  },
  
  deleteList: function(event) {
    event.preventDefault();
    this.model.destroy();
  }
});