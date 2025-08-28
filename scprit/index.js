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
