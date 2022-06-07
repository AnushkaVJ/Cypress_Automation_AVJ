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
var cred = require('../page-objects/cred.json');

before(() => {
  navigate()
})

// beforeEach(() => {
//   cy.viewport(1920, 1080)
// })

describe('Publish to Playout Test Multiple Tarcks in Playlist', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
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


