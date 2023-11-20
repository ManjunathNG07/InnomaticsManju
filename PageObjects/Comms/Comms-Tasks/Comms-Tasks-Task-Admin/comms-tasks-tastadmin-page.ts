import { Locator, Page, expect } from "@playwright/test";
export default class CommsTaskAdminPage {
    readonly page: Page;
    readonly taskAdminLocator: Locator;
    readonly addTaskAdminLocator: Locator;
    readonly commsTaskLocator: Locator;
    readonly taskNameLocator: Locator;
    readonly urgencyDropDownLocator: Locator;
    readonly fromDropDownLocator: Locator;
    readonly nextButton1Locator: Locator;
    readonly dueTimeLocator: Locator;
    readonly siteNameLocator: Locator;
    readonly enableAndTaskSummaryLocator: Locator;
    readonly dueDateTextLocator: Locator;
    readonly dueDateLocator: Locator;
    readonly dueDateyearTextLocator: Locator;
    readonly dueDateYearLocator: Locator;




    constructor(page: Page) {
        this.page = page;
        this.taskAdminLocator = page.locator('[data-test-id="HomeMenuCardCommsHomeSelectedMenuMenuButton1"]');
        this.addTaskAdminLocator = page.locator('[data-test-id="TaskAdminCardWithToggleAndFunctionButtonsbtnAddButton"]');
        this.commsTaskLocator = page.locator('[data-test-id="TaskAdminTaskTypeBtnCommsTask"]');
        this.taskNameLocator = page.locator('//div[@data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormTaskName"]//input');
        this.urgencyDropDownLocator = page.locator('(//div[@data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormUrgencyId"]//input)[1]');
        this.fromDropDownLocator = page.locator('(//div[@data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormExistingFormId"]//input)[1]');
        this.nextButton1Locator = page.locator('//button[@title="Next"]');
        this.dueTimeLocator = page.locator('(//div[@data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormDueTime"]//input)[1]');
        this.siteNameLocator = page.locator('(//div[@data-test-id="TaskAdminAddEditTaskTaskRecipientsTabCommsRecepientFormRecipientsFiltersSiteName"]//input)[1]');
        this.enableAndTaskSummaryLocator = page.locator('[data-test-id="TaskAdminAddEditTaskEnableSaveDiscardTaskBtnEnable"]');
        this.dueDateLocator = page.locator('//div[@data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormDueDate"]//input');
        this.dueDateTextLocator = page.locator("(//span[.='›'])[4]");
        this.dueDateyearTextLocator = page.locator('(//th[@class="rdtSwitch"])[4]');
        this.dueDateYearLocator = page.locator('(//th[@class="rdtSwitch"])[4]');




    }

    async clickOnTaskAdmin() {
        await this.page.waitForLoadState("load");
        await this.taskAdminLocator.click();
    }

    async addOnTaskAdmin() {
        await this.page.waitForLoadState("load");
        await this.addTaskAdminLocator.click();
    }
    async clickOnCommsTask() {
        await this.page.waitForLoadState("load");
        await this.commsTaskLocator.click();
    }
    async enterTaskName(taskName: string) {
        await this.page.waitForTimeout(2000);
        await this.taskNameLocator.fill(taskName);
    }

    async selectUrgency(urgency: string) {
        await this.urgencyDropDownLocator.fill(urgency);
        await this.page.locator('//div[normalize-space()="' + urgency + '"]').last().click();
    }

    async setDueDate(date: string, monthYear: string, month: string, year: string, monthss: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await this.dueDateLocator.click();

        while (true) {
            const inneryear = await this.dueDateyearTextLocator.textContent();

            if (inneryear == monthYear) {
                break;
            }
            await this.dueDateyearTextLocator.click();
            await this.dueDateYearLocator.click();
            const years = await this.page.$$('(//td[@class="rdtYear" and @data-value="' + year + '"])');
            for (const yr of years) {
                if (await yr.textContent() == year) {
                    await yr.click();
                    break;
                }
                await this.dueDateTextLocator.click();
                break;
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


    async setDueTime(duetime: string) {
        await this.dueTimeLocator.fill(duetime);
    }

    async selectForm(from: string) {
        await this.fromDropDownLocator.fill(from);
        await this.page.locator('//div[contains(text(),"' + from + '")]').first().click();
    }

    async clickOnNextButton1() {
        await this.nextButton1Locator.click();
    }

    async selectSiteName(siteName: string) {
        await this.page.waitForLoadState("load");
        await this.siteNameLocator.fill(siteName);
        await this.page.locator('//div[contains(text(),"' + siteName + '")]').first().click();
    }
    async clickOnNextButton2() {
        await this.nextButton1Locator.click();
    }

    async verifyEnableAndSaveTask() {
        await expect(this.enableAndTaskSummaryLocator).toBeVisible();
        await this.enableAndTaskSummaryLocator.click();
    }
}
