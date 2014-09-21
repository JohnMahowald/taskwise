TrelloClone.Views.CardsShow = Backbone.CompositeView.extend({
  template: JST["cards/show"],
  
  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    return this;
  }
})