import { Locator, Page } from "@playwright/test";


export default class DashboardPage {

    readonly page: Page;
    readonly adminLocator: Locator;
    readonly usersButtonLocator: Locator;
    readonly stocksLocator: Locator;
    readonly stockSettingsLocator: Locator;
    readonly commsLocator: Locator;
    assetsLocator: Locator;
    setupLocator: Locator;
    companySettingsButtonLocator: Locator;
    preferencesLocator: Locator;
    maplocator: Locator;
    availabilityLocator: Locator;
    managedUserLocator: Locator;
    sitesButtonLocator: Locator;
    driveOffLocator: Locator;
    driveOffLandingLocator: Locator;
    reportsLandingLocator: Locator;
    settingsLandingLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        //admin
        this.adminLocator = page.locator("//p[.='Admin']");
        //users
        this.usersButtonLocator = page.locator("//span[.='Users']");
        //site
        this.sitesButtonLocator = page.locator("//span[.='Sites']");
        //company Settings
        this.companySettingsButtonLocator = page.locator("//span[.='Company Settings']");
        //stock
        this.stocksLocator = page.locator("//p[.='Stock']");
        //stock-settings
        this.stockSettingsLocator = page.locator("(//span[.='Settings'])[3]");
        //comms
        this.commsLocator = page.locator("//p[.='Comms']");
        //Assets
        this.assetsLocator = page.locator("//p[.='Assets']");
        this.setupLocator = page.locator("(//span[.='Setup'])[3]");
        //preferences
        this.preferencesLocator = page.locator("(//div[.='Preferences'])[2]");
        //map
        this.maplocator=page.locator("(//div[.='Map'])[2]");
        //Availability
        this.availabilityLocator=page.locator("(//div[.='Availability'])[2]");
        //managed user
        this.managedUserLocator=page.locator("(//div[.='ManagedUsers'])[2]");
        //Drive_Off
        this.driveOffLocator = page.locator("//p[.='Drive Off']");
        //drive_off page
        this.driveOffLandingLocator = page.locator("//span[.='Drive Off']");
        //drive_off reports page
        this.reportsLandingLocator = page.locator("//span[.='Reports']").last();
        //drive_off settings page
        this.settingsLandingLocator = page.locator("//span[.='Settings']").last();
    


        

        


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
    //-----------sites--------------------
    async clickOnSites() {
        await this.page.waitForLoadState("load");
        await this.sitesButtonLocator.click();
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
    //--------------------------assets-----------------
    async clickOnAssets() {
        await this.page.waitForLoadState("load");
        await this.assetsLocator.click();
    }

    async clickOnAssetsSetup() {
        await this.page.waitForLoadState("load");
        await this.setupLocator.click();
    }
    //-----------------company settings----------
    async clickOnCompanySettings() {
        await this.page.waitForLoadState("load");
        await this.companySettingsButtonLocator.click();
    }
    //--------------preferences-----------------
    async clickOnPreferences() {
        await this.page.waitForLoadState("load");
        await this.preferencesLocator.click();
    }
    //-----------------Map---------------
    async clickOnMap() {
        await this.page.waitForLoadState("load");
        await this.maplocator.click();
    }
    //------------------availability---------
    async clickOnAvailability() {
        await this.page.waitForLoadState("load");
        await this.availabilityLocator.click();
    }
    //------------Managed User----------
    async clickOnManagedUser() {
        await this.page.waitForLoadState("load");
        await this.managedUserLocator.click();
    }
    //--------------Drive_off-----------------------
    async clickOnDriveOff() {
        await this.page.waitForLoadState("load");
        await this.driveOffLocator.click();
    }

    async clickOnDriveOffPage() {
        await this.page.waitForLoadState("load");
        await this.driveOffLandingLocator.click();
    }
    //-----------drive_off-reports------------
    async clickOnDriveOffReportsPage() {
        await this.page.waitForLoadState("load");
        await this.reportsLandingLocator.click();
    }
    //--------drive_off-settings---------------
    async clickOnDriveOffSettingsPage() {
        await this.page.waitForLoadState("load");
        await this.settingsLandingLocator.click();
    }

}