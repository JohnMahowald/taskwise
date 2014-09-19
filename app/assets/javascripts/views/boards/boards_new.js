TrelloClone.Views.BoardNew = Backbone.View.extend({
  events: {
    "submit #new_board_form" : "submitForm"
  },
  
  template: JST["boards/new"],
  
  render: function() {
    var content = this.template({ model: this.model })
    this.$el.html(content);
    return this;
  },
  
  submitForm: function(event) {
    event.preventDefault();
    
    var formData = $(event.currentTarget).serializeJSON()
    TrelloClone.Model.Board.create(formData, {
      success: function() {
        Backbone.history.navigate()
      }
    })
  }
  
});