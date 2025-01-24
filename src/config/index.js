let endpointURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';
if (!/^http/.test(endpointURL)) {
  endpointURL = 'https://' + endpointURL;
  console.log('endpointURL:', endpointURL);
}
if (process.env.REACT_APP_DOMAIN) {
  endpointURL += '.' + process.env.REACT_APP_DOMAIN;
}
const config = {
  endpointURL: endpointURL,
  apiKey: process.env.REACT_APP_API_KEY || 'pcldETTDtJ4CQVz9FqlJYHgIvdYP1iXU'
};

export default config;