let fontSize =10;
function showAlert() {
    alert("Hello, world!");
    
}

function changeSize(){
  fontSize += 0.5;
  document.getElementById("text").style.fontSize = fontSize + "pt";
  
  if (fontSize >= 24) {
    textInput.style.fontSize = "24pt";
  }
}

function bold(){
  document.getElementById("text").style.fontWeight = "bold";
  document.getElementById("text").style.color = "blue";
  document.getElementById("text").style.textDecoration = "underline";
}

function normal(){
 document.getElementById("text").style.fontWeight = "normal";
 document.getElementById("text").style.color = "black";
}

function 
