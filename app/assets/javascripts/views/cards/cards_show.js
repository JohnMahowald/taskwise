Taskwise.Views.CardsShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.cardId = this.model.id
    this.listenTo(this.model, "sync", this.render);
  },
  
  template: JST["cards/show"],
  
  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    this.$("#card_display").sortable();
    return this;
  },
  
  attributes: { 
    class: "card-show"
  },
  
  events: {
    "click .delete-card": "deleteCard"
  },
  
  deleteCard: function(e) {
    e.preventDefault();
    var subview = this;
    var collection = this.model.collection;
    this.model.destroy({
      success: function () {
        collection.trigger('removeCard', subview);
      }
    })
  }
})