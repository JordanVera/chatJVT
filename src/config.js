let url = '';

if (process.env.NODE_ENV === 'production') {
  url = '';
} else {
  url = 'http://localhost:5555';
}

export { url };
