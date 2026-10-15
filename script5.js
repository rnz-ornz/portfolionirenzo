const studentName = document.getElementById("studentName");
const studentImage = document.getElementById("studentImage");
const nameInput = document.getElementById("nameInput");
const yearSelect = document.getElementById("yearSelect");

const clickBtn = document.getElementById("clickBtn");
const dblClickBtn = document.getElementById("dblClickBtn");
const changeImageBtn = document.getElementById("changeImageBtn");
const pressBtn = document.getElementById("pressBtn");

const statusText = document.getElementById("status");

clickBtn.addEventListener("click", function () {

    studentName.innerHTML = "HELLO BOW!";
    statusText.innerHTML = "Click event activated.";

});



dblClickBtn.addEventListener("dblclick", function () {

    studentName.style.color = "red";
    statusText.innerHTML = "Double-click detected.";

});




studentImage.addEventListener("mouseover", function () {

    studentImage.style.transform = "scale(1.1)";
    statusText.innerHTML = "Mouse entered the image.";

});




studentImage.addEventListener("mouseout", function () {

    studentImage.style.transform = "scale(1)";
    statusText.innerHTML = "Mouse left the image.";

});



pressBtn.addEventListener("mousedown", function () {

    pressBtn.style.backgroundColor = "green";
    pressBtn.style.transform = "scale(0.95)";
    statusText.innerHTML = "Mouse button is pressed.";

});




pressBtn.addEventListener("mouseup", function () {

    pressBtn.style.backgroundColor = "#2563eb";
    pressBtn.style.transform = "scale(1)";
    statusText.innerHTML = "Mouse button was released.";

});




nameInput.addEventListener("focus", function () {

    nameInput.style.backgroundColor = "lightyellow";
    statusText.innerHTML = "Input is active.";

});




nameInput.addEventListener("blur", function () {

    nameInput.style.backgroundColor = "white";
    statusText.innerHTML = "Input is no longer active.";

});




yearSelect.addEventListener("change", function () {

    statusText.innerHTML = "Year selected: " + yearSelect.value;

});




nameInput.addEventListener("input", function () {

    studentName.innerHTML = nameInput.value || "Renz000";
    statusText.innerHTML = "Typing...";

});
