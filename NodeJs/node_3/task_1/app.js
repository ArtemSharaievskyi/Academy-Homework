
const AlarmClock = require('./alarmClock');

const alarm = new AlarmClock();

alarm.on('ring', () => {
  console.log('Прокидайся!');
});

alarm.start();
