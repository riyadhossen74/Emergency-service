// get element id
function getElementId(id) {
  const element = document.getElementById(id);
  return element;
}

// love btn style
const loveBtn = document.getElementsByClassName("love_btn");
for (let btn of loveBtn) {
  btn.addEventListener("click", function () {
    let loveElement = getElementId("love_count");
    let loveCount = Number(loveElement.innerText);
    loveCount++;
    loveElement.innerText = loveCount;
  });
}

// call btn style
const callBtn = document.getElementsByClassName("call_btn");

for (let btn of callBtn) {
  btn.addEventListener("click", function () {
    const titel = btn.parentNode.parentNode.children[1].innerText;
    const callNumber = btn.parentNode.parentNode.children[3].innerText;
    alert("Calling" + " " + titel);

    console.log(callNumber);
  });
}
