import { getGreeting } from '../support/app.po';

describe('material-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to material-app!');
  });
});
