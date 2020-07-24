setInterval(() => console.log('Task executed'), 1000);

var CronJob = require('cron').CronJob;
var job = new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Argentina/Salta');
job.start();

var cron = require('node-cron');
cron.schedule('* * * * * *', () => {
  console.log('running a task every minute');
});

var schedule = require('node-schedule');
 
var j = schedule.scheduleJob('* * * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});
