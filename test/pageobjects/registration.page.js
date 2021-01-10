import Page from './page';

class RegistrationPage extends Page {
    open () {
        return browser.url('/user/register');
    }

    get createOneLink() { return $('p [href="/user/register"]') }
    get header() { return $('h1') }
    get redErrorCircle() { return $('.anticon-close-circle') }
    get firstNameInputField() { return $('#user_login_firstName') }
    get lastNameInputField() { return $('#user_login_lastName') }
    get emailInputField() { return $("//input[@id='user_login_email']")};
    get errorEmail() { return $(`//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.="'email' is not a valid email"]`)};

}

export default new RegistrationPage();
