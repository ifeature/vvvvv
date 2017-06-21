import { AngularHomeworkPage } from './app.po';

describe('angular-homework App', () => {
  let page: AngularHomeworkPage;

  beforeEach(() => {
    page = new AngularHomeworkPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
