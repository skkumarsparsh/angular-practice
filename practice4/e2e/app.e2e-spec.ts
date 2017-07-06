import { Practice4Page } from './app.po';

describe('practice4 App', () => {
  let page: Practice4Page;

  beforeEach(() => {
    page = new Practice4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
