import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import data from "../../../TestData/Assets/Assets-Setup/assets-setup.json";
import DashboardPage from "../../../PageObjects/dashboard";
import AssetsSetupPage from "../../../PageObjects/Assets/Assets-setup/assets-setup-page";


test("TS07:Verify that the Asset Roles are created in the Assets module under the settings page", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const assetsPage=new AssetsSetupPage(page,data["Admin7"].assetRole);
    await login.gotoLoginPage(data["Admin7"].url);
    await login.loginToApp(data["Admin7"].SuperUser, data["Admin7"].companyCode, data["Admin7"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAssets();
    await dashBoardPage.clickOnAssetsSetup();
    await assetsPage.clickOnSettings();
    await assetsPage.clickOnAddAssetRole();
    await assetsPage.enterTheAssetRole(data["Admin7"].assetRole);
    await assetsPage.clickOnSaveAssetRole();
    await assetsPage.verifyTheAssetesIsAvailable();
})