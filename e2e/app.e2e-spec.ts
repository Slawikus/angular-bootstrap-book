import { UpdateToAng4Page } from './app.po';

describe('update-to-ang4 App', () => {
  let page: UpdateToAng4Page;

  beforeEach(() => {
    page = new UpdateToAng4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
