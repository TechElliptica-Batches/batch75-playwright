import { test, expect } from '@playwright/test';
import loginData from '../test-data.json' with {"type":"json"}


for(let i = 0; i < loginData.length ; i++){
  let data = loginData[i];
  test(`test ${data.testname}`, async ({ page }) => {
    await navigateTo(page, "https://www.saucedemo.com");
    await login(page, data.username, data.password);
    await validateErrorMsg(page, data.errorMsg);
  });
}

 test(`sucessful testcase`, async ({ page }) => {
    await navigateTo(page, "https://www.saucedemo.com");
    await login(page, "standard_user", "secret_sauce");
  });

async function login(page, username, password){
  await enter_username(page, username);
  await enter_password(page, password);
  await clickOnLogin(page);
}

async function navigateTo(page , url){
  await page.goto(url);
}

async function enter_username(page ,username){
  let usernameElem = page.locator('[data-test="username"]');
  await usernameElem.click();
    await page.locator('[data-test="username"]').fill(username);
}

async function enter_password(page ,password){
  await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(password);
}

async function clickOnLogin(page){
  await page.locator('[data-test="login-button"]').click();
}

async function validateErrorMsg(page, expectedErrorMsg){
    let errorMsg = await page.locator('[data-test="error"]').textContent();
    expect(errorMsg).toBe(expectedErrorMsg)
}

// Devops

// github
// git - command line utility
// github desktop 


// jenkins 