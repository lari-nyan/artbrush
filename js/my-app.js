
// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:false
	},
	toolbar: {
		hideOnPageScroll: true,
	  },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'ArtBrush',
	dialog: {
		title: 'ArtBrush',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: 'profile',
    	url: 'index.html',
    	name: 'profile',
  		},
		{
		path: '/commission/',
    	url: 'commissions.html',
    	name: 'commission',
  		},
		
		{
		path: '/aaron/',
    	url: 'aaroncommi.html',
    	name: 'aaron',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;

