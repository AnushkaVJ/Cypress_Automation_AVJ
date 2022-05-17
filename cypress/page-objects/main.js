/// <reference types="cypress" />
var locators = require('./locators.json');


export function navigate() {
  cy.visit('https://staging-bbcmusicbox.soundmouse.com/signin')
  // cy.visit('https://soundmouse.net/admintools/ml-test/signin')
}

export function login(email, password) {
  cy.wait(1000)
  cy.percySnapshot('login');
  cy.get('input[id="email"]').type(email + '{enter}')
  cy.get('input[id="password"').type(password)
  cy.xpath('/html/body/div/div/div/div[2]/div/form/button').click()
  cy.wait(10000)
}

export function signout() {
  cy.wait(1000)
  cy.xpath(locators.HeaderUserButton).click()
  cy.wait(2000)
  cy.xpath(locators.UserSignOut).click()
  cy.wait(2000)
}

export function playlists() {
  cy.wait(5000)
  //Card view Multi Line
  cy.get('div[id="resultView"]').click()
  cy.get('#menu-resultView > div > ul > li:nth-child(1)').click()

  //List view Multi Line
  cy.get('.blockForSmallDevices > .MuiInputBase-root > .MuiSelect-root').click()
  cy.get('#menu-viewerType > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()

   //List view Single Line
   cy.get('.searchButtonsSet > .MuiInputBase-root > .MuiSelect-root').click()
   cy.get('#menu-resultView > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
}


