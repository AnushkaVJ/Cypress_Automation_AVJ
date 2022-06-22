/// <reference types="cypress" />
import {
  navigate,
  login,
  signout,
} from '../page-objects/main'

import {
  GoToUploadSession,
  TrackEditwithANDOR,
  SaveUploadEditTrack,
  TrackEdit2,
  TrackEditAssertion,
  GoToTrackEditbyClickingOn3DOt
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

  it('Track Edit - Chnage Track Details 1', () => {
    TrackEditwithANDOR(
      locators.Upload1stTrack3dot,
      locators.UploadTrackEdit1,
      data.UploadTrackEditParameter
    )
  })

  //dont uncomment/////////////
  // it('Go To Track Edit by Clicking On 3 Dot Menu', () => {
  //   GoToTrackEditbyClickingOn3DOt(
  //     locators.Upload1stTrack3dot,
  //     locators.UploadTrackEdit1
  //   )
  // })

  it('Track Edit - Chnage Track Details 2', () => {
    TrackEdit2(
      locators.SelectOrigin,
      locators.SelectSubOrigin,
      locators.SelectRole,
      data.UploadTrackEditParameter,
      4,
      4,
      2022
    )
  })

  it('Save Upload Edit Track', () => {
    SaveUploadEditTrack()
  })

  it('Track Edit Value Assertion', () => {
    TrackEditAssertion()
  })

  // it('Should Signout', () => {
  //   signout()
  // })
})


