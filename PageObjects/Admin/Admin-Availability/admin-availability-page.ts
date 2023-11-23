import { Locator, Page, expect } from "@playwright/test";
export default class AdminAvailabilityPage {
    readonly page: Page;
    readonly userNameDropdownLoactor: Locator;
    readonly availabilityButtonLoactor: Locator;
    readonly exportLocator: Locator;
    readonly exportAllDataLocator: Locator;




    constructor(page: Page) {
        this.page = page;
        this.userNameDropdownLoactor = page.locator('[data-test-id="UserManagementUserName"] input');
        this.availabilityButtonLoactor = page.locator('[data-test-id="UserManagement1235"]');
        this.exportLocator = page.locator('[data-test-id="UserManagementAvailability188AvailabilityExport"]');
        this.exportAllDataLocator = page.locator("//button[.='Export all data']");
    }

    async EnteruserNameDropdown(userNameDropdown: string) {
        await this.userNameDropdownLoactor.fill(userNameDropdown);
        await this.page.locator("(//div[normalize-space()='" + userNameDropdown + "'])[3]").click();
    }
    async clickOnAvailabilityButton() {
        await this.page.waitForLoadState("load");
        await this.availabilityButtonLoactor.click();
    }

    async clickOnExportButton() {
        await this.exportLocator.click();
    }

    async clickOnAllowAllData() {
        await this.exportAllDataLocator.click();
    }

    async verifyExportButtonIsAllow() {
       // expect(this.exportLocator).toBeVisible();
        expect(this.exportAllDataLocator).toBeVisible();

    }

}