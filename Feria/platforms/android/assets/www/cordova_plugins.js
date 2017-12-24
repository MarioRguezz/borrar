cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.innoquant.moca.phonegap.MOCA",
    "file": "plugins/com.innoquant.moca.phonegap/www/MOCA.js",
    "pluginId": "com.innoquant.moca.phonegap",
    "clobbers": [
      "MOCA"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "com.innoquant.moca.phonegap": "2.6.0",
  "cordova-android-play-services-gradle-release": "1.1.4"
};
// BOTTOM OF METADATA
});