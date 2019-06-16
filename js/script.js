var link = document.querySelector(".contacts__btn");
var feedback = document.querySelector(".feedback-popup");
var close = feedback.querySelector(".feedback-popup__close");
var form = feedback.querySelector("form");
var name = feedback.querySelector("[name=name]");
var email = feedback.querySelector("[name=email]");
var mapLink = document.querySelector(".contacts__map");
var map = document.querySelector(".map-popup");
var mapClose = map.querySelector(".map-popup__close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("visually-hidden"); 
    feedback.classList.add("feedback-animation");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("visually-hidden");
    feedback.classList.remove("feedback-animation");
    feedback.classList.remove("feedback-error");
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
        evt.preventDefault();
        feedback.classList.add("feedback-error");
    } 
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (feedback.classList.contains("visually-hidden") === false) {
            feedback.classList.add("visually-hidden");
            feedback.classList.remove("feedback-animation");
            feedback.classList.remove("feedback-error");
        }
        else if (map.classList.contains("visually-hidden") === false) {
                map.classList.add("visually-hidden");
                map.classList.remove("feedback-animation");
    }
}
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("visually-hidden"); 
    map.classList.add("feedback-animation");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("visually-hidden");
    map.classList.remove("feedback-animation");
});
