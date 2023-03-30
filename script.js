//your code here
let textinput = document.querySelector("#evaluatedText");
let countdisplay = document.querySelector("#wordCount");
textinput.addEventListener("input",()=>{
  let str = textinput.value.trim();
  let count = str.split(" ").length;
  console.log(str.split(" "));
  countdisplay.innerText = count;
});