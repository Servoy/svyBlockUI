/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3BDCB5C9-739E-4577-9642-95CA7BFC29F1"}
 */
var spinnerColor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"32B3A75E-0248-40AE-9A23-6C3BB1BCCAB3",variableType:4}
 */
var useCustomStyle = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C8FC03DE-45B4-442C-BD90-DF3189E440D7",variableType:8}
 */
var overlayOpacity = 0.5;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9C249027-60E9-4EA7-9217-57112FE32D97"}
 */
var overlayColor = '#ffffff';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"25090982-1ECA-4203-AA0D-D25D579CE10E"}
 */
var spinner = 'Three bounce';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"74F49696-C17B-4D80-ADF7-77CD13BA24B8"}
 */
function onAction(event) {
	plugins.svyBlockUI.overlayColor = overlayColor;
	plugins.svyBlockUI.overlayOpacity = overlayOpacity;
	plugins.svyBlockUI.spinner = spinner;
	plugins.svyBlockUI.spinnerBgColor = spinnerColor;
	
	if (useCustomStyle) {
		plugins.svyBlockUI.messageStyleClass = 'svy-block-ui-message';
	} else {
		plugins.svyBlockUI.messageStyleClass = null;
	}
	
	plugins.svyBlockUI.show('Blocking ...');
	
	for (var i = 1; i <= 10; i++) {
		plugins.svyBlockUI.setMessage('Blocking ... ' + i);
		application.sleep(1000);
	}
	
	plugins.svyBlockUI.stop();
}
