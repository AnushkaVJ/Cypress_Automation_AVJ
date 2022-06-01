/// <reference types="cypress" />

var locators = require('./locators.json');
var data = require('../page-objects/data.json');

export function GoToAdvancedSearch() {
  cy.wait(1000)
  cy.toast('Go to Advanced Search and Select Ashvin Track Search', {
    duration: 3000,
    blocking: false,
  })
  cy.get(locators.Search).click({ force: true })
  cy.wait(1000)
  cy.get(locators.AdvancedSearch).click({ force: true })
  cy.wait(1000)
  cy.xpath(locators.AshvinTrackSearch).click({ force: true })
  cy.wait(1000)
  cy.text('Now it is going to test all fields by User Preferences', {
    duration: 3000, // how long the text should be there
    blocking: false, // wait for the text to hide
    textSize: '20pt', // CSS text height
  })
}
export function SelectSearchFieldFromUserPreferences(Field) {
  cy.xpath(locators.UserPreferncesButton).click()
  cy.wait(1000)
  TestPreviousCheckBox()
  cy.get(Field).click()
  cy.wait(1000)
  cy.get('body').type('{esc}');
  cy.wait(1500)
}
export function SelectFilterFromSearchField(Filter) {
  cy.xpath(locators.FilterButton).click()
  cy.wait(1000)
  cy.contains(Filter).click()
  cy.wait(1000)
}
export function TypeValueandReceivedResultAssertion(SearchField, Searchvalue, UploadTrackEditANDOR) {
  cy.text('Select Search Field, Type value then finally Assertion of Received Result', {
    duration: 5000, // how long the text should be there
    blocking: false, // wait for the text to hide
    textSize: '20pt', // CSS text height
  })
  cy.xpath(SearchField).click({ force: true })
  cy.xpath(SearchField).type(Searchvalue + '{enter}')
  cy.wait(2500)

  cy.xpath(locators.ResultGridValue, { timeout: 1000 }).invoke('text').then((FieldValue) => {
    const FieldValueValue = FieldValue
    cy.log('Given Value = ' + Searchvalue)
    cy.log('Returned Value = ' + FieldValueValue)

    if (expect(FieldValueValue === UploadTrackEditANDOR || FieldValueValue === 'FEATURED ARTIST:' + ' ' + UploadTrackEditANDOR || FieldValueValue === UploadTrackEditANDOR + ' ' + '...').to.be.true) {
      cy.log('**Result Sucess**')
    }
  })

  cy.wait(1000)
  cy.xpath(locators.FieldValueClearButton).click({ force: true })
  cy.wait(1000)
}




export function OmitCharactersBeyond256inSearchValue(SearchField, Searchvalue, UploadN256Characters) {
  cy.xpath(SearchField).click({ force: true })
  cy.xpath(SearchField).type(Searchvalue + '{enter}')
  // cy.xpath(SearchField).type(Searchvalue)
  // cy.wait(8000)
  // cy.xpath(locators.SearchButton).click({ force: true })
  cy.wait(2500)

  cy.xpath(locators.ResultGridValue, { timeout: 2000 }).invoke('text').then((FieldValue) => {
    const FieldValueValue = FieldValue

    if (expect(FieldValueValue === UploadN256Characters || FieldValueValue === UploadN256Characters + ' ' || FieldValueValue === UploadN256Characters + ' ...' || FieldValueValue === 'FEATURED ARTIST:' + ' ' + UploadN256Characters).to.be.true) {
      cy.log('**Result Sucess**')
    }
    cy.log('Given Value = ' + Searchvalue)
    cy.log('Returned Value = ' + FieldValueValue)
  })
  cy.wait(1000)
  cy.xpath(locators.FieldValueClearButton).click({ force: true })
  cy.wait(1000)
  // SelectSearchFieldFromUserPreferences(Field)
}

export function TestPreviousCheckBox() {
  // cy.get('[type="checkbox"]').should('not.be.visible').uncheck({ force: true })
  cy.text('Uncheck all Selected Fields, then select the prefered Field', {
    duration: 3000, // how long the text should be there
    blocking: false, // wait for the text to hide
    textSize: '20pt', // CSS text height
  })
  cy.get('[type="checkbox"]').uncheck({ force: true })
}