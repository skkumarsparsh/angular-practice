import { Practice2Page } from './app.po';

describe('practice2 App', () => {
  let page: Practice2Page;

  beforeEach(() => {
    page = new Practice2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
