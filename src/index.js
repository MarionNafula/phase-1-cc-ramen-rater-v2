// index.js


// Callbacks
const handleClick = (ramen) => {
  const ramenDetail = document.getElementById('ramen-detail');
  const detailImage = ramenDetail.querySelector('.detail-image');
  const name = ramenDetail.querySelector('.name');
  const restaurant = ramenDetail.querySelector('.restaurant');
  const ratingDisplay = document.getElementById('rating-display');
  const commentDisplay = document.getElementById('comment-display');

  detailImage.src = ramen.image;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
};


const addSubmitListener = () => {
  const newRamenForm = document.getElementById('new-ramen');
  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newName = document.getElementById('new-name').value;
    const newRestaurant = document.getElementById('new-restaurant').value;
    const newImage = document.getElementById('new-image').value;
    const newRating = document.getElementById('new-rating').value;
    const newComment = document.getElementById('new-comment').value;

    const newRamen = {
      id: Math.floor(Math.random() * 1000), // generate a random id
      name: newName,
      restaurant: newRestaurant,
      image: newImage,
      rating: newRating,
      comment: newComment,
    };

    const ramenMenu = document.getElementById('ramen-menu');
    const newRamenHTML = `
      <img src="${newRamen.image}" alt="${newRamen.name}">
      <h2>${newRamen.name}</h2>
      <h3>${newRamen.restaurant}</h3>
    `;
    const newRamenElement = document.createElement('div');
    newRamenElement.innerHTML = newRamenHTML;
    ramenMenu.appendChild(newRamenElement);

    newRamenElement.addEventListener('click', () => {
      handleClick(newRamen);
    });
  });
};


const displayRamens = () => {
  fetch('db.json')
    .then((response) => response.json())
    .then((data) => {
      const ramens = data.ramens;
      const ramenMenu = document.getElementById('ramen-menu');
      ramens.forEach((ramen) => {
        const ramenHTML = `
          <img src="${ramen.image}" alt="${ramen.name}">
          <h2>${ramen.name}</h2>
          <h3>${ramen.restaurant}</h3>
        `;
        const ramenElement = document.createElement('div');
        ramenElement.innerHTML = ramenHTML;
        ramenMenu.appendChild(ramenElement);

        ramenElement.addEventListener('click', () => {
          handleClick(ramen);
        });
      });
    });
};


const main = () => {
  displayRamens();
  addSubmitListener();
}


main()


// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};