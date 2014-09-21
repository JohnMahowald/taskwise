TrelloClone.Views.CardsNew = Backbone.View.extend({
  initialize: function(options) {
    this.list_id = options.list_id
  },
  
  template: JST["cards/new"],
  
  events: {
    "submit #new_card_form": "createCard"
  },
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  createCard: function(event) {
    event.preventDefaults();
    var params = $(event.currentTarget).serializeJSON();
    params.list_id = this.list_id;
  }
})