var app = {
  /**
   * Initializes the state of the application
   */
  init: function() {
    gadgets.util.registerOnLoadHandler($.proxy(this.onLoad, this));
  },

  // The host for the app
  host: 's3.amazonaws.com/hangjoy',

  // The Google application id for the app
  id: '438026805755',

  /**
   * Callback when the gadget is ready
   */
  onLoad: function() {
    gapi.hangout.onApiReady.add($.proxy(this.onReady, this));
  },

  /**
   * Callback when the Hangouts API is fully ready
   */
  onReady: function(event) {
    if (event.isApiReady) {
      this.support.init();
      this.data.init();
      this.layout.init();

      // Participant data
      this.participant.init();
      this.participants.init();
      this.settings.init();
      this.photo.init();
      this.avatar.init();
      this.conversation.init();
      this.rooms.init();
    }
  }
};