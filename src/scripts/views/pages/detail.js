import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';

const Detail = {
  async render() {
    return `
    <div class="detailContainer" id="detailContainer"></div>
    <form-reviews></form-reviews>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detailContainer');

    const { restaurant } = restaurants;
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      FavoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        address: restaurant.address,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
      },
    });

    const buttonReview = document.querySelector('#submit-review');
    const nameReview = document.querySelector('#name-review');
    const contentReview = document.querySelector('#content-review');

    buttonReview.addEventListener('click', async (event) => {
      if (window.navigator.onLine) {
        event.preventDefault();
        const review = {
          id: restaurant.id,
          name: nameReview.value,
          review: contentReview.value,
        };
        RestaurantDbSource.sendReview(review);
      } else {
        console.log('Reviews cannot be added in offline mode');
      }
    });
  },
};
export default Detail;
