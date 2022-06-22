/// <reference types="cypress" />
import {
  navigate,
  login,
  signout,
} from '../page-objects/main'

import {
  GoToUploadSession,
  AddToAlbumByClickingOn3DOt,
  GoToUploadAlbums,
  CreateUploadAlbums,
  AlbumEditAssertion,
  AddToAlbumAssertion,
  DeleteCreatedAlbum
} from '../page-objects/mainUpload'

var locators = require('../page-objects/locators.json');
var cred = require('../page-objects/cred.json');
var data = require('../page-objects/data.json');


before(() => {
  navigate()
})

describe('Upload Add To Album', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
  })

  it('Go To Uploads Albums', () => {
    GoToUploadAlbums()
  })

  it('Create Upload Albums', () => {
    CreateUploadAlbums(
      data.UploadTrackEditParameter,
      2022,
      5
    )
  })

  it('Album Edit Assertion', () => {
    AlbumEditAssertion()
  })
  

  it('Go To Upload Session', () => {
    GoToUploadSession(
      locators.SelectedSession 
    )
  })

  it('Add To Album By Clicking On 3 Dot Menu', () => {
    AddToAlbumByClickingOn3DOt(
      locators.Upload1stTrack3dot,
      locators.UploadAddToAlbum,
    )
  })

  it('Add To Album Assertion', () => {
    AddToAlbumAssertion()
  })
  it('Go To Uploads Albums Again', () => {
    GoToUploadAlbums()
  })
  it('Delete Created Album', () => {
    DeleteCreatedAlbum()
  })


  // it('Should Signout', () => {
  //   signout()
  // })
})


