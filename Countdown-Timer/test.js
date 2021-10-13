async function getData() {
  let data = fetch(
    'https://jsonmock.hackerrank.com/api/articles?author=olalonde',
  );

  console.log(data);
}

getData();
// const http = require('http');

// let queryOptions = {
//   host: 'https://jsonmock.hackerrank.com',
//   path: `/api/articles?author=olalonde`,
// };

// http.request(queryOptions, function (res) {
//   let data = '';
//   res.on('data', function (stream) {
//     data += stream;
//   });

//   res.on('end', () => {
//     console.log(data);
//   });
// });
