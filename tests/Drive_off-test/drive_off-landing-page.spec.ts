import { test, expect } from "@playwright/test";
import Loginpage from "../../PageObjects/login-page";
import DashboardPage from "../../PageObjects/dashboard";
import data from "../../TestData/Drive_off/Drive_off-data/drive_off.json";
import DriveOffPage from "../../PageObjects/Drive_off/Drive_off-page/drive_off-page";

test("Verify that LIU should be able to navigate Driveoff ,Reports and Settings page from landing page", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_010"].url);
    await login.loginToApp(data["Drive_010"].SuperUser, data["Drive_010"].companyCode, data["Drive_010"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffPage();
    await driveOffPage.verifyDriveOffLandingPage();
    await dashBoardPage.clickOnDriveOffReportsPage();
    await driveOffPage.verifyDriveOffReportsLandingPage();
    await dashBoardPage.clickOnDriveOffSettingsPage();
    await driveOffPage.verifyDriveOffSettingsLandingPage();
   


})

test("Verify that LIU should be able to export all the data in the .csv format and should able to click on export all data and export selected rows.", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_010"].url);
    await login.loginToApp(data["Drive_010"].SuperUser, data["Drive_010"].companyCode, data["Drive_010"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await driveOffPage.selectOneRow();
    await driveOffPage.clickOnExportButton();
    await driveOffPage.verifyExportAllTheData();
    await driveOffPage.clickOnExportButton();
    await driveOffPage.verifyExportSelectedRow();

})


test("Verify that LIU should be able to view drive off landing page by clicking on view icon", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_010"].url);
    await login.loginToApp(data["Drive_010"].SuperUser, data["Drive_010"].companyCode, data["Drive_010"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await driveOffPage.clickOnDriveOffViewIcon();
    await driveOffPage.verifyDriveOffLandingPage();

})