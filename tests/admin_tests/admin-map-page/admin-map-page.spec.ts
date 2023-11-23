import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import data from "../../../TestData/Admin/Admin-Map-data/admin-map.json";
import DashboardPage from "../../../PageObjects/dashboard";
import AdminMapPage from "../../../PageObjects/Admin/Admin-Map/admin-map-page";
import AdminUsersPage from "../../../PageObjects/Admin/Admin-Users/admin-user-page";



test("TS01AM: Verify that user can Zoom in the map by clicking + icon", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminMapPage = new AdminMapPage(page);
    const adminUserPage = new AdminUsersPage(page, data["TS01"].userName);
    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.clickOnCloseUserDetails();
    await adminMapPage.EnteruserNameDropdown(data["TS01"].userNameDropdown);
    await adminMapPage.clickOnMapTab();
    await adminMapPage.clickOnOkAlert();
    await adminMapPage.clickOnZoomIn();
    await adminMapPage.verifyMapIsZoomInSuccessfully();

})


test("TS02AM: Verify that the Maximize option/View expand option  should Maximizes the map", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminMapPage = new AdminMapPage(page);
    const adminUserPage = new AdminUsersPage(page, data["TS01"].userName);
    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.clickOnCloseUserDetails();
    await adminMapPage.EnteruserNameDropdown(data["TS01"].userNameDropdown);
    await adminMapPage.clickOnMapTab();
    await adminMapPage.clickOnOkAlert();
    await adminMapPage.clickOnExpondButton();
    await adminMapPage.verifyMapIsExpondedSuccessfully();

})