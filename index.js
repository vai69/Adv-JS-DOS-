for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makesound(this.innerHTML);
        buttonanimation(this.innerHTML);
    });

}


document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-5.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}

function buttonanimation(key) {
    var b = document.querySelector("." + key)
    b.classList.add("pressed");
    setTimeout(function() {
        b.classList.remove("pressed");
    }, 200);
}