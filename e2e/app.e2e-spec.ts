import { PoczeraPage } from './app.po';

describe('poczera', () => {
  let page: PoczeraPage;

  beforeEach(() => {
    page = new PoczeraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to poczera!');
  });
});
