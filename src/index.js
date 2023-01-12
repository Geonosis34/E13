import './style.css';
import printMe from './print.js';

console.log("Hello World");
document.getElementById("container").innerHTML = "Hello WORLD!!";

if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      printMe();
    })
  }