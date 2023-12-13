import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import DashboardPage from "../../../PageObjects/dashboard";
import data from "../../../TestData/Drive_off/Drive_off-data/drive_off.json";
import DriveOffPage from "../../../PageObjects/Drive_off/Drive_off-page/drive_off-page";

test("Drive_010:Verify that LIU should be able to add a new Vehicle by clicking the " + " icon", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_010"].url);
    await login.loginToApp(data["Drive_010"].SuperUser, data["Drive_010"].companyCode, data["Drive_010"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffPage();
    await driveOffPage.clickOnAddButton();
    await driveOffPage.enterRego(data["Drive_010"].rego);
    await driveOffPage.validateCharcter();
    await driveOffPage.enterArrivalTime(data["Drive_010"].arrivalTime);
    await driveOffPage.enterDriveOffTime(data["Drive_010"].driveOffTime);
    await driveOffPage.enterFuelAmount(data["Drive_010"].fuelAmount);
    await driveOffPage.enterFuelQuantity(data["Drive_010"].fuelQuantity);
    await driveOffPage.enterReferenceNumber(data["Drive_010"].referenceNo);
    await driveOffPage.enterPumpNo(data["Drive_010"].pumpNo);
    await driveOffPage.selectProduct(data["Drive_010"].product);
    await driveOffPage.selectSite(data["Drive_010"].site);
    await driveOffPage.selectFailToPayType(data["Drive_010"].failToPay);
    await driveOffPage.selectDriveOffStatus(data["Drive_010"].driveOffStatus);
    await driveOffPage.selectColor(data["Drive_010"].color);
    await driveOffPage.selectDidFrontAndRearPlatesMatch(data["Drive_010"].plateMatch);
    await driveOffPage.clickOnSave();
    await driveOffPage.verifyAddTheVehicle();


})

test("Drive_011:Verify that LIU should be able to Save the vehicle details after entering all the valid data ", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_011"].url);
    await login.loginToApp(data["Drive_011"].SuperUser, data["Drive_011"].companyCode, data["Drive_011"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffPage();
    await driveOffPage.clickOnAddButton();
    await driveOffPage.enterRego(data["Drive_011"].rego);
    await driveOffPage.validateCharcter();
    await driveOffPage.enterArrivalTime(data["Drive_011"].arrivalTime);
    await driveOffPage.enterDriveOffTime(data["Drive_011"].driveOffTime);
    await driveOffPage.enterFuelAmount(data["Drive_011"].fuelAmount);
    await driveOffPage.enterFuelQuantity(data["Drive_011"].fuelQuantity);
    await driveOffPage.enterReferenceNumber(data["Drive_011"].referenceNo);
    await driveOffPage.enterPumpNo(data["Drive_011"].pumpNo);
    await driveOffPage.selectProduct(data["Drive_011"].product);
    await driveOffPage.selectSite(data["Drive_011"].site);
    await driveOffPage.selectFailToPayType(data["Drive_011"].failToPay);
    await driveOffPage.selectDriveOffStatus(data["Drive_011"].driveOffStatus);
    await driveOffPage.selectColor(data["Drive_011"].color);
    await driveOffPage.selectDidFrontAndRearPlatesMatch(data["Drive_011"].plateMatch);
    await driveOffPage.clickOnSave();
    await driveOffPage.verifyVehicleSavedSuccussfully();

})

test("Drive_025:Verify that LIU should be able to edit Vehicle by clicking the edit icon", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_010"].url);
    await login.loginToApp(data["Drive_010"].SuperUser, data["Drive_010"].companyCode, data["Drive_010"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffPage();
    await driveOffPage.clickOnAddButton();
    await driveOffPage.enterRego(data["Drive_010"].rego);
    await driveOffPage.validateCharcter();
    await driveOffPage.enterArrivalTime(data["Drive_010"].arrivalTime);
    await driveOffPage.enterDriveOffTime(data["Drive_010"].driveOffTime);
    await driveOffPage.enterFuelAmount(data["Drive_010"].fuelAmount);
    await driveOffPage.enterFuelQuantity(data["Drive_010"].fuelQuantity);
    await driveOffPage.enterReferenceNumber(data["Drive_010"].referenceNo);
    await driveOffPage.enterPumpNo(data["Drive_010"].pumpNo);
    await driveOffPage.selectProduct(data["Drive_010"].product);
    await driveOffPage.selectSite(data["Drive_010"].site);
    await driveOffPage.selectFailToPayType(data["Drive_010"].failToPay);
    await driveOffPage.selectDriveOffStatus(data["Drive_010"].driveOffStatus);
    await driveOffPage.selectColor(data["Drive_010"].color);
    await driveOffPage.selectDidFrontAndRearPlatesMatch(data["Drive_010"].plateMatch);
    await driveOffPage.clickOnSave();
    await driveOffPage.clickOnEditButton();
    await driveOffPage.selectEditProduct(data["Drive_025"].product1);
    await driveOffPage.clickOnSave();
    await driveOffPage.verifyEditedSuccessfully(data["Drive_025"].product1);
})


test("Verify after entering the details in the Vehicle card then only the Suspects, Witnesses, Photos/Videos Files, Status should show the edit button ", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_011"].url);
    await login.loginToApp(data["Drive_011"].SuperUser, data["Drive_011"].companyCode, data["Drive_011"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffPage();
    await driveOffPage.clickOnAddButton();
    await driveOffPage.enterRego(data["Drive_011"].rego);
    await driveOffPage.validateCharcter();
    await driveOffPage.enterArrivalTime(data["Drive_011"].arrivalTime);
    await driveOffPage.enterDriveOffTime(data["Drive_011"].driveOffTime);
    await driveOffPage.enterFuelQuantity(data["Drive_011"].fuelQuantity);
    await driveOffPage.enterReferenceNumber(data["Drive_011"].referenceNo);
    await driveOffPage.enterPumpNo(data["Drive_011"].pumpNo);
    await driveOffPage.selectProduct(data["Drive_011"].product);
    await driveOffPage.selectSite(data["Drive_011"].site);
    await driveOffPage.selectFailToPayType(data["Drive_011"].failToPay);
    await driveOffPage.selectDriveOffStatus(data["Drive_011"].driveOffStatus);
    await driveOffPage.selectColor(data["Drive_011"].color);
    await driveOffPage.selectDidFrontAndRearPlatesMatch(data["Drive_011"].plateMatch);
    await driveOffPage.clickOnSave();
    await driveOffPage.verifyMandantoryMessage();
})

test("Verify after entering the details in the Vehicle card then only the Suspects, Witnesses, Photos/Videos Files, Status should show the edit button" , async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const driveOffPage = new DriveOffPage(page);

    await login.gotoLoginPage(data["Drive_010"].url);
    await login.loginToApp(data["Drive_010"].SuperUser, data["Drive_010"].companyCode, data["Drive_010"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnDriveOff();
    await dashBoardPage.clickOnDriveOffPage();
    await driveOffPage.clickOnAddButton();
    await driveOffPage.enterRego(data["Drive_010"].rego);
    await driveOffPage.validateCharcter();
    await driveOffPage.enterArrivalTime(data["Drive_010"].arrivalTime);
    await driveOffPage.enterDriveOffTime(data["Drive_010"].driveOffTime);
    await driveOffPage.enterFuelAmount(data["Drive_010"].fuelAmount);
    await driveOffPage.enterFuelQuantity(data["Drive_010"].fuelQuantity);
    await driveOffPage.enterReferenceNumber(data["Drive_010"].referenceNo);
    await driveOffPage.enterPumpNo(data["Drive_010"].pumpNo);
    await driveOffPage.selectProduct(data["Drive_010"].product);
    await driveOffPage.selectSite(data["Drive_010"].site);
    await driveOffPage.selectFailToPayType(data["Drive_010"].failToPay);
    await driveOffPage.selectDriveOffStatus(data["Drive_010"].driveOffStatus);
    await driveOffPage.selectColor(data["Drive_010"].color);
    await driveOffPage.selectDidFrontAndRearPlatesMatch(data["Drive_010"].plateMatch);
    await driveOffPage.clickOnSave();
    await driveOffPage.verifySuspectsIsEnabled();
    await driveOffPage.verifyWitnessesIsEnabled();
    await driveOffPage.verifyPhotoAndVideoFilesIsEnabled();
    await driveOffPage.verifyStatusIsEnabled();
})