const pickupInput = document.getElementById ("pickup");
const deliveryInput = document.getElementById ("delivery");
const mapFrame = document.getElementById ("map-frame");
const foodItemEl = document.getElementById ("food-name");
const foodQuantityEl = document.getElementById ("food-quantity");
const submitBtn = document.querySelector(".join-btn")

const addresses = [
    "DLF Phase 1, Gurugram",
    "Sector 29, Gurugram",
    "Cyber City, Gurugram",
    "Golf Course Road, Gurugram",
    "Sohna Road, Gurugram"
];

pickupInput.value = addresses[Math.floor(Math.random() * addresses.length)];

foodItemEl.innerHTML = `${localStorage.getItem("selectedFood")}`
foodQuantityEl.innerHTML = `${localStorage.getItem("selectedQuantity")}`

// Update map based on delivery address input 
deliveryInput.addEventListener("change", () => {
    const location = encodeURIComponent(deliveryInput.value + ", Gurugram");
    mapFrame.src = `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
});

submitBtn.addEventListener('click', e => {
    const pickup = pickupInput.value.trim();
    const delivery = deliveryInput.value.trim();
    const time = document.getElementById('duration').value.trim;

    if (pickup && delivery && time) {
        const popup = document.getElementById('confirmationPopup')
        popup.classList.add('active');

      document.getElementById('orderInfo').innerHTML = 
      `Delivery To ${delivery}<br>
      Order Content: ${localStorage.getItem("selectedFood").trim()} (${localStorage.getItem("selectedQuantity").trim()})
      `
    } else {
        window.alert ("Please enter all the relevant information to proceed.")
    }
    });
