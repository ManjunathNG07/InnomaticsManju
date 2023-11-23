import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import data from "../../../TestData/Admin/Admin-Preferences-data/admin-preferences.json";
import DashboardPage from "../../../PageObjects/dashboard";
import AdminPreferencesPage from "../../../PageObjects/Admin/Admin-preferences/admin-preferences-page";
import AdminUsersPage from "../../../PageObjects/Admin/Admin-Users/admin-user-page";

test("TS01AP: Verify the edit icon should present to edit the edit the Startup Page and Tooltip Delay in seconds", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminPrefrencesPage = new AdminPreferencesPage(page);
    const adminUserPage = new AdminUsersPage(page, data["TS01"].userNameDropdown);

    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.clickOnCloseUserDetails();
    await adminPrefrencesPage.EnteruserNameDropdown(data["TS01"].userNameDropdown);
    await adminPrefrencesPage.clickOnPreferenceTab();
    await adminPrefrencesPage.verifyEditButtonIsAvailable();
    await adminPrefrencesPage.clickOnEditButton();
    await adminPrefrencesPage.selectstartupDropdown(data["TS01"].startupDropdown);
    await adminPrefrencesPage.enterTooltipDelayInSec(data["TS01"].tooltip);

})

test("TS03A-P:Verify that LIU should be able to save successfully the details by clicking Save button", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminPrefrencesPage = new AdminPreferencesPage(page);
    const adminUserPage = new AdminUsersPage(page, data["TS01"].userNameDropdown);

    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.clickOnCloseUserDetails();
    await adminPrefrencesPage.EnteruserNameDropdown(data["TS01"].userNameDropdown);
    await adminPrefrencesPage.clickOnPreferenceTab();
    await adminPrefrencesPage.verifyEditButtonIsAvailable();
    await adminPrefrencesPage.clickOnEditButton();
    await adminPrefrencesPage.selectstartupDropdown(data["TS01"].startupDropdown);
    await adminPrefrencesPage.enterTooltipDelayInSec(data["TS01"].tooltip);
    await adminPrefrencesPage.clickOnSaveButton();
    await adminPrefrencesPage.verifySaveSuccessfully(data["TS01"].startupDropdown);

})

test("TS04A-P:Verify that LIU should be able to close the details card by clicking close button ", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminPrefrencesPage = new AdminPreferencesPage(page);
    const adminUserPage = new AdminUsersPage(page, data["TS01"].userNameDropdown);

    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.clickOnCloseUserDetails();
    await adminPrefrencesPage.EnteruserNameDropdown(data["TS01"].userNameDropdown);
    await adminPrefrencesPage.clickOnPreferenceTab();
    await adminPrefrencesPage.verifyEditButtonIsAvailable();
    await adminPrefrencesPage.clickOnEditButton();
    await adminPrefrencesPage.selectstartupDropdown(data["TS01"].startupDropdown);
    await adminPrefrencesPage.enterTooltipDelayInSec(data["TS01"].tooltip);
    await adminPrefrencesPage.clickOnSaveButton();
    await adminPrefrencesPage.clickOnCloseButton();
    await adminPrefrencesPage.verifyCloseThePreferences();

})