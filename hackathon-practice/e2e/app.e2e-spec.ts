import { HackathonPracticePage } from './app.po';

describe('hackathon-practice App', () => {
  let page: HackathonPracticePage;

  beforeEach(() => {
    page = new HackathonPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
