import { Locator, Page, expect } from "@playwright/test";


export default class DriveOffReportsPage {

    readonly page: Page;
    readonly siteNameDropDownLocator: Locator;
    readonly siteNoDropDownLocator: Locator;
    setDateLocator: Locator;
    dateStatusLabel: Locator;
    DateNextLocator: Locator;
    DateyearTextLocator: Locator;
    DateYearLocator: Locator;
    endDateLocator: Locator;
    regoLocator: Locator;
    applyButtonLocator: Locator;
    exportAllDataLocator: Locator;
    verifyExportData: Locator;
    verifyGrid: Locator;
    verifySiteName: Locator;
    verifySiteNo: Locator;
    innvoicesLocator: Locator;
    innvoiceApplyButton: Locator;
    verifyInnvoiceGrid: Locator;
    innvoiceExportDataLocator: Locator;
    verifyInnvoiceExportData: Locator;
    siteNameCloseLocator: Locator;
    verifyVehiclePageLocator: Locator;
    driveOffPageLocator: Locator;



    constructor(page: Page) {
        this.page = page;
        this.siteNameDropDownLocator = page.locator('//div[@data-test-id="DriveOffReportsDriveOffReportsTabSiteName"]//input');
        this.siteNameCloseLocator = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabCardWithToggleButtonTitle"]');
        this.siteNoDropDownLocator = page.locator('//div[@data-test-id="DriveOffReportsDriveOffReportsTabSiteNo"]//input');
        this.setDateLocator = page.locator('//div[@data-test-id="DriveOffReportsDriveOffReportsTabReportsFormStartDate"]//input');
        this.endDateLocator = page.locator('//div[@data-test-id="DriveOffReportsDriveOffReportsTabReportsFormEndDate"]//input');
        this.dateStatusLabel = page.locator('//th[@class="rdtSwitch"]').first();
        this.DateNextLocator = page.locator("//span[.='›']").first();
        this.DateyearTextLocator = page.locator('(//th[@class="rdtSwitch"])[4]');
        this.DateYearLocator = page.locator('(//th[@class="rdtSwitch"])[4]');
        this.regoLocator = page.locator('//div[@data-test-id="DriveOffReportsDriveOffReportsTabReportsFormRegistrationNumber"]//input');
        this.applyButtonLocator = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabApply"]');
        this.exportAllDataLocator = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTab149DriveOffReportsExport"]');
        this.verifyExportData = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTab149DriveOffReportsExport"]').last();
        this.verifyGrid = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabCardWithToggleAndFunctionButtonsCardBody"]');
        this.verifySiteName = page.locator('(//div[@data-test-id="DriveOffReportsDriveOffReportsTabSiteName"]//div)[5]');
        this.verifySiteNo = page.locator('(//div[@data-test-id="DriveOffReportsDriveOffReportsTabSiteNo"]//div)[5]');
        this.verifyVehiclePageLocator = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormTitle"]');
        this.driveOffPageLocator=page.locator('[data-test-id="DriveOffReportsCardWithBackButtonCustomButton"]');

        //innvoices
        this.innvoicesLocator = page.locator('[data-test-id="DriveOffReports11304"]');
        this.innvoiceApplyButton = page.locator('[data-test-id="DriveOffReportsInvoicesApply"]');
        this.innvoiceExportDataLocator = page.locator('[data-test-id="DriveOffReportsInvoices152InvoicesExport"]');
        this.verifyInnvoiceGrid = page.locator('[data-test-id="DriveOffReportsInvoices152InvoicesGrid"]');
        this.verifyInnvoiceExportData = page.locator('[data-test-id="DriveOffReportsInvoices152InvoicesExport"]').last();

    }

    async selectSiteName(siteName: string) {
        await this.siteNameDropDownLocator.fill(siteName);
        await this.page.locator('//div[contains(text(),"' + siteName + '")]').first().click();
        await this.siteNameCloseLocator.click();
    }

    async verifySiteNameDropDownIsAllowed(siteName: string) {
        await expect(this.verifySiteName).toBeTruthy();
        await expect(this.verifySiteName).toHaveText(siteName);
    }

    async verifySiteNameDropDownIsPopulated(siteName: string) {
        await expect(this.verifySiteName).toBeTruthy();
        await expect(this.verifySiteName).toHaveText(siteName);
    }

    async selectSiteNo(siteNo: string) {
        await this.siteNoDropDownLocator.fill(siteNo);
        //await this.page.locator('//div[contains(text(),"' + siteNo + '")]').first().click();
        await this.page.getByText(siteNo, { exact: true }).last().click();
    }
    async verifySiteNoDropDownIsPopulated(siteNo: string) {
        await expect(this.verifySiteNo).toBeTruthy();
        await expect(this.verifySiteNo).toHaveText(siteNo);
    }


    async selecetStartDateReported(date: string, monthYear: string, month: string, year: string, monthss: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await this.setDateLocator.click();

        while (true) {
            const inneryear = await this.dateStatusLabel.textContent();

            if (inneryear == monthYear) {
                break;
            }
            await this.DateNextLocator.click();

        }
        const dates = await this.page.$$('//td[@class="rdtDay" and @data-month="' + month + '"]');
        for (const dt of dates) {
            if (await dt.textContent() == date) {
                await dt.click();
                break;
            }
        }

    }

    async enterRego(rego: string) {
        await this.regoLocator.fill(rego);
    }

    async clickOnApplyButton() {
        await this.applyButtonLocator.click();
    }
    async clickOnDriveOffButton(){
        await this.driveOffPageLocator.click();
    }

    async verifyReportsGirdIsDisplayed() {
        await expect(this.verifyGrid).toBeVisible();
    }

    async verifyExportAllTheReports() {
        await this.page.waitForLoadState('load');
        await this.exportAllDataLocator.click();
        await expect(this.verifyExportData).toBeTruthy();
    }

    async verifyRedirectToDriveOffVehiclePage() {
        await expect(this.verifyVehiclePageLocator).toBeVisible();
    }


    //---------innvoices----------------
    async clickOnInvoiceTab(){
        await this.innvoicesLocator.click();
    }

    async clickOnInvoicesApplyButton(){
        await this.innvoiceApplyButton.click();
    }

    async verifyInvoicesGridIsDisplayed(){
        await expect(this.verifyInnvoiceGrid).toBeVisible();
    }

    async verifyThatExportAllTheInvoices() {
        await this.page.waitForLoadState('load');
        await this.innvoiceExportDataLocator.click();
        await expect(this.verifyInnvoiceExportData).toBeTruthy();
    }
}