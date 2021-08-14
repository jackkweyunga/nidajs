# nidajs

A simple nodejs package to fetch details of a given NIN provided.
@unofficial

> `[npm]` https://www.npmjs.com/package/@jackkweyunga/nidajs

# Installation

 ```cmd
  npm i @jackkweyunga/nidajs
  ```
  
# Usage

- ### nodejs

replace the string "xxxxxxxxxxxxxxxxxxx" with a NIN.

```javascript

const { Nidajs } = require('@jackkweyunga/nidajs')

nida = new Nidajs();

nida.loadDetails("xxxxxxxxxxxxxxxxxxx").then(details => {
    console.log(details); // an object of nin details
}).catch(err => console.log(err))


```

>> Therefore its usage extends all node frameworks.

# Contributing

- #### support the project by giving it a :star: `star` 
- #### Follow me [jackkweyunga](https://github.com/jackkweyunga)
- #### :fork_and_knife: Fork ( its opensource )
- #### Open an issue in case of misbehabiours 👎 or suggesting a new feature.
- #### ...

# Licence

MIT






