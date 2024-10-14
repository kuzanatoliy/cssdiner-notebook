import { levels } from '../fixtures/levels';

describe('CSS Diner', () => {
  it('Should open page', () => {
    cy.visit('https://flukeout.github.io');
    cy.get('header').should('contain', 'CSS Diner');
  });

  const testLevel = (levelNumber) => {
    cy.visit('https://flukeout.github.io');
    cy.get('.level-menu-toggle-wrapper').click();
    cy.get(`.level-number`)
      .contains(levelNumber + 1)
      .click();
    cy.get('.level-header').should('not.have.class', 'completed');
    cy.get('.input-strobe').type(levels[levelNumber].join('\n'));
    cy.get('.enter-button').click();
    cy.get('.level-menu-toggle-wrapper').click();
    cy.get(`.level-number`)
      .contains(levelNumber + 1)
      .click();
    cy.get('.level-header').should('have.class', 'completed');
  };

  it('Should validate first task', () => {
    testLevel(0);
  });

  it('Should validate second task', () => {
    testLevel(1);
  });

  it('Should validate third task', () => {
    testLevel(2);
  });

  it('Should validate forth task', () => {
    testLevel(3);
  });

  it('Should validate fifth task', () => {
    testLevel(4);
  });

  it('Should validate sixth task', () => {
    testLevel(5);
  });

  it('Should validate seventh task', () => {
    testLevel(6);
  });

  it('Should validate eighth task', () => {
    testLevel(7);
  });

  it('Should validate nineth task', () => {
    testLevel(8);
  });

  it('Should validate tenth task', () => {
    testLevel(9);
  });

  it('Should validate eleventh task', () => {
    testLevel(10);
  });

  it('Should validate twelfth task', () => {
    testLevel(11);
  });

  it('Should validate thirteenth task', () => {
    testLevel(12);
  });

  it('Should validate fourteenth task', () => {
    testLevel(13);
  });

  it('Should validate fifteenth task', () => {
    testLevel(14);
  });

  it('Should validate sixteenth task', () => {
    testLevel(15);
  });

  it.skip('Should validate seventeenth task', () => {
    testLevel(16);
  });

  it.skip('Should validate eighteenth task', () => {
    testLevel(17);
  });

  it.skip('Should validate nineteenth task', () => {
    testLevel(18);
  });

  it.skip('Should validate twentyth task', () => {
    testLevel(19);
  });

  it.skip('Should validate twenty first task', () => {
    testLevel(20);
  });

  it.skip('Should validate twenty second task', () => {
    testLevel(21);
  });

  it.skip('Should validate twenty third task', () => {
    testLevel(22);
  });

  it.skip('Should validate twenty fourth task', () => {
    testLevel(23);
  });
});
