import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.store.findAll('task');
  },
  model(params) {
    return this.store.peekRecord('list', params.listId);
  }
});

