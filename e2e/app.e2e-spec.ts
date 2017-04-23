import { HiraganaAppPage } from './app.po';

describe('hiragana-app App', () => {
  let page: HiraganaAppPage;

  beforeEach(() => {
    page = new HiraganaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
