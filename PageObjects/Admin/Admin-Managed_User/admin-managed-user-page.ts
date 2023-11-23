import { Locator, Page, expect } from "@playwright/test";
export default class AdminManagedUserPage {
    readonly page: Page;
    readonly userNameDropdownLoactor: Locator;
    readonly verifyUserNamelocator: Locator;
    readonly managedUsersTabLacator: Locator;
    readonly firstNameSearchLoactor: Locator;





    constructor(page: Page) {
        this.page = page;
        this.userNameDropdownLoactor = page.locator('[data-test-id="UserManagementUserName"] input');
        this.verifyUserNamelocator = page.locator('(//div[@data-test-id="UserManagementUserName"]//div)[4]');
        this.managedUsersTabLacator = page.locator('[data-test-id="UserManagement1233"]');
        this.firstNameSearchLoactor = page.locator('//th[@data-test-id="UserManagementUserManagementManagedUsers181ManagedUsersFilterCellFirstName"]//input');
    }
    async clickOnManagedUsersTab() {
        await this.managedUsersTabLacator.click();
    }

    async searchTheUser(searchUser: string) {
        await this.page.waitForLoadState("load");
        await this.firstNameSearchLoactor.fill(searchUser);
    }
    async verifySearchUserIsVisible() {
        await expect(this.firstNameSearchLoactor).toBeVisible();
    }

    async EnteruserNameDropdown(userNameDropdown: string) {
        await this.userNameDropdownLoactor.fill(userNameDropdown);
        await this.page.locator("(//div[normalize-space()='" + userNameDropdown + "'])[3]").click();
    }
    async verifyUserNameCanSearch(userNameDropdown: string) {
        const value = await this.verifyUserNamelocator.textContent();
        await expect(value).toBe(userNameDropdown);
    }
}