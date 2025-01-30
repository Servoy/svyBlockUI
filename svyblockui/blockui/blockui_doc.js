/* Block UI Service can show an overlay over the whole browser page while some (long) operations are being executed. It prevents any interaction with the UI. The overlay UI can be customized from CSS, using block-ui-main and block-ui-spinner classes. */

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
