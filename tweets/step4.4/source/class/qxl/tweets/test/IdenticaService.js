qx.Class.define("qxl.tweets.test.IdenticaService", {

  extend : qx.dev.unit.TestCase,

  members :
  {
    __identicaService : null,

    setUp : function()
    {
      this.__identicaService = new qxl.tweets.IdenticaService();
    },

    tearDown : function()
    {
      this.__identicaService.dispose();
      this.__identicaService = null;
    },

    testFetchTweets : function()
    {
      this.__identicaService.addListener("changeTweets", function() {
        this.resume();
      }, this);

      qx.event.Timer.once(function() {
        this.__identicaService.fetchTweets();
      }, this, 100);

      this.wait(5000);
    }
  }
});