import { AngularTwoRoutingPage } from './app.po';

describe('angular-two-routing App', () => {
  let page: AngularTwoRoutingPage;

  beforeEach(() => {
    page = new AngularTwoRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
