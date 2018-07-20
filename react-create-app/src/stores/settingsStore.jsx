import { observable, action } from 'mobx';
import agent from 'agent';

export class SettingsStore {
  @observable inProgress = false;
  @observable errors = undefined;

  @observable
  values = {
    httpPort: 80,
    httpsPort: 443,
    telnetPort: 23,
    sshPort: 22,
    idleTimeout: 480,
    redirectToHttps: true,
    timezone: 4,
    server: 'fortiguard',
    serverDomain: '',
    syncWithNtpServer: false,
    syncInterval: 200
  };

  @action
  setHttpPort(port) {
    this.values.httpPort = port;
  }
  @action
  setHttpsPort(port) {
    this.values.httpsPort = port;
  }
  @action
  setTelnetPort(port) {
    this.values.telnetPort = port;
  }
  @action
  setSshPort(port) {
    this.values.sshPort = port;
  }
  @action
  setIdleTimeout(timeout) {
    this.values.idleTimeout = timeout;
  }
  @action
  setRedirectToHttps(redirect) {
    this.values.redirectToHttps = redirect;
  }
  @action
  setTimezone(timezone) {
    this.values.timezone = timezone;
  }
  @action
  setServer(server) {
    this.values.server = server;
  }
  @action
  setServerDomain(domain) {
    this.values.serverDomain = domain;
  }
  @action
  setSyncWithNtpServer(sync) {
    this.values.syncWithNtpServer = sync;
  }
  @action
  setSyncInterval(interval) {
    this.values.syncInterval = interval;
  }

  @action
  save() {
    this.inProgress = true;
    this.errors = undefined;

    return agent.Settings.save(this.values)
      .then(settings => {
        console.log(settings);
      })
      .catch(
        action(err => {
          this.errors =
            err.response && err.response.body && err.response.body.errors;
          throw err;
        })
      )
      .finally(
        action(() => {
          this.inProgress = false;
        })
      );
  }
}

export default new SettingsStore();
