function generatePoem(event){
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "La tombe dit à la rose",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

let poemInput = document.querySelector("#poem-input");
let poem = document.querySelector("#poem")

poemInput.addEventListener("submit", generatePoem);
