const chalk = require('chalk');
const dayjs = require('dayjs');

const now = dayjs().format('DD/MM/YYYY HH:mm:ss');

console.log(chalk.green('Файл змінено!'));
console.log(chalk.blue(`Поточна дата та час: ${now}`));
