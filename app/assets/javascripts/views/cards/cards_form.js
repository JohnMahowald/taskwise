TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST["cards/form"],
  
  render: function() {
    var content = this.template();
  }
});