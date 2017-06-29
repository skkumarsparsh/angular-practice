import { Practice3Page } from './app.po';

describe('practice3 App', () => {
  let page: Practice3Page;

  beforeEach(() => {
    page = new Practice3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
