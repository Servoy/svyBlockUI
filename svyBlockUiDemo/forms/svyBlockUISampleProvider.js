
/**
 * @public 
 * @return {String}
 * @override 
 * @properties={typeid:24,uuid:"55DE79E0-3867-45FB-AE8D-CB6996482228"}
 */
function getDescription() {
	return 'Blocks the UI with a message and one of 11 spinners.'
}

/**
* TODO update to latest
* @public 
* @return {String} Download URL
* @override 
* @properties={typeid:24,uuid:"E48740BD-0A6D-48B5-A1C5-6049AC9FECB5"}
*/
function getDownloadURL() {
	return 'https://github.com/Servoy/svyBlockUI/releases/download/v1.0.0/svyBlockUiDemo.servoy';
}

/**
* @public 
* @return {String}
* @override 
* @properties={typeid:24,uuid:"C4F7E5F2-D0CF-4A24-B158-FDFF7664B94D"}
*/
function getIconStyleClass() {
	return 'fa-spinner';
}

/**
* @public 
* @return {String} Additioanl info (wiki markdown supported)
* @override 
* @properties={typeid:24,uuid:"7386C79D-54ED-419B-B1F8-70AC8A02341D"}
*/
function getMoreInfo() {
	return plugins.http.getPageData('https://raw.githubusercontent.com/Servoy/svyBlockUI/master/README.md');
}

/**
* @public 
* @return {String}
* @override 
* @properties={typeid:24,uuid:"5024899B-9657-4DC8-9A51-030B05BDC8A5"}
*/
function getName() {
	return 'Block UI';
}

/**
* @public 
* @return {RuntimeForm<AbstractMicroSample>}
* @override 
* @properties={typeid:24,uuid:"70FF31CF-498E-427E-8807-0C5EF32DCDF3"}
*/
function getParent() {
	return forms.ngServiceSamples;
}


/**
* @public 
* @return {Array<String>} code lines
* @override 
* @properties={typeid:24,uuid:"1A5461B7-5121-4DF6-BF99-10DC2D2A6350"}
*/
function getSampleCode() {
	return printMethodCode(forms.svyBlockUI.blockUI);
}



/**
* @public 
* @return {String} Website URL
* @override 
* @properties={typeid:24,uuid:"6D382747-4A20-4048-9A17-485E81664508"}
*/
function getWebSiteURL() {
	return 'https://github.com/Servoy/svyBlockUI/wiki';
}
