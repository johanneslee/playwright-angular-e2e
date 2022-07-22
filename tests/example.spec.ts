import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://angular-notes-six.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Notes/);

  // create a locator
  const getStarted = page.locator('href=Words');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/words');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*words/);
});
