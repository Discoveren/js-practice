let counter = 0;
function count() {
  counter++;
  let numberCount = document.querySelector("h1");
  numberCount.innerHTML = counter;

  if (counter % 10 === 0) {
    alert(`Count is now ${counter}`);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;
});
