Taskwise.Views.CardsShow = Backbone.CompositeView.extend({
  template: JST["cards/show"],
  
  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    this.$("#card_display").sortable();
    return this;
  }
})