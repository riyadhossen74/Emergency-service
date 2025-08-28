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
    const number = btn.parentNode.parentNode.children[3].innerText;

    const callNumber = btn.parentNode.parentNode.children[3].innerText;

    let coinElement =
      btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode.children[0].children[0].children[1].children[1]
        .children[0];
    let lastCount = Number(coinElement.innerText) - 20;

    coinElement.innerText = lastCount;
    if (lastCount < 0) {
      coinElement.innerText = 0;
      alert("less than 20 coin try next time");
      return;
    }
    // append child
    const date = new Date().toLocaleTimeString();

    const aside = getElementId("aside_section");
    const newAside = document.createElement("div");
    newAside.innerHTML = `
     <div class="flex justify-between px-5 items-center py-5 bg-[#FAFAFA] mx-7 mt-5 rounded-xl">
              <div>
                <h3 class="font-semibold">${titel}</h3>
                <span class="text-gray-700">${callNumber}</span>
              </div>
              <div>
                <span class="text-gray-700">${date}</span>
              </div>
            </div>`;
    aside_section.append(newAside);

    // clear style
    getElementId("clear_btn").addEventListener("click", function () {
      newAside.innerText = "";
    });
    alert("Calling" + " " + titel + " " + number);
  });
}
// text copy
const copyBtn = document.getElementsByClassName("copy_btn");

for (let btn of copyBtn) {
  btn.addEventListener("click", function () {
    const copy = btn.parentNode.parentNode.children[3];
    console.log(copy)
    const number = btn.parentNode.parentNode.children[3].innerText
    alert("number copy done" + " " + number);
    const allCopy = copy.innerText;
    navigator.clipboard.writeText(allCopy);
    let copyElement = getElementId("copy_count");
    let copyCount = Number(copyElement.innerText);
    copyCount++;
    copyElement.innerText = copyCount;
  });
}
