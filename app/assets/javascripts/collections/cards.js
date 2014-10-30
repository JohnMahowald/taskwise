Taskwise.Collections.Cards = Backbone.Collection.extend({
  url: "api/cards",
  
  model: Taskwise.Models.Card,
  
  comparator: function(card) {
    return card.get("ord");
  },
  
  getOrFetch: function(id) {
    var card = this.get(id)
    
    if (!card) {
      card = new Taskwise.Models.Card({ id: id });
      card.fetch({
        successs: function() {
          this.addCard(); 
        }.bind(this)
      })
    } else {
      card.fetch();
    }
    return card;
  }
});