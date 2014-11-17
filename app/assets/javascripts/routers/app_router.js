Taskwise.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl
  },
  
  routes: {
    "" : "boardsIndex",   
    "boards/:id": "boardShow",
  },
  
  boardsIndex: function() {
    Taskwise.Collections.boards.fetch();
    
    var view = new Taskwise.Views.BoardsIndex({
      collection: Taskwise.Collections.boards
    });
    
    this._swapView(view);
  },
  
  boardShow: function(id) {
    var board = Taskwise.Collections.boards.getOrFetch(id);
    
    var view = new Taskwise.Views.BoardsShow({
      model: board,
      collection: board.lists()
    });
    
    this._swapView(view);
  },
  
  _swapView: function(view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});

