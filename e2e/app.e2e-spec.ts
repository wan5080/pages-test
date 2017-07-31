import { PagesTestPage } from './app.po';

describe('pages-test App', () => {
  let page: PagesTestPage;

  beforeEach(() => {
    page = new PagesTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
