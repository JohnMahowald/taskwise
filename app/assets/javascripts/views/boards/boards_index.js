Taskwise.Views.BoardsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync remove", this.render)
  },
  
  events: {
    "click .delete_board": "deleteBoard",
    "click #new-board-link": "showModal"
  },
  
  className: 'boards-index',
  
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
    var boardId = $(event.target).data();
    var board = this.collection.getOrFetch(boardId);
    board.destroy();
  },
  
  showModal: function(event) {
    event.preventDefault();
    var modalView = new Taskwise.Views.BoardModal({
      collection: this.collection
    });
    $('body').prepend(modalView.render().$el);
    modalView.delegateEvents();
    $("#new-board-modal").modal("show");
  }
})