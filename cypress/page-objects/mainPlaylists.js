/// <reference types="cypress" />

var locators = require('./locators.json');
var data = require('./data.json');

export function GoToMyPlaylists() {
  cy.wait(4000)
  cy.xpath(locators.MyPlaylists).click()
  cy.wait(2000)
}

export function AddTracksToPlaylistAndAssertion() {
  cy.wait(1000)
  cy.xpath(locators.SelectAllTracks).click()
  cy.wait(1000)
  cy.get(locators.CreatedPlayoutSessionAction).click()
  cy.xpath(locators.SearchPlaylist).type(data.PlaylistEditParameter + '{enter}')
  cy.wait(1500)
  cy.xpath(locators.PlaylistInActionMenu).click()
}

export function CreatePlaylist(PlaylistEditParameter, Year, Priority) {
  cy.xpath(locators.CreatePlaylist).click({ force: true })

  cy.xpath(`//input[contains(@aria-label,'Title of the playlist')]`).type(PlaylistEditParameter)

  //date
  cy.xpath(`//input[contains(@aria-label,'Release date of the playlist')]`).click()
  cy.xpath(locators.DatePickerYear).click()
  cy.wait(1000)
  cy.xpath(locators.BaseDatePicker).contains(Year).click({ force: true })
  cy.wait(1000)
  cy.xpath(locators.DatePickerN).contains('4').click({ force: true })

  cy.get('#type').click()
  cy.xpath('//*[@id="menu-type"]/div[3]/ul/li[2]').click()

  cy.get('#categoryId').click()
  cy.xpath('//*[@id="menu-categoryId"]/div[3]/ul/li[6]').click()


  cy.xpath(`//input[contains(@aria-label,'Add playlist tags')]`).type(PlaylistEditParameter)

  cy.xpath(`//input[contains(@aria-label,'playlist priority')]`).type(Priority)

  cy.xpath(`//input[contains(@aria-label,'playlist notes')]`).type(PlaylistEditParameter)

  cy.xpath(`//button[contains(@aria-label,'chartType')]`).click()

  cy.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/div/div[2]/div/div/div[2]/div[2]/div/div/div/div[2]/button[1]').click({ force: true })
}


export function CreatePlaylistAssertion() {
  cy.wait(1000)
  cy.xpath('//*[@id="mm-viewPort"]/table/tbody/tr[1]').click()
  cy.wait(1000)

  cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[1]/div[3]/a/strong`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
    const FV = FieldValue;
    cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[1]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
      const FN = FieldName;
      expect(data.PlaylistEditParameter).to.eq(FV)
      cy.log(FN + ' =')
      cy.log(FV)
    })
  })
  cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[9]/div[3]/div/span`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
    const FV = FieldValue;
    cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[9]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
      const FN = FieldName;
      expect(data.PlaylistEditParameter).to.eq(FV)
      cy.log(FN + ' =')
      cy.log(FV)
    })
  })
  cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[10]/div[3]`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
    const FV = FieldValue;
    cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[10]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
      const FN = FieldName;
      expect(data.PlaylistEditParameter).to.eq(FV)
      cy.log(FN + ' =')
      cy.log(FV)
    })
  })

  //Type
  cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[3]/div[3]`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
    const FV = FieldValue;
    cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[10]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
      const FN = FieldName;
      expect('Promoted').to.eq(FV)
      cy.log(FN + ' =')
      cy.log(FV)
    })
  })

   //Category
   cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[6]/div[3]`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
    const FV = FieldValue;
    cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[6]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
      const FN = FieldName;
      expect('test category new').to.eq(FV)
      cy.log(FN + ' =')
      cy.log(FV)
    })
  })

   //Priority
   cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[5]/div[3]`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
    const FV = FieldValue;
    cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[5]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
      const FN = FieldName;
      expect('5').to.eq(FV)
      cy.log(FN + ' =')
      cy.log(FV)
    })
  })

  //dates
  for (let i = 40; i < 43; i++) {
    cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[2]/div[3]/time`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
      const FV = FieldValue;
      cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[3]/div/div/div/div[3]/div/div[2]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
        const FN = FieldName;
        expect('04/06/2022').to.eq(FV)
        cy.log(FN + ' =')
        cy.log(FV)
      })
    })
  }
}

