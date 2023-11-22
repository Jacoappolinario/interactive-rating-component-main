// TODO: Refazer toda essa lógica, levando em conta a nova estrutura html. Mas usar essa de exemplo.
// const values = document.querySelectorAll(".rating-list .rating-button");

// values.forEach((value) => {
//   value.addEventListener("click", (event) => {
//     const selectedValue = event.currentTarget;

//     selectedValue.classList.add("active");

//     values.forEach((value) => {
//       if (value !== selectedValue) {
//         value.classList.remove("active");
//       }
//     });

//     const hiddenField = document.getElementById("selectedValue");

//     hiddenField.value = +selectedValue.innerText;
//   });
// });

// const form = document.querySelector(".rating-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const button = document.querySelector(".submit-button");
//   button.disabled = true;
//   button.innerText = "Enviando...";

//   const data = new FormData(form);

//   fetch("./enviar.php", {
//     method: "POST",
//     body: data,
//   }).then((response) => {
//     if (response.ok) {
//       form.innerHTML = "<p>OK</p>";
//     } else {
//       form.innerHTML = "<p>Erro</p>";
//     }
//   });
// });
