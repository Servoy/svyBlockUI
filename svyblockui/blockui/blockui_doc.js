/* Block UI Service can show an overlay over the whole browser page while some (long) operations are being executed. It prevents any interaction with the UI. The overlay UI can be customized from CSS, using block-ui-main and block-ui-spinner classes. */

/**
 * This is the delay in milliseconds how long it must take to start show the blocking ui
 */
var delay;

/**
 * (Deprecated) The spinner configuration as a string. Use CSS classes (block-ui-spinner) to style the spinner.
 */
var spinner;

/**
 * (Deprecated) The background color for the spinner. Use CSS classes (block-ui-spinner) to style the spinner.
 */
var spinnerBgColor;

/**
 * CSS style class applied to the message area of the blocking UI.
 */
var messageStyleClass;

/**
 * (Deprecated) The overlay color for the blocking UI. Use CSS classes (block-ui-main) to style the overlay.
 */
var overlayColor;

/**
 * (Deprecated) The overlay opacity for the blocking UI. Use CSS classes (block-ui-main) to style the overlay.
 */
var overlayOpacity;


/**
 * Shows the UI Blocker
 *
 * @param {String} message The message to display while the UI is blocked.
 * @param {Number} [timeout] Number of milliseconds until the blocker is hidden
 *
 */
function show(message, timeout) {
}
/**
 * Updates the message of the UI Blocker
 *
 * @param {String} message The new message to display while the UI is blocked.
 */
function setMessage(message) {
}
/**
 * Stops all UI Blockers
 *
 * @param {Number} [timeout] optional number of milliseconds until the blocker is hidden
 */
function stop(timeout) {
}
