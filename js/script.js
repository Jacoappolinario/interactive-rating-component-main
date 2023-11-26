const form = document.querySelector(".rating-form");
const ratingSection = document.querySelector(".rating-section");
const thankSection = document.querySelector(".thank-section");
const selectedRating = document.querySelector(".selected-rating");
const container = document.querySelector(".container");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const button = document.querySelector(".submit-button");

  const data = new FormData(form);

  if (!data.has("rating")) {
    alert("Please select a rating before submitting the form");
  } else {
    button.disabled = true;
    button.innerText = "Enviando...";

    fakeFetch("./enviar.php", {
      body: data,
      delayTime: 2000,
      simulateSuccess: true,
    })
      .then((response) => {
        if (response.ok) {
          ratingSection.classList.add("hidden");
          thankSection.classList.remove("hidden");
          selectedRating.innerText = data.get("rating");
        }
      })
      .catch((error) =>
        console.error("Error in fictional form submission:", error)
      );
  }
});
