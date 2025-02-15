// Function to handle car search
function searchCar() {
    const query = document.getElementById('search').value.toLowerCase();
    const cars = document.querySelectorAll('.car-card');
    cars.forEach(car => {
        const carName = car.querySelector('h3').textContent.toLowerCase();
        if (carName.includes(query)) {
            car.style.display = 'block';
        } else {
            car.style.display = 'none';
        }
    });
}

// Example of dynamically adding cars to the page
document.addEventListener('DOMContentLoaded', () => {
    const carContainer = document.querySelector('.car-container');
    
    const cars = [
        { name: 'Tesla Model S', price: '$79,990', imgSrc: 'images/tesla.jpg' },
        { name: 'BMW M4', price: '$71,800', imgSrc: 'images/bmw-m4.jpg' },
        { name: 'Audi Q7', price: '$53,800', imgSrc: 'images/audi-q7.jpg' }
    ];
    
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <img src="${car.imgSrc}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>Luxury car with top-notch features</p>
            <div class="price">${car.price}</div>
        `;
        carContainer.appendChild(carCard);
    });
});
