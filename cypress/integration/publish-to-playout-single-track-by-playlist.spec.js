/// <reference types="cypress" />
import {
  navigate,
  login,signout,}from'../page-objects/main'

import {
  AddorPublishtoPlayout,
  RemoveTracksInPlayout,
  PublishtoPlayoutAssertion,
  GoInsideMyPlaylist,
} from '../page-objects/mainPlayout'

var locators = require('../page-objects/locators.json');

before(() => {
  navigate()
})

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('Publish to Playout Test Single Tarck in Playlist', () => {
  it('Should Login', () => {
    login('anushkaj@adelanka.com', 'Abc123!@#')
  })
  it('Go Inside MyPlaylist', () => {
    GoInsideMyPlaylist()
  })
  it('Publish to Playout by Playlist', () => {
    AddorPublishtoPlayout(
      locators.InsidePlaylist3dot,
      locators.PlaylistPublishtoPlayout
    )
  })
  it('Publish to Playout by Playlist Assertion', () => {
    PublishtoPlayoutAssertion(
      locators.DHIDinMYPlaylist,
      locators.DHIDinPlayout,
      locators.CWRRadioStation,
      locators.PublishtoPlayoutRadioStationNext,
      locators.PublishtoPlayoutClassical,
      locators.PublishtoPlayoutPublishButton
    )
  })

  it('Should Signout', () => {
    signout()
  })
})


