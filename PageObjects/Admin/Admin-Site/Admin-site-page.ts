import { Locator, Page, expect } from "@playwright/test";
export default class AdminSitePage {
    readonly page: Page;
    readonly userNameDropdownLoactor: Locator;
    readonly firstNameSearchLoactor: Locator;
    readonly siteTabLocator: Locator;
    readonly AllSitesRadioButton: Locator;
    siteCheckBoxLocator: Locator;
    toButtonLocator: Locator;
    successfulMessage: Locator;
    usersSitesCheckbox: Locator;
    froButtonLocator: Locator;
    unAssignedSuccefulMessage: Locator;
    availableSitesNameValue: Locator;





    constructor(page: Page) {
        this.page = page;
        this.userNameDropdownLoactor = page.locator('[data-test-id="UserManagementUserName"] input');

        this.siteTabLocator = page.locator('[data-test-id="UserManagement1232"]');
        this.AllSitesRadioButton = page.locator('(//div[@class="form-check-radio form-group-no-bottom-margin margin-left-15"])[2]');
        this.siteCheckBoxLocator=page.locator('(//td[@data-test-id="UserManagementUserManagementSites37SitesFilterGridSelectionCellSelectionCell"])[1]');
        this.toButtonLocator=page.locator('[data-test-id="UserManagementUserManagementSites37Right"]');
        this.froButtonLocator=page.locator('[data-test-id="UserManagementUserManagementSites37Left"]');
        this.successfulMessage=page.locator('//p[text()="Sites successfully assigned to user"]');
        this.usersSitesCheckbox=page.locator('(//td[@data-test-id="UserManagementUserManagementSites37CompanyUserSitesGridSelectionCellSelectionCell"]//input)[1]');
        this.unAssignedSuccefulMessage=page.locator(' //p[text()="Sites successfully unassigned from user"]');
        this.availableSitesNameValue=page.locator('(//input[@data-test-id="UserManagementUserManagementSites37SitesFilterGridName"])[1]');


    }
    async clickOnSiteTab() {
        await this.siteTabLocator.click();
    }

    async clickOnAllSitesRadioButton(){    
        await this.AllSitesRadioButton.click();
    }

    async clickOnAvailableSiteCheckBox(){    
        await this.siteCheckBoxLocator.click();
    }

    async clickOnUsersSiteCheckBox(){    
        await this.usersSitesCheckbox.click();
    }
    async clickOnToButton(){
        await this.toButtonLocator.click();
        await this.page.waitForTimeout(4000);
    }
    async clickOnFroButton(){
        await this.froButtonLocator.click();
        await this.page.waitForTimeout(4000);
    }
    async EnteruserNameDropdown(userNameDropdown: string) {
        await this.userNameDropdownLoactor.fill(userNameDropdown);
        await this.page.locator("(//div[normalize-space()='" + userNameDropdown + "'])[3]").click();
    }

    async verifyAssignSuccessMessage(expectedMessage: string){
        const actualMessage = await this.successfulMessage.textContent();
        expect(actualMessage).toBe(expectedMessage);
    }

    async verifyUnssignSuccessMessage(expectedUnassignedMessage: string) {
        const actualMessage = await this.unAssignedSuccefulMessage.textContent();
        expect(actualMessage).toBe(expectedUnassignedMessage);
    }

    async verifySiteIsAddedInManagerSites(){
       await expect(this.availableSitesNameValue.textContent()).toBeTruthy();
    }
}