import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import DashboardPage from "../../../PageObjects/dashboard";
import data from "../../../TestData/Drive_off/Drive_off-data/drive_off.json";
import DriveOffPage from "../../../PageObjects/Drive_off/Drive_off-page/drive_off-page";

test("Verify that LIU should be able to edit the Status details", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_S10"].url);
    await login.loginToApp(data["Drive_S10"].SuperUser, data["Drive_S10"].companyCode, data["Drive_S10"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffPage();
    await driveOffPage.clickOnAddButton();
    await driveOffPage.enterRego(data["Drive_S10"].rego);
    await driveOffPage.validateCharcter();
    await driveOffPage.enterArrivalTime(data["Drive_S10"].arrivalTime);
    await driveOffPage.enterDriveOffTime(data["Drive_S10"].driveOffTime);
    await driveOffPage.enterFuelAmount(data["Drive_S10"].fuelAmount);
    await driveOffPage.enterFuelQuantity(data["Drive_S10"].fuelQuantity);
    await driveOffPage.enterReferenceNumber(data["Drive_S10"].referenceNo);
    await driveOffPage.enterPumpNo(data["Drive_S10"].pumpNo);
    await driveOffPage.selectProduct(data["Drive_S10"].product);
    await driveOffPage.selectSite(data["Drive_S10"].site);
    await driveOffPage.selectFailToPayType(data["Drive_S10"].failToPay);
    await driveOffPage.selectDriveOffStatus(data["Drive_S10"].driveOffStatus);
    await driveOffPage.selectColor(data["Drive_S10"].color);
    await driveOffPage.selectDidFrontAndRearPlatesMatch(data["Drive_S10"].plateMatch);
    await driveOffPage.clickOnSave();
    await driveOffPage.verifyVehicleSavedSuccussfully();
    await driveOffPage.clickOnStatus();
    await driveOffPage.clickOnEditTheStatus();
    await driveOffPage.clickOnSaveStatus();
    await driveOffPage.verifyStatusEditedSuccessfully();

})

test("Verify that by clicking Pay Now button LIU should be able to Pay", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_S10"].url);
    await login.loginToApp(data["Drive_S10"].SuperUser, data["Drive_S10"].companyCode, data["Drive_S10"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffPage();
    await driveOffPage.clickOnAddButton();
    await driveOffPage.enterRego(data["Drive_S10"].rego);
    await driveOffPage.validateCharcter();
    await driveOffPage.enterArrivalTime(data["Drive_S10"].arrivalTime);
    await driveOffPage.enterDriveOffTime(data["Drive_S10"].driveOffTime);
    await driveOffPage.enterFuelAmount(data["Drive_S10"].fuelAmount);
    await driveOffPage.enterFuelQuantity(data["Drive_S10"].fuelQuantity);
    await driveOffPage.enterReferenceNumber(data["Drive_S10"].referenceNo);
    await driveOffPage.enterPumpNo(data["Drive_S10"].pumpNo);
    await driveOffPage.selectProduct(data["Drive_S10"].product);
    await driveOffPage.selectSite(data["Drive_S10"].site);
    await driveOffPage.selectFailToPayType(data["Drive_S10"].failToPay);
    await driveOffPage.selectDriveOffStatus(data["Drive_S10"].driveOffStatus);
    await driveOffPage.selectColor(data["Drive_S10"].color);
    await driveOffPage.selectDidFrontAndRearPlatesMatch(data["Drive_S10"].plateMatch);
    await driveOffPage.clickOnSave();
    await driveOffPage.verifyVehicleSavedSuccussfully();
    await driveOffPage.clickOnStatus();
    await driveOffPage.clickOnPayNowButton();
    await driveOffPage.verifyPayNowIsPayble(data["Drive_S10"].email);
   

})

test("Verify that by clicking the Payment Request button LIU can create the link and send it to the user by entering email", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_S10"].url);
    await login.loginToApp(data["Drive_S10"].SuperUser, data["Drive_S10"].companyCode, data["Drive_S10"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffPage();
    await driveOffPage.clickOnAddButton();
    await driveOffPage.enterRego(data["Drive_S10"].rego);
    await driveOffPage.validateCharcter();
    await driveOffPage.enterArrivalTime(data["Drive_S10"].arrivalTime);
    await driveOffPage.enterDriveOffTime(data["Drive_S10"].driveOffTime);
    await driveOffPage.enterFuelAmount(data["Drive_S10"].fuelAmount);
    await driveOffPage.enterFuelQuantity(data["Drive_S10"].fuelQuantity);
    await driveOffPage.enterReferenceNumber(data["Drive_S10"].referenceNo);
    await driveOffPage.enterPumpNo(data["Drive_S10"].pumpNo);
    await driveOffPage.selectProduct(data["Drive_S10"].product);
    await driveOffPage.selectSite(data["Drive_S10"].site);
    await driveOffPage.selectFailToPayType(data["Drive_S10"].failToPay);
    await driveOffPage.selectDriveOffStatus(data["Drive_S10"].driveOffStatus);
    await driveOffPage.selectColor(data["Drive_S10"].color);
    await driveOffPage.selectDidFrontAndRearPlatesMatch(data["Drive_S10"].plateMatch);
    await driveOffPage.clickOnSave();
    await driveOffPage.verifyVehicleSavedSuccussfully();
    await driveOffPage.clickOnStatus();
    await driveOffPage.clickOnPaymentRequest()
    await driveOffPage.verifyLinkIsCreatedByEmail(data["Drive_S10"].email);
   

})

test("Verify that by clicking the Payment Request button LIU can create the link and send it to the user by entering sms", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_S10"].url);
    await login.loginToApp(data["Drive_S10"].SuperUser, data["Drive_S10"].companyCode, data["Drive_S10"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffPage();
    await driveOffPage.clickOnAddButton();
    await driveOffPage.enterRego(data["Drive_S10"].rego);
    await driveOffPage.validateCharcter();
    await driveOffPage.enterArrivalTime(data["Drive_S10"].arrivalTime);
    await driveOffPage.enterDriveOffTime(data["Drive_S10"].driveOffTime);
    await driveOffPage.enterFuelAmount(data["Drive_S10"].fuelAmount);
    await driveOffPage.enterFuelQuantity(data["Drive_S10"].fuelQuantity);
    await driveOffPage.enterReferenceNumber(data["Drive_S10"].referenceNo);
    await driveOffPage.enterPumpNo(data["Drive_S10"].pumpNo);
    await driveOffPage.selectProduct(data["Drive_S10"].product);
    await driveOffPage.selectSite(data["Drive_S10"].site);
    await driveOffPage.selectFailToPayType(data["Drive_S10"].failToPay);
    await driveOffPage.selectDriveOffStatus(data["Drive_S10"].driveOffStatus);
    await driveOffPage.selectColor(data["Drive_S10"].color);
    await driveOffPage.selectDidFrontAndRearPlatesMatch(data["Drive_S10"].plateMatch);
    await driveOffPage.clickOnSave();
    await driveOffPage.verifyVehicleSavedSuccussfully();
    await driveOffPage.clickOnStatus();
    await driveOffPage.clickOnPaymentRequest();
    await driveOffPage.selectSMSCheckBox();
    await driveOffPage.verifyLinkIsCreatedBySms(data["Drive_S10"].mobileNO);
   
})