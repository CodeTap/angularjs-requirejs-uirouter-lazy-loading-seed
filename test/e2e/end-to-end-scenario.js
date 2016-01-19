'use strict';


describe('this app', function() {

    browser.get('');

    it('should automatically bring you to the home page', function() {
        expect(browser.getLocationAbsUrl()).toMatch("");
    });


    describe('about us page', function()
    {

        beforeEach(function()
        {
            browser.get('/about');
        });

        it('should go to the about page', function()
        {
            expect(browser.getLocationAbsUrl()).toMatch("/about");
        });


    });

    describe('about us page child state 1', function()
    {

        beforeEach(function()
        {
            browser.get('/about/child1');
        });

        it('should go to the about page with the child 1', function()
        {
            expect(browser.getLocationAbsUrl()).toMatch("/about/child1");
        });


    });

    describe('about us page child state 2', function()
    {

        beforeEach(function()
        {
            browser.get('/about/child2');
        });

        it('should go to the about page with the child 2', function()
        {
            expect(browser.getLocationAbsUrl()).toMatch("/about/child2");
        });


    });

    describe('contact page', function()
    {

        beforeEach(function()
        {
            browser.get('/contact');
        });

        it('should go to the contact page', function()
        {
            expect(browser.getLocationAbsUrl()).toMatch("/contact");
        });


    });
});
