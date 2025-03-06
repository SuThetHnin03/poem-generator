function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructions = document.querySelector("#instructions")
  let apiKey = "0a3a6729o75585fadatfdbb88a4a9a1a";
  let prompt = `Generate a poems which are related to ${instructions.value}`;
  let context = "Give a meaninful and also romantic one seperated in lines using <br> in english. Include the writers and country of origin below the poem like Jon Doe (America). Do not include title. If aurthor is unknown add Anonymous and if there is two aurthors connect with &";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem)
}

let poemInput = document.querySelector("#poem-input");
let poem = document.querySelector("#poem")

poemInput.addEventListener("submit", generatePoem);
