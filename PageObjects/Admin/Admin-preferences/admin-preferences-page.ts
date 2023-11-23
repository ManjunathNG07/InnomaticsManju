import { Locator, Page, expect } from "@playwright/test";
export default class AdminPreferencesPage {
    readonly page: Page;
    readonly userNameDropdownLoactor: Locator;
    readonly editButtonLocator: Locator;
    readonly startupDropdownLocator: Locator;
    readonly tooltipDelayLocator: Locator;
    readonly saveIconLocator: Locator;
   readonly verifyStartuplocator: Locator;
  readonly  closeIconLocator: Locator;
  readonly  userVerifyLocator: Locator;
   readonly preferenceTabLocator: Locator;





    constructor(page: Page) {
        this.page = page;
        this.userNameDropdownLoactor = page.locator('[data-test-id="UserManagementUserName"] input');
        this.editButtonLocator = page.locator('[data-test-id="UserManagementUserManagementPreferences35Edit"]');

        this.startupDropdownLocator = page.locator('(//div[@data-test-id="UserManagementUserManagementPreferences35OnSiteStartupPage"]//input)[1]');
        this.tooltipDelayLocator = page.locator('//div[@data-test-id="UserManagementUserManagementPreferences35TooltipDelay"]//input');
        this.saveIconLocator = page.locator('[data-test-id="UserManagementUserManagementPreferences35Save"]');
        this.verifyStartuplocator = page.locator('(//div[@data-test-id="UserManagementUserManagementPreferences35OnSiteStartupPage"]//div)[6]');
        this.closeIconLocator=page.locator('//span[@title="Close"]');
        this.userVerifyLocator = page.locator('//h5[@data-test-id="UserManagementCardWithToggleAndFunctionButtonsTitle"]');
        this.preferenceTabLocator=page.locator('[data-test-id="UserManagement1236"]');


    }
    async EnteruserNameDropdown(userNameDropdown: string) {
        await this.userNameDropdownLoactor.fill(userNameDropdown);
        await this.page.locator("(//div[normalize-space()='" + userNameDropdown + "'])[3]").click();
    }

    async verifyEditButtonIsAvailable() {
        await expect(this.editButtonLocator).toBeVisible();
    }

    async clickOnEditButton() {
        await this.editButtonLocator.click();
    }

    async selectstartupDropdown(startupDropdown: string) {
        await this.startupDropdownLocator.fill(startupDropdown);
        await this.page.locator("(//div[normalize-space()='" + startupDropdown + "'])[3]").click();
    }
    async enterTooltipDelayInSec(tooltip: string) {
        await this.tooltipDelayLocator.fill(tooltip);
    }

    async clickOnSaveButton() {
        await this.saveIconLocator.click();
    }

    async verifySaveSuccessfully(startupDropdown: string) {
        const value = await this.verifyStartuplocator.textContent();
        await expect(value).toBe(startupDropdown);
    }

    async clickOnCloseButton() {
        await this.closeIconLocator.click();
    }
    async clickOnPreferenceTab() {
        await this.preferenceTabLocator.click();
    }
    async verifyCloseThePreferences() {
        expect(await this.userVerifyLocator).toBeTruthy();
    }

}