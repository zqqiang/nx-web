import { observable } from 'mobx';

export class SettingsStore {
  @observable httpPort = 80;
}

export default new SettingsStore();
