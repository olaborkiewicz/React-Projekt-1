"use strict";

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return console.log("Hello world");
  }
}
const domContainer = document.querySelector("#root_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
