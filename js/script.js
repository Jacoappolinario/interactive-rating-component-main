const form = document.querySelector(".rating-form");
const ratingSection = document.querySelector(".rating-section");
const thankSection = document.querySelector(".thank-section");
const errorSection = document.querySelector(".error-section");
const selectedRating = document.querySelector(".selected-rating");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const button = document.querySelector(".submit-button");

  const data = new FormData(form);

  if (!data.has("rating")) {
    alert("Please select a rating before submitting the form");
  } else {
    button.disabled = true;
    button.innerText = "Sending...";

    fakeFetch("./enviar.php", {
      method: "POST",
      body: data,
      delayTime: 2000,
      simulateSuccess: true,
    }).then((response) => {
      if (response.ok) {
        ratingSection.classList.add("hidden");
        thankSection.classList.remove("hidden");

        selectedRating.innerText = data.get("rating");
      } else {
        ratingSection.classList.add("hidden");
        errorSection.classList.remove("hidden");
      }
    });
  }
});
