# babel-plugin-global-define
The GlobalDefine plugin allows you to create global constants which is similar to Webpack's DefinePlugin

## Usage

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