var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/juzo.jpeg") {
    myImage.setAttribute("src", "images/juzo2.jpg");
  } else {
    myImage.setAttribute("src", "images/juzo.jpeg");
  }
};

var myButton =  document.querySelector("button");
var myHeading = document.querySelector("h1")

function setUserName(){
  var myName = prompt("Please enter your name");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Juuzou Suzuya love " +
    "" + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Juuzou Suzuya love " + storedName;
}

myButton.onclick = function () {
  setUserName();
};

