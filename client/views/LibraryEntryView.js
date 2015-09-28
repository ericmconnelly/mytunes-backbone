// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'song',

  template: _.template('<i class="fa fa-thumbs-o-up fa-1x">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-thumbs-o-down fa-1x"></i><td></td></i><td><span><%= playCount %>&nbsp;&nbsp;&nbsp;</span>&nbsp;<%= artist %></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});