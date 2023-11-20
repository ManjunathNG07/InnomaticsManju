import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import DashboardPage from "../../../PageObjects/dashboard";
import data from "../../../TestData/Comms/Comms-Tasks/Comms-Tasks-TaskAdmin/comms-tasks-taskadmin.json";
import CommsTaskAdminPage from "../../../PageObjects/Comms/Comms-Tasks/Comms-Tasks-Task-Admin/comms-tasks-tastadmin-page";

test("Verify that LIU should be able to add task admin and check enable and save task button.", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const taskAdminPage = new CommsTaskAdminPage(page);

    await login.gotoLoginPage(data.url);
    await login.loginToApp(data.SuperUser, data.companyCode, data.Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnComms();
    await taskAdminPage.clickOnTaskAdmin();
    await taskAdminPage.addOnTaskAdmin();
    await taskAdminPage.clickOnCommsTask();
    await taskAdminPage.enterTaskName(data.taskName);
    await taskAdminPage.setDueTime(data.duetime);
    await taskAdminPage.setDueDate(data.date, data.monthYear, data.month, data.year, data.monthss);
    await taskAdminPage.selectUrgency(data.urgency);
    await taskAdminPage.selectForm(data.form);
    await taskAdminPage.clickOnNextButton1();
    await taskAdminPage.selectSiteName(data.siteName);
    await taskAdminPage.clickOnNextButton2();
    await taskAdminPage.verifyEnableAndSaveTask();


})