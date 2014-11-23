Taskwise.Views.BoardsShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.collection.each(this.addList.bind(this));
    this.attachListForm();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "removeListView", this.removeList);
    this.listenTo(this.collection, "add", this.addList);
  },
  
  template: JST["boards/show"],
  
  attributes: {
    class: "board-show clearfix"
  },
  
  render: function(id) {
    var content = this.template({ 
      board: this.model
    })
  
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();
    
    return this;
  },
  
  removeList: function (listView) {
    this.removeSubview('#lists', listView)
  },
  
  addList: function(list) {
    var subView = new Taskwise.Views.ListShow({ 
      model: list
    });
    
    this.addSubview("#lists", subView);
  },
  
  attachListForm: function() {
    var newListView = new Taskwise.Views.ListForm({
      model: this.model,
      collection: this.collection
    })
    
    this.addSubview("#list_form", newListView)
  }
});
