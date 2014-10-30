Taskwise.Views.ListNew = Backbone.View.extend({
  events: {
    "submit #new_list_form": "submitList"
  },
  
  template: JST["lists/new"],
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  submitList: function(event) {
    event.preventDefault();
    console.log(event.currentTarget);
    
    var formData = $(event.currentTarget).serializeJSON();
    formData.list.board_id = this.model.id,
    
    this.model.lists().create(formData, {
      success: function() {
        Backbone.history.navigate("#/boards/" + this.model.id, { trigger: true });
      }.bind(this)
    })
  }
});