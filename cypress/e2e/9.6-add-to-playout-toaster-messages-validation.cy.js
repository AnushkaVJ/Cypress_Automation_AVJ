/// <reference types="cypress" />
import {
  navigate,
  login, signout,
} from '../page-objects/main'

import {
  GotoSearchTracks,
  SelectResultPerPageinPagination,
  SelectAll,
  MultipleTracksAddtoPlayout,
  VerifyTracksAddedToasterMessage,
  GotoPlayoutAndSelectCreatedPlayout,
  RemoveTracksInPlayout,
  SelectUpToGivenCount,
  VerifyTracksAddedToasterMessageForMoreThan50Tracks,
} from '../page-objects/mainPlayout'

var locators = require('../page-objects/locators.json');
var cred = require('../page-objects/cred.json');

before(() => {
  navigate()
})

// beforeEach(() => {
//   cy.viewport(1920, 1080)
// })

describe('Add to Playout Toaster Messages Validation', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
  })
  //50 Tracks
  it('Go To Playout And Select Created Playout', () => {
    GotoPlayoutAndSelectCreatedPlayout()
  })
  it('Remove If Tracks are In The Playout Session', () => {
    RemoveTracksInPlayout()
  })
  it('Go to Search Tracks', () => {
    GotoSearchTracks()
  })
  it('Select All 50 Tracks', () => {
    SelectAll()
  })
  it('50 Tracks Tracks Publish to Playout', () => {
    MultipleTracksAddtoPlayout()
  })
  it('Verify Tracks Added Toaster Message For 50 Tracks', () => {
    VerifyTracksAddedToasterMessage()
  })
  it('Go To Playout And Select Created Playout', () => {
    GotoPlayoutAndSelectCreatedPlayout()
  })
  it('Remove If Tracks are In The Playout Session', () => {
    RemoveTracksInPlayout()
  })

  //25 Tracks
  //loop through search 1
  it('Go to Search Tracks Again', () => {
    GotoSearchTracks()
  })
  it('Select Result Per Page as 25 in Pagination', () => {
    SelectResultPerPageinPagination(
      locators.Pagination,
      locators.Pagination25
    )
  })
  it('Select All 25 Tracks', () => {
    SelectAll()
  })
  it('25 Tracks Tracks Publish to Playout', () => {
    MultipleTracksAddtoPlayout()
  })
  it('Verify Tracks Added Toaster Message For 25 Tracks', () => {
    VerifyTracksAddedToasterMessage()
  })
  it('Go To Playout And Select Created Playout Again', () => {
    GotoPlayoutAndSelectCreatedPlayout()
  })
  it('Remove If Tracks are In The Playout Session Again', () => {
    RemoveTracksInPlayout()
  })


  //loop through search 2
  it('Go to Search Tracks Again', () => {
    GotoSearchTracks()
  })
  it('Select Result Per Page as 100 in Pagination', () => {
    SelectResultPerPageinPagination(
      locators.Pagination,
      locators.Pagination100
    )
  })
  it('Select 51 Tracks', () => {
    SelectUpToGivenCount(52)
  })
  it('51 Tracks Tracks Publish to Playout', () => {
    MultipleTracksAddtoPlayout()
  })
  it('Verify Tracks Added Toaster Message For 51 Tracks', () => {
    VerifyTracksAddedToasterMessageForMoreThan50Tracks()
  })
  it('Go To Playout And Select Created Playout Again', () => {
    GotoPlayoutAndSelectCreatedPlayout()
  })
  it('Remove If Tracks are In The Playout Session Again', () => {
    RemoveTracksInPlayout()
  })
    // it('Should Signout', () => {
  //   signout()
  // })
})




