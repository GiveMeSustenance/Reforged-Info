//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}
  
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pigmancolor.jpg") {
    myImage.setAttribute("src", "images/wendy.png");
  } else {
    myImage.setAttribute("src", "images/pigmancolor.jpg");
  }
};

//alert("hello!");

