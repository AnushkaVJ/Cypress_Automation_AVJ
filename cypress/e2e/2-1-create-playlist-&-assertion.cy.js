/// <reference types="cypress" />
import {
  navigate,
  login,
  signout,
} from '../page-objects/main'

import {
  GoToMyPlaylists,
  CreatePlaylist,
  CreatePlaylistAssertion
} from '../page-objects/mainPlaylists'

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

  it('Go To My Playlists', () => {
    GoToMyPlaylists()
  })

  it('Create Playlist', () => {
    CreatePlaylist(
      data.PlaylistEditParameter, 
      2022, 
      5
    )
  })

  it('Created Playlist Assertion', () => {
    CreatePlaylistAssertion()
  })
  

  // it('Should Signout', () => {
  //   signout()
  // })
})


