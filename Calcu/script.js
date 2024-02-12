const screen = document.querySelector(".screen");
const button = document.querySelectorAll("button");

let display = "0";
let respuesta = null;

button.forEach((item) => {
    item.onclick = () => {
        if (item.id === "button-clear") {
            display = screen.innerText = "0";
            respuesta = null;
        } else if (item.id === "button-percentage") {
            respuesta = parseFloat(display) / 100;
            display = screen.innerText = respuesta;
        } else if (item.id === "button-square") {
            respuesta = parseFloat(display) ** 2;
            display = screen.innerText = respuesta;
        } else if (item.id === "button-less-than") {
            display = screen.innerText.slice(0, -1);
            screen.innerText = display || "0";
        } else if (item.id === "button-1") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "1";
                display = "1";
            }
            else {
                screen.innerText += "1";
                display += "1";
            }
        } else if (item.id === "button-2") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "2";
                display = screen.innerText;
            }
            else {
                screen.innerText += "2";
                display += "2";
            }
        } else if (item.id === "button-3") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "3";
                display = screen.innerText;
            }
            else {
                screen.innerText += "3";
                display += "3";
            }
        } else if (item.id === "button-4") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "4";
                display = screen.innerText;
            }
            else {
                screen.innerText += "4";
                display += "4";
            }
        } else if (item.id === "button-5") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "5";
                display = screen.innerText;
            }
            else {
                screen.innerText += "5";
                display += "5";
            }
        } else if (item.id === "button-6") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "6";
                display = screen.innerText;
            }
            else {
                screen.innerText += "6";
                display += "6";
            }
        } else if (item.id === "button-7") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "7";
                display = screen.innerText;
            }
            else {
                screen.innerText += "7";
                display += "7";
            }
        } else if (item.id === "button-8") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "8";
                display = screen.innerText;
            }
            else {
                screen.innerText += "8";
                display += "8";
            }
        } else if (item.id === "button-9") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "9";
                display = screen.innerText;
            }
            else {
                screen.innerText += "9";
                display += "9";
            }
        } else if (item.id === "button-0") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "0";
                display = screen.innerText;
            }
            else {
                screen.innerText += "0";
                display += "0";
            }
        } else if (item.id === "button-plus") {
            if (display !== "0" && screen.innerText !== "0") {
                screen.innerText += "+";
                display += "+";
            }
        } else if (item.id === "button-minus") {
            if (display !== "0" && screen.innerText !== "0") {
                screen.innerText += "-";
                display += "-";
            }
        } else if (item.id === "button-multiply") {
            if (display !== "0" && screen.innerText !== "0") {
                screen.innerText += "*";
                display += "*";
            }
        } else if (item.id === "button-divide") {
            if (display !== "0" && screen.innerText !== "0") {
                screen.innerText += "/";
                display += "/";
            }
        } else if (item.id === "button-equals") {
            console.log("Display antes de evaluar:", display);

            let expression = display.replace(/[^-()\d/*+.]/g, '');
            console.log("Expresión evaluada:", expression);
            respuesta = eval(expression);
            console.log("Respuesta:", respuesta);


            screen.innerText = respuesta;
            display = respuesta.toString();
            console.log("Display actualizado:", display);

        } else if (item.id === "button-dot") {
            if (display === "0" || screen.innerText === "0") {
                screen.innerText = "0";
                display = screen.innerText;
            }
            else {
                screen.innerText += ".";
                display += ".";
            }
        }

    };
});

const themeToggle = document.querySelector(".toggle");
const calcu = document.querySelector(".calculator");

let isdark = true;

themeToggle.onclick = () => {
    calcu.classList.toggle("dark");
    themeToggle.classList.toggle("active");
    isdark = !isdark;
}