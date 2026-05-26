
import {test,expect } from "../fixture";

test.describe("Inventory Page Visual Comparison", () => {
  test("Verify that the inventory page matches the baseline screenshot ", async ({
    page,inventoryPage})=>{
 
    await inventoryPage.waitForInventoryPage();
    await expect(page).toHaveScreenshot( { fullPage: true });
    });
    test("Verify that the inventory page matches the baseline screenshot when the item is added", async ({inventoryPage})=>{
        await inventoryPage.waitForInventoryPage();
        await inventoryPage.addSauceLabsBackpackToCart();
        await expect(inventoryPage.page).toHaveScreenshot({  stylePath: "./screenshot/screenshot.css" });
    });
    test("Verify that the inventory page matches the baseline screenshot when the item is removed",async ({inventoryPage})=>{
        await inventoryPage.waitForInventoryPage();
        await inventoryPage.addSauceLabsBackpackToCart();
        await inventoryPage.removeSauceLabsBackpackFromCart();
       
        await expect(inventoryPage.page).toHaveScreenshot({ fullPage: true, stylePath: "./screenshot/screenshot.css" });
    });
test("Verify that the inventory items text matches the baseline snapshot(Non image snapshot)", async ({inventoryPage})=>{
    await inventoryPage.waitForInventoryPage();
    const inventoryItemsText = await inventoryPage.getInventoryItemsText();
    expect(inventoryItemsText.join("\n")).toMatchSnapshot();
});
});