import { Locator, Page, expect } from "@playwright/test";
export default class AdminMapPage {
    readonly page: Page;
    readonly userNameDropdownLoactor: Locator;
    readonly zoomInIconLocator: Locator;
    readonly shrinkButtonLocator: Locator;
    readonly expondButtonLocator: Locator;
    readonly mapTabLocator: Locator;
    readonly alertOkButtonLocator: Locator;






    constructor(page: Page) {
        this.page = page;
        this.userNameDropdownLoactor = page.locator('[data-test-id="UserManagementUserName"] input');
        this.zoomInIconLocator = page.locator('[title="Zoom in"]');
        this.shrinkButtonLocator = page.locator(' [data-test-id="UserManagementUserManagementMap218CardWithToggleButtonShrink"]');
        this.expondButtonLocator = page.locator('[data-test-id="UserManagementUserManagementMap218CardWithToggleButtonExpand"]');
        this.mapTabLocator = page.locator('[data-test-id="UserManagement1237"]');
        this.alertOkButtonLocator = page.locator("//a[.='Ok']");

    }
    async clickOnMapTab() {
        await this.page.waitForLoadState("load");
        await this.mapTabLocator.click();
    }
    async clickOnOkAlert() {
        await this.page.waitForLoadState("load");
        await this.alertOkButtonLocator.click();
    }

    async EnteruserNameDropdown(userNameDropdown: string) {
        await this.userNameDropdownLoactor.fill(userNameDropdown);
        await this.page.locator("(//div[normalize-space()='" + userNameDropdown + "'])[3]").click();
    }
    async clickOnZoomIn() {
        await this.page.waitForLoadState("load");
        await this.zoomInIconLocator.click();
    }

    async verifyMapIsZoomInSuccessfully() {
        expect(this.zoomInIconLocator).toBeVisible();
        expect(this.zoomInIconLocator).toBeTruthy();
    }

    async clickOnExpondButton() {
        await this.page.waitForLoadState("load");
        await this.expondButtonLocator.click();
    }
    async verifyMapIsExpondedSuccessfully() {
        expect(this.shrinkButtonLocator).toBeVisible();
        expect(this.shrinkButtonLocator).toBeTruthy();
    }

}