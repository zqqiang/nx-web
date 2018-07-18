import { decorate, observable } from 'mobx';

export class SettingsStore {
  httpPort = 80;
}

decorate(SettingsStore, {
  httpPort: observable
});

export default new SettingsStore();
