// global-setup.ts

import { chromium} from "@playwright/test";
import { LoginPage } from "./page-object/login";

async function globalSetup() {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const loginPage = new LoginPage(page);

    // Navigate to app
    await loginPage.navigate();

    
    // Login
    await loginPage.login(
        process.env.SAUCE_USERNAME! ,
        process.env.PASSWORD!
    );

    // Save authentication state
    await page.context().storageState({
        path: "./auth/user.json",
    });

    await browser.close();
}

export default globalSetup;