const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

function init(e) {
  // Write your JavaScript code inside the init() function
 let index = 0;
 
 function onKeyDownHandler(e){
   const key = e.key;
   
     if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
   
 }
 


