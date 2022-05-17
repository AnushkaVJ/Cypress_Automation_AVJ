/// <reference types="cypress" />
import {
  navigate,
  login,signout,}from'../page-objects/main'

import {
  AddorPublishtoPlayout,
  RemoveTracksInPlayout,
  AddtoPlayoutAssertion,
  GoInsideMyPlaylist,
} from '../page-objects/mainPlayout'

var locators = require('../page-objects/locators.json');

before(() => {
  navigate()
})

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('Add to Playout Test Single Tarck in Playlist', () => {
  it('Should Login', () => {
    login('anushkaj@adelanka.com', 'Abc123!@#')
  })
  it('Go Inside MyPlaylist', () => {
    GoInsideMyPlaylist()
  })
  it('Add to Playout by Playlist', () => {
    AddorPublishtoPlayout(
      locators.InsidePlaylist3dot,
      locators.PlaylistAddtoPlayout
    )
  })
  it('Add to Playout by playlist Assertion', () => {
    AddtoPlayoutAssertion(
      locators.DHIDinMYPlaylist,
      locators.DHIDinPlayout
    )
  })
  it('Remove Tracks In Playout', () => {
    RemoveTracksInPlayout()
  })
  it('Should Signout', () => {
    signout()
  })
})


