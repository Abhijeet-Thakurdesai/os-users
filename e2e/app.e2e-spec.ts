import { UsersOpenspecimenPage } from './app.po';

describe('users-openspecimen App', function() {
  let page: UsersOpenspecimenPage;

  beforeEach(() => {
    page = new UsersOpenspecimenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
