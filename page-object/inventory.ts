import {Page, Locator} from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly sauceLabsBackpackAddToCart: Locator;
    readonly sauceLabsBackpackRemoveFromCart: Locator;
    readonly inventoryItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sauceLabsBackpackAddToCart = page.getByTestId("add-to-cart-sauce-labs-backpack");
        this.sauceLabsBackpackRemoveFromCart = page.getByTestId("remove-sauce-labs-backpack");
        this.inventoryItems = page.locator(".inventory_item");
    }  
    async waitForInventoryPage() {
       
        await this.page.goto("/inventory.html");
         await this.page.waitForLoadState("networkidle");
    }    
    async addSauceLabsBackpackToCart() {
        await this.sauceLabsBackpackAddToCart.click();
    }
    async removeSauceLabsBackpackFromCart() {
        await this.sauceLabsBackpackRemoveFromCart.click();
    }
    async getInventoryItemsText() {
        return await this.inventoryItems.allTextContents();
    }
}