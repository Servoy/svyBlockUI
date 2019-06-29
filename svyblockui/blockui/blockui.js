angular.module('svyBlockUI', ['servoy', 'blockUI']).config(function(blockUIConfig) {
	blockUIConfig.blockBrowserNavigation = true;
	blockUIConfig.resetOnException = true;
	blockUIConfig.message = null;
	blockUIConfig.autoBlock = false;
}).factory("svyBlockUI", function($services, $timeout, blockUI, blockUIConfig) {
		
		var scope = $services.getServiceScope('svyBlockUI');

		function stopBlocker() {
			blockUI.stop();
			blockUI.reset();
		}

		return {
			/**
			 * Shows the UI Blocker
			 *
			 * @param {String} [message]
			 * @param {Number} [timeout] optional number of milliseconds until the blocker is hidden
			 *
			 */
			show: function(message, timeout) {
				var defaultDelay = scope.model.delay ? scope.model.delay : 0;
				
				if (timeout > 0) {
					// change the block delay of angular-block-ui
					blockUIConfig.delay = timeout
				} else {
					// change the block delay of angular-block-ui
					blockUIConfig.delay = defaultDelay;
				}
				
				scope.$apply(function() {
					// Apply when event called without the knowledge of angular
					blockUI.start(message);
					
					// change back the delay to default
					blockUIConfig.delay = defaultDelay;
				});
			},
			/**
			 * Updates the message of the UI Blocker
			 *
			 * @param {String} message
			 */
			setMessage: function(message) {
				blockUI.message(message);
			},
			/**
			 * Stops all UI Blockers
			 *
			 * @param {Number} [timeout] optional number of milliseconds until the blocker is hidden
			 */
			stop: function(timeout) {
				if (timeout > 0) {
					$timeout(stopBlocker, timeout);
				} else {
					// Apply when event called without the knowledge of angular
					scope.$apply(function() {
						stopBlocker();
					});
				}
			}
		}
	}).run(function($rootScope, $services, $templateCache, $document, blockUIConfig) {
	var scope = $services.getServiceScope('svyBlockUI');

	var html = '<div class=\"block-ui-overlay\"></div>\
			<div class=\"block-ui-message-container\" aria-live=\"assertive\" aria-atomic=\"true\">\
				<div class=\"block-ui-message\" ng-if="state.message">{{state.message}}</div>\
				<div class=\"block-ui-spinner\"></div>\
			</div>';

	$templateCache.put('angular-block-ui/angular-block-ui.ng.html', html);

	function setSpinnerHtml() {
		var spinnerHtml = '';

		if (scope.model.messageStyleClass) {
			$('.block-ui-message').addClass(scope.model.messageStyleClass);
		} else {
			var element = $('.block-ui-message');
			element.removeClass();
			element.addClass('block-ui-message');
		}

		if (scope.model.overlayColor) {
			$('.block-ui-overlay').css('background-color', scope.model.overlayColor);
		}
		if (scope.model.overlayOpacity && scope.model.overlayOpacity > 0 && scope.model.overlayOpacity <= 1) {
			$('.block-ui-overlay').css('opacity', scope.model.overlayOpacity);
		}

		var selector;
		var spinner = scope.model.spinner ? scope.model.spinner.toLowerCase() : null;

		if (spinner === 'rotating plane') {
			spinnerHtml = '<div class="sk-rotating-plane"></div>';
			selector = ".sk-rotating-plane";
		} else if (spinner === 'double bounce') {
			spinnerHtml = '\
				<div class="sk-double-bounce">\
			        <div class="sk-child sk-double-bounce1"></div>\
			        <div class="sk-child sk-double-bounce2"></div>\
		        </div>'
			selector = ".sk-child";
		} else if (spinner === 'wave') {
			spinnerHtml = '\
					<div class="sk-wave">\
				        <div class="sk-rect sk-rect1"></div>\
				        <div class="sk-rect sk-rect2"></div>\
				        <div class="sk-rect sk-rect3"></div>\
				        <div class="sk-rect sk-rect4"></div>\
				        <div class="sk-rect sk-rect5"></div>\
				      </div>';
			selector = ".sk-rect";
		} else if (spinner === 'wandering cubes') {
			spinnerHtml = '\
					<div class="sk-wandering-cubes">\
						<div class="sk-cube sk-cube1"></div>\
				        <div class="sk-cube sk-cube2"></div>\
				    </div>';
			selector = ".sk-cube";
		} else if (spinner === 'pulse') {
			spinnerHtml = '\
					<div class="sk-spinner sk-spinner-pulse"></div>';
			selector = ".sk-spinner-pulse";
		} else if (spinner === 'chasing dots') {
			spinnerHtml = '\
					<div class="sk-chasing-dots">\
						<div class="sk-child sk-dot1"></div>\
						<div class="sk-child sk-dot2"></div>\
					</div>';
			selector = ".sk-child";
		} else if (spinner === 'three bounce') {
			spinnerHtml = '\
					<div class="sk-three-bounce"">\
						<div class="sk-child sk-bounce1" style="{{spinnerCss}}"></div>\
						<div class="sk-child sk-bounce2" style="{{spinnerCss}}"></div>\
						<div class="sk-child sk-bounce3" style="{{spinnerCss}}"></div>\
			        </div>';
			selector = ".sk-child";
		} else if (spinner === 'circle') {
			spinnerHtml = '\
					<div class="sk-circle">\
				        <div class="sk-circle1 sk-child"></div>\
				        <div class="sk-circle2 sk-child"></div>\
				        <div class="sk-circle3 sk-child"></div>\
				        <div class="sk-circle4 sk-child"></div>\
				        <div class="sk-circle5 sk-child"></div>\
				        <div class="sk-circle6 sk-child"></div>\
				        <div class="sk-circle7 sk-child"></div>\
				        <div class="sk-circle8 sk-child"></div>\
				        <div class="sk-circle9 sk-child"></div>\
				        <div class="sk-circle10 sk-child"></div>\
				        <div class="sk-circle11 sk-child"></div>\
				        <div class="sk-circle12 sk-child"></div>\
			        </div>';
		} else if (spinner === 'cube grid') {
			spinnerHtml = '\
					<div class="sk-cube-grid">\
				        <div class="sk-cube sk-cube1"></div>\
				        <div class="sk-cube sk-cube2"></div>\
				        <div class="sk-cube sk-cube3"></div>\
				        <div class="sk-cube sk-cube4"></div>\
				        <div class="sk-cube sk-cube5"></div>\
				        <div class="sk-cube sk-cube6"></div>\
				        <div class="sk-cube sk-cube7"></div>\
				        <div class="sk-cube sk-cube8"></div>\
				        <div class="sk-cube sk-cube9"></div>\
			        </div>';
			selector = ".sk-cube";
		} else if (spinner === 'fading circle') {
			spinnerHtml = '\
					<div class="sk-fading-circle">\
				        <div class="sk-circle1 sk-circle"></div>\
				        <div class="sk-circle2 sk-circle"></div>\
				        <div class="sk-circle3 sk-circle"></div>\
				        <div class="sk-circle4 sk-circle"></div>\
				        <div class="sk-circle5 sk-circle"></div>\
				        <div class="sk-circle6 sk-circle"></div>\
				        <div class="sk-circle7 sk-circle"></div>\
				        <div class="sk-circle8 sk-circle"></div>\
				        <div class="sk-circle9 sk-circle"></div>\
				        <div class="sk-circle10 sk-circle"></div>\
				        <div class="sk-circle11 sk-circle"></div>\
				        <div class="sk-circle12 sk-circle"></div>\
			        </div>';
		} else if (spinner === 'folding cube') {
			spinnerHtml = '\
					<div class="sk-folding-cube">\
				        <div class="sk-cube1 sk-cube"></div>\
				        <div class="sk-cube2 sk-cube"></div>\
				        <div class="sk-cube4 sk-cube"></div>\
				        <div class="sk-cube3 sk-cube"></div>\
			        </div>';
		}

		$document.find('div.block-ui-spinner').html(spinnerHtml);

		if (selector && scope.model.spinnerBgColor) {
			$(selector).css('background-color', scope.model.spinnerBgColor);
		}
	}

	scope.$watch('model', function(newValue, oldValue) {
			if (newValue) {
				setSpinnerHtml();
				
				// change the default block delay
				blockUIConfig.delay = newValue.delay ? newValue.delay : 0;
			}
		}, true);
})
