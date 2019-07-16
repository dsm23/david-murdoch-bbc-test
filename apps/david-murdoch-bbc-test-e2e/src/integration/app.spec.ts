import { getGreeting } from '../support/app.po';

describe('david-murdoch-bbc-test', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to david-murdoch-bbc-test!');
  });
});
