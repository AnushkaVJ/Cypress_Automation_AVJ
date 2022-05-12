/// <reference types="cypress" />
import {
  navigate,
  login,
  playlists,
} from '../page-objects/main'


  before(() => {
    cy.viewport(1920, 1080)
    navigate()
    cy.percySnapshot();
  })

  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

  describe('Navigate All Locations', () => {
    it('Should Login', () => {
      login('anushkaj@adelanka.com', 'Abc123!@#')
    })

    // it('Playlists Module', () => {
    //   playlists()
    // })
})
