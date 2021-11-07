let BASE_URL = '';
let TIME_OUT = 1000;

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api';
  TIME_OUT = 1000;
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000/';
  TIME_OUT = 2000;
} else {
  BASE_URL = 'http://152.136.185.210:5000/';
  TIME_OUT = 3000;
}

export { BASE_URL, TIME_OUT };
