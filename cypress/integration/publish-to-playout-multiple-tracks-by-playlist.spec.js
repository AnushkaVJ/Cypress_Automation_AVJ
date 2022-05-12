/// <reference types="cypress" />
import {
  navigate,
  login,signout,}from'../page-objects/main'

import {
  MultipleTracksPublishtoPlayout,
  PublishtoPlayoutAssertionMultiple,
  GoInsideMyPlaylist,
  MultipleTracksSelectionInsidePlaylist
} from '../page-objects/mainPlayout'

var locators = require('../page-objects/locators.json');

before(() => {
  cy.viewport(1920, 1080)
  navigate()
})

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('Publish to Playout Test Multiple Tarcks in Playlist', () => {
  it('Should Login', () => {
    login('anushkaj@adelanka.com', 'Abc123!@#')
  })
  it('Go Inside MyPlaylist', () => {
    GoInsideMyPlaylist()
  })
  it('Multiple Tracks Selection Inside Playlist', () => {
    MultipleTracksSelectionInsidePlaylist()
  })
  
  it('Publish to Playout by Playlist Assertion', () => {
    PublishtoPlayoutAssertionMultiple(
      locators.DHIDinMYPlaylist,
      locators.DHIDinPlayout,
      locators.CWRRadioStationMultiple,
      locators.PublishtoPlayoutRadioStationNextMultiple, 
      locators.PublishtoPlayoutClassicalMultiple,
      locators.PublishtoPlayoutPublishButtonMultiple
    )
  })

  it('Should Signout', () => {
    signout()
  })
})


