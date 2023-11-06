import { expect, Locator, Page } from "@playwright/test";
export default class Loginpage {
    readonly page: Page;
    readonly userNameLocator: Locator;
    readonly companyCodeLocator: Locator;
    readonly passwordLocator: Locator;
    readonly rememberMeLocator: Locator;
    readonly loginButtonLocator: Locator;
    readonly forgotPasswordButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameLocator = page.locator('//input[@name="username"]');
        this.companyCodeLocator = page.locator('//input[@name="companyCode"]');
        this.passwordLocator = page.locator('//input[@name="password"]');
        this.rememberMeLocator = page.locator("//label[.='Remember me']");
        this.loginButtonLocator = page.locator('#LoginButton');


    }

    async gotoLoginPage(url:string){
        await this.page.goto(url);
        this.page.waitForLoadState("domcontentloaded");
    }
    async loginToApp(superUser: string, companyName: string, password: string) {
        await this.userNameLocator.fill(superUser);
        await this.companyCodeLocator.fill(companyName);
        await this.passwordLocator.fill(password);
        await this.rememberMeLocator.click();
        await this.loginButtonLocator.click();
        this.page.waitForLoadState("load");
    }
}