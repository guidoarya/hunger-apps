import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="list-item">
  <a href="${`/#/detail/${restaurant.id}`}"> 
  <img class="lazyload" tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name || '-'} restaurant" />
  <div class="list-content">
    <h3 tabindex="0" class="restaurant__name">${restaurant.name || '-'}</h3>
    <p tabindex="0" class="item-rating"><strong>★</strong> ${restaurant.rating || '-'}</p>
    <p tabindex="0" class="item-location">Location: ${restaurant.city || '-'}</p>
  </div></a>
  </article>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
  <img class="restaurantImg" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="restaurant images">
    <div class="content-detail">
      <h2 class="restaurantName-detail restaurant__name">${restaurant.name}</h1>
      <p class="rating-detail">⭐️ ${restaurant.rating}</p>
      <div class="description-detail">
        <h3>Description</h3>
        <p class="description-content">${restaurant.description}</p>
      </div>
      <div class="location-detail">
        <h3>Location</h3>
        <p class="location-address">${restaurant.address}, ${restaurant.city}</p>
      </div>
    </div>

    <div class="restaurantMenu">
      <h2>Restaurant Menu</h2>
      <div class="foods-menu">
        <p class="menu-title">Foods</p>
        <p class="foods-item">
          ${restaurant.menus.foods.map((food) => `${food.name}, `).join('')}
        </p>
      </div>
      <div class="drinks-menu"  >
        <p class="menu-title">Drinks</p>
        <p class="drinks-item"> 
        ${restaurant.menus.drinks.map((drink) => `${drink.name}, `).join('')}</p>
      </div>
    </div>

    <div class="costumerReviews">
      <h2>Costumer Reviews</h2>
      <div class="listReviews">
        ${restaurant.customerReviews
    .map(
      (contentReview) => `
        <div class="itemReviews">
          <img src="../images/profile/profile.png" alt="">
          <div class="content-review">
            <p class="name-reviewer">${contentReview.name}</p>
            <p class="review">${contentReview.review}</p>
            <p class="date-review">${contentReview.date}</p>
          </div>
        </div>`,
    )
    .join('')}
      </div>
    </div>`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
