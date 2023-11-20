import { Locator, Page } from "@playwright/test";


export default class DashboardPage {

    readonly page: Page;
    readonly adminLocator: Locator;
    readonly usersButtonLocator: Locator;
    readonly stocksLocator: Locator;
    readonly stockSettingsLocator: Locator;
    readonly commsLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        //admin
        this.adminLocator = page.locator("//p[.='Admin']");
        //users
        this.usersButtonLocator = page.locator("//span[.='Users']");
        //stock
        this.stocksLocator = page.locator("//p[.='Stock']");
        //stock-settings
        this.stockSettingsLocator = page.locator("(//span[.='Settings'])[3]");
        //comms
        this.commsLocator = page.locator("//p[.='Comms']");
    }
    //------admin---------------------------------------------
    async clickOnAdmin() {
        await this.page.waitForLoadState("load");
        await this.adminLocator.click();
    }

    async clickOnUsers() {
        await this.page.waitForLoadState("load");
        await this.usersButtonLocator.click();
    }
    //-----stock-----------------------------------------------
    async clickOnStock() {
        await this.page.waitForLoadState("load");
        await this.stocksLocator.click();
    }
    async clickOnStockSettings() {
        await this.page.waitForLoadState("load");
        await this.stockSettingsLocator.click();
    }
    //-----------------comms--------------------------------
    async clickOnComms() {
        await this.page.waitForLoadState("load");
        await this.commsLocator.click();
    }

}