// import LoginPage from '../pageobjects/login.page';
// import ProfilePage from '../pageobjects/profile.page';
// import HomePage from '../pageobjects/home.page';
// import expectedValue from '../../data/expectedValue.json';
//
//
// describe('Local Coding Link', () => {
//
//     before(() => {
//         LoginPage.open();
//     })
//
//     it('T-2.001 Local Coding linc should present at the top center of the page', () => {
//         expect(LoginPage.localCodingLink).toHaveText(expectedValue.texts.localCodingLink);
//     })
//
//     it('T-2.002 Local Coding linc Logo should present at the top center of the page', () => {
//         expect(LoginPage.localCodingLinkLogo).toHaveAttr('alt','Local Coding Logo');
//     })
//
//     it('T-2.005 Verify that the Local Coding link is clickable', () => {
//         expect(LoginPage.localCodingLink).toBeClickable();
//     })
//
//     it('T-2.006 Verify that the Local Coding link is clickable and opens the Home Page', () => {
//         LoginPage.localCodingLink.click();
//         expect(HomePage.header1).toHaveText(expectedValue.texts.header1);
//         browser.pause(3000);
//     })
// });
//

// describe('Login Page', () => {
//     let credentials = [
//         {
//             username: "fapecep930@ahhtee.com",
//             password: "qwerty123"
//         }
//     ];
//
//     beforeEach(() => {
//         LoginPage.open();
//     });
//
//     for (const iteration of credentials) {
//         it('should login with valid credentials', () => {
//             LoginPage.login(iteration.username, iteration.password);
//             expect(ProfilePage.userIcon).toBeExisting();
//         });
//     }
//
//     it('submit button should be disabled if input fields are empty', () => {
//         expect(LoginPage.btnSubmit).not.toBeClickable();
//     });
//
//     it('auth fails if wrong credentials provided', () => {
//         LoginPage.setUsername('example@example.com');
//         LoginPage.setPassword('123456');
//         LoginPage.clickSubmit();
//         expect(LoginPage.notification).toHaveText('Auth failed');
//     });
//
//     it('email format validation', () => {
//         LoginPage.setUsername('123');
//         expect(LoginPage.usernameValidation).toHaveText(`'email' is not a valid email`);
//     });
//
//     it('email required validation', () => {
//         LoginPage.setUsername('123');
//         LoginPage.clearUsername();
//         expect(LoginPage.usernameValidation).toHaveText('Required');
//     })
// });


