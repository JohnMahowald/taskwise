Taskwise.Views.ListForm = Backbone.View.extend({
  template: JST["lists/form"],
  
  events: {
    "click .placeholder": "toggleView",
    "click .glyph": "toggleView",
    "submit #new-list-form": "submit"
  },
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  toggleView: function(e) {
    e.preventDefault();
    $(e.delegateTarget).find('.placeholder').toggleClass('active')
    $(e.delegateTarget).find('#new-list-form').toggleClass('active')
    this.clearInput();
  },
  
  hideForm: function () {
    $('.placeholder').addClass('active')
    $('#new-list-form').removeClass('active')
    this.clearInput();
  },
  
  clearInput: function () {
    $('.title-input').val("")
  },
  
  submit: function(event) {
    event.preventDefault();
    var form = this;
    var formData = $(event.currentTarget).serializeJSON();
    formData.list.board_id = this.model.id
    this.collection.create(formData, {
      success: function() {
        form.hideForm();
      }
    });
  },
});