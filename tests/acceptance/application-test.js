import { module, test } from "qunit";
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module("Acceptance: Application", function (hooks) {
  setupApplicationTest(hooks);

  test("Test composable queue without async function", async function (assert) {
    assert.expect(1);

    await visit('/');
    await document.querySelector(".click-me-1").click();
    assert.ok("It works");
  })

  test("Test composable queue with async function", async function (assert) {
    assert.expect(1);

    await visit('/');
    await document.querySelector(".click-me-2").click();
    assert.ok("It works");
  })
});
