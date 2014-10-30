TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.collection = this.model.lists();
    
    this.listenTo(this.model, "sync", this.render);
    // this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addList);
  },
  
  template: JST["boards/show"],

  
  render: function(id) {
    var content = this.template({ 
      board: this.model
    })
    
    this.$el.html(content);
    this.renderLists();
    this.renderListForm();
    
    return this;
  },
  
  addList: function(list) {
    var subView = new TrelloClone.Views.ListShow({ 
      model: list 
    });
    
    this.addSubview("#list_container", subView);
  },
  
  renderLists: function() {
    this.collection.each(this.addList.bind(this));
    // this.$("#list_container").sortable();
  },
  
  renderListForm: function() {
    var newListView = new TrelloClone.Views.ListForm({
      collection: this.collection
    })
    this.addSubview("#list_form", newListView)
  },
});