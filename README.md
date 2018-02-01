# babel-plugin-global-define
The GlobalDefine plugin allows you to create global constants which is similar to Webpack's DefinePlugin

## Usage

### install
``` javascript
npm i babel-plugin-global-define --save-dev
``` 
### .babelrc
``` javascript
{
  "plugins": [
    ["global-define", {
      "__ENV__": "production",
    }]
  ]
}
```
### Node API
``` javascript
require("babel-core").transform("foo();", {
    plugins: [
        ["global-define", { "__ENV__": "production" }]
    ]}
})
```

## Example

### In
```javascript
const hosts = {
    development: 'https://test.github.com/',
    production: 'https://www.github.com/'
}
const currentHost = hosts[__ENV__]
````
### Out
```javascript
const hosts = {
    development: 'https://test.github.com/',
    production: 'https://www.github.com/'
}
const currentHost = hosts["production"]
````
