

  describe('Тестирование формы обратной связи', () => {
    before(() => {
      cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template', { timeout: 10000000 });
    });
  
    it('Заполнить форму и отправить', () => {
      // Access the iframe body
      cy.getIframeBody('#ttgraf-33').within(() => {
        // Заполнение поля "Имя"
        cy.get('.input input').eq(0).type('Иван Иванов', { force: true });
  
        // Заполнение поля "Email"
        cy.get('.input input').eq(1).type('test@example.com', { force: true });
  
        // Заполнение поля "Телефон"
        cy.get('.input input').eq(2).type('+7 900 123 45 67', { force: true });
  
        // Цель обращения (выпадающий список)
        cy.get('#downshift-0-toggle-button').click();
        cy.contains('Заказ').click();
  
        // Нажимаем кнопку "Отправить"
        cy.contains('Отправить').click();
  
        // Проверяем сообщение об успешной отправке
        cy.contains('Спасибо за ваше сообщение').should('be.visible');
      });
    });
  });
  



