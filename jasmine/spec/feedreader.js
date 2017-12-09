
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
	describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
		 it('url not empty', function() {
			 var n=allFeeds.length;
		 var i=0;
		 
			 while(i<n)
			 {
				 expect(allFeeds[i].url).toBeDefined();
				 expect(allFeeds[i].url.length).not.toEqual(0);
				 i++;
			 }
		 });
		  

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		 it('name not empty', function() {
			 	 var n=allFeeds.length;
		 var i=0;
		 
			 while(i<n)
			 {
				 expect(allFeeds[i].name).toBeDefined();
				 expect(allFeeds[i].name.length).not.toEqual(0);
				 i++;
			 }
		 });
    });
	
    /* TODO: Write a new test suite named "The menu" */

	
	describe('The menu', function() {
		
		it('menu-hidden', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		  it('click change', function() {
			  var visibility=$('.menu-icon-link');
			  visibility.click();
			  expect($('body').hasClass('menu-hidden')).toBe(false);
			  
			  visibility.click();
			  expect($('body').hasClass('menu-hidden')).toBe(true);
		  });
	});
	//initial entries suite
	
	describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
		
		// check if it has an initial entry
        it('initial entry', function(done) {
            expect($('.feed .entry').length).not.toEqual(0);
            done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */

	describe('New Feed Selection', function() {
		 
		 
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		 it('content-change', function(done) {
			 var firstFeed;
		     var secondFeed;
		 loadFeed(0,function() {
				 firstFeed=$('.feed').html();
				 loadFeed(1,function () {
			        secondFeed=$('.feed').html();
					expect(firstFeed.length).not.toEqual(0);
					expect(secondFeed.length).not.toEqual(0);
					expect(firstFeed).not.toEqual(secondFeed);	
					done();
				});
		 
			}); 
		 });
	});	


}());
