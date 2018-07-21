import { observable, computed, action } from 'mobx';
import agent from 'agent';

export class TimezonesStore {
  @observable isLoading = false;
  @observable timezonesRegistry = new Map();

  @computed
  get timezones() {
    // todos: not working
    return this.timezonesRegistry.values();
  }

  @action
  loadTimezones() {
    this.isLoading = true;
    return agent.Timezones.all()
      .then(
        action(({ timezones }) => {
          this.timezonesRegistry.clear();
          timezones.forEach(timezone =>
            this.timezonesRegistry.set(timezone.id, timezone)
          );
        })
      )
      .finally(
        action(() => {
          this.isLoading = false;
        })
      );
  }
}

export default new TimezonesStore();
