// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName : 'tr',
  className: 'song',
  template : _.template('<i id = "thumbsup" class="fa fa-thumbs-o-up fa-1x">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i id = "thumbsdown" class="fa fa-thumbs-o-down fa-1x"></i><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%- artist %>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><%- title %></td>'),

  events: {
    'click' : function(){
      this.model.jump();
    },
  },


  render : function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});