import { Locator, Page, expect } from "@playwright/test";
export default class AssetsSetupPage {
    readonly page: Page;
    readonly settingslocator: Locator;
    readonly addRowlocator: Locator;
    readonly saveAssetslocator: Locator;
    readonly inputAssetslocator: Locator;
    readonly verifyAssetLocator: string;
    readonly randomStrings: string;
    readonly expectedAssetsRole: string;






    constructor(page: Page, assetsRole: string) {
        this.page = page;
        this.settingslocator = page.locator("(//li[.='Settings'])[6]");
        this.addRowlocator = page.locator('[title="Create new row"]');

        this.saveAssetslocator = page.locator('[title="Save changes"]');
        this.inputAssetslocator = page.locator('(//input[@class="border-color-blue form-control"])[8]');
        this.verifyAssetLocator = ('//td[@data-test-id]//input[@readonly]');

        this.randomStrings = `${Math.random().toString().slice(2, 4)}`;
        this.expectedAssetsRole = `${assetsRole}${this.randomStrings}`;

    }

    async clickOnSettings() {
        await this.page.waitForLoadState("load");
        await this.settingslocator.click();
    }

    async clickOnAddAssetRole() {
        await this.addRowlocator.click();
    }

    async enterTheAssetRole(assetsRole: string) {
        await this.inputAssetslocator.fill(this.expectedAssetsRole);
    }

    async clickOnSaveAssetRole() {
        await this.saveAssetslocator.click();
    }

    async verifyTheAssetesIsAvailable() {
        const assetsrole = await this.page.$$(this.verifyAssetLocator);
        for (const element of assetsrole) {
            if (this.expectedAssetsRole === await element.textContent()) {
                await expect(this.expectedAssetsRole).toBeTruthy();
                break;
            }
        }

    }

}