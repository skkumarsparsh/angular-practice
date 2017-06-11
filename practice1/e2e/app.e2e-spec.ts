import { Practice1Page } from './app.po';

describe('practice1 App', () => {
  let page: Practice1Page;

  beforeEach(() => {
    page = new Practice1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
