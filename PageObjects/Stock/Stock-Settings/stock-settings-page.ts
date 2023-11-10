import { Locator, Page, expect } from "@playwright/test";
export default class StockSettingsPage {
    readonly page: Page;
    readonly tankAndPumpAttributeLocator: Locator;
    readonly tankAndPumpSetupLocator: Locator;
    readonly addTankAttributeLocator: Locator;
    readonly saveTankAttributeLocator: Locator;
    readonly inputSelector: string;
    readonly closeButtonLocator: Locator;
    readonly randomStrings: string;
    readonly expectedTankAttribute: string;
    readonly siteNameLocator: Locator;
    readonly editTankAndPumpSetupLocator: Locator;
    readonly verifyLocator: string;
    readonly siteNameDropdownLocator: Locator;
    readonly editTankAttributeLocator: Locator;
   readonly inputSelector2: Locator;



    constructor(page: Page, tankAttribute: string) {
        this.page = page;
        this.tankAndPumpAttributeLocator = page.locator("//div[.='Tank & Pump Attributes']");
        this.tankAndPumpSetupLocator = page.locator("//div[.='Tank & Pump Setup']");
        this.addTankAttributeLocator = page.locator('[data-test-id="TankAttributesAttributeAddCard1241Add"]');
        this.editTankAttributeLocator = page.locator('[data-test-id="TankAttributesAttributeAddCard1241Edit"]');
        this.saveTankAttributeLocator = page.locator('[data-test-id="TankAttributesAttributeAddCard1241Save"]');
        this.inputSelector = (('input[name^="' + 'attr_1_' + '"]'));
        this.closeButtonLocator = page.locator('//span[@title="Close"]');
        this.siteNameLocator = page.locator('.companysite-select__input-container');
        this.siteNameDropdownLocator = page.locator('(//input[@class="companysite-select__input"])[1]');
        this.editTankAndPumpSetupLocator = page.locator('//button[@data-test-id="TankSetup112TankSetupActionsColumnCompanyIDButton"]/i');
        this.verifyLocator = ('//label[@class="label-border"]');
        //--------------------------------------------------------

        this.inputSelector2 = page.locator('//input[@name="attr_1_99"]');



        this.randomStrings = `${Math.random().toString().slice(2, 6)}`;
        this.expectedTankAttribute = `${tankAttribute}${this.randomStrings}`;


    }

    async clickOnTankAndPumpAttribute() {
        await this.page.waitForLoadState("load");
        await this.tankAndPumpAttributeLocator.click();
    }

    async clickOnAddButton() {
        await this.addTankAttributeLocator.click();
    }

    async clickOnEditButton() {
        await this.editTankAttributeLocator.click();
    }

    async enterTankAttribute(tankAttribute: string): Promise<void> {
        const inputElements = await this.page.$$(this.inputSelector);

        for (const input of inputElements) {
            const isReadOnly = await input.getAttribute('readonly');
            const inputValue = await input.getAttribute('value');

            if (isReadOnly !== 'true' && inputValue === '') {
                await this.page.waitForLoadState("load");
                await input.fill(this.expectedTankAttribute);
            }
        }
    }
    //-------------------------------------
    async enterLastTankAttribute(tankAttribute:string){
        await this.inputSelector2.fill(this.expectedTankAttribute);
    }

    async clickOnSaveButton() {
        await this.page.waitForLoadState("load");
        await this.saveTankAttributeLocator.click();
    }

    async clickOnCloseTheTankPage() {
        await this.page.waitForLoadState("load");
        await this.closeButtonLocator.click();
    }
    async clickOnTankAndPumpSetup() {
        await this.page.waitForLoadState("load");
        await this.tankAndPumpSetupLocator.click();
    }

    async enterSiteName(siteName: string) {
       // await this.siteNameLocator.last().click();
       
        await this.siteNameDropdownLocator.fill(siteName);
        await this.page.locator('//div[contains(text(),"' + siteName + '")]').first().click();
       
    }

    async clickOnEditTankAndPumpSetup() {
        await this.page.waitForLoadState("load");
        await this.editTankAndPumpSetupLocator.first().click();
    }


    async verifyTankAttributePresntInSetPage() {
        const tankElement = await this.page.$$(this.verifyLocator);
        for (const element of tankElement) {
            if (this.expectedTankAttribute === await element.textContent()) {
                await expect(this.expectedTankAttribute).toBeTruthy();
                break;
            }
        }

    }


}


