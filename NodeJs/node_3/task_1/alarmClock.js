const EventEmitter = require('events');

class AlarmClock extends EventEmitter {
  start() {
    console.log('Будильник встановлено. Зачекай 5 секунд...');
    setTimeout(() => {
      this.emit('ring');
    }, 5000);
  }
}

module.exports = AlarmClock;
