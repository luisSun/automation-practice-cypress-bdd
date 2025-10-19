// Gherkin
/// <reference types="cypress" />
import { fakerPT_BR } from '@faker-js/faker';
import { Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../pages/home_page'
import RegisterPage from '../pages/register_page'
import { data as dataRegister } from '../elements/dataUser';

Given("I'm on the register screen", () => {
    HomePage.acessRegister();
});

When("I fill a valid user name", () =>{
    RegisterPage.fillRegister(dataRegister.fields.nameField,dataRegister.info.name);
})

When("I fill a valid password", () =>{
    RegisterPage.fillRegister(dataRegister.fields.passWField,dataRegister.info.pass);
})

When("I fill an invalid password", () =>{
    RegisterPage.fillRegister(dataRegister.fields.passWField,dataRegister.info.invalidData);
})

When("I fill a valid register e-mail", () =>{
    RegisterPage.fillRegister(dataRegister.fields.emailField,dataRegister.info.email);
})
When("I fill an invalid register e-mail", () =>{
    RegisterPage.fillRegister(dataRegister.fields.emailField,dataRegister.info.invalidData);
})

When("I click the register button", () =>{
    RegisterPage.regBtn();
})

Then("I see the register message {string}", (message) => {
    RegisterPage.erroMsg(message);
});

Then("I see the success register message {string}", (message) => {
    RegisterPage.sucessMsg(message);
});