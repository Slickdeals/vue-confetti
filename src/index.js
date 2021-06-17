import Confetti from './confetti';

export { Confetti };

export default {
  install(app) {
    if (this.installed) {
      return;
    }
    this.installed = true;
    app.config.globalProperties.$confetti = new Confetti(); // eslint-disable-line no-param-reassign
  },
};
