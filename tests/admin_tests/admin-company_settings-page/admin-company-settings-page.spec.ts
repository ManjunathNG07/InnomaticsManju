import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import data from "../../../TestData/Admin/Admin-User-Data/admin_users.json";
import DashboardPage from "../../../PageObjects/dashboard";
import AdminCompanySettingsPage from "../../../PageObjects/Admin/Admin-Company_Settings/admin-company_settings-page";

test("TS05: Verify that the Security Roles should be configured in the Admin Module under Company Settings -> Roles Tab", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
     const adminCompanySettingsPage=new AdminCompanySettingsPage(page);
  
    await login.gotoLoginPage(data["Admin6"].url);
    await login.loginToApp(data["Admin6"].SuperUser, data["Admin6"].companyCode, data["Admin6"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnCompanySettings();
    await adminCompanySettingsPage.clickOnCompanyroles();
})
