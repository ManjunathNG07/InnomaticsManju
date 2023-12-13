import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import DashboardPage from "../../../PageObjects/dashboard";
import data from "../../../TestData/Drive_off/Reports-data/reports.json";
import DriveOffSettingsPage from "../../../PageObjects/Drive_off/Settings-page/drive_off-settings-page";

test("Verify that LIU should be able to edit the Settings by clicking the edit button ", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffSettingsPage = new DriveOffSettingsPage(page);

    await login.gotoLoginPage(data["Drive_001"].url);
    await login.loginToApp(data["Drive_001"].SuperUser, data["Drive_001"].companyCode, data["Drive_001"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffSettingsPage();
    await driveOffSettingsPage.clickOnEditButton();
    await driveOffSettingsPage.verifySettingAbleToEdit();
    
    
})