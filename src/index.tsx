import {h, render} from 'preact';
import App from './App';
import './index.css';

const rootNode = document.getElementById('root');

if (!rootNode) {
  console.error('Critical error: Could not find element with ID "root"');
}
else {
  render(<App />, rootNode);
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
