import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import DashboardPage from "../../../PageObjects/dashboard";
import data from "../../../TestData/Drive_off/Drive_off-data/drive_off.json";
import DriveOffPage from "../../../PageObjects/Drive_off/Drive_off-page/drive_off-page";

test("Verify that LIU should be able to add the Witnesses details successfully and capture the success message", async ({ page }) => {
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
    await driveOffPage.verifyVehicleSavedSuccussfully();
    await driveOffPage.clickOnWitnesses();
    await driveOffPage.clickOnAddWitnesses();
    await driveOffPage.enterWitnessFirstName(data["Drive_010"].firstName);
    await driveOffPage.clickOnSaveWitnesses();
    await driveOffPage.verifyWitnessesSavedsuccessfully();

})
test("Verify that LIU should be able to edit the witnesses details successfully .", async ({ page }) => {
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
    await driveOffPage.verifyVehicleSavedSuccussfully();
    await driveOffPage.clickOnWitnesses();
    await driveOffPage.clickOnAddWitnesses();
    await driveOffPage.enterWitnessFirstName(data["Drive_010"].firstName);
    await driveOffPage.clickOnSaveWitnesses();
    await driveOffPage.verifyWitnessesSavedsuccessfully();
    await driveOffPage.clickOnEditWitness();
    await driveOffPage.enterEditFirstName(data["Drive_010"].firstName);
    await driveOffPage.clickOnSaveEditedWitnesses();
    await driveOffPage.verifyWitnessesEditedsuccessfully();

})
test("Verify that LIU should be able to delete the witnesses details successfully .", async ({ page }) => {
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
    await driveOffPage.verifyVehicleSavedSuccussfully();
    await driveOffPage.clickOnWitnesses();
    await driveOffPage.clickOnAddWitnesses();
    await driveOffPage.enterWitnessFirstName(data["Drive_010"].firstName);
    await driveOffPage.clickOnSaveWitnesses();
    await driveOffPage.verifyWitnessesSavedsuccessfully();
    await driveOffPage.clickOnDeleteWitnesses();
    await driveOffPage.verifyWitnessesDeletedsuccessfully();

})
test("Verify that LIU should be able to cancel the Witnessess details successfully .", async ({ page }) => {
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
    await driveOffPage.verifyVehicleSavedSuccussfully();
    await driveOffPage.clickOnWitnesses();
    await driveOffPage.clickOnAddWitnesses();
    await driveOffPage.enterWitnessFirstName(data["Drive_010"].firstName);
    await driveOffPage.clickOnCloseWitnesses();
    await driveOffPage.verifyWitnessesCloseSuccessfully();

})

test("Verify that LIU should be able to maximize the witnesses screen successfully .", async ({ page }) => {
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
    await driveOffPage.verifyVehicleSavedSuccussfully();
    await driveOffPage.clickOnWitnesses();
    await driveOffPage.clicKOnExpondButton();
    await driveOffPage.verifyMaximizeTheWitnesse();

})