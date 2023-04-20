let url = '';

const apiUrl = import.meta.env.REACT_APP_API_URL;
if (apiUrl) {
  url = apiUrl;
} else {
  url = '';
}

export { url };
