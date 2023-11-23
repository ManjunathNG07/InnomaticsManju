import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import data from "../../../TestData/Admin/Admin-Managed_Users-data/admin-managed-users.json";
import DashboardPage from "../../../PageObjects/dashboard";
import AdminManagedUserPage from "../../../PageObjects/Admin/Admin-Managed_User/admin-managed-user-page";
import AdminUsersPage from "../../../PageObjects/Admin/Admin-Users/admin-user-page";


test("TS01AMU: Verify the user can search the user name by entering the details in search text field", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminManagedUsersPage = new AdminManagedUserPage (page);
    const adminUserPage = new AdminUsersPage(page, data["TS01"].userNameDropdown);

    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.clickOnCloseUserDetails();
    await adminManagedUsersPage.EnteruserNameDropdown(data["TS01"].userNameDropdown);
    await adminManagedUsersPage.clickOnManagedUsersTab();
    await adminManagedUsersPage.searchTheUser(data["TS01"].serachUser);
    await adminManagedUsersPage.verifySearchUserIsVisible();
    
})