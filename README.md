# StudenTask App
StudenTask App for iOS and Android based on Ionic Framework.

## Getting started
### Prerequisites
First you need to have `node` >= `4.6.0`, Android SDK >= `24.0.0` and XCode >= `8.0` installed.

On Mac OS you can use `brew` (see: http://brew.sh/) to install the Android SDK and the node-version-manager `nvm` (recommended way to install node).
```
brew install android-sdk
```

```
brew install nvm
```

From now on you can install every node version and node package, without needing superuser permissions.
```
nvm install 4.6.0
```

Now you need to have the node modules `cordova` >= `6.3.1` and `ionic` >= `2.1.0` installed globally:
```
npm install -g cordova
```
```
npm install -g ionic
```

### Setup project
Clone this repo:
```
git clone https://bitbucket.org/studentask-team/st.app.git
```

Install node dependencies (also restores ionic platforms and plugins):
```
npm install
```

Run ionic development server:
```
ionic serve
```

## Working on the project

### Adding or removing platforms / plugins
Always use the ionic commands to add or remove platforms or plugins, e.g.:
```
ionic add platform android
```
```
ionic add plugin cordova-plugin-console
```
Otherwise it won't be saved in `package.json` and it can't be restored when the repository is checked out on another machine. Your colleagues won't be able to continue developing!
