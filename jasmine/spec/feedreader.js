/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('allFeeds variables are defined and the array is not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined and not empty', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);
            }
        })
        /* The test loop through the allFeeds variables to check that 
         * each feed's name is defined and that the name is not empty 
         */
        it('name is defined and not empty', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(0);
            }
         })
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* The test ensures the menu element is
         * hidden by default by checking if the body element
         * has the 'menu-hidden' class.
         */
        
        it('menu element is hidden', function () {
            var body = $('body');
            expect((body).hasClass('menu-hidden')).toEqual(true);
        })
         /* The test ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('menu changes visibility', function() {
            var menuIcon = $('.menu-icon-link');
            var body = $('body');
            menuIcon.click();
            expect((body).hasClass('menu-hidden')).toEqual(false);
            menuIcon.click();
            expect((body).hasClass('menu-hidden')).toEqual(true);
          })
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* The test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */ 
         var container = $('.feed');
         beforeEach (function(done) {
           loadFeed(0);
            done();
         });
         it('container is not empty', function(done) {
            expect(container).not.toBe(0);
            done();
         })
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* The test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var container = $('.feed');
        var src = container.url;
        beforeEach( function(done) {
            loadFeed(0);
            done();
        });
        it('content changes', function(done) {
            expect(container).not.toContain(src);
            done();
        })
    });        
}());
