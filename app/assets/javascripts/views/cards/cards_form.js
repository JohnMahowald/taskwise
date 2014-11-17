Taskwise.Views.CardForm = Backbone.View.extend({
  template: JST["cards/form"],
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  attributes: { class: "card-form" },
  
  events: {
    "click .placeholder": "toggleForm",
    "click .glyph": "toggleForm",
    "submit .new-card-form": "submit"
  },
  
  toggleForm: function(e) {
    e.preventDefault();
    $(e.delegateTarget).find('.placeholder').toggleClass('active')
    $(e.delegateTarget).find('.new-card-form').toggleClass('active')
    this.clearInput();
  },
  
  hideForm: function () {
    $('.placeholder').addClass('active')
    $('.new-card-form').removeClass('active')
    this.clearInput();
  },
  
  clearInput: function() {
    $('.new-card-form > textarea').val("");
  },
  
  submit: function(e) {
    e.preventDefault();
    var list = this;
    var formData = $(e.target).serializeJSON();
    formData.card.list_id = this.model.id
    this.model.cards().create(formData, {
      success: function() {
        list.hideForm();
      }
    });
  }
});