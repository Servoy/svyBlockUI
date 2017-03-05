/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"81A640BD-C24A-45F4-8B6A-56B05AFFAEE8"}
 */
function onTabChange(previousIndex, event) {
	elements.lblSolutionName.text = elements.tabs.getTabTextAt(elements.tabs.tabIndex);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"47A3340F-3CCA-4C68-87CF-D66774D6ECB8"}
 */
function onShow(firstShow, event) {
	onTabChange(-1, event);
}
