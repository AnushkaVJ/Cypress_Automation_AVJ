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



describe('Filter Values Conversion Into a Lowercase Form', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
  })
  // it('Go To Upload Session', () => {
  //   GoToUploadSession(
  //     locators.SelectedSession2
  //   )
  // })

  // it('Track Edit - Chnage Field Values with OR', () => {
  //   TrackEditwithANDOR(
  //     locators.Upload1stTrack3dot,
  //     locators.UploadTrackEdit1,
  //     data.UploadTrackTitleOR
  //   )
  // })
  it('Go To Advanced Search - Ashvin Track Search Config', () => {
    GoToAdvancedSearch()
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Adaptor From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Adaptor
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select AdminNotes From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.AdminNotes
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select AdminTags From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.AdminTags
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select AlternateTitle From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.AlternativeTitle
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Arranger From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Arranger
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select BBCAlbumBarcode From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.BBCAlbumBarcode
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Catalog# From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.CatalogNo
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Composer From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Composer
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select ComposerLyricistr From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.ComposerLyricist
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  ////////////////////check issue//////////////////////////////////////////////////////////
  it('Select Contributors From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Contributors
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Genres From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Genres
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Instruments From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Instruments
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select ISRC From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.ISRC
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select ISWC From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.ISWC
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Keywords From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Keywords
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Lyricist From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Lyricist
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Moods From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Moods
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select OriginalPublisher From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.OriginalPublisher
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select PLine From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.PLine
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Performer From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Performer
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select AlbumArtist From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.AlbumArtist
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select AlbumTitle From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.AlbumTitle
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select AlbumNotes From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.AlbumNotes
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Publisher From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Publisher
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select RecordLabel From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.RecordLabel
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Styles From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Styles
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select SubAdaptor From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.SubAdaptor
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select SubArranger From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.SubArranger
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select SubLyricist From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.SubLyricist
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select SubPublisher From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.SubPublisher
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select TrackNotes From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.TrackNotes
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Track Title From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.TrackTitle
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select VersionTitle From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.VersionTitle
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Translator From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Translator
    )
  })
  it('Type Value and Received Result Assertion', () => {
    TypeValueandReceivedResultAssertion(
      locators.CommonSearchField,
      data.SearchTrackTitleOR,
      data.UploadTrackTitleOR
    )
  })






    // it('Should Signout', () => {
  //   signout()
  // })
})


