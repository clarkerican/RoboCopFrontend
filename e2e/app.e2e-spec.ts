import { RobocopFrontendPage } from './app.po';

describe('robocop-frontend App', function() {
  let page: RobocopFrontendPage;

  beforeEach(() => {
    page = new RobocopFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
