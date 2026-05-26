

import {test,expect } from "../fixture";

test.describe("Login Page Visual Comparison", () => {
  test("Verify that the login page matches the baseline screenshot", async ({
    page, loginPage })=>{
 
    await loginPage.navigate();
    await expect(page).toHaveScreenshot( { fullPage: true });
    });
});