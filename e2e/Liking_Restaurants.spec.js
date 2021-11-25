const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Nothing restaurant for display.', '.restaurant-item__not__found');
});
Scenario('liking one restaurant', async (I) => {
  I.see('Nothing restaurant for display.', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.seeElement('.restaurant__name');
  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.list-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
