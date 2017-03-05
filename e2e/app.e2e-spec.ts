import { Ng2ModalPage } from './app.po';

describe('ng2-modal App', function() {
  let page: Ng2ModalPage;

  beforeEach(() => {
    page = new Ng2ModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
