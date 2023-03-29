//your code here
let textinput = document.querySelector("#evaluatedText");
let countdisplay = document.querySelector("#wordCount");
textinput.addEventListener("input",()=>{
  let str = textinput.value;
  let count = str.split(" ").length;
  countdisplay.innerText = count;
});