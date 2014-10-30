Taskwise.Collections.Boards = Backbone.Collection.extend({
  url: "api/boards",
  
  model: Taskwise.Models.Board,
  
  getOrFetch: function(id) {
    var board = this.get(id)
    
    if (!board) {
      board = new Taskwise.Models.Board({ id: id })
      board.fetch({
        success: function() {
          this.add(board);
        }.bind(this)
      })
    } else {
      board.fetch()
    }
    
    return board
  }
});

Taskwise.Collections.boards = new Taskwise.Collections.Boards();