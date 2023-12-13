import { Locator, Page, expect } from "@playwright/test";


export default class DriveOffSettingsPage {

    readonly page: Page;
    editSettingsLocator: Locator;
    saveEditSettings: Locator;
   



    constructor(page: Page) {
        this.page = page;
        this.editSettingsLocator=page.locator('[data-test-id="DriveOffSettingsSettings131SettingsCommandEdit"]').first();
        this.saveEditSettings=page.locator('[data-test-id="DriveOffSettingsSettings131SettingsCommandCommit"]');
    }

    async clickOnEditButton(){
        await this.editSettingsLocator.click();
    }

    async verifySettingAbleToEdit(){
        await expect(this.saveEditSettings).toBeVisible();
        await this.saveEditSettings.click();
    }
}