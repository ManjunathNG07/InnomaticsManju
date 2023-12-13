import { Locator, Page, expect } from "@playwright/test";


export default class DriveOffPage {

    readonly page: Page;
    readonly addVehicleButtonLocator: Locator;
    readonly arrivalTimeLocator: Locator;
    readonly driveOffTimeLocator: Locator;
    readonly fuelQuantityLocator: Locator;
    readonly fuelAmountLocator: Locator;
    readonly referenceNumberLocator: Locator;
    readonly productDropdownLocator: Locator;
    readonly pumpNoLocator: Locator;
    readonly siteDropdownLocator: Locator;
    readonly failToPayTypeDropdownLocator: Locator;
    readonly driveOffStatusDropdownLocator: Locator;
    readonly colorDropdownLocator: Locator;
    readonly platesMatchDropdownLocator: Locator;
    readonly regoLocator: Locator;
    readonly validCharButtonLocator: Locator;
    readonly saveButtonLocator: Locator;
    readonly okButtonLocator: Locator;
    readonly verifySaveAlert: Locator;
    readonly editButtonlocator: Locator;
    readonly verifyEditedProduct: Locator;
    readonly mandantoryAlertLocator: Locator;
    readonly suspectsLocator: Locator;
    readonly witnessesLocator: Locator;
    readonly photoVideoFilesLocator: Locator;
    readonly statusLocator: Locator;
    readonly addSuspectsLocator: Locator;
    apporxAgeLocator: Locator;
    saveSusceptsLocator: Locator;
    closeSuspectsLocator: Locator;
    editSuspectsLocator: Locator;
    deleteSucpectsLocator: Locator;
    deleteSucpectAlert: Locator;
    saveAlert: Locator;
    addWitnessesLocator: Locator;
    enterWitnessesFirstName: Locator;
    saveWitnessesLocator: Locator;
    deleteWitnessesLocator: Locator;
    deleteWitnessesAlert: Locator;
    closeWitnesseslocator: Locator;
    editWitnessesLocator: Locator;
    uploadRecepitButtonlocator: Locator;
    uploadPhotoButtonlocator: Locator;
    uploadvideoButtonLocator: Locator;
    chooseFileLocator: Locator;
    uploadButton: Locator;
    verifyUploadFile: Locator;
    choose: Locator;
    editStatusLocator: Locator;
    policeRefrencesLocator: Locator;
    saveStatusLocator: Locator;
    dateReportedLocator: Locator;
    dateStatusLabel: Locator;
    DateNextLocator: Locator;
    DateyearTextLocator: Locator;
    DateYearLocator: Locator;
    payNowLocator: Locator;
    emailAlertLocator: Locator;
    payNowAlert: Locator;
    verifyPayload: Locator;
    paymentRequestLocator: Locator;
    requestEmail: Locator;
    createLinkAlert: Locator;
    verifyRequestLocator: Locator;
    msgCheckbox: Locator;
    mobileNoAlert: Locator;
    verifyDriveOffVehicleLanding: Locator;
    verifyReportLandingLocator: Locator;
    verifySettingLandingLocator: Locator;
    maximizeLocator: Locator;
    verifyMaximizeLocator: Locator;
    driveOffExportLocator: Locator;
    OneRowLocator: Locator;
    exportAllTheDataLocator: Locator;
    exportSelectedRowLocator: Locator;
    driveOffViewLocator: Locator;


    constructor(page: Page) {
        this.page = page;
        //vehicles
        this.addVehicleButtonLocator = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormAdd"]');
        this.arrivalTimeLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormArrivalTime"]//input');
        this.driveOffTimeLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormDriveOffTime"]//input');
        this.fuelQuantityLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFuelQuantity"]//input');
        this.fuelAmountLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFuelAmount"]//input');
        this.referenceNumberLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormReferenceNumber"]//input');
        this.pumpNoLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormPumpNo"]//input');
        this.productDropdownLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormProduct"]//input').first();
        this.siteDropdownLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormSiteId"]//input').first();
        this.failToPayTypeDropdownLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFailToPayType"]//input').first();
        this.driveOffStatusDropdownLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormPoliceStatus"]//input').first();
        this.colorDropdownLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormColor1"]//input').first();
        this.platesMatchDropdownLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormPlatesMatch"]//input').first();
        this.regoLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFrontRegistrationNumber"]//input');
        this.validCharButtonLocator = page.locator('[data-test-id="DriveOffIncidentVehicle137ValidCharacters"]');
        this.saveButtonLocator = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormSave"]');
        this.okButtonLocator = page.locator("//a[.='Ok']");
        this.verifySaveAlert = page.locator('//div[@role="alert"]');
        this.editButtonlocator = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormEdit"]');
        this.verifyEditedProduct = page.locator('(//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormProduct"]//div)[6]');
        this.mandantoryAlertLocator = page.locator('[class="invalid-feedback"]');
        this.suspectsLocator = page.locator('[data-test-id="DriveOff11310"]');
        this.witnessesLocator = page.locator('[data-test-id="DriveOff11311"]');
        this.photoVideoFilesLocator = page.locator('[data-test-id="DriveOff11312"]');
        this.statusLocator = page.locator('[data-test-id="DriveOff11313"]');
        //suspects
        this.addSuspectsLocator = page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormAdd"]');
        this.apporxAgeLocator = page.locator('//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormAge"]//input');
        this.saveSusceptsLocator = page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormSave"]');
        this.closeSuspectsLocator = page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormCancelCustomHoverButton"]');
        this.editSuspectsLocator = page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormEdit"]');
        this.deleteSucpectsLocator = page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormDelete"]');
        this.deleteSucpectAlert = page.locator('[data-test-id="DriveOffSuspectsButton0"]');
        this.saveAlert = page.locator('div[role="alert"]');

        //witnesses
        this.addWitnessesLocator = page.locator('[data-test-id="DriveOffWitnessesWitnessesFormAdd"]');
        this.enterWitnessesFirstName = page.locator('//div[@data-test-id="DriveOffWitnessesWitnessesFormFirstname"]//input');
        this.saveWitnessesLocator = page.locator('[data-test-id="DriveOffWitnessesWitnessesFormSave"]');
        this.deleteWitnessesLocator = page.locator('[data-test-id="DriveOffWitnessesWitnessesFormDelete"]');
        this.deleteWitnessesAlert = page.locator("//a[.='Yes']");
        this.closeWitnesseslocator = page.locator('[data-test-id="DriveOffWitnessesWitnessesFormCancelCustomHoverButton"]');
        this.editWitnessesLocator = page.locator('[data-test-id="DriveOffWitnessesWitnessesFormEdit"]');
        this.maximizeLocator = page.locator('[data-test-id="DriveOffWitnessesWitnessesFormExpand"]');
        this.verifyMaximizeLocator = page.locator('[data-test-id="DriveOffWitnessesWitnessesFormShrink"]');

        //photoAndVideoFiles
        this.uploadRecepitButtonlocator = page.locator('[data-test-id="DriveOffPhotosVideosFilesCardWithToggleAndFunctionButtonsbtnUploadReceiptsButton"]');
        this.uploadPhotoButtonlocator = page.locator('[data-test-id="DriveOffPhotosVideosFilesCardWithToggleAndFunctionButtonsbtnUploadPhotosButton"]');
        this.uploadvideoButtonLocator = page.locator('[data-test-id="DriveOffPhotosVideosFilesCardWithToggleAndFunctionButtonsbtnUploadVideosButton"]');
        this.chooseFileLocator = page.locator('[data-test-id="DriveOffPhotosVideosFiles150PopupFileUploadChooseFiles"]');
        this.choose = page.locator('//form[@class]//input[@multiple]');
        this.uploadButton = page.locator('[data-test-id="DriveOffPhotosVideosFiles150PopupFileUploadUpload"]');
        this.verifyUploadFile = page.locator('[data-test-id="DriveOffPhotosVideosFiles150UploadFilesFileName"]').first();

        //status
        this.editStatusLocator = page.locator('[data-test-id="DriveOffDriveOffStatusStatusFormEdit"]');
        this.policeRefrencesLocator = page.locator('//div[@data-test-id="DriveOffDriveOffStatusStatusFormPoliceReference"]//input');
        this.dateReportedLocator = page.locator('//div[@data-test-id="DriveOffDriveOffStatusStatusFormPoliceDateReported"]//input');
        this.saveStatusLocator = page.locator('[data-test-id="DriveOffDriveOffStatusStatusFormSave"]');
        this.dateStatusLabel = page.locator('//th[@class="rdtSwitch"]').last();
        this.DateNextLocator = page.locator("(//span[.='›'])[4]");
        this.DateyearTextLocator = page.locator('(//th[@class="rdtSwitch"])[4]');
        this.DateYearLocator = page.locator('(//th[@class="rdtSwitch"])[4]');
        this.payNowLocator = page.locator('[data-test-id="DriveOffDriveOffStatusStatusFormbtnPayNowCustomButton2"]');
        this.emailAlertLocator = page.locator('//div[@data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayReqDriveOffFormEmailAddress"]//input');
        this.payNowAlert = page.locator('[data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayNowSend"]');
        this.verifyPayload = page.locator('[id="payNowiframeId"]');
        this.paymentRequestLocator = page.locator('[data-test-id="DriveOffDriveOffStatusStatusFormbtnPayReqCustomButton"]');
        this.requestEmail = page.locator('//div[@data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayReqDriveOffFormEmailAddress"]//input');
        this.createLinkAlert = page.locator('[data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestCreateLink"]');
        this.verifyRequestLocator = page.locator('[class="content"]').last();
        this.msgCheckbox = page.locator('[class="form-check-label"]').last();
        this.mobileNoAlert = page.locator('//div[@data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayReqDriveOffFormMobilePhoneNumber"]//input');
        // ---------------landing-------------------------------------
        this.verifyDriveOffVehicleLanding = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormTitle"]');
        this.verifyReportLandingLocator = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabCardWithToggleButtonTitle"]');
        this.verifySettingLandingLocator = page.locator('[data-test-id="DriveOffSettingsSettingsCardWithToggleButtonTitle"]');
        this.driveOffExportLocator = page.locator('[data-test-id="DriveOffHome290DriveOffReportsHomeExport"]');
        this.OneRowLocator = page.locator('[data-test-id="DriveOffHome290DriveOffReportsHomeSelectionCellSelectionCell"]').first();
        this.exportAllTheDataLocator = page.locator('(//div[@data-test-id="DriveOffHome290DriveOffReportsHomeExport"])[1]');
        this.exportSelectedRowLocator = page.locator('(//div[@data-test-id="DriveOffHome290DriveOffReportsHomeExport"])[2]');
        this.driveOffViewLocator = page.locator('[data-test-id="DriveOffHomeMenuCardDriveOffHomeMenuMenuButton0"]');














    }

    async clickOnAddButton() {
        await this.page.waitForLoadState("load");
        await this.addVehicleButtonLocator.click();
    }

    async enterArrivalTime(arrivalTime: string) {
        await this.arrivalTimeLocator.fill(arrivalTime);
    }

    async enterDriveOffTime(driveOffTime: string) {
        await this.driveOffTimeLocator.fill(driveOffTime);
    }

    async enterFuelQuantity(fuelQuantity: string) {
        await this.fuelQuantityLocator.fill(fuelQuantity);
    }

    async enterFuelAmount(fuelAmount: string) {
        await this.fuelAmountLocator.fill(fuelAmount);
    }

    async enterReferenceNumber(referenceNo: string) {
        await this.referenceNumberLocator.fill(referenceNo);
    }

    async enterPumpNo(pumpNo: string) {
        await this.pumpNoLocator.fill(pumpNo);
    }


    async selectProduct(product: string) {
        await this.productDropdownLocator.fill(product);
        await this.page.locator('//div[contains(text(),"' + product + '")]').last().click();
    }

    async selectSite(site: string) {
        await this.siteDropdownLocator.fill(site);
        await this.page.locator('//div[contains(text(),"' + site + '")]').first().click();
    }

    async selectFailToPayType(failToPay: string) {
        await this.failToPayTypeDropdownLocator.fill(failToPay);
        await this.page.locator('//div[contains(.,"' + failToPay + '")]').last().click();
    }

    async selectDriveOffStatus(driveOffStatus: string) {
        await this.driveOffStatusDropdownLocator.fill(driveOffStatus);
        await this.page.locator('//div[contains(.,"' + driveOffStatus + '")]').first().click();
    }

    async selectColor(color: string) {
        await this.colorDropdownLocator.fill(color);
        await this.page.locator('//div[contains(text(),"' + color + '")]').first().click();
    }

    async selectDidFrontAndRearPlatesMatch(plateMatch: string) {
        await this.platesMatchDropdownLocator.fill(plateMatch);
        await this.page.locator('//div[contains(text(),"' + plateMatch + '")]').last().click();
    }
    async enterRego(rego: string) {
        await this.regoLocator.fill(rego);
    }

    async validateCharcter() {
        await this.validCharButtonLocator.click();
        await this.page.waitForLoadState('load');
        await this.okButtonLocator.click();

    }

    async clickOnSave() {
        await this.saveButtonLocator.click();
    }

    async verifyAddTheVehicle() {
        await expect(this.regoLocator.textContent()).toBeTruthy();
    }

    async verifyVehicleSavedSuccussfully() {
        await expect(this.verifySaveAlert).toBeTruthy();
    }

    async clickOnEditButton() {
        await this.editButtonlocator.click();
    }

    async selectEditProduct(product1: string) {
        await this.productDropdownLocator.fill(product1);
        await this.page.locator('//div[contains(text(),"' + product1 + '")]').last().click();
    }

    async verifyEditedSuccessfully(product1: string) {
        const actual = await this.verifyEditedProduct.textContent()
        expect(actual).toBe(product1);
    }

    async verifyMandantoryMessage() {
        await expect(this.mandantoryAlertLocator).toBeTruthy();
    }

    async verifySuspectsIsEnabled() {
        await expect(this.suspectsLocator).toHaveAttribute('aria-disabled', 'false');
    }
    async verifyWitnessesIsEnabled() {
        await expect(this.witnessesLocator).toHaveAttribute('aria-disabled', 'false');
    }

    async verifyPhotoAndVideoFilesIsEnabled() {
        await expect(this.photoVideoFilesLocator).toHaveAttribute('aria-disabled', 'false');
    }
    async verifyStatusIsEnabled() {
        await expect(this.statusLocator).toHaveAttribute('aria-disabled', 'false');
    }

    //witnesses
    async clickOnWitnesses() {
        await this.witnessesLocator.click();
    }

    async clickOnAddWitnesses() {
        await this.addWitnessesLocator.click();
    }

    async enterWitnessFirstName(firstName: string) {
        await this.enterWitnessesFirstName.fill(firstName);
    }
    async clickOnSaveWitnesses() {
        await this.saveWitnessesLocator.click();
    }

    async verifyWitnessesSavedsuccessfully() {
        await expect(this.saveAlert).toBeTruthy();
    }

    async clickOnEditWitness() {
        await this.editWitnessesLocator.click();
    }


    async enterEditFirstName(firstName1: string) {
        await this.enterWitnessesFirstName.fill(firstName1);
    }

    async clickOnSaveEditedWitnesses() {
        await this.saveWitnessesLocator.click();
    }

    async verifyWitnessesEditedsuccessfully() {
        await expect(this.saveAlert).toBeTruthy();
    }

    async clickOnDeleteWitnesses() {
        await this.deleteWitnessesLocator.click();
    }

    async verifyWitnessesDeletedsuccessfully() {
        await expect(this.deleteWitnessesAlert).toBeTruthy();
        await this.deleteWitnessesAlert.click();
    }

    async clickOnCloseWitnesses() {
        await this.closeWitnesseslocator.click();
    }

    async verifyWitnessesCloseSuccessfully() {
        await expect(this.addWitnessesLocator).toBeTruthy();
    }

    //Suspects
    async clickOnSuspects() {
        await this.suspectsLocator.click();
    }

    async clickOnAddSuspects() {
        await this.addSuspectsLocator.click();
    }

    async enterApproxAge(approxAge: string) {
        await this.apporxAgeLocator.fill(approxAge);
    }
    async clickOnSaveSuspects() {
        await this.saveSusceptsLocator.click();
    }

    async verifySuspectsSavedsuccessfully() {
        await expect(this.saveAlert).toBeTruthy();
    }

    async clickOnEditSuspects() {
        await this.editSuspectsLocator.click();
    }

    async enterEditApproxAge(approxAge1: string) {
        await this.apporxAgeLocator.fill(approxAge1);
    }

    async clickOnSaveEdited() {
        await this.saveSusceptsLocator.click();
    }

    async verifySuspectsEditedsuccessfully() {
        await expect(this.saveAlert).toBeTruthy();
    }

    async clickOnDelete() {
        await this.deleteSucpectsLocator.click();
    }

    async verifySuspectsDeletedsuccessfully() {
        await expect(this.deleteSucpectAlert).toBeTruthy();
        await this.deleteSucpectAlert.click();
    }

    async clickOnCloseSuspects() {
        await this.closeSuspectsLocator.click();
    }

    async verifySuspectsCloseSuccessfully() {
        await expect(this.addSuspectsLocator).toBeTruthy();

    }

    //photoAndVideofiles
    async clickOnPhotoAndVideoFiles() {
        await this.photoVideoFilesLocator.click();
    }

    async clickOnUploadPhotoButton() {
        await this.uploadPhotoButtonlocator.click();
        await this.choose.setInputFiles('tests/uploadFiles/errorphoto.png');
        await this.uploadButton.click();
    }

    async clickOnUploadRecepitButton() {
        await this.uploadRecepitButtonlocator.click();
        const file = 'C:/Users/Admin/Desktop/InnomaticsManju/tests/uploadFiles/errorPhoto.pdf';
        await this.choose.setInputFiles(file);
        await this.uploadButton.click();
    }

    async clickOnUploadVideoButton() {
        await this.uploadvideoButtonLocator.click();
        await this.choose.setInputFiles('tests/uploadFiles/video.mp4');
        await this.uploadButton.click();
    }

    async verifyUploadTheReceiptSuccessfully() {
        await expect(this.verifyUploadFile).toBeTruthy();
    }

    async verifyUploadThePhotoSuccessfully() {
        await expect(this.verifyUploadFile).toBeTruthy();
    }

    async verifyUploadTheVedioSuccessfully() {
        await expect(this.verifyUploadFile).toBeTruthy();
    }

    async clickOnStatus() {
        await this.statusLocator.click();
    }

    async clickOnEditTheStatus() {
        await this.editStatusLocator.click();
    }

    async setDateReported(date: string, monthYear: string, month: string, year: string, monthss: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await this.dateReportedLocator.click();

        while (true) {
            const inneryear = await this.dateStatusLabel.textContent();

            if (inneryear == monthYear) {
                break;
            }
            await this.DateyearTextLocator.click();
            await this.DateYearLocator.click();
            await this.DateNextLocator.click();

            const years = await this.page.$$('(//td[@class="rdtYear" and @data-value="' + year + '"])');

            for (const yr of years) {
                if (await yr.textContent() == year) {
                    await yr.click();
                    break;
                }
                await this.DateNextLocator.click();

            }


            const months = await this.page.$$('//td[@class="rdtMonth"]');
            for (const mh of months) {
                if (await mh.textContent() == monthss) {
                    await mh.click();
                    break;
                }
            }


        }
        const dates = await this.page.$$('//td[@class="rdtDay" and @data-month="' + month + '"]');
        for (const dt of dates) {
            if (await dt.textContent() == date) {
                await dt.click();
                break;
            }
        }
    }

    async clickOnSaveStatus() {
        await this.saveStatusLocator.click();
    }

    async verifyStatusEditedSuccessfully() {
        await expect(this.saveAlert).toBeTruthy();
    }

    async clickOnPayNowButton() {
        await this.payNowLocator.click();
    }
    async verifyPayNowIsPayble(email: string) {
        await this.emailAlertLocator.fill(email);
        await this.payNowAlert.click();
        await expect(this.verifyPayload).toBeVisible();
    }

    async clickOnPaymentRequest() {
        await this.paymentRequestLocator.click();
    }

    async verifyLinkIsCreatedByEmail(email: string) {
        await this.requestEmail.fill(email);
        await this.createLinkAlert.click();
        await expect(this.verifyRequestLocator).toBeVisible();
    }

    async selectSMSCheckBox() {
        await this.page.waitForTimeout(3000);
        await this.msgCheckbox.click();
    }

    async verifyLinkIsCreatedBySms(mobileNo: string) {

        await this.mobileNoAlert.fill(mobileNo);
        await this.createLinkAlert.click();
        await expect(this.verifyRequestLocator).toBeVisible();
    }

    async verifyDriveOffLandingPage() {
        await expect(this.verifyDriveOffVehicleLanding).toBeVisible();
    }

    async verifyDriveOffSettingsLandingPage() {
        await expect(this.verifySettingLandingLocator).toBeVisible();
    }

    async verifyDriveOffReportsLandingPage() {
        await expect(this.verifyReportLandingLocator).toBeVisible();
    }

    async clicKOnExpondButton() {
        await this.maximizeLocator.click();
    }

    async verifyMaximizeTheWitnesse() {
        await expect(this.verifyMaximizeLocator).toBeVisible();
    }

    async clickOnExportButton() {
        await this.driveOffExportLocator.click();
    }

    async selectOneRow() {
        await this.OneRowLocator.click();
    }

    async verifyExportAllTheData() {
        await expect(this.exportAllTheDataLocator).toBeVisible();
        await this.exportAllTheDataLocator.click();
        await this.page.waitForTimeout(2000);
    }
    async verifyExportSelectedRow() {
        await expect(this.exportSelectedRowLocator).toBeVisible();
        await this.exportSelectedRowLocator.click();
    }

    async clickOnDriveOffViewIcon() {
        await this.driveOffViewLocator.click();
    }




}


