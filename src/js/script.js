const ratingOptions = document.querySelectorAll('input[name="rating"]');
const ratingCard = document.getElementById("rating-card");
const thanksCard = document.getElementById("thanks-card");
const valueRated = document.getElementById("rate-value");


document.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const optionChoosen = document.querySelectorAll('input[name="rating"]:checked');

	if (optionChoosen.length === 0) {
		return;
    }
    
    valueRated.innerText = optionChoosen[0].value

	ratingCard.classList.add("hidden");
	thanksCard.classList.remove("hidden");
});