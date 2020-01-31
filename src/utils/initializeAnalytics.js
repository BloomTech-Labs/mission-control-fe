import ReactGA from 'react-ga';

function initializeAnalytics() {
  // conditionally checking env variables to only test production
  return process.env.NODE_ENV === 'production'
    ? // embedded Google Analytics for web metrics in React
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY) &&
        ReactGA.pageview(window.location.pathname + window.location.search)
    : null;
}

export default initializeAnalytics;
