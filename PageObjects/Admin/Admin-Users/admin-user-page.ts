import { Locator, Page, expect } from "@playwright/test";
export default class AdminUsersPage {
    readonly page: Page;
    readonly addButtonLandLocator: Locator;
    readonly firstNameFiledLocator: Locator;
    readonly userNameFiledLocator: Locator;
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
    readonly expectedUserName: string;
    readonly randomString: string;
    readonly userNameTextbox: Locator;
    readonly firstNameFilterLocator: Locator;
    readonly filterLocator: Locator;
    readonly selectUserCheckboxLocator: Locator;
    readonly deleteButtonLocator: Locator;
    readonly deleteAlertLocator: Locator;



    constructor(page: Page, user: string) {
        this.page = page;
        //add
        this.addButtonLandLocator = page.locator('(//img[@alt="ctrlItem" ])[2]');
        //adding the admins
        this.firstNameFiledLocator = page.locator('//input[@name="Firstname"]');
        this.userNameFiledLocator = page.locator('//input[@name="Username"]');
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
        this.firstNameFilterLocator = page.locator('//th[@data-test-id="UserManagement283AdminUserDetailsFilterCellFirstName"]//input');
        this.userNameTextbox = page.locator("//div[@class='user-select__single-value css-1dimb5e-singleValue']");
        this.expectedUserName = `${user}`;
        this.selectUserCheckboxLocator = page.locator('[data-test-id="UserManagement283AdminUserDetailsSelectionCellSelectionCell"]');
        this.deleteButtonLocator = page.locator('[data-test-id="UserManagementCardWithToggleAndFunctionButtonsbtnDeleteButton"]');
        this.deleteAlertLocator=page.locator('[data-test-id="UserManagementConfirmDeleteAlertButtonsButton0"]');


    }

    async clickOnAddButtonLandPage() {
        await this.addButtonLandLocator.click();
    }

    async addPasswordType(passwordType: string) {
        await this.passwordTypeLocator.click();
        await this.page.getByText(passwordType, { exact: true }).click();

    }

    async addFirstName(firstName: string) {
        await this.firstNameFiledLocator.fill(firstName);
    }

    async addUserName(userName: string) {
        await this.userNameFiledLocator.fill(userName);
    }
    async addLastName(lastName: string) {
        await this.lastNameFiledLocator.fill(lastName);
    }

    async addAddress(address: string) {
        await this.addButtonLandLocator.fill(address);
    }
    async addEmailAddess(email: string) {
        await this.emailAddressFiledLocator.fill(email);
    }
    async addMobileNumer(mobileNo: string) {
        await this.mobileNumberFiledLocator.type(mobileNo);
    }
    async addPosition(position: string) {
        await this.positionFiledLocator.fill(position);
    }
    async addCountry(country: string) {
        await this.countryDropdownLocator.click();
        await this.page.getByText(country, { exact: true }).click();
    }
    async addPostcode(postcode: string) {
        await this.postcodeLocator.fill(postcode);
    }
    async addSuburb(suburb: string) {
        await this.subrubLocator.fill(suburb);
    }
    async addState(state: string) {
        await this.stateDropdownLocator.click();
        await this.page.getByText(state, { exact: true }).click();
    }
    async addTimeZone(timeZone: string) {
        await this.timeZoneDropdownLocator.click();
        await this.page.getByText(timeZone, { exact: true }).click();
    }
    async addUserRegion(userRegion: string) {
        await this.userRegionDropdownLocator.click();
        await this.page.getByText(userRegion, { exact: true }).click();
    }
    async addGender(gender: string) {
        await this.genderDropdown.click();
        await this.page.getByText(gender, { exact: true }).click();
    }
    async addAsset(asset: string) {
        await this.assestFieldLocator.click();
        await this.page.getByText(asset, { exact: true }).click();
    }
    async addUserDivision(userDivision: string) {
        await this.userDivisionDropdown.click();
        await this.page.getByText(userDivision, { exact: true }).click();
    }
    async addSecurityRole(securityRole: string) {
        await this.securityRoleLocator.click();
        await this.page.getByText(securityRole, { exact: true }).click();
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
        await this.page.getByText(companyRole, { exact: true }).click();
    }
    async clickOnSaveButton() {
        await this.saveButtonLocator.click();
    }

    async verifyConfirmationMessage(expectedMessage: string) {
        const actualMessage = await this.confirmMessage.textContent();
        expect(actualMessage?.trim()).toBe(expectedMessage);

    }

    async verifyIfUserCreated() {
        const names = await this.userNameTextbox.textContent();
        expect(names).toBe(this.expectedUserName);
    }

    //-----------------------------------------------

    async serachUserForFilter(firstNameFilter: string) {
        await this.firstNameFilterLocator.fill(firstNameFilter);
        await this.selectUserCheckboxLocator.click();
    }

    async clickOnDeleteButton() {
        await this.deleteButtonLocator.click();
        await this.page.waitForLoadState("load");
        await this.deleteAlertLocator.click();

    }




}