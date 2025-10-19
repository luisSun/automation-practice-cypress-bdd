// 2 - criar meus metodos com o gherkin criado
/// <reference types="cypress" />
import { fakerPT_BR } from '@faker-js/faker';
import { Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../pages/home_page'
import LoginPage from '../pages/login_page'
import { data as dataUser } from '../elements/dataUser';

Given("I'm on the login screen", () => {
    HomePage.acessLogin();
});

When("I fill in a valid password", () =>{
    LoginPage.fillField(dataUser.fields.passWField, dataUser.info.pass)
})

When("I fill in an invalid e-mail", (field) =>{
    LoginPage.fillField(dataUser.fields.nameField, dataUser.info.invalidData)
})

When("I fill in a valid e-mail", (field) =>{
    LoginPage.fillField(dataUser.fields.nameField, dataUser.info.email)
})

When("I fill in an invalid password", (field) =>{
    LoginPage.fillField(dataUser.fields.passWField, dataUser.info.invalidData)
})

When("I click the login button", () =>{
    LoginPage.loginBtn();
})

Then("I see the message {string}", (message) =>{
    LoginPage.loginMsg(message)
})

Then("I see the success message {string}", (message) =>{
    LoginPage.sucessMsg(message)
})