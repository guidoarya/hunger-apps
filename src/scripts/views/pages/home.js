import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-component id="hero"></hero-component>
    <header>
      <header-component></header-component>
    </header>
    <main>
      <restaurant-list id="restaurant-list" class="restaurant-list">

      </restaurant-list>
    </main>
    `;
  },

  async afterRender() {
    const restaurantList = document.querySelector('#restaurant-list');
    const restaurants = await RestaurantDbSource.allRestaurant();

    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
