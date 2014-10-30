Taskwise.Views.BoardNew = Backbone.View.extend({
  events: {
    "submit #new_board_form" : "submitForm"
  },
  
  template: JST["boards/new"],
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  submitForm: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    this.collection.create(formData, {
      success: function() {
        Backbone.history.navigate("#", { trigger: true })
      }
    });
  }
});