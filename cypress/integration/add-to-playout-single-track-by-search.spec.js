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

before(() => {
  cy.viewport(1920, 1080)
  navigate()
})

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('Add to Playout Test Single Tarck in Search', () => {
  it('Should Login', () => {
    login('anushkaj@adelanka.com', 'Abc123!@#')
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
  it('Remove Tracks In Playout', () => {
    RemoveTracksInPlayout()
  })
  it('Should Signout', () => {
    signout()
  })
})

