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

There is configured BrowserSync in webpack config file, you need only change proxy and port settings and then run it with command:
```
npm run watch
```
