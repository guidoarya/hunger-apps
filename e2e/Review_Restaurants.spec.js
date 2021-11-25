const assert = require('assert');

Feature('Review Restaurant');

Before(async (I) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__name');
  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurantName);
});

Scenario('Reviewing a Restaurant', async (I) => {
  // Dummy data
  const nameReview = 'Reviewer name';
  const contentReview = 'Review content';

  // Review form should displayed
  I.seeElement('.formReviews');

  // Fill form with dummy data and then submit.
  I.fillField('#name-review', nameReview);
  I.fillField('#content-review', contentReview);
  I.click('button[type="submit"]');

  const submittedNameOfReviewer = await I
    .grabTextFrom(locate('.content-review .name-reviewer').last());
  const submittedReviewContent = await I
    .grabTextFrom(locate('.content-review .review').last());

  assert.strictEqual(nameReview, submittedNameOfReviewer);
  assert.strictEqual(contentReview, submittedReviewContent);
});
