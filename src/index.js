import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import App from "./App";
import store from "./store";

UIkit.use(Icons);

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));