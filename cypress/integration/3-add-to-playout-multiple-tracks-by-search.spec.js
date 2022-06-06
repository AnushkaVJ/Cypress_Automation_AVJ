/// <reference types="cypress" />
import {
  navigate,
  login,
  signout,
} from '../page-objects/main'

import {
  RemoveTracksInPlayout,
  GotoSearchTracks,
  MultipleTracksAddtoPlayout,
  MultipleTracksAddtoPlayoutAssertion,
  MultipleTracksSelectionInsidePlaylist,
} from '../page-objects/mainPlayout'

var locators = require('../page-objects/locators.json');
var cred = require('../page-objects/cred.json');

before(() => {
  navigate()
})

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('Add to Playout Test-Multiple Tarck in Search', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
  })
  it('Go to Search Tracks', () => {
    GotoSearchTracks()
  })
  it('Multiple Tracks Selection in Search', () => {
    MultipleTracksSelectionInsidePlaylist()
  })
  it('Multiple Tracks Add to Playout by Search', () => {
    MultipleTracksAddtoPlayout()
  })
  it('Multiple Tracks Add to Playout by Playlist Assertion', () => {
    MultipleTracksAddtoPlayoutAssertion(
      locators.DHIDinSearch,
      locators.DHIDinPlayout
    )
  })
  it('Remove If Tracks are In The Playout Session', () => {
    RemoveTracksInPlayout()
  })
  it('Should Signout', () => {
    signout()
  })
})


