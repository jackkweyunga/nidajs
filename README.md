# nidjs

A simple nodejs package to fetch details of a given NIN provided.
- Bundled with tests and features that ensure a successful fetch.
@unofficial

### ...
  
# Usage

#### Web

# Installation

 ```cmd
  npm i --save nidjs 
 ```
 
 ```typescript
 
 import { Nidjs } from "nidjs";
 
 const nida = new Nidjs()
 
 nida.loadDetails(xxxxxxxxxxxxxxxxxxx).then( data => {
   console.log(data);
 })
 ```

replace the string "xxxxxxxxxxxxxxxxxxx" with a NIN.

# Usage

#### node

# Installation

 ```cmd
  npm i --save nidnode
 ```

```javascript

const { Nid } = require("nidnode");

const sample_id = "xxxxxxxxxxxxxxxxxxx";

const nid = new Nid();

nid.loadDetails(sample_id).then(details => {
    console.log(details); // an object of nin details
}).catch(err => console.log(err))


```


# Contributing

- #### support the project by giving it a :star: `star` 
- #### Follow me [jackkweyunga](https://github.com/jackkweyunga)
- #### :fork_and_knife: Fork ( its opensource )
- #### Open an issue in case of misbehabiours 👎 or suggesting a new feature.
- #### ...

# credits 
I learnt some important things from [Kalebu](https://github.com/Kalebu/Nida)

# Licence

MIT






