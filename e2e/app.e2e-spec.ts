import { AngularModuleExampleV3Page } from './app.po';

describe('angular-module-example-v3 App', () => {
  let page: AngularModuleExampleV3Page;

  beforeEach(() => {
    page = new AngularModuleExampleV3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
