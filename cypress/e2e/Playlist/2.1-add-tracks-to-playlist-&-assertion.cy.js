/// <reference types="cypress" />
import {
  navigate,
  login,
  signout,
} from '../page-objects/main'

import {
  AddTracksToPlaylistAndAssertion
} from '../page-objects/mainPlaylists'

import {
  GoToSearch
} from '../page-objects/mainSearch'

var locators = require('../page-objects/locators.json');
var cred = require('../page-objects/cred.json');
var data = require('../page-objects/data.json');


before(() => {
  navigate()
})

describe('Create Playlist', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
  })

  it('Go To Search', () => {
    GoToSearch()
  })

  it('Add Tracks To Playlist And Assertion', () => {
    AddTracksToPlaylistAndAssertion()
  })
  

  // it('Should Signout', () => {
  //   signout()
  // })
})


