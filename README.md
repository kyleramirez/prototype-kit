# Prototype Kit
Prototype Kit is a simple boilerplate for front-end projects. Requires node, npm, grunt, bower, ruby, compass and sass.

#### Step 1: Load Dependencies
```
npm install ##Loads grunt: compass, uglify, watch
bower install ##Loads any front-end dependancies listed in bower.json. (jQuery by default)
```
#### Step 2: Build & Watch CSS & JS Folders
```
## Development
grunt

## Production
grunt compass:prod
```
#### Step 3: Open index.html in a browser