TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST["lists/form"],
  
  events: {
    "submit #new-list-form": "submit"
  },
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  submit: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    console.log(this.collection);
  },
});