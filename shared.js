var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");

var modalYes = document.querySelector(".modal__actions a");
var modalNo = document.querySelector(".modal__action--negative");

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
        modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

backdrop.addEventListener("click", closeModal);

modalNo.addEventListener("click", closeModal);

function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}
