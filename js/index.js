
let button = document.getElementById("buttonText");
button.addEventListener("click", () => {
    let input = document.getElementById("inputText").value;
    localStorage.setItem("dato1", input );
});
