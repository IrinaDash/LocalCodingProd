import RegistrationPage from '../pageobjects/registration.page';
import inputValues from '../../data/inputValues.json';
import expectedValues from '../../data/expectedValue.json';
import axios from "axios";

describe('Registration Page', () => {
    describe('Local Coding button link', () => {
        before(() => {
            RegistrationPage.open();
            RegistrationPage.createOneLink.click();
            axios({
                method: 'patch',
                url: 'https://server-stage.pasv.us/user/settings/email',
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err.response.data);
                });
        });

        it('TC-1.001 Local Coding link is enabled', () => {
            const link = RegistrationPage.localCodingLogo.isEnabled();
            expect(link).toEqual(true);
        });

        it('TC-1.002 Local Coding text is correct', function () {
            const link = RegistrationPage.localCodingLogo.getText();
            expect(link).toEqual('Local Coding');
        });

        it('TC-1.003 Local Coding link redirects to Main Page', () => {
            RegistrationPage.localCodingLogo.click();
            expect(browser).toHaveUrl('https://stage.localcoding.us/');
        });
    });

//     describe('Header "Create an account"', () => {
//         before(() => {
//             RegistrationPage.open();
//             RegistrationPage.createOneLink.click();
//         });
//
//         it('TC-1.004 Header is present', () => {
//             const header = RegistrationPage.header.isDisplayed();
//             expect(header).toEqual(true);
//         });
//
//         it('TC-1.005 Header text = Create an account', () => {
//             const text = RegistrationPage.header.getText();
//             expect(text).toEqual('Create an account');
//         });
//     });
//
//     describe('First Name input field', () => {
//         before(() => {
//             RegistrationPage.open();
//             RegistrationPage.createOneLink.click();
//         });
//
//         it('TC-1.006 input field First Name is present', () => {
//             const inputField = RegistrationPage.firstNameInputField.isDisplayed();
//             expect(inputField).toEqual(true);
//         });
//
//         it('TC-1.007 placeholder text = First Name', () => {
//             const text = RegistrationPage.firstNameInputField.getAttribute('placeholder');
//             expect(text).toEqual('First Name');
//         });
//
//         it('TC-1.008 input field accepts 1 symbol', () => {
//             const inputField = RegistrationPage.firstNameInputField.setValue(inputValues.names.symbol1);
//             expect(inputField).not.toBeDisplayed(RegistrationPage.redErrorCircle);
//             RegistrationPage.clearInput(RegistrationPage.firstNameInputField);
//         });
//
//         it('TC-1.009 input field accepts 10 symbol', () => {
//             const inputField = RegistrationPage.firstNameInputField.setValue(inputValues.names.symbols10);
//             expect(inputField).not.toBeDisplayed(RegistrationPage.redErrorCircle);
//             RegistrationPage.clearInput(RegistrationPage.firstNameInputField);
//         });
//
//         it('TC-1.010 input field accepts 20 symbol', () => {
//             const inputField = RegistrationPage.firstNameInputField.setValue(inputValues.names.symbols20);
//             expect(inputField).not.toBeDisplayed(RegistrationPage.redErrorCircle);
//             RegistrationPage.clearInput(RegistrationPage.firstNameInputField);
//         });
//
//         it("TC-1.011 input field accepts apostrophe (')", () => {
//             const inputField = RegistrationPage.firstNameInputField.setValue(inputValues.names.apostrophe);
//             expect(inputField).not.toBeDisplayed(RegistrationPage.redErrorCircle);
//             RegistrationPage.clearInput(RegistrationPage.firstNameInputField);
//         });
//
//         it("TC-1.012 input field accepts dash (-)", () => {
//             const inputField = RegistrationPage.firstNameInputField.setValue(inputValues.names.dash);
//             expect(inputField).not.toBeDisplayed(RegistrationPage.redErrorCircle);
//             RegistrationPage.clearInput(RegistrationPage.firstNameInputField);
//         });
//     });
//
//     describe('Last Name input field', () => {
//         before(() => {
//             RegistrationPage.open();
//             RegistrationPage.createOneLink.click();
//         });
//
//         it('TC-1.016 input field Last Name is present', () => {
//             const inputField = RegistrationPage.lastNameInputField.isDisplayed();
//             expect(inputField).toEqual(true);
//         });
//
//         it('TC-1.017 placeholder text = Last Name', () => {
//             const text = RegistrationPage.lastNameInputField.getAttribute('placeholder');
//             expect(text).toEqual('Last Name');
//         });
//
//         it('TC-1.018 input field accepts 1 symbol', () => {
//             const inputField = RegistrationPage.lastNameInputField.setValue(inputValues.names.symbol1);
//             expect(inputField).not.toBeDisplayed(RegistrationPage.redErrorCircle);
//             RegistrationPage.clearInput(RegistrationPage.lastNameInputField);
//         });
//
//         it('TC-1.019 input field accepts 10 symbol', () => {
//             const inputField = RegistrationPage.lastNameInputField.setValue(inputValues.names.symbols10);
//             expect(inputField).not.toBeDisplayed(RegistrationPage.redErrorCircle);
//             RegistrationPage.clearInput(RegistrationPage.lastNameInputField);
//         });
//
//         it('TC-1.020 input field accepts 20 symbol', () => {
//             const inputField = RegistrationPage.lastNameInputField.setValue(inputValues.names.symbols20);
//             expect(inputField).not.toBeDisplayed(RegistrationPage.redErrorCircle);
//             RegistrationPage.clearInput(RegistrationPage.lastNameInputField);
//         });
//
//         it("TC-1.021 input field accepts apostrophe (')", () => {
//             const inputField = RegistrationPage.lastNameInputField.setValue(inputValues.names.apostrophe);
//             expect(inputField).not.toBeDisplayed(RegistrationPage.redErrorCircle);
//             RegistrationPage.clearInput(RegistrationPage.lastNameInputField);
//         });
//
//         it("TC-1.022 input field accepts dash (-)", () => {
//             const inputField = RegistrationPage.lastNameInputField.setValue(inputValues.names.dash);
//             expect(inputField).not.toBeDisplayed(RegistrationPage.redErrorCircle);
//             RegistrationPage.clearInput(RegistrationPage.lastNameInputField);
//         });
//     });
//
//     describe("Email input field", () => {
//
//         it("TC-1.026 Verify that input field Email is present", () => {
//             expect(RegistrationPage.emailInputField).toBeDisplayed();
//         });
//
//         it("TC-1.027 Verify that input field Email is present", () => {
//             expect(RegistrationPage.emailInputField).toHaveAttr("placeholder", "Email");
//         });
//
//         it("TC-1.028 Verify that input field accepts letters", () => {
//             RegistrationPage.emailInputField.setValue(inputValues.email.letters);
//             expect(RegistrationPage.emailInputField).toHaveValue(expectedValues.email.letters);
//             expect(RegistrationPage.errorEmail).not.toBeExisting();
//             RegistrationPage.clearInput(RegistrationPage.emailInputField);
//         });
//
//         it("TC-1.029 Verify that input field accepts combination of letters and digits", () => {
//             RegistrationPage.emailInputField.setValue(inputValues.email.lettersDigits);
//             expect(RegistrationPage.emailInputField).toHaveValue(expectedValues.email.lettersDigits);
//             expect(RegistrationPage.errorEmail).not.toBeExisting();
//             RegistrationPage.clearInput(RegistrationPage.emailInputField);
//         });
//
//         it("TC-1.030 Verify that input field accepts combination of letters, special char and digits", () => {
//             RegistrationPage.emailInputField.setValue(inputValues.email.letterDigitsSpecChar);
//             expect(RegistrationPage.emailInputField).toHaveValue(expectedValues.email.lettersDigitsSpecChar);
//             expect(RegistrationPage.errorEmail).not.toBeExisting();
//             RegistrationPage.clearInput(RegistrationPage.emailInputField);
//         });
//
//         it("TC-1.031 Verify that input field accepts 1 symbol - letter", () => {
//             RegistrationPage.emailInputField.setValue(inputValues.email.oneLetter);
//             expect(RegistrationPage.emailInputField).toHaveValue(expectedValues.email.oneLetter);
//             expect(RegistrationPage.errorEmail).not.toBeExisting();
//             RegistrationPage.clearInput(RegistrationPage.emailInputField);
//         });
//
//         it("TC-1.032 Verify that input field accepts 1 symbol - digit", () => {
//             RegistrationPage.emailInputField.setValue(inputValues.email.oneDigit);
//             expect(RegistrationPage.emailInputField).toHaveValue(expectedValues.email.oneDigit);
//             expect(RegistrationPage.errorEmail).not.toBeExisting();
//             RegistrationPage.clearInput(RegistrationPage.emailInputField);
//         });
//
//         it("TC-1.033 Verify that input field accepts 1 symbol - special char", () => {
//             RegistrationPage.emailInputField.setValue(inputValues.email.oneSpecChar);
//             expect(RegistrationPage.emailInputField).toHaveValue(expectedValues.email.oneSpecChar);
//             expect(RegistrationPage.errorEmail).not.toBeExisting();
//             RegistrationPage.clearInput(RegistrationPage.emailInputField);
//         });
//
//         it("TC-1.034 Verify that Email is not valid without '.'", () => {
//             RegistrationPage.emailInputField.setValue(inputValues.email.withoutDot);
//             expect(RegistrationPage.emailInputField).toHaveValue(expectedValues.email.withoutDot);
//             expect(RegistrationPage.errorEmail).toHaveText(expectedValues.errors.errorForEmail);
//             RegistrationPage.clearInput(RegistrationPage.emailInputField);
//         });
//
//         it("TC-1.035 Verify that Email is not valid without '@'", () => {
//             RegistrationPage.emailInputField.setValue(inputValues.email.withoutAt);
//             expect(RegistrationPage.emailInputField).toHaveValue(expectedValues.email.withoutAt);
//             expect(RegistrationPage.errorEmail).toHaveText(expectedValues.errors.errorForEmail);
//             RegistrationPage.clearInput(RegistrationPage.emailInputField);
//         });
//
//         it("TC-1.036 Verify that Email is not valid if there's no dot (.) between host name and top-level domain", () => {
//             RegistrationPage.emailInputField.setValue(inputValues.email.withoutDot2);
//             expect(RegistrationPage.emailInputField).toHaveValue(expectedValues.email.withoutDot2);
//             expect(RegistrationPage.errorEmail).toHaveText(expectedValues.errors.errorForEmail);
//             RegistrationPage.clearInput(RegistrationPage.emailInputField);
//         });
//
//         it("TC-1.037 Verify that Email is not valid if username ends with dot (.)", () => {
//             RegistrationPage.emailInputField.setValue(inputValues.email.extraDot);
//             expect(RegistrationPage.emailInputField).toHaveValue(expectedValues.email.extraDot);
//             expect(RegistrationPage.errorEmail).toHaveText(expectedValues.errors.errorForEmail);
//             RegistrationPage.clearInput(RegistrationPage.emailInputField);
//         });
//     });
});
