TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: "api/cards",
  
  model: TrelloClone.Models.Card,
  
  comparator: function(card) {
    return card.get("ord");
  },
  
  getOrFetch: function(id) {
    var card = this.get(id)
    
    if (!card) {
      card = new TrelloClone.Models.Card({ id: id });
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