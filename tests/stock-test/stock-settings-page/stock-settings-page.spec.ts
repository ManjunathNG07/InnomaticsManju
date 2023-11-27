import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import DashboardPage from "../../../PageObjects/dashboard";
import data from "../../../TestData/Stock/Stock-Settings/stock-settings.json";
import StockSettingsPage from "../../../PageObjects/Stock/Stock-Settings/stock-settings-page";
test.skip("Verify that LIU should be able to add tank attribute and checking in Tank&pumpsetup page.", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const stockSettingsPage = new StockSettingsPage(page, data.tankAttribute);

    await login.gotoLoginPage(data.url);
    await login.loginToApp(data.SuperUser, data.companyCode, data.Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnStock();
    await dashBoardPage.clickOnStockSettings();
    await stockSettingsPage.clickOnTankAndPumpAttribute();
    //await stockSettingsPage.clickOnAddButton();
    await stockSettingsPage.clickOnEditButton();
    await stockSettingsPage.enterLastTankAttribute(data.tankAttribute);
   // await stockSettingsPage.enterTankAttribute(data.tankAttribute);
    await stockSettingsPage.clickOnSaveButton();
    await stockSettingsPage.clickOnCloseTheTankPage();
    await stockSettingsPage.clickOnTankAndPumpSetup();
    await stockSettingsPage.enterSiteName(data.siteName);
    await stockSettingsPage.clickOnEditTankAndPumpSetup();
    await stockSettingsPage.verifyTankAttributePresntInSetPage();

})