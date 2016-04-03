# another-one 🔑
A library for node.js that increments a thing by one, giving you another one.

## Why should I use another-one?

Regardless if you are a recovering alcoholic or simply a student counting the number of days until graduation, this library might help you keep track, by giving you another one of what you have.

## Usage

```javascript
var another = require('another-one');

day = 0;
day = another.one(day);
=> 1
day = another.one(day);
=> 2
```

alternative way to get another one if you don't have any one yet.

```javascript
var drink = another.one();
=> undefined
drink
=> 1
```
