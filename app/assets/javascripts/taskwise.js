window.Taskwise = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Taskwise.Routers.AppRouter({
      $rootEl: $("#main")
    });
    Backbone.history.start()
  }
};


$(Taskwise.initialize);