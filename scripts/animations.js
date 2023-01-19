/*
    Made by: Justin Lama Perez
    Date: 09-12-2022
    Last change: 05-01-2023
*/

var showMenu = false;

// Change the background of the menubars
document.getElementById("menubars").onclick = function(){
    document.getElementById("menubars").classList.toggle("change");
    vibrate({duration: 25, interval: 0, count: 1})
    if(showMenu === false){
          document.getElementById("navitems").style.width = "100%";
        showMenu = true;
    }else{
        document.getElementById("navitems").style.width = "0%";
        showMenu = false;
    }
}

if(document.querySelector("body").dataset.pageName === 'home')
{
    const phrase = "JUSTIN LAMA PEREZ";

    // Get the nameText element by id
    const targetEl = document.getElementById("nameText");
    
    // Creates a hover - character.
    phrase.split("").map((char, idx) => {
        const el = document.createElement("span");

        el.innerText = char;
        el.setAttribute("data-index", idx.toString());
        el.classList.add("hover-char");

        targetEl.appendChild(el);
    });

    // Gets all hover chars in the document.
    const hoverChars = [...document.getElementsByClassName("hover-char")];

    // Remove hovered - adjacent classes.
    const removeClasses = () => {
        hoverChars.map((char) => {
            char.classList.remove("hovered");
            char.classList.remove("hovered-adjacent");
        });
    };

    // Creates a hovered - adjacent event.
    hoverChars.map((char) => {
        char.addEventListener("mouseover", (e) => {
            removeClasses();
            const currentElement = e.target;
            const index = parseInt(currentElement.getAttribute("data-index"), 10);

            const prevIndex = index === 0 ? null : index - 1;
            const nextIndex = index === phrase.length -1 ? null : index + 1;

            const prevEl = prevIndex !== null && document.querySelector(`[data-index="${prevIndex}"]`);

            const nextEl = nextIndex !== null && document.querySelector(`[data-index="${nextIndex}"]`);

            e.target.classList.add("hovered")
            prevEl && prevEl.classList.add("hovered-adjacent");
            nextEl && nextEl.classList.add("hovered-adjacent");

        })
    })

    // Adds the mouseleave event listener.
    document.getElementById("nameText").addEventListener("mouseleave", () => {
        removeClasses();
    })
}

function vibrate(options = {duration: 25, interval: 0, count: 1}) {
    if (!window) {
        return;
    }

    if (!window.navigator) {
        return;
    }

    if (!window.navigator.vibrate) {
        return;
    }

    const pattern = [];

    // Add duration and interval to the pattern.
    for (let index = 0; index < options.count; index++) {
        pattern.push(options.duration);
        pattern.push(options.interval);
    }

    // vibrate the pattern in the window navigator
    window.navigator.vibrate(pattern);
}