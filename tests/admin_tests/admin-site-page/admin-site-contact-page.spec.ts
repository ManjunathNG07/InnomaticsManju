import { test, expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/login-page";
import data from "../../../TestData/Admin/Admin-Site-data/admin-site-contact.json";
import DashboardPage from "../../../PageObjects/dashboard";
import AdminSiteContactPage from "../../../PageObjects/Admin/Admin-Site/Admin-site-contact-page";



test("TS01ASC: Verify that LIU should be able to select and save the single and multiple Site Manager contact by clicking edit icon", async ({ page }) => {
    test.setTimeout(200 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminSiteContactPage = new AdminSiteContactPage(page);


    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnSites();
    await adminSiteContactPage.clickOnAddSiteIcon();
    await adminSiteContactPage.clickOnCloseSiteIcon();
    await adminSiteContactPage.clickOnContactTab();
    await adminSiteContactPage.selectSiteName(data["TS01"].siteName);
    await adminSiteContactPage.clickOnEditContactButton();
    await adminSiteContactPage.clickOnSiteManagerButton();
    await adminSiteContactPage.selectSiteManager();
    await adminSiteContactPage.clickOnRightPopUp();
    await adminSiteContactPage.clickOnCloseContactButton();
    await adminSiteContactPage.clickOnSaveContact();
    await adminSiteContactPage.verifyThatSaveTheSiteManager();

})


test("TS02ASC:Verify that LIU should be able to select and save the single and multiple Area Manager contact by clicking edit icon", async ({ page }) => {
    test.setTimeout(200 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminSiteContactPage = new AdminSiteContactPage(page);


    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnSites();
    await adminSiteContactPage.clickOnAddSiteIcon();
    await adminSiteContactPage.clickOnCloseSiteIcon();
    await adminSiteContactPage.clickOnContactTab();
    await adminSiteContactPage.selectSiteName(data["TS01"].siteName);
    await adminSiteContactPage.clickOnEditContactButton();
    await adminSiteContactPage.clickOnAreaManagerButton();
    await adminSiteContactPage.selectSiteManager();
    await adminSiteContactPage.clickOnRightPopUp();
    await adminSiteContactPage.clickOnCloseContactButton();
    await adminSiteContactPage.clickOnSaveContact();
    await adminSiteContactPage.verifyThatSaveTheAreaManager();

})


test("TS03ASC:Verify that LIU should be able to select and save the single and multiple Site Partner contact by clicking edit icon", async ({ page }) => {
    test.setTimeout(200 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminSiteContactPage = new AdminSiteContactPage(page);


    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnSites();
    await adminSiteContactPage.clickOnAddSiteIcon();
    await adminSiteContactPage.clickOnCloseSiteIcon();
    await adminSiteContactPage.clickOnContactTab();
    await adminSiteContactPage.selectSiteName(data["TS01"].siteName);
    await adminSiteContactPage.clickOnEditContactButton();
    await adminSiteContactPage.clickOnSitePartnerButton();
    await adminSiteContactPage.selectSiteManager();
    await adminSiteContactPage.clickOnRightPopUp();
    await adminSiteContactPage.clickOnCloseContactButton();
    await adminSiteContactPage.clickOnSaveContact();
    await adminSiteContactPage.verifyThatSaveTheSitePartner();

})

test("TS04ASC:Verify that LIU should be able to select and save the single and multiple Auditour contact by clicking edit icon", async ({ page }) => {
    test.setTimeout(200 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminSiteContactPage = new AdminSiteContactPage(page);


    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnSites();
    await adminSiteContactPage.clickOnAddSiteIcon();
    await adminSiteContactPage.clickOnCloseSiteIcon();
    await adminSiteContactPage.clickOnContactTab();
    await adminSiteContactPage.selectSiteName(data["TS01"].siteName);
    await adminSiteContactPage.clickOnEditContactButton();
    await adminSiteContactPage.clickOnAuditorButton()
    await adminSiteContactPage.selectSiteManager();
    await adminSiteContactPage.clickOnRightPopUp();
    await adminSiteContactPage.clickOnCloseContactButton();
    await adminSiteContactPage.clickOnSaveContact();
    await adminSiteContactPage.verifyThatSaveTheAuditor();

})

test("TS05ASC:Verify that LIU should be able to select and save the single and multiple Emergency Contact contact by clicking edit icon", async ({ page }) => {
    test.setTimeout(200 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminSiteContactPage = new AdminSiteContactPage(page);


    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnSites();
    await adminSiteContactPage.clickOnAddSiteIcon();
    await adminSiteContactPage.clickOnCloseSiteIcon();
    await adminSiteContactPage.clickOnContactTab();
    await adminSiteContactPage.selectSiteName(data["TS01"].siteName);
    await adminSiteContactPage.clickOnEditContactButton();
    await adminSiteContactPage.clickOnEmergencycontactButton()
    await adminSiteContactPage.selectSiteManager();
    await adminSiteContactPage.clickOnRightPopUp();
    await adminSiteContactPage.clickOnCloseContactButton();
    await adminSiteContactPage.clickOnSaveContact();
    await adminSiteContactPage.verifyThatSaveTheEmergencyContact();

})

test("TS06ASC:Verify that LIU should be able to select and save the single and multiple Pump Issue contact by clicking edit icon", async ({ page }) => {
    test.setTimeout(200 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminSiteContactPage = new AdminSiteContactPage(page);


    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnSites();
    await adminSiteContactPage.clickOnAddSiteIcon();
    await adminSiteContactPage.clickOnCloseSiteIcon();
    await adminSiteContactPage.clickOnContactTab();
    await adminSiteContactPage.selectSiteName(data["TS01"].siteName);
    await adminSiteContactPage.clickOnEditContactButton();
    await adminSiteContactPage.clickOnPumpIssueButton()
    await adminSiteContactPage.selectSiteManager();
    await adminSiteContactPage.clickOnRightPopUp();
    await adminSiteContactPage.clickOnCloseContactButton();
    await adminSiteContactPage.clickOnSaveContact();
    await adminSiteContactPage.verifyThatSaveThePumpIssue();

})

test("TS07ASC:Verify that LIU should be able to select and save the single and multiple Buying Group contact by clicking edit icon", async ({ page }) => {
    test.setTimeout(200 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminSiteContactPage = new AdminSiteContactPage(page);


    await login.gotoLoginPage(data["TS01"].url);
    await login.loginToApp(data["TS01"].SuperUser, data["TS01"].companyCode, data["TS01"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnSites();
    await adminSiteContactPage.clickOnAddSiteIcon();
    await adminSiteContactPage.clickOnCloseSiteIcon();
    await adminSiteContactPage.clickOnContactTab();
    await adminSiteContactPage.selectSiteName(data["TS01"].siteName);
    await adminSiteContactPage.clickOnEditContactButton();
    await adminSiteContactPage.clickOnPumpIssueButton()
    await adminSiteContactPage.selectSiteManager();
    await adminSiteContactPage.clickOnRightPopUp();
    await adminSiteContactPage.clickOnCloseContactButton();
    await adminSiteContactPage.clickOnSaveContact();
    await adminSiteContactPage.verifyThatSaveTheBuyingGroup();

})


test("TS08ASC:Additional Site Contacts > Verify that by clicking " + " icon LIU should be able to select and save the Additional Site Contacts", async ({ page }) => {
    test.setTimeout(200 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminSiteContactPage = new AdminSiteContactPage(page);


    await login.gotoLoginPage(data["TS08"].url);
    await login.loginToApp(data["TS08"].SuperUser, data["TS08"].companyCode, data["TS08"].Password);
    await login.clickOnAllowCookies();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnSites();
    await adminSiteContactPage.clickOnAddSiteIcon();
    await adminSiteContactPage.clickOnCloseSiteIcon();
    await adminSiteContactPage.clickOnContactTab();
    await adminSiteContactPage.selectSiteName(data["TS08"].siteName);
    await adminSiteContactPage.clickOnAddAdditionalSiteContacts();
    await adminSiteContactPage.enterLableContacts(data["TS08"].contact);
    await adminSiteContactPage.clickOnSaveAdditonalSiteContact();
    await adminSiteContactPage.verifySaveTheAdditionalSiteContact(data["TS08"].contact);

})