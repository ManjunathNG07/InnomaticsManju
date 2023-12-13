import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import DashboardPage from "../../../PageObjects/dashboard";
import data from "../../../TestData/Drive_off/Reports-data/reports.json";
import DriveOffReportsPage from "../../../PageObjects/Drive_off/Reports-page/drive_off-reports-page";

test("Verify that Site Name dropdown should allow the LIU to select a Site from the List of Sites as the Report", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffReportsPage = new DriveOffReportsPage(page);

    await login.gotoLoginPage(data["Drive_001"].url);
    await login.loginToApp(data["Drive_001"].SuperUser, data["Drive_001"].companyCode, data["Drive_001"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffReportsPage();
    await driveOffReportsPage.selectSiteName(data["Drive_001"].siteName);
    await driveOffReportsPage.verifySiteNameDropDownIsAllowed(data["Drive_001"].siteName);

})

test("Verify that Site No. dropdown should automatically populated once the Site Name is selected", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffReportsPage = new DriveOffReportsPage(page);

    await login.gotoLoginPage(data["Drive_001"].url);
    await login.loginToApp(data["Drive_001"].SuperUser, data["Drive_001"].companyCode, data["Drive_001"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffReportsPage();
    await driveOffReportsPage.selectSiteName(data["Drive_001"].siteName);
    await driveOffReportsPage.verifySiteNoDropDownIsPopulated(data["Drive_001"].siteNo);

})

test("Verify that the Site Name dropdown should automatically be populated once the Site No. is selected", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffReportsPage = new DriveOffReportsPage(page);

    await login.gotoLoginPage(data["Drive_001"].url);
    await login.loginToApp(data["Drive_001"].SuperUser, data["Drive_001"].companyCode, data["Drive_001"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffReportsPage();
    await driveOffReportsPage.selectSiteNo(data["Drive_001"].siteNo);
    await driveOffReportsPage.verifySiteNameDropDownIsPopulated(data["Drive_001"].siteName);

})

test("Verify that by selecting Start Date, End Date user should be able to click on Apply button, details should appear in the Reports grid", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffReportsPage = new DriveOffReportsPage(page);

    await login.gotoLoginPage(data["Drive_001"].url);
    await login.loginToApp(data["Drive_001"].SuperUser, data["Drive_001"].companyCode, data["Drive_001"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffReportsPage();
    await driveOffReportsPage.selectSiteName(data["Drive_001"].siteName);
    await driveOffReportsPage.selecetStartDateReported(data["Drive_001"].date, data["Drive_001"].monthYear, data["Drive_001"].month, data["Drive_001"].year, data["Drive_001"].monthss);
    await driveOffReportsPage.enterRego(data["Drive_001"].rego);
    await driveOffReportsPage.clickOnApplyButton();
    await driveOffReportsPage.verifyReportsGirdIsDisplayed();

})

test("Verify that LIU should be able to export all the Reports in the .csv format", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffReportsPage = new DriveOffReportsPage(page);

    await login.gotoLoginPage(data["Drive_001"].url);
    await login.loginToApp(data["Drive_001"].SuperUser, data["Drive_001"].companyCode, data["Drive_001"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffReportsPage();
    await driveOffReportsPage.selectSiteName(data["Drive_001"].siteName);
    await driveOffReportsPage.selecetStartDateReported(data["Drive_001"].date, data["Drive_001"].monthYear, data["Drive_001"].month, data["Drive_001"].year, data["Drive_001"].monthss);
    await driveOffReportsPage.enterRego(data["Drive_001"].rego);
    await driveOffReportsPage.clickOnApplyButton();
    await driveOffReportsPage.verifyExportAllTheReports();

})


test("Verify that when the LIU clicks on the Drive Off button should redirect to Drive Off - Drive Off - Vehicle", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffReportsPage = new DriveOffReportsPage(page);

    await login.gotoLoginPage(data["Drive_001"].url);
    await login.loginToApp(data["Drive_001"].SuperUser, data["Drive_001"].companyCode, data["Drive_001"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffReportsPage();
    await driveOffReportsPage.clickOnDriveOffButton();
    await driveOffReportsPage.verifyRedirectToDriveOffVehiclePage();

})


test("Verify by clicking Apply button details should appear in the Invoices grid", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffReportsPage = new DriveOffReportsPage(page);

    await login.gotoLoginPage(data["Drive_001"].url);
    await login.loginToApp(data["Drive_001"].SuperUser, data["Drive_001"].companyCode, data["Drive_001"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffReportsPage();
    await driveOffReportsPage.clickOnInvoiceTab();
    await driveOffReportsPage.clickOnInvoicesApplyButton();
    await driveOffReportsPage.verifyInvoicesGridIsDisplayed();


})


test("Verify that LIU should be able to export all the Invoices in the .csv format", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffReportsPage = new DriveOffReportsPage(page);

    await login.gotoLoginPage(data["Drive_001"].url);
    await login.loginToApp(data["Drive_001"].SuperUser, data["Drive_001"].companyCode, data["Drive_001"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffReportsPage();
    await driveOffReportsPage.clickOnInvoiceTab();
    await driveOffReportsPage.clickOnInvoicesApplyButton();
    await driveOffReportsPage.verifyThatExportAllTheInvoices();


})