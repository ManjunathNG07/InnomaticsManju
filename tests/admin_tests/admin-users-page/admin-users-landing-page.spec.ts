import { test,expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import data from "../../../TestData/Admin/Admin-User-Data/admin_users.json";
import DashboardPage from "../../../PageObjects/dashboard";
import AdminUsersPage from "../../../PageObjects/Admin/Admin-Users/admin-User-page";


test("Verify that LIU should be able to add new users details by clicking + icon.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,data["Admin"].userNamefilter);
    await login.gotoLoginPage(data["Admin"].url);
    await login.loginToApp(data["Admin"].SuperUser, data["Admin"].companyCode,data["Admin"].Password);
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddButtonLandPage();
    await adminUserPage.addPasswordType(data["Admin"].passwordType);
    await adminUserPage.addFirstName(data["Admin"].firstName);
    await adminUserPage.addLastName(data["Admin"].lastName);
    await adminUserPage.addUserName(data["Admin"].userName);
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
    await adminUserPage.clickOnSaveButton();
    await adminUserPage.verifyConfirmationMessage(data["Admin"].expectedMessage);
    await adminUserPage.verifyIfUserCreated();
   

})



test("Verify that LIU should be able to delete any user details ",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,data["Admin"].userNamefilter);
    await login.gotoLoginPage(data["Admin"].url);
    await login.loginToApp(data["Admin"].SuperUser, data["Admin"].companyCode,data["Admin"].Password);
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.serachUserForFilter(data["Admin"].firstNameFilter);
    await adminUserPage.clickOnDeleteButton();
    

})