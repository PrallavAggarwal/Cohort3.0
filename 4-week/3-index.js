const fs = require("fs");
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('It will count lines or words in file.')
  .version('0.0.1')

program
  .command('count_words')
  .description('It will count words in file.')
  .arguments('<file>', 'It takes file to count words.')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      else {
        console.log(data.split(' ').length);
      }
    })
  })

program.parse();
