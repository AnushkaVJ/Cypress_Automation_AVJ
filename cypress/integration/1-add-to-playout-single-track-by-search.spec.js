/// <reference types="cypress" />
import {
  navigate,
  login,signout,}from'../page-objects/main'

import {
  AddorPublishtoPlayout,
  RemoveTracksInPlayout,
  AddtoPlayoutAssertion,
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

describe('Add to Playout Test Single Tarck in Search', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
  })
  it('Go to Search Tracks', () => {
    GotoSearchTracks()
  })
  it('Add to Playout by Search', () => {
    AddorPublishtoPlayout(
      locators.InsideSearch3Dot, 
      locators.SearchAddtoPlayout
    )
  })
  it('Add to Playout by Search Assertion', () => {
    AddtoPlayoutAssertion(
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


