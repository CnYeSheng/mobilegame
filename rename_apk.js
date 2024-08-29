const fs = require('fs');
const path = require('path');

module.exports = function (context) {
    const apkDir = path.join(context.opts.projectRoot, 'platforms/android/app/build/outputs/apk/debug');
    const apkName = 'app-debug.apk';
    const packageJson = require(path.join(context.opts.projectRoot, 'package.json'));
    const newApkName = `${packageJson.cordova.id}-${packageJson.version}.apk`;

    const oldApkPath = path.join(apkDir, apkName);
    const newApkPath = path.join(apkDir, newApkName);

    if (fs.existsSync(oldApkPath)) {
        fs.renameSync(oldApkPath, newApkPath);
        console.log(`Renamed APK to: ${newApkName}`);
    } else {
        console.error(`APK file not found: ${oldApkPath}`);
    }
};
