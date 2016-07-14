# Coastline Market Restaurant-Side Application

This is for the Android version of the Application ONLY (For Now)

## Installation

1. Clone this repo.
2. Run `npm install`.
3. Ensure a device, or emulated Android image is connected (`adb devices`).
4. Run `react-native run-android`.
5. If you get naming collisions with fbjs, follow this:

    1) rm -rf node_modules
    2) npm install
    3) npm install fbjs
    3) find . -name 'fbjs' -print
    4) manually remove all fbjs inside any node_module except one at top level
    5) rm -fr $TMPDIR/react-*
    6) watchman watch-del-all
    7) npm start --reset-cache

If you still get errors (segmentation fault or error code 2), npm install fbjs@6.0 (downgrade)