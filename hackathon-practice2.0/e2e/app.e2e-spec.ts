import { HackathonPractice2.0Page } from './app.po';

describe('hackathon-practice2.0 App', () => {
  let page: HackathonPractice2.0Page;

  beforeEach(() => {
    page = new HackathonPractice2.0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
