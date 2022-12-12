const toggleSwitch = document.querySelector("input[type=checkbox]");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function toggleMode(mode) {
    const removeMode = (mode === 'dark') ? 'light' : 'dark'

    const color = {
        dark: "rgb(0 0 0 / 50%)",
        light: "rgb(255 255 255 / 50%)",
    };
    const icon = {
        dark: "fa-moon",
        light: "fa-sun",
    };

    nav.style.backgroundColor = color[mode];
    textBox.style.backgroundColor = color[removeMode];

    toggleIcon.children[1].classList.replace(icon[removeMode], icon[mode]);    

    const capitalized = mode.slice(0, 1).toUpperCase() + mode.slice(1);
    document.documentElement.dataset.theme = mode;
    toggleIcon.children[0].textContent = `${capitalized} Mode`;
    
    image1.setAttribute("src", `assets/undraw_proud_coder_${mode}.svg`);
    image2.setAttribute("src", `assets/undraw_feeling_proud_${mode}.svg`);
    image3.setAttribute("src", `assets/undraw_conceptual_idea_${mode}.svg`);
}

function darkMode() {
    toggleMode("dark");
}

function lightMode() {
    toggleMode("light");
}

function switchTheme(event) {
    event.target.checked ? darkMode() : lightMode();
}

toggleSwitch.addEventListener("change", switchTheme);
