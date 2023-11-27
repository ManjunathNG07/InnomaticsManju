import { Locator, Page, expect } from "@playwright/test";
export default class AdminSiteContactPage {
    readonly page: Page;
    readonly siteAddButtonLocator: Locator;
    readonly siteCloseButtonLocator: Locator;
    readonly siteNameDropdownLocator: Locator;
    readonly contactTabLocator: Locator;
    readonly editContactLocator: Locator;
    readonly siteManagerButtonLocator: Locator;
    readonly siteManagerCheckBox: Locator;
    readonly popUpRightButton: Locator;
    readonly closeContactButton: Locator;
    readonly saveContactButton: Locator;
    readonly areaManagerButtonLocator: Locator;
    readonly verifyAreaManagerLocator: Locator;
    readonly verifySiteManagerLocator: Locator;
    readonly sitePartnerButtonLocator: Locator;
    readonly verifySitePartnerLocator: Locator;
    readonly auditorButtonLocator: Locator;
    readonly verifySiteAuditorLocator: Locator;
    readonly emergencyContactButtonLocator: Locator;
    readonly pumpIssueButtonLocator: Locator;
    readonly buyingGroupButtonLocator: Locator;
    readonly verifyEmergencyContactLocator: Locator;
    readonly verifyPumpIssueLocator: Locator;
    readonly verifyBuyingGroupLocator: Locator;
    readonly addAdditionalSiteContact: Locator;
    readonly contactLabelInputLocator: Locator;
    readonly saveContactLabelLocator: Locator;
    readonly verifyLabelcontact: string;





    constructor(page: Page) {
        this.page = page;

        this.siteAddButtonLocator = page.locator('[data-test-id="SiteConfigurationCardWithToggleAndFunctionButtonsbtnAddButton"]');
        this.siteCloseButtonLocator = page.locator('[data-test-id="SiteConfigurationSiteConfigurationSiteDetails24CancelCustomHoverButton"]');
        this.siteNameDropdownLocator = page.locator('(//input[@class="companysite-select__input"])[1]');
        this.contactTabLocator = page.locator('[data-test-id="SiteConfiguration1255"]');
        this.editContactLocator = page.locator('[data-test-id="SiteConfigurationSiteContacts95Edit"]');
        this.siteManagerButtonLocator = page.locator('[title="Site Manager"]');
        this.siteManagerCheckBox = page.locator('[data-test-id="SiteConfigurationSiteContacts95ContactContactInfoPopup287ContactsSelectionCellSelectionCell"]');
        this.popUpRightButton = page.locator('[data-test-id="SiteConfigurationSiteContacts95ContactContactInfoPopupRight"]');
        this.closeContactButton = page.locator('[data-test-id="SiteConfigurationSiteContacts95ContactContactInfoPopupClose"]');
        this.saveContactButton = page.locator('[data-test-id="SiteConfigurationSiteContacts95Save"]');
        this.verifySiteManagerLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact2Name"]//input');
        this.verifyAreaManagerLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact4Name"]//input');
        this.verifySitePartnerLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact6Name"]//input');
        this.verifySiteAuditorLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact8Name"]//input');
        this.verifyEmergencyContactLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact10Name"]//input');
        this.verifyPumpIssueLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact12Name"]//input');
        this.verifyBuyingGroupLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact14Name"]//input');
        this.areaManagerButtonLocator = page.locator('[title="Area Manager"]');
        this.sitePartnerButtonLocator = page.locator('[title="Site Partner"]');
        this.auditorButtonLocator = page.locator('[title="Auditor"]');
        this.emergencyContactButtonLocator = page.locator('[title="Emergency Contact"]');
        this.pumpIssueButtonLocator = page.locator('[title="Pump Issue"]');
        this.buyingGroupButtonLocator = page.locator('[title="Buying Group"]');
        this.addAdditionalSiteContact = page.locator('[data-test-id="SiteConfigurationSiteContacts305Add"]');
        this.contactLabelInputLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts305AddSiteContactTypeName"]//input');
        this.saveContactLabelLocator = page.locator('[data-test-id="SiteConfigurationSiteContacts305AddSiteContactTypeSave"]');
        this.verifyLabelcontact = ('[class="form-group"]');




    }
    //---------------------------  
    async clickOnAddSiteIcon() {
        await this.page.waitForLoadState('load');
        await this.siteAddButtonLocator.click();
    }

    async clickOnCloseSiteIcon() {
        await this.page.waitForLoadState('load');
        await this.siteCloseButtonLocator.click();
    }

    async selectSiteName(siteName: string) {
        await this.siteNameDropdownLocator.fill(siteName);
        await this.page.locator('//div[contains(text(),"' + siteName + '")]').first().click();

    }

    async clickOnContactTab() {
        await this.contactTabLocator.click();

    }
    async clickOnEditContactButton() {
        await this.page.waitForLoadState('load');
        await this.editContactLocator.click();
    }

    async clickOnSiteManagerButton() {
        await this.page.waitForLoadState('load');
        await this.siteManagerButtonLocator.click();
    }

    async selectSiteManager() {
        await this.page.waitForLoadState('load');
        await this.siteManagerCheckBox.first().click();
        await this.siteManagerCheckBox.last().click();
    }


    async clickOnRightPopUp() {
        await this.popUpRightButton.click();

    }

    async clickOnCloseContactButton() {
        await this.closeContactButton.click();
    }

    async clickOnSaveContact() {
        await this.saveContactButton.click();
    }

    async clickOnAreaManagerButton() {
        await this.page.waitForLoadState('load');
        await this.areaManagerButtonLocator.click();
    }

    async clickOnSitePartnerButton() {
        await this.page.waitForLoadState('load');
        await this.sitePartnerButtonLocator.click();
    }

    async clickOnAuditorButton() {
        await this.page.waitForLoadState('load');
        await this.auditorButtonLocator.click();
    }

    async clickOnEmergencycontactButton() {
        await this.page.waitForLoadState('load');
        await this.emergencyContactButtonLocator.click();
    }
    async clickOnPumpIssueButton() {
        await this.page.waitForLoadState('load');
        await this.pumpIssueButtonLocator.click();
    }

    async clickOnBuyingGroupButton() {
        await this.page.waitForLoadState('load');
        await this.buyingGroupButtonLocator.click();
    }

    async clickOnAddAdditionalSiteContacts() {
        await this.page.waitForLoadState('load');
        await this.addAdditionalSiteContact.click();
    }

    async enterLableContacts(contact: string) {
        await this.contactLabelInputLocator.fill(contact);
    }

    async clickOnSaveAdditonalSiteContact() {
        await this.saveContactLabelLocator.click();

    }
    async verifyThatSaveTheSiteManager() {
        await expect(this.verifySiteManagerLocator.textContent()).toBeTruthy();
    }

    async verifyThatSaveTheAreaManager() {
        await expect(this.verifyAreaManagerLocator.textContent()).toBeTruthy();
    }

    async verifyThatSaveTheSitePartner() {
        await expect(this.verifySitePartnerLocator.textContent()).toBeTruthy();
    }

    async verifyThatSaveTheAuditor() {
        await expect(this.verifySiteAuditorLocator.textContent()).toBeTruthy();
    }

    async verifyThatSaveTheEmergencyContact() {
        await expect(this.verifyEmergencyContactLocator.textContent()).toBeTruthy();
    }

    async verifyThatSaveThePumpIssue() {
        await expect(this.verifyPumpIssueLocator.textContent()).toBeTruthy();
    }

    async verifyThatSaveTheBuyingGroup() {
        await expect(this.verifyBuyingGroupLocator.textContent()).toBeTruthy();
    }

    async verifySaveTheAdditionalSiteContact(contact: string) {
        const labelContact = await this.page.$$(this.verifyLabelcontact);
        for (const element of labelContact) {
            if (contact === await element.textContent()) {
                await expect(contact).toBeTruthy();
                break;
            }
        }

    }





}