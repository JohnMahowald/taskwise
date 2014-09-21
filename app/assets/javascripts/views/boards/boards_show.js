TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.collection = this.model.lists();
    this.listenTo(this.model, "sync", this.render);
    
    this.collection.each( function(list) {
      this.addView(list);
    }.bind(this));
    
    this.listenTo(this.collection, "add", this.addView);
    this.listenTo(this.collection, "remove", this.removeView);
    this.listenTo(this.collection, "add", this.render);
  },
  
  events: {
    "click #new_list_link": "showListForm",
    "submit #new_list_form": "submitList",
    "click #new_card_button": "persistListId",
    "submit #new_card_form": "submitCard",
    "click .card_button": "persistCardId"
  },
  
  persistCardId: function(event) {
    var cardId = $(event.currentTarget).data("cardId");
  },
  
  persistListId: function(event) {
    var listId = $(event.currentTarget).data("listId");
    this.currentListId = listId
  },
  
  submitCard: function(event) {
    event.preventDefault();
    $("#new_card_modal").modal("hide");
    var formData = $(event.currentTarget).serializeJSON();
    formData.card.list_id = this.currentListId;
    var list = this.model.lists().get(this.currentListId);
    this.currentListId = null;
    list.cards().create(formData, {
      success: function(card) {
        list.add(card);
      }
    });
  },
  
  showListForm: function(event) {
    event.preventDefault();
    $(event.currentTarget).addClass("hidden");
    var formDiv = $(event.delegateTarget).find(".new_list_container");
    $(formDiv).removeClass("hidden");
  },
  
  submitList: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    formData.list.board_id = this.model.id,
        
    this.model.lists().create(formData);
  },
  
  template: JST["boards/show"],
  
  render: function(id) {
    var lists = this.model.lists();
    var content = this.template({ board: this.model, lists: lists })
    
    this.$el.html(content);
    this.attachSubviews();
    
    return this;
  },
  
  addView: function(list) {
    var subView = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview(".list_container", subView);
    this.render;
  },
  
  removeView: function(list) {
    this.removeSubview(".list_container", list)
  }
});