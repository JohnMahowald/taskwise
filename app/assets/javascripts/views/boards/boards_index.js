TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync remove", this.render)
  },
  
  events: {
    "click .delete_board": "deleteBoard"
  },
  
  template: JST["boards/index"],
  
  render: function() {
    var content = this.template({
      boards: this.collection
    });
    
    this.$el.html(content);
    return this;
  },
  
  deleteBoard: function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).data("id");
    var board = this.collection.getOrFetch(id)
    board.destroy();
  }  
})