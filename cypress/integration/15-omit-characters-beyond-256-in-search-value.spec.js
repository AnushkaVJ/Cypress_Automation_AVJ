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
  OmitCharactersBeyond256inSearchValue,
  SelectFilterFromSearchField,
  TestPreviousCheckBox
} from '../page-objects/mainSearch'

var locators = require('../page-objects/locators.json');
var cred = require('../page-objects/cred.json');
var data = require('../page-objects/data.json');


before(() => {
  navigate()
})

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('Filter Values Conversion Into a Lowercase Form', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
  })
  // it('Go To Upload Session', () => {
  //   GoToUploadSession(
  //     locators.SelectedSession3
  //   )
  // })
  // it('Track Edit - Add Values With 256 Characters', () => {
  //   TrackEditwithANDOR(
  //     locators.Upload1stTrack3dot,
  //     locators.UploadTrackEdit1,
  //     data.UploadN256Characters
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
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  // //////////////////////////////issue no value/////////////////////////////////
  // it('Select AdminNotes From User Preferences', () => {
  //   SelectSearchFieldFromUserPreferences(
  //     locators.AdminNotes
  //   )
  // })
  // it('Select Exact Filter From Search Field', () => {
  //   SelectFilterFromSearchField(
  //     'Equal'
  //   )
  // })
  // it('Type Value and Received Result Assertion', () => {
  //   OmitCharactersBeyond256inSearchValue(
  //     locators.CommonSearchField,
  //     data.Search256Characters,
  //     locators.AdminNotes,
  //     data.UploadN256Characters
  //   )
  // })

  ////////////////////////////////////////////////////////////////////////////
  it('Select AlternateTitle From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.AlternativeTitle
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Arranger From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Arranger
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Composer From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Composer
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select ComposerLyricistr From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.ComposerLyricist
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  // ////////////////////check issue//////////////////////////////////////////////////////////
  // it('Select Contributors From User Preferences', () => {
  //   SelectSearchFieldFromUserPreferences(
  //     locators.Contributors
  //   )
  // })
  // it('Select Exact Filter From Search Field', () => {
  //   SelectFilterFromSearchField(
  //     'Equal'
  //   )
  // })
  // it('Type Value and Received Result Assertion', () => {
  //   OmitCharactersBeyond256inSearchValue(
  //     locators.CommonSearchField,
  //     data.Search256Characters,
  //     locators.Contributors,
  //     data.UploadN256Characters
  //   )
  // })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Genres From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Genres
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Instruments From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Instruments
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Keywords From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Keywords
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Lyricist From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Lyricist
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Moods From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Moods
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select OriginalPublisher From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.OriginalPublisher
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  // ///////////////////////not working exact search///////////////////////////////////////////////
  // it('Select PLine From User Preferences', () => {
  //   SelectSearchFieldFromUserPreferences(
  //     locators.PLine
  //   )
  // })
  // it('Select Exact Filter From Search Field', () => {
  //   SelectFilterFromSearchField(
  //     'Equal'
  //   )
  // })
  // it('Type Value and Received Result Assertion', () => {
  //   OmitCharactersBeyond256inSearchValue(
  //     locators.CommonSearchField,
  //     data.Search256Characters,
  //     locators.PLine,
  //     data.UploadN256Characters
  //   )
  // })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Performer From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Performer
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select AlbumArtist From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.AlbumArtist
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select AlbumTitle From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.AlbumTitle
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select AlbumNotes From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.AlbumNotes
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Publisher From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Publisher
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select RecordLabel From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.RecordLabel
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Styles From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Styles
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select SubAdaptor From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.SubAdaptor
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select SubArranger From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.SubArranger
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select SubLyricist From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.SubLyricist
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select SubPublisher From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.SubPublisher
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select TrackNotes From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.TrackNotes
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Track Title From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.TrackTitle
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select VersionTitle From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.VersionTitle
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })

  //////////////////////////////////////////////////////////////////////////////
  it('Select Translator From User Preferences', () => {
    SelectSearchFieldFromUserPreferences(
      locators.Translator
    )
  })
  it('Select Exact Filter From Search Field', () => {
    SelectFilterFromSearchField(
      'Equal'
    )
  })
  it('Type Value and Received Result Assertion', () => {
    OmitCharactersBeyond256inSearchValue(
      locators.CommonSearchField,
      data.Search256Characters,
      data.UploadN256Characters
    )
  })






  it('Should Signout', () => {
    signout()
  })
})


