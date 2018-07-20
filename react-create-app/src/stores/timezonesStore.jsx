import { observable, computed, action } from 'mobx';
import agent from 'agent';

export class TimezonesStore {
  @observable timezonesRegistry = observable.map();

  @computed
  get timezones() {
    // todos: not working
    return this.timezonesRegistry.values();
  }

  @action
  loadTimezones() {
    return agent.Timezones.all().then(
      action(({ timezones }) => {
        this.timezonesRegistry.clear();
        timezones.forEach(timezone => {
          this.timezonesRegistry.set(timezone.id, timezone);
        });
      })
    );
  }
}

export default new TimezonesStore();
