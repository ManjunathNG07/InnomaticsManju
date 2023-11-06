import { test,expect } from "@playwright/test";
import Loginpage from "../PageObjects/login-page";
import data from "../TestData/login.json";
import DashboardPage from "../PageObjects/dashboard";

test.beforeEach(async ({ page }) => {
    const login = new Loginpage(page);
    await login.gotoLoginPage(data.url);
    await login.loginToApp(data.superUser, data.companyCode, data.password);

})
test("Dashboard",async({page})=>{
    const dashBoardPage=new DashboardPage(page);
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
})