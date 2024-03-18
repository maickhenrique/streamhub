const Vimeo = require('vimeo').Vimeo;

const client = new Vimeo("3d83f12488316fc0dbe15f77f37c9016c30dccbb",
   "MVVsHqp7SfVdiVXrwYgC4spWLQhvtBvAFpdc1BivZIOvDQv3+n6k0LkdptjlNmcfcRwy1hdj2Ka6swhWelf5EloLfqfcMJhb0kmNQr58XA0Mz1DW8O1Bf4PD+a55xYF2",
    "7f239785eb81dc81c2de0c16fddb9c73");

client.request({
  method: 'GET',
  path: '/tutorial'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
  } else {
    console.log(body);
  }
});
