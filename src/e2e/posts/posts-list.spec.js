describe('Poste click', () => {
  beforeEach(function() {
    browser.get('http://localhost:3000/posts');
  });


  it('Should go to detail post', () => {
    let link = element.all(by.tagName('a')).first();
    link.getAttribute('href').then(function(text) {
      let post_id = text.substr(text.indexOf("details/") + text.length);
      link.click();
      expect(browser.getCurrentUrl()).toContain('/details/' + post_id);
    });;

  });
});

