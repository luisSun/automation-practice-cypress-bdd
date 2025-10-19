/// <reference types="cypress" />
import { fakerPT_BR } from '@faker-js/faker';

export const data = {

    fields:{
        nameField: "#user",
        passWField: '#password',
        emailField: '#email'
    },

    info: {
        name: fakerPT_BR.person.fullName(),
        email: fakerPT_BR.internet.email(),
        pass: fakerPT_BR.internet.password(8),
        invalidData: fakerPT_BR.string.alpha(5)
    }
}
