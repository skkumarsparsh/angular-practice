import { LoadingbarPage } from './app.po';

describe('loadingbar App', () => {
  let page: LoadingbarPage;

  beforeEach(() => {
    page = new LoadingbarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
