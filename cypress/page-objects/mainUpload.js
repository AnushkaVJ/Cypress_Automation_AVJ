/// <reference types="cypress" />

var locators = require('../page-objects/locators.json');
var data = require('../page-objects/data.json');

export function GoToUploadSession(SelectedSession) {
  cy.wait(1000)
  cy.get(locators.Uploads).click({ force: true })
  cy.toast('Go to Upload Session', {
    duration: 3000,
    blocking: false,
  })
  cy.wait(1000)
  cy.xpath(locators.UploadsSession).click({ force: true })
  cy.wait(1000)
  cy.contains(SelectedSession).click({ force: true })
  cy.wait(1000)
}





export function TrackEditwithANDOR(UploadTrack3dot, UploadTrackEdit1, UploadTrackTitleAND) {
  cy.xpath(UploadTrack3dot).click({ force: true })
  cy.wait(1000)
  cy.xpath(UploadTrackEdit1).click()
  cy.wait(1000)
  cy.toast('Edit Track', {
    duration: 3000,
    blocking: false,
  })
  for (let n = 1; n < 32; n++) {
    cy.get(".MuiGrid-root").then($root => {
      if ($root.find(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > input`).length > 0) {
        cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > input`).then($foundelement => {
          if ($foundelement.hasClass('MuiInputBase-input')) {
            cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > input`).clear({ force: true })
            cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > input`).type(UploadTrackTitleAND)
          }
        })
      }
      else if ($root.find(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > div > input`).length > 0) {
        for (let i = 1; i < 5; i++) {
          cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > div > input`).type('{backspace}')
        }
        cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > div > input`).type(UploadTrackTitleAND)
      }
    });
  }

  cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(9) > div:nth-child(2) > div > div > input`).clear({ force: true })
  cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(9) > div:nth-child(2) > div > div > input`).type(UploadTrackTitleAND)


  cy.xpath(locators.TrackEditTags).click()

  for (let n = 1; n < 10; n++) {
    cy.get(".MuiGrid-root").then($root => {
      if ($root.find(`#full-width-tab-1 > div > div > div > div:nth-child(${n}) > div > div > div > input`).length > 0) {
        cy.get(`#full-width-tab-1 > div > div > div > div:nth-child(${n}) > div > div > div > input`).then($foundelement => {
          if ($foundelement.hasClass('MuiInputBase-input')) {
            for (let i = 1; i < 5; i++) {
              cy.get(`#full-width-tab-1 > div > div > div > div:nth-child(${n}) > div > div > div > input`).type('{backspace}')
            }
            cy.get(`#full-width-tab-1 > div > div > div > div:nth-child(${n}) > div > div > div > input`).type(UploadTrackTitleAND)
          }
        })
      }
    });
  }

  cy.xpath(locators.TrackEditAlbumMetadata).click()

  for (let n = 1; n < 5; n++) {
    cy.get(".MuiGrid-root").then($root => {
      if ($root.find(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).length > 0) {
        cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).then($foundelement => {
          if ($foundelement.hasClass('MuiInputBase-input')) {
            cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).clear({ force: true })
            cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).type(UploadTrackTitleAND)
          }
        })
      }
    });
  }
  for (let n = 7; n < 20; n++) {
    cy.get(".MuiGrid-root").then($root => {
      if ($root.find(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).length > 0) {
        cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).then($foundelement => {
          if ($foundelement.hasClass('MuiInputBase-input')) {
            cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).clear({ force: true })
            cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).type(UploadTrackTitleAND)
          }
        })
      }
    });
  }
  for (let i = 1; i < 5; i++) {
    cy.get(`#full-width-tab-2 > div > div > div > div > div > div > div > div > input`).type('{backspace}')
  }
  cy.get(`#full-width-tab-2 > div > div > div > div > div > div > div > div > input`).type(UploadTrackTitleAND)

  cy.wait(1000)
  cy.xpath(locators.UploadEditSaveButton).click()
  cy.xpath(locators.UploadEditSaveConfirmation).click()
}



