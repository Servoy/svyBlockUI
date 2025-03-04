{
	"name": "svyBlockUI",
	"displayName": "Block UI",
	"version": 1,
 	"definition": "svyblockui/blockui/blockui.js",
 	"doc": "svyblockui/blockui/blockui_doc.js",
 	"ng2Config": {
       "packageName": "@servoy/svyblockui",
       "serviceName": "SvyBlockUIService",
       "entryPoint": "dist/servoy/svyblockui",
       "moduleName": "SvyBlockUIModule"
    },
	"libraries": [
		{"name":"angular-block-ui.js", "version":"0.2.0", "url":"svyblockui/blockui/angular-block-ui/angular-block-ui.js", "mimetype":"text/javascript"}, 
		{"name":"angular-block-ui.css", "version":"0.2.0", "url":"svyblockui/blockui/angular-block-ui/angular-block-ui.css", "mimetype":"text/css"},
		{"name":"1-rotating-plane.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/1-rotating-plane.css", "mimetype":"text/css"},
		{"name":"2-double-bounce.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/2-double-bounce.css", "mimetype":"text/css"},
		{"name":"3-wave.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/3-wave.css", "mimetype":"text/css"},
		{"name":"4-wandering-cubes.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/4-wandering-cubes.css", "mimetype":"text/css"},
		{"name":"5-pulse.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/5-pulse.css", "mimetype":"text/css"},
		{"name":"6-chasing-dots.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/6-chasing-dots.css", "mimetype":"text/css"},
		{"name":"7-three-bounce.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/7-three-bounce.css", "mimetype":"text/css"},
		{"name":"8-circle.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/8-circle.css", "mimetype":"text/css"},
		{"name":"9-cube-grid.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/9-cube-grid.css", "mimetype":"text/css"},
		{"name":"10-fading-circle.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/10-fading-circle.css", "mimetype":"text/css"},
		{"name":"11-folding-cube.css", "version":"1.2.5", "url":"svyblockui/blockui/spinners/11-folding-cube.css", "mimetype":"text/css"},
		{"name":"blockui.css", "version":"1.0.0", "url":"svyblockui/blockui/blockui.css", "mimetype":"text/css"}
	],
	"model":
	{
		"delay"						: {"type": "int", "default" : 250 , "tags": {"doc": "This is the delay in milliseconds how long it must take to start show the blocking ui"} },
		"spinner"					: {"type": "string", "deprecated" : "Use block-ui-spinner class to style the spinner"},
		"spinnerBgColor"			: {"type": "color", "deprecated" : "Use block-ui-spinner class to style the spinner"},
		"messageStyleClass"			: {"type": "styleclass"},
		"overlayColor"				: {"type": "color", "default": "#ffffff", "deprecated" : "Use block-ui-main class to style the spinner overlay"},
		"overlayOpacity"			: {"type": "double", "default": 0.5, "deprecated" : "Use block-ui-main class to style the spinner overlay"}
 	},
 	"api":
 	{
	   	"show": 
	   	{
	    	"parameters": [
		    	{ "name": "message", "type": "string" },
		    	{ "name": "timeout", "type": "int", "optional": true }
			],
			"async-now": true
		},
		"stop": 
	   	{
	   		"parameters": [
		    	{ "name": "timeout", "type": "int", "optional": true }
			],
			"async-now": true
		},
		"setMessage": 
	   	{
	    	"parameters": [
		    	{ "name": "message", "type": "string" }
			]
		}
 	}
}