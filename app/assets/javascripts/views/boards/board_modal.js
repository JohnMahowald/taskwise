TrelloClone.Views.BoardModal = Backbone.View.extend({
  template: JST["boards/modal"],
  
  events: {
    "click .card-modal-dismiss": "dismiss",
    "click .card-modal-backdrop": "dismiss",
    "submit #new-board-form": "submit"
  },
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  dismiss: function(event) {
    event.preventDefault();
    this.remove();
  },
  
  submit: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    var boards = this.collection
    boards.create(formData, {
      success: function(board) {
        boards.add(board)
      }
    });
    $("#new-board-modal").modal("hide")
  }  
});