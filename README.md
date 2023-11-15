# Learning Palace

This is simple boilerplate theme for personal use.

## Installing and setup

1. Put files in `themes/` directory in your WordPress files.
2. Install dependencies two commands:
    ```
    npm install
    composer update
    ```
3. Enable theme in WordPress settings.
4. Done

## Commands
You can build project in development version with:
```
npm run build
```
Or build in production version with: 
```
npm run buildprod
```

## Running project via BrowserSync

Set your proxy and port in .browsersync.config.json file and run command:
```
npm run watch
```

## Features ##

- set up webpack
- SCSS compiling
- PHP class autoloader
- Prettier and ESLint


## Stuff to add ##

- default 404 page
- default mixin and variables for responsive styles
- splitting CSS output files to be separate to allow selective loading
