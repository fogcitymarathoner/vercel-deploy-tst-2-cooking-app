# git
To bring up 'secondary' git dropdown press shift-right-click

# npm
```npm run dev```

# node
initdb.js
```angular2html
node initdb.js
```

# JS
***destructioning***

Parsing out object in function signatures
https://www.learn-js.org/en/Destructuring#:~:text=Destructuring%20is%20a%20feature%20of%20ES6%2C%20introduced%20for,data%20some%20other%20name%20in%20the%20same%20operation.
```angular2html
// Old way
function getHeadAndBody(person) {

    let headAndBody = {
        head: person.head,
        body: person.body
    }

    return headAndBody;
}

// ES6 Destructuring
function getHeadAndBody({ head, body }) {
    return { head, body }
}
```