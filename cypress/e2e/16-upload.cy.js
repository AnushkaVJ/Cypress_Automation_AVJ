/// <reference types="cypress" />
import {
  navigate,
  login,
  signout,
} from '../page-objects/main'

import {
  GoToUploadSession,
  TrackEditwithANDOR
} from '../page-objects/mainUpload'

import {
  GoToAdvancedSearch,
  SelectSearchFieldFromUserPreferences,
  TypeValueandReceivedResultAssertion
} from '../page-objects/mainSearch'

var locators = require('../page-objects/locators.json');
var cred = require('../page-objects/cred.json');
var data = require('../page-objects/data.json');


before(() => {
  navigate()
})

// beforeEach(() => {
//   cy.viewport(1920, 1080)
// })

describe('Upload Track Edit', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
  })

  it('Go To Upload Session', () => {
    GoToUploadSession(
      locators.SelectedSession //Session 654 Session 5
      )
  })
  it('Track Edit - Chnage Track Title with AND', () => {
    TrackEditwithANDOR(
      locators.Upload1stTrack3dot,
      locators.UploadTrackEdit1,
      data.UploadTrackTitleAND
    )
  })
  

    // it('Should Signout', () => {
  //   signout()
  // })
})


