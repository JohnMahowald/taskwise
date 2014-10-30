TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "api/lists",  
  
  model: TrelloClone.Models.List,
  
  comparator: function(list) {
    return list.get("ord"); 
  },
  
  getOrFetch: function(id) {
    var list = this.get(id);
    
    if (!list) {
      var lists = this;
      list = new TrelloClone.Models.List({ id: id });
      
      list.fetch({
        success: function() {
          lists.add(list);
        }
      })
    } else {
      list.fetch();
    }
    return list;
  }
});