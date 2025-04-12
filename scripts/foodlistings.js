const foods = ["Fresh Apples", "Avocado", "Bananas", "Bread", "Broccoli", "Jam Jars", "Fresh Mangoes", "Fresh Oranges", "Pizza Slices", "Raw Chicken", "Rice Grains", "Fresh Strawberries", "Sweet Potatoes", "Tofu", "Tomatoes"];
const filenames = [
"apples.jpeg",
"avocado.jpg",
"bananas.jpeg",
"bread.jpeg",
"broccoli.jpeg",
"jams.jpeg",
"mangoes.webp",
"oranges.jpeg",
"pizza.jpeg",
"rawchicken.jpeg",
"rawrice.jpg",
"strawberries.jpeg",
"sweetpotatoes.jpeg",
"tofu.jpeg",
"tomatoes.webp"
]



function getRandomUniqueIndices(count, max) {
    const indices = new Set();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * max));
    }
    return Array.from(indices);
  }
  
function generateFoodCards() {
  const container = document.querySelector(".food-grid");
  container.innerHTML = ""; 

  const randomIndices = getRandomUniqueIndices(3, foods.length);

  randomIndices.forEach(i => {
    const card = document.createElement("div");
    card.className = "food-card";
    card.innerHTML = `
      <a>
        <img src="assets/${filenames[i]}" alt="${foods[i]}">
      <p><strong><span id="food-name">${foods[i]}</span></strong><br>Quantity: <span id="food-quantity"> ${Math.floor(Math.random() * 50 + 10)}</span></p>
      </a>
    `;
    card.addEventListener('click', e => {
        const selectedFood= card.querySelector('#food-name').textContent;
        const selectedQuantity= card.querySelector('#food-quantity').textContent;

        window.localStorage.setItem("selectedFood", selectedFood);
        window.localStorage.setItem("selectedQuantity", selectedQuantity);
        window.location.href='logistics.html' ;

    })
 

    container.appendChild(card);
 
    
    });
}

document.addEventListener("DOMContentLoaded", generateFoodCards);


const donateBtn = document.getElementById('donate-btn');
const formContainer = document.getElementById('donation-form-container');
const donationSubmitBtn = document.getElementById('donation-submit');



donateBtn.addEventListener('click', e => {
  formContainer.classList.remove('hidden');
})

donationSubmitBtn.addEventListener('click', e => {
  e.preventDefault();
  const foodname = document.getElementById('food').value;
  const quantity = document.getElementById('quantity').value;
  const i = foods.indexOf(foodname);
  const container = document.querySelector(".food-grid");

  window.alert(`Listed ${quantity} quantity of ${foods[i]} for donation`)
  const card = document.createElement("div");
  card.className = "food-card";
  card.innerHTML = `
    <a>
      <img src="assets/${filenames[i]}" alt="${foods[i]}">
        <p><strong><span id= 'food-name'>${foods[i]}</span></strong><br>Quantity: <span id= "food-quantity">${quantity}</span></p>
    </a>
  `;

  card.addEventListener('click', e => {
    const selectedFood= card.querySelector('#food-name').textContent;
    const selectedQuantity= card.querySelector('#food-quantity').textContent;

    window.localStorage.setItem("selectedFood", selectedFood);
    window.localStorage.setItem("selectedQuantity", selectedQuantity);
    window.location.href='logistics.html' ;

})

  container.appendChild(card);

  formContainer.classList.add('hidden');

})


