import { observable } from 'mobx';

export class SettingsStore {
  @observable httpPort = 80;
  @observable httpsPort = 443
  @observable telnetPort = 23
  @observable sshPort = 22
  @observable idleTimeout = 480
  @observable redirectToHttps = true
  @observable timezone = 4
  @observable server = 'fortiguard'
  @observable serverDomain = ''
  @observable syncWithNtpServer = false
  @observable syncInterval = 200

  @action setHttpPort(port) {
    this.httpPort = port;
  }
  @action setHttpsPort(port) {
    this.httpsPort = port;
  }
  @action setTelnetPort(port) {
    this.telnetPort = port;
  }
  @action setSshPort(port) {
    this.sshPort = port;
  }
  @action setIdleTimeout(timeout) {
    this.idleTimeout = timeout;
  }
  @action setRedirectToHttps(redirect) {
    this.redirectToHttps = redirect;
  }
  @action setTimezone(timezone) {
    this.timezone = timezone;
  }
  @action setServer(server) {
    this.server = server;
  }
  @action setServerDomain(domain) {
    this.serverDomain = domain;
  }
  @action setSyncWithNtpServer(sync) {
    this.syncWithNtpServer = sync;
  }
  @action setSyncInterval(interval) {
    this.syncInterval = interval;
  }
}

export default new SettingsStore();
