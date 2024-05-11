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
  document.getElementById("text").style.textDecoration = "none";
  document.getElementById("text").style.fontWeight = "normal";
  document.getElementById("text").style.color = "black";
}

function moo(){
  const text = document.getElementById("text").value;
  const upper = text.toUpperCase();

  const sentence = upper.split(".");
  for (let i = 0; i < sentence.length; i++) {
		const one = sentence[i];

		const words = one.split(" ");
		const last = words.pop();

		const lastMoo = last + "-Moo";
		words.push(lastMoo);

		sentence[i] = words.join(" ");
    console.log("Help");
	}
  document.getElementById("text").value = sentence.join(". ");
}

	
