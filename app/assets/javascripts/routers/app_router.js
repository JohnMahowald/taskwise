TrelloClone.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl
  },
  
  routes: {
    "" : "boardsIndex",
    "boards/new": "boardNew",    
    "boards/:id": "boardShow",
    "boards/:id/lists/new": "listNew"
  },
  
  boardsIndex: function() {
    TrelloClone.Collections.boards.fetch();
    
    var view = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.Collections.boards
    })
    
    this._swapView(view);
  },
  
  boardNew: function() {
    var board = new TrelloClone.Models.Board();
    var view = new TrelloClone.Views.BoardNew({ 
      model: board,
      collection: TrelloClone.Collections.boards
    });
    this._swapView(view);
  },
  
  boardShow: function(id) {
    var board = TrelloClone.Collections.boards.getOrFetch(id)
    var view = new TrelloClone.Views.BoardsShow({ model: board });
    this._swapView(view);
  },
  
  listNew: function(id) {
    var list = new TrelloClone.Models.List({ board_id: id })
    var view = new TrelloClone.Views.ListNew({ model: list })
    this._swapView(view);
  },
  
  _swapView: function(view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});

