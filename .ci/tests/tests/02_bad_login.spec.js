import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {	
  await page.goto('http://192.168.3.179/Client/#/');
  await page.locator('[placeholder="Имя"]').click();
  await page.locator('[placeholder="Имя"]').fill('Administrator');
  await page.locator('[placeholder="Пароль"]').fill('FalseAdminPassword');
  await page.locator('[placeholder="Пароль"]').press('Enter');
  // Click button:has-text("Входим…")
  await expect(page.locator('button:has-text("Входим…")'));
  await page.locator('button:has-text("Входим…")').click();
  await expect(page).toHaveURL('http://192.168.3.179/Client/#/folder/46');
});