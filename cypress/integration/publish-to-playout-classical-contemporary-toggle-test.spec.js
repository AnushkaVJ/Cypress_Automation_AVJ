/// <reference types="cypress" />
import {
  navigate,
  login,signout,}from'../page-objects/main'

import {
  AddorPublishtoPlayout,
  SelectRadioStationAndTestClassicalContemporaryToggle,
  GotoSearchTracks,
} from '../page-objects/mainPlayout'

var locators = require('../page-objects/locators.json');

before(() => {
  navigate()
})

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('Publish to Playout Classical-Contemporary Toggle Button Test', () => {
  it('Should Login', () => {
    login('anushkaj@adelanka.com', 'Abc123!@#')
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
  it('Select Radio Station And Test Classical Contemporary Toggle', () => {
    SelectRadioStationAndTestClassicalContemporaryToggle(
      locators.CWRRadioStationSearchinSearch,
      locators.PublishtoPlayoutRadioStationNextinSearch,
      locators.PublishtoPlayoutClassicalinSearch,
      locators.PlayoutTrackTypeinPublishWindow
    )
  })
  it('Should Signout', () => {
    signout()
  })
})


