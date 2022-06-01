/// <reference types="cypress" />
import {
  navigate,
  login,signout,}from'../page-objects/main'

import {
  AddorPublishtoPlayout,
  GotoSearchTracks,
  VerifyValidationMessage,
  GotoPlayoutAndSelectCreatedPlayout,
  RemoveTracksInPlayout,
} from '../page-objects/mainPlayout'

var locators = require('../page-objects/locators.json');
var cred = require('../page-objects/cred.json');

before(() => {
  navigate()
})

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('Add to Playout Same Track Validation', () => {
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
  it('Add to Playout Same Track Again', () => {
    AddorPublishtoPlayout(
      locators.InsideSearch3Dot,
      locators.SearchAddtoPlayout
    )
  })
  it('Verify Validation Message', () => {
    VerifyValidationMessage()
  })
  
  it('Go To Playout And Select Created Playout', () => {
    GotoPlayoutAndSelectCreatedPlayout()
  })
  it('Remove Tracks In Playout', () => {
    RemoveTracksInPlayout()
  })
  it('Should Signout', () => {
    signout()
  })
})


