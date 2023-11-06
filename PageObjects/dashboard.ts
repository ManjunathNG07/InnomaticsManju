import { Locator, Page } from "@playwright/test";


export default class DashboardPage {

    readonly page: Page;
    readonly adminLocator: Locator;
    readonly usersButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        //admin
        this.adminLocator = page.locator("//p[.='Admin']");
        //users
        this.usersButtonLocator=page.locator("//span[.='Users']");
    }
    async clickOnAdmin(){
        await this.page.waitForLoadState("load");
        await this.adminLocator.click();
    }

    async clickOnUsers(){
        await this.page.waitForLoadState("load");
        await this.usersButtonLocator.click();
    }
}