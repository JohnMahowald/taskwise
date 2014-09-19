TrelloClone.Views.BoardsShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync add", this.render);
  },
  
  template: JST["boards/show"],
  
  render: function(id) {    
    var content = this.template({ 
      board: this.model,
      lists: this.model.lists()
     })
    this.$el.html(content);
    return this;
  }
});