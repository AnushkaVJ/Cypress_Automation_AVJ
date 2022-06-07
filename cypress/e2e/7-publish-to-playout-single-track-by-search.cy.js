/// <reference types="cypress" />
import {
  navigate,
  login,signout,}from'../page-objects/main'

import {
  AddorPublishtoPlayout,
  PublishtoPlayoutAssertion,
  GotoSearchTracks,
} from '../page-objects/mainPlayout'

var locators = require('../page-objects/locators.json');
var cred = require('../page-objects/cred.json');

before(() => {
  navigate()
})

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('Publish to Playout Test Single Tarck in Search', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
  })
  it('Go to Search Tracks', () => {
    GotoSearchTracks()
  })
  it('Publish to Playout by Search', () => {
    AddorPublishtoPlayout(
      locators.InsideSearch3Dot,
      locators.SearchPublishtoPlayout
    )
  })
  it('Publish to Playout by Search Assertion', () => {
    PublishtoPlayoutAssertion(
      locators.DHIDinSearch,
      locators.DHIDinPlayout,
      locators.CWRRadioStationSearchinSearch,
      locators.PublishtoPlayoutRadioStationNextinSearch,
      locators.PublishtoPlayoutClassicalinSearch,
      locators.PublishtoPlayoutPublishButtoninSearch
    )
  })
  it('Should Signout', () => {
    signout()
  })
})


