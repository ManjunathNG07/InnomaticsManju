import { Locator, Page, expect } from "@playwright/test";
export default class AdminUsersPage {
    readonly page: Page;
    readonly addButtonLandLocator: Locator;
    readonly firstNameFiledLocator: Locator;
    readonly passwordTypeLocator: Locator;
    readonly lastNameFiledLocator: Locator;
    readonly addressFiledLocator: Locator;
    readonly emailAddressFiledLocator: Locator;
    readonly mobileNumberFiledLocator: Locator;
    readonly positionFiledLocator: Locator;
    readonly countryDropdownLocator: Locator;
    readonly stateDropdownLocator: Locator;
    readonly subrubLocator: Locator;
    readonly timeZoneDropdownLocator: Locator;
    readonly postcodeLocator: Locator;
    readonly userRegionDropdownLocator: Locator;
    readonly userDivisionDropdown: Locator;
    readonly genderDropdown: Locator;
    readonly nickNameFildLocator: Locator;
    readonly assestFieldLocator: Locator;
    readonly securityRoleLocator: Locator;
    readonly saveButtonLocator: Locator;
    readonly managereLocator: Locator;
    readonly companyRoleLocator: Locator;
    readonly confirmMessage: Locator;
    readonly randomString: string;
    readonly userNameTextbox: Locator;
    readonly firstNameFilterLocator: Locator;
    readonly filterLocator: Locator;
    readonly selectUserCheckboxLocator: Locator;
    readonly deleteButtonLocator: Locator;
    readonly deleteAlertLocator: Locator;
    readonly closeButtonLocator: Locator;
    readonly expectedUpdatedUserName: string;
    readonly expectedEmail: string;
    readonly yesDeleteButton: Locator;
    readonly deletePromptMessage: Locator;
    readonly userNameDropdownInputField: Locator;
    readonly expectedUserName: string;
    readonly userNameFeildLocator: Locator;

    readonly firstNameMandatoryAlertLocator: Locator;
    readonly userDetailsCloseLocator: Locator;
    readonly userVerifyLocator: Locator;
    readonly userNameDropdownLoactor: Locator;
    readonly welcomeButtonLocator: Locator;
    readonly welcomeMailConfirmMessage: Locator;
    readonly companyRoleDropdownButtonLocator: Locator;
    readonly securityRoleInputLocator: Locator;
    readonly resetPasswordLocator: Locator;



    constructor(page: Page, user: string) {
        this.page = page;
        //add
        this.addButtonLandLocator = page.locator('(//img[@alt="ctrlItem" ])[2]');
        //adding the admins
        this.firstNameFiledLocator = page.locator('//input[@name="Firstname"]');
        this.userNameFeildLocator = page.locator('//input[@name="Username"]');
        this.lastNameFiledLocator = page.locator('//input[@name="Lastname"]');
        this.addressFiledLocator = page.locator('//input[@name="Address1"]');
        this.emailAddressFiledLocator = page.locator('//input[@name="Email"]');
        this.mobileNumberFiledLocator = page.locator('//input[@placeholder="Mobile Number"]');
        this.positionFiledLocator = page.locator('//input[@name="Position"]');
        this.countryDropdownLocator = page.locator('(//div[@class="dropdown-select css-b62m3t-container"])[2]');
        this.stateDropdownLocator = page.locator('(//div[@class="dropdown-select css-b62m3t-container"])[3]');
        this.subrubLocator = page.locator('//input[@name="Suburb"]');
        this.postcodeLocator = page.locator('//input[@name="Postcode"]');
        this.timeZoneDropdownLocator = page.locator('(//div[@class="dropdown-select css-b62m3t-container"])[4]');
        this.userRegionDropdownLocator = page.locator('(//div[@class="dropdown-select css-b62m3t-container"])[5]');
        this.userDivisionDropdown = page.locator('(//div[@class="dropdown-select css-b62m3t-container"])[6]');
        this.genderDropdown = page.locator('(//div[@class="dropdown-select css-b62m3t-container"])[7]');
        this.nickNameFildLocator = page.locator('//input[@name="Nickname"]');
        this.securityRoleLocator = page.locator('(//div[@class="dropdown-select css-b62m3t-container"])[9]');
        this.assestFieldLocator = page.locator('//div[@data-test-id="UserManagementUserManagementUserDetails34AssetRoleId"]');
        this.passwordTypeLocator = page.locator('[data-test-id="UserManagementUserManagementUserDetails34PasswordType"] svg');
        this.saveButtonLocator = page.locator('//button[@data-test-id="UserManagementUserManagementUserDetails34Save"]');
        this.managereLocator = page.locator('//div[@data-test-id="UserManagementUserManagementUserDetails34AdminUserID"]');
        this.companyRoleLocator = page.locator('//div[@data-test-id="UserManagementUserManagementUserDetails34CompanyRoleId"]');
        this.confirmMessage = page.locator("//div[@role='alert']");
        this.userNameTextbox = page.locator("//div[@class='user-select__single-value css-1dimb5e-singleValue']");
        this.selectUserCheckboxLocator = page.locator('[data-test-id="UserManagement283AdminUserDetailsSelectionCellSelectionCell"]');
        this.deleteButtonLocator = page.locator('[data-test-id="UserManagementUserManagementUserDetails34Delete"]');
        this.deleteAlertLocator = page.locator('[data-test-id="UserManagementConfirmDeleteAlertButtonsButton0"]');
        this.closeButtonLocator = page.locator('//span[@title="Close"]');
        this.yesDeleteButton = page.locator('[data-test-id="UserManagementUserManagementUserDetailsDeleteAlertButtonsButton0"]');
        this.deletePromptMessage = page.locator('div[data-test-id="UserManagementUserManagementUserDetailsDeleteAlert"] p');
        this.userNameDropdownInputField = page.locator('[data-test-id="UserManagementUserName"] input');
        //----------------------------
        this.firstNameMandatoryAlertLocator = page.locator('(//div[@class="invalid-feedback"])[2]');
        this.userDetailsCloseLocator = page.locator('[data-test-id="UserManagementUserManagementUserDetails34CancelCustomHoverButton"]');
        this.userVerifyLocator = page.locator('//h5[@data-test-id="UserManagementCardWithToggleAndFunctionButtonsTitle"]');
        this.userNameDropdownLoactor = page.locator('[data-test-id="UserManagementUserName"] input');
        this.welcomeButtonLocator = page.locator('[data-test-id="UserManagementUserManagementUserDetails34btnWelcomeCustomButton"]');
        this.resetPasswordLocator = page.locator('[data-test-id="UserManagementUserManagementUserDetails34btnResetPasswordCustomButton2"]');
        this.welcomeMailConfirmMessage = page.locator('//div[@role="alert"]');
        this.companyRoleDropdownButtonLocator = page.locator('[data-test-id="UserManagementUserManagementUserDetails34CompanyRoleId"] [class=" css-uib1fa-indicatorContainer"]');
        this.securityRoleInputLocator = page.locator('(//div[@data-test-id="UserManagementUserManagementUserDetails34Role"]//input)[1]');


        this.randomString = `${Math.random().toString().slice(2, 5)}`;
        this.expectedUserName = `${user}${this.randomString}${'vtest'}`;
        this.expectedEmail = `${user}${this.randomString}${'@gmail.com'}`;


    }


    //----------add the user-------------------------------------
    async clickOnAddButtonLandPage() {
        await this.addButtonLandLocator.click();
    }

    async addPasswordType(passwordType: string) {
        await this.passwordTypeLocator.click();
        await this.page.getByText(passwordType, { exact: true }).last().click();

    }

    async addUserName(userName: string) {
        await this.userNameFeildLocator.fill(this.expectedUserName);
    }

    async addFirstName(firstName: string) {
        await this.firstNameFiledLocator.fill(firstName);
    }

    async addLastName(lastName: string) {
        await this.lastNameFiledLocator.fill(lastName);
    }

    async addAddress(address: string) {
        await this.addButtonLandLocator.fill(address);
    }
    async addEmailAddess(email: string) {
        await this.emailAddressFiledLocator.fill(this.expectedEmail);
    }
    async addMobileNumer(mobileNo: string) {
        await this.mobileNumberFiledLocator.type(mobileNo);
    }
    async addPosition(position: string) {
        await this.positionFiledLocator.fill(position);
    }
    async addCountry(country: string) {
        await this.countryDropdownLocator.click();
        await this.page.getByText(country, { exact: true }).last().click();
    }
    async addPostcode(postcode: string) {
        await this.postcodeLocator.fill(postcode);
    }
    async addSuburb(suburb: string) {
        await this.subrubLocator.fill(suburb);
    }
    async addState(state: string) {
        await this.stateDropdownLocator.click();
        await this.page.getByText(state, { exact: true }).last().click();
    }
    async addTimeZone(timeZone: string) {
        await this.timeZoneDropdownLocator.click();
        await this.page.getByText(timeZone, { exact: true }).last().click();
    }
    async addUserRegion(userRegion: string) {
        await this.userRegionDropdownLocator.click();
        await this.page.getByText(userRegion, { exact: true }).last().click();
    }
    async addGender(gender: string) {
        await this.genderDropdown.click();
        await this.page.getByText(gender, { exact: true }).last().click();
    }
    async addAsset(asset: string) {
        await this.assestFieldLocator.click();
        await this.page.getByText(asset, { exact: true }).last().click();
    }
    async addUserDivision(userDivision: string) {
        await this.userDivisionDropdown.click();
        await this.page.getByText(userDivision, { exact: true }).last().click();
    }
    async addSecurityRole(securityRole: string) {
        //  await this.securityRoleLocator.click();
        await this.securityRoleInputLocator.fill(securityRole);
        await this.page.getByText(securityRole, { exact: true }).last().click();
    }
    async addNickName(nickName: string) {
        await this.nickNameFildLocator.fill(nickName);

    }
    async addManager(manager: string) {
        await this.managereLocator.click();
        await this.page.getByText(manager, { exact: true }).click();
    }
    async addCompanyRole(companyRole: string) {
        await this.companyRoleLocator.click();
        await this.page.getByText(companyRole, { exact: true }).last().click();
    }
    async clickOnSaveButton() {
        await this.saveButtonLocator.click();
    }
    //------------verify user is created------------------------------------------------
    async verifyConfirmationMessage(expectedMessage: string) {
        const actualMessage = await this.confirmMessage.textContent();
        expect(actualMessage?.trim()).toBe(expectedMessage);

    }

    async verifyIfUserCreated() {
        const names = await this.userNameTextbox.textContent();
        expect(names).toBe(this.expectedUserName);
    }

    //-----------------------------------------------

    async serachUserForFilter(userNameFilter: string) {
        await this.page.waitForLoadState('load');
        await this.firstNameFilterLocator.fill(userNameFilter);
        await this.selectUserCheckboxLocator.click();
    }
    //--------------delete the user--------------------------------------------
    async clickOnDeleteButton() {
        await this.deleteButtonLocator.click();
        // await this.page.waitForLoadState("load");
        // await this.deleteAlertLocator.click();
    }
    //------------verify user deleted or not------------------------------
    async verifyUserCanBeDeleted() {
        expect(this.yesDeleteButton).toBeVisible();

    }

    async verifyDeletePrompt(expectedMessage: string) {
        const actualDeletePromptMessage = await this.deletePromptMessage.textContent();
        expect(actualDeletePromptMessage).toBe(expectedMessage);
        await this.yesDeleteButton.click();
    }
    async clickOnCloseButton() {
        await this.page.waitForLoadState("domcontentloaded");
        await this.closeButtonLocator.click();
    }

    //-------------------------verify user is exist -------------------------------------------
    async verifyIfUserCouldBeSearched(userName: string) {
        await this.userNameDropdownInputField.fill(this.expectedUserName.toLowerCase());
        expect(this.page.locator("(//div[normalize-space()='" + this.expectedUserName.toLowerCase() + "'])[1]")).toBeVisible();
    }
    async verifyMandatoryFeildErrorMeassage() {
        expect(await this.firstNameMandatoryAlertLocator).toBeTruthy();
    }

    async clickOnCloseUserDetails() {
        await this.userDetailsCloseLocator.click();
    }

    async verifyCloseTheUserDetails() {
        expect(await this.userVerifyLocator).toBeTruthy();
    }

    async EnteruserNameDropdown(userNameDropdown: string) {
        await this.userNameDropdownLoactor.fill(userNameDropdown);
        await this.page.locator("(//div[normalize-space()='" + userNameDropdown + "'])[3]").click();
    }

    async verifyWelcomeMailButtonIsPresent() {
        expect(await this.welcomeButtonLocator).toBeTruthy();
    }

    async clickOnWelcomeMailButton() {
        await this.welcomeButtonLocator.click();
    }

    async clickOnResetpasswordButton() {
        await this.resetPasswordLocator.click();
    }

    async verifyResetpasswordAlert() {
        expect(this.welcomeMailConfirmMessage).toBeVisible();
    }

    async VerifyWelcomeMailConfirmMessage(alertMessage: string) {
        expect(this.welcomeMailConfirmMessage).toBeVisible();
        const message = await this.welcomeMailConfirmMessage.textContent();
        expect(message).toContain(alertMessage);
    }

    async verifyCompanyRoleDropdownAppeared() {
        expect(this.companyRoleDropdownButtonLocator).toBeVisible();

    }


}


