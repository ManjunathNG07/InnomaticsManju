import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import data from "../../../TestData/Admin/Admin-Availability-data/admin-availability.json";
import DashboardPage from "../../../PageObjects/dashboard";

import AdminUsersPage from "../../../PageObjects/Admin/Admin-Users/admin-user-page";


test("TS01AM: Verify that export button should allow to exports the entire report in .csv format", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);

    const adminUserPage = new AdminUsersPage(page, data["TS01"].userNameDropdown);

    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.clickOnCloseUserDetails();
    
    
})