cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.innoquant.moca.phonegap.MOCA",
    "file": "plugins/com.innoquant.moca.phonegap/www/MOCA.js",
    "pluginId": "com.innoquant.moca.phonegap",
    "clobbers": [
      "MOCA"
    ]
  },
  {
    "id": "cordova-plugin-android-permissions.Permissions",
    "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
    "pluginId": "cordova-plugin-android-permissions",
    "clobbers": [
      "cordova.plugins.permissions"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.innoquant.moca.phonegap": "2.6.0",
  "cordova-android-play-services-gradle-release": "1.1.4",
  "cordova-plugin-android-permissions": "1.0.0",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});