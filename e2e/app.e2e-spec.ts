import { GithubSePage } from './app.po';

describe('github-se App', function() {
  let page: GithubSePage;

  beforeEach(() => {
    page = new GithubSePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
