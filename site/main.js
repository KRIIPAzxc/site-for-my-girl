var count = 0

function start() {

    createImg(count);
    var create = setInterval(() => {
            count++
            createImg(count);
            if (count == 20) {
                clearInterval(create);
            }
        }, 1100) //1000 = 1s

}

var left = true;

function createImg(elemid) {
    var img = document.createElement("img");
    img.src = "./src/heart.png"
    var scale = Math.random() * (18 - 10) + 10
    img.style.width = scale + "svw"
    img.style.height = scale + "svw"

    if (left) {
        img.style.left = ((Math.random()) * (90 - 50) + 50 + "svw")
        left = false;
    } else {
        img.style.left = ((Math.random()) * (50 - -5) + -5 + "svw")
        left = true
    }
    //img.style.border = "3px solid red"

    var cont = document.getElementById("container")
    cont.append(img)
    img.id = elemid

    bganim(elemid);
}





function bganim(elemid) {

    var elem = document.getElementById(elemid);
    var pos = elem.offsetTop;
    var size = elem.offsetHeight;
    // var speed = Math.floor(window.screen.availWidth / window.screen.availHeight * 5.416)

    var id = setInterval(frame, 10);

    function frame() {
        if (pos == -size) {
            clearInterval(id)
            elem.remove();
            createImg(elemid);
        } else {
            pos--
            elem.style.top = pos + "px"
        }
    }
}

var active = 0;

function slide() {
    var slide = document.getElementsByClassName("mainpanel")

    if (active < slide.length - 1) {
        active++
        var elem = slide[active - 1];
        elem.style.visibility = "hidden";
        var elem = slide[active];
        elem.style.visibility = "visible";
    } else {
        var elem = slide[active];
        elem.style.visibility = "hidden";
        active = 0;
        var elem = slide[active];
        elem.style.visibility = "visible";
    }
}

// function slideVisible() {
//     var slide = document.getElementsByClassName("mainpanel")
//     for (let index = 0; index < slide.length; index++) {
//         const elem = slide[index];
//         elem.style.visibility = "hidden";
//     }
//     slide[0].style.visibility = "visible"
// }

function shake() {
    var text = document.getElementsByClassName("shake")
    for (let i = 0; i < text.length; i++) {
        const elem = text[i];
        var time = Math.random() * (3 - 2.7) + 2.7;
        elem.style.setProperty("--animation-time", time + "s")
        var delay = Math.random() * (0.5 - 0.1) + 0.1;
        elem.style.setProperty("--animation-delay", delay + "s")

        var letters = '012345678';
        var color = '#';

        for (var p = 0; p < 6; p++) {
            color += letters[Math.floor(Math.random() * 9)];
        }
        var word = "";
        elem.style.setProperty("--color", color)
        var TextContent = elem.textContent;
        for (let index = 0; index < TextContent.length; index++) {
            TextContent.charAt(index);
            if (Math.random() > 0.5) {
                var latter = TextContent[index].toUpperCase();
            } else {
                var latter = TextContent[index].toLowerCase();
            }

            word += latter

        }
        elem.textContent = word
    }
}
time = 23.5

function timer() {
    var text = document.getElementById("time")
    text.textContent = Number(time).toFixed(1);
    text.style.opacity = 0.5;

    var timer = setInterval(() => {
            text.textContent = Number(time).toFixed(1);;
            if (time == 0) {
                text.textContent = "жми";
                clearInterval(timer);
            }

            time = Number(time - 0.1).toFixed(1)
        }, 100) //1000 = 1s
}