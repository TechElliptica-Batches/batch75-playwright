import { test, expect } from '@playwright/test';
import loginData from '../test-data.json' with {"type":"json"}


for(let i = 0; i < loginData.length ; i++){
  let data = loginData[i];
  test(`test ${data.testname}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(data.username);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(data.password);
    await page.locator('[data-test="login-button"]').click();
    let errorMsg = await page.locator('[data-test="error"]').textContent();
    expect(errorMsg).toBe(data.errorMsg)
  });
}

// Devops

// github
// git - command line utility
// github desktop 


// jenkins 