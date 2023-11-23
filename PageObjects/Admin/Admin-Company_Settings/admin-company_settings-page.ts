import { Locator, Page, expect } from "@playwright/test";
export default class AdminCompanySettingsPage {
    readonly page: Page;
    readonly companyRolesLocator: Locator;




    constructor(page: Page) {
        this.page = page;
        this.companyRolesLocator=page.locator("//li[.='Company Roles']");
    }
    async clickOnCompanyroles() {
        await this.companyRolesLocator.click();
    }
}