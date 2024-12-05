const factElement = document.getElementById("fact");
const generateBtn = document.getElementById("generate-btn");

async function fetchCatFact() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    factElement.textContent = data.fact;
  } catch (error) {
    factElement.textContent = "Oops! Could not fetch a fact. Try again later.";
    console.error("Error fetching cat fact:", error);
  }
}

generateBtn.addEventListener("click", fetchCatFact);
