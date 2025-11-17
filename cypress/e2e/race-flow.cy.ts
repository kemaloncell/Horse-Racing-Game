describe('Horse Racing Game - Race Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the application title', () => {
    cy.contains('Horse Racing').should('be.visible');
  });

  it('should show empty state before generating program', () => {
    cy.contains('Ready to Race!').should('be.visible');
    cy.contains('Generate a program').should('be.visible');
  });

  it('should generate race program with 20 horses', () => {
    cy.contains('button', 'GENERATE PROGRAM').click();

    cy.get('.horse-list').should('be.visible');

    cy.contains('1ST Lap').should('be.visible');
    cy.contains('6ST Lap').should('exist');

    cy.contains('1200').should('be.visible');
    cy.contains('2200').should('exist');
  });

  it('should start race when clicking START button', () => {
    cy.contains('button', 'GENERATE PROGRAM').click();

    cy.contains('button', 'START / PAUSE').click();

    cy.get('.race-track').should('be.visible');
    cy.get('.lane').should('have.length.at.least', 1);
  });

  it('should show race results after race completes', () => {
    cy.contains('button', 'GENERATE PROGRAM').click();

    cy.contains('button', 'START / PAUSE').click();

    cy.contains('ROUND WINNER!', { timeout: 15000 }).should('be.visible');

    cy.get('.celebration-overlay').click();

    cy.contains('Results').should('be.visible');
  });

  it('should complete full championship of 6 rounds', () => {
    cy.contains('button', 'GENERATE PROGRAM').click();

    cy.contains('button', 'START / PAUSE').click();

    // Close first 5 round celebrations to progress through championship
    for (let i = 0; i < 5; i++) {
      cy.contains('ROUND WINNER!', { timeout: 15000 }).should('be.visible');
      cy.get('.celebration-overlay').click();
      cy.wait(500); // Small wait between rounds
    }

    cy.contains('CHAMPION!', { timeout: 15000 }).should('be.visible');

    cy.contains('1st').should('be.visible');
    cy.contains('2nd').should('be.visible');
    cy.contains('3rd').should('be.visible');
  });
});
