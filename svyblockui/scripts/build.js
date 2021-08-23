var AdmZip = require('adm-zip');

// creating archives
var zip = new AdmZip();

zip.addLocalFolder("./META-INF/", "/META-INF/");
zip.addLocalFolder("./dist/servoy/svyblockui/", "/dist/servoy/svyblockui/");
zip.addLocalFolder("./blockui/", "/blockui/");

zip.writeZip("svyblockui.zip");