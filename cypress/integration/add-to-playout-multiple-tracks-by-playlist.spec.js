/// <reference types="cypress" />
import {
  navigate,
  login, signout,
} from '../page-objects/main'

import {
  RemoveTracksInPlayout,
  GoInsideMyPlaylist,
  MultipleTracksAddtoPlayout,
  MultipleTracksAddtoPlayoutAssertionForMultiTrackPlaylist,
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

describe('Add to Playout Test Multiple Tarck in Playlist', () => {
  it('Should Login', () => {
    login('anushkaj@adelanka.com', 'Abc123!@#')
  })
  it('Go Inside MyPlaylist', () => {
    GoInsideMyPlaylist()
  })
  it('Multiple Tracks Selection Inside Playlist', () => {
    MultipleTracksSelectionInsidePlaylist()
  })
  it('Multiple Tracks Add to Playout by Playlist', () => {
    MultipleTracksAddtoPlayout()
  })
  it('Multiple Tracks Add to Playout by playlist Assertion', () => {
    MultipleTracksAddtoPlayoutAssertionForMultiTrackPlaylist(
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