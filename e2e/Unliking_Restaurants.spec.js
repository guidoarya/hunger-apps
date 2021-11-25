const assert = require('assert');

Feature('Unliking Restaurants');

Before(async (I) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__name');
  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurantName);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
});

Scenario('Showing liked resto', async (I) => {
  I.seeElement('.header-title');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');
  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  // Resto name that has been favorited should same.
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Unliking one restaurant', (I) => {
  I.seeElement('.restaurant__name');

  I.click(locate('.restaurant__name').first());
  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Nothing restaurant for display.', '.restaurant-item__not__found');
});
