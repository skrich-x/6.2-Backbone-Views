import Like from '../models/like';
export default Backbone.View.extend({

  template: JST.like,

  event: {
    'click .like': 'addCount'

  },

  addCount: function(e) {
    e.preventDefault();
    this.model.like();
  },

  initialize: function(e){
    this.render ();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));  }

});
