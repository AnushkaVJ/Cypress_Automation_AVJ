/// <reference types="cypress" />
var locators = require('./locators.json');


export function navigate() {
  // cy.visit('https://staging-bbcmusicbox.soundmouse.com/signin')
  cy.visit('https://soundmouse.net/admintools/ml-test/signin')
  cy.viewport(1920, 1080)
}

export function login(email, password) {
  cy.toast('MusicBOX Login Page', {
    duration: 3000,
    blocking: false,
  })
  cy.get('input[id="email"]').arrow({
    duration: 1500,
    blocking: true,
    pointAt: 'bottomLeft', // or "bottomRight"
    offsetX: 0, // move the tip by X pixels
    offsetY: 0, // move the tip by Y pixels
    strokeWidth: 5 // SVG line width, pixels
  })
  cy.get('input[id="email"]').arrow({
    text: 'Email here',
    textSize: '5vh',
  })
  // cy.get('input[id="password"]').arrow({
  //   text: 'Password here',
  //   textSize: '10vh',
  // })
  cy.wait(1000)
  cy.percySnapshot('login');
  cy.get('input[id="email"]').type(email + '{enter}')
  cy.get('input[id="password"').type(password)
  cy.xpath('/html/body/div/div/div/div[2]/div/form/button').click()
  cy.wait(1000)
}

export function signout() {
  cy.wait(1000)
  cy.xpath(locators.HeaderUserButton).click({ force: true})
  cy.wait(2000)
  cy.xpath(locators.UserSignOut).click({ force: true})
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


