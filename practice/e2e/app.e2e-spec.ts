import { PracticePage } from './app.po';

describe('practice App', () => {
  let page: PracticePage;

  beforeEach(() => {
    page = new PracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
