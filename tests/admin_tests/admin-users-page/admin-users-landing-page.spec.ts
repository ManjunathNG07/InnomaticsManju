import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import data from "../../../TestData/Admin/Admin-User-Data/admin_users.json";
import DashboardPage from "../../../PageObjects/dashboard";
import AdminUsersPage from "../../../PageObjects/Admin/Admin-Users/admin-User-page";


test("Verify that LIU should be able to add new users details by clicking + icon.", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminUserPage = new AdminUsersPage(page, data["Admin"].userName);
    await login.gotoLoginPage(data["Admin"].url);
    await login.loginToApp(data["Admin"].SuperUser, data["Admin"].companyCode, data["Admin"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.addPasswordType(data["Admin"].passwordType);
    await adminUserPage.addFirstName(data["Admin"].firstName);
    await adminUserPage.addLastName(data["Admin"].lastName);
    await adminUserPage.addEmailAddess(data["Admin"].email);
    await adminUserPage.addPosition(data["Admin"].position);
    await adminUserPage.addPostcode(data["Admin"].postcode);
    await adminUserPage.addUserRegion(data["Admin"].userRegion);
    await adminUserPage.addUserDivision(data["Admin"].userDivision);
    await adminUserPage.addSecurityRole(data["Admin"].securityRole);
    await adminUserPage.addCountry(data["Admin"].country);
    await adminUserPage.addState(data["Admin"].state);
    await adminUserPage.addTimeZone(data["Admin"].timeZone);
    await adminUserPage.addSuburb(data["Admin"].subrub);
    await adminUserPage.addGender(data["Admin"].gender);
    await adminUserPage.addNickName(data["Admin"].nickName);
    await adminUserPage.addAsset(data["Admin"].asset);
    await adminUserPage.addUserName(data["Admin"].userName);
    await adminUserPage.addEmailAddess(data["Admin"].email);
    await adminUserPage.clickOnSaveButton();
    await adminUserPage.verifyConfirmationMessage(data["Admin"].expectedMessage);
    await adminUserPage.verifyIfUserCreated();


})



test("Verify that LIU should be able to delete any user details ", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminUserPage = new AdminUsersPage(page, data["Admin1"].userName);
    await login.gotoLoginPage(data["Admin1"].url);
    await login.loginToApp(data["Admin1"].SuperUser, data["Admin1"].companyCode, data["Admin1"].Password);
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.addPasswordType(data["Admin1"].passwordType);
    await adminUserPage.addFirstName(data["Admin1"].firstName);
    await adminUserPage.addLastName(data["Admin1"].lastName);
    await adminUserPage.addUserName(data["Admin1"].userName);
    await adminUserPage.addEmailAddess(data["Admin1"].email);
    await adminUserPage.addPosition(data["Admin1"].position);
    await adminUserPage.addPostcode(data["Admin1"].postcode);
    await adminUserPage.addUserRegion(data["Admin1"].userRegion);
    await adminUserPage.addUserDivision(data["Admin1"].userDivision);
    await adminUserPage.addSecurityRole(data["Admin1"].securityRole);
    await adminUserPage.addCountry(data["Admin1"].country);
    await adminUserPage.addState(data["Admin1"].state);
    await adminUserPage.addTimeZone(data["Admin1"].timeZone);
    await adminUserPage.addSuburb(data["Admin1"].subrub);
    await adminUserPage.addGender(data["Admin1"].gender);
    await adminUserPage.addNickName(data["Admin1"].nickName);
    await adminUserPage.addAsset(data["Admin1"].asset);
    await adminUserPage.clickOnSaveButton();
    await adminUserPage.verifyIfUserCreated();
    await adminUserPage.clickOnDeleteButton();
    await adminUserPage.verifyUserCanBeDeleted();
    await adminUserPage.verifyDeletePrompt(data["Admin1"].deletePropmtMessage);


})

test("Verify that the LIU should be able to search the newly added user details ", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminUserPage = new AdminUsersPage(page, data["Admin2"].userName);
    await login.gotoLoginPage(data["Admin2"].url);
    await login.loginToApp(data["Admin2"].SuperUser, data["Admin2"].companyCode, data["Admin2"].Password);
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.addPasswordType(data["Admin2"].passwordType);
    await adminUserPage.addFirstName(data["Admin2"].firstName);
    await adminUserPage.addLastName(data["Admin2"].lastName);
    await adminUserPage.addUserName(data["Admin2"].userName);
    await adminUserPage.addEmailAddess(data["Admin2"].email);
    await adminUserPage.addPosition(data["Admin2"].position);
    await adminUserPage.addPostcode(data["Admin2"].postcode);
    await adminUserPage.addUserRegion(data["Admin2"].userRegion);
    await adminUserPage.addUserDivision(data["Admin2"].userDivision);
    await adminUserPage.addSecurityRole(data["Admin2"].securityRole);
    await adminUserPage.addCountry(data["Admin2"].country);
    await adminUserPage.addState(data["Admin2"].state);
    await adminUserPage.addTimeZone(data["Admin2"].timeZone);
    await adminUserPage.addSuburb(data["Admin2"].subrub);
    await adminUserPage.addGender(data["Admin2"].gender);
    await adminUserPage.addNickName(data["Admin2"].nickName);
    await adminUserPage.addAsset(data["Admin2"].asset);
    await adminUserPage.clickOnSaveButton();
    await adminUserPage.verifyIfUserCreated();
    await adminUserPage.verifyIfUserCouldBeSearched(data["Admin2"].userName);
})


