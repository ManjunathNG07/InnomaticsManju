import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import data from "../../../TestData/Admin/Admin-Site-data/admin-site.json";
import DashboardPage from "../../../PageObjects/dashboard";
import AdminUsersPage from "../../../PageObjects/Admin/Admin-Users/admin-user-page";
import AdminSitePage from "../../../PageObjects/Admin/Admin-Site/Admin-site-page";


test("TS01AM: To & Fro Buttons:  Verify that the LIU can select one or more sites by ticking the checkboxes and then assigned success message is generated successfully", async ({ page }) => {
    test.setTimeout(200 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminSitePage = new AdminSitePage(page);
    const adminUserPage = new AdminUsersPage(page, data["TS01"].userNameDropdown);

    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.clickOnCloseUserDetails();
    await adminSitePage.EnteruserNameDropdown(data["TS01"].userNameDropdown);
    await adminSitePage.clickOnSiteTab();
    await adminSitePage.clickOnAvailableSiteCheckBox();
    await adminSitePage.clickOnToButton();
    await adminSitePage.verifyAssignSuccessMessage(data["TS01"].expectedMessage);

    
})

test("TS03AM:Manager Sites/All Sites: Verify that If a site is dragged from the left to the right, it also needs to add that site to the Manager (of that User)", async ({ page }) => {
    test.setTimeout(200 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminSitePage = new AdminSitePage(page);
    const adminUserPage = new AdminUsersPage(page, data["TS01"].userNameDropdown);

    await login.gotoLoginPage(data["TS03"].url);
    await login.loginToApp(data["TS03"].SuperUser, data["TS03"].companyCode, data["TS03"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.clickOnCloseUserDetails();
    await adminSitePage.EnteruserNameDropdown(data["TS03"].userNameDropdown);
    await adminSitePage.clickOnSiteTab();
    await adminSitePage.clickOnAvailableSiteCheckBox();
    await adminSitePage.clickOnToButton();
    await adminSitePage.verifyAssignSuccessMessage(data["TS03"].expectedMessage);
    await adminSitePage.clickOnUsersSiteCheckBox();
    await adminSitePage.clickOnFroButton();
    await adminSitePage.verifyUnssignSuccessMessage(data["TS03"].expectedUnassignedMessage);
    


    
})