var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");

var modalNo = document.querySelector(".modal__action--negative");

var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

var ctaButton = document.querySelector(".main-nav__item--cta")

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

if (modalNo) {
    modalNo.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function() {
    mobileNav.classList.remove("open");
    closeModal();
});

function closeModal() {
    // modal.style.display = "none";
    // backdrop.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
    setTimeout(() =>{
        backdrop.style.display = 'none';
    }, 200)
}

toggleButton.addEventListener("click", function() {
    // mobileNav.style.display = "block";
    // backdrop.style.display = "block";

    mobileNav.classList.add("open");
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add("open");
    }, 10)
});

ctaButton.addEventListener("animationstart", (event) => {
    console.log("animation started", event)
})

ctaButton.addEventListener("animationend", (event) => {
    console.log("animation ended", event)
})

ctaButton.addEventListener("animationiteration", (event) => {
    console.log("animation iterated", event)
})