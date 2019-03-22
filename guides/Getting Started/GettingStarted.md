## Installing Raw Events

> This requires Klasa Master and Discord.js Master

To get the functionality of the plugin you will need to first install it and then include it in your Client.

The installation can be done using github and soon NPM.

> I assume you know how to open a command prompt in a folder where you want to install this. Please don't prove me wrong.

```sh
npm install --save @kcp/raw-events
```

### Using the plugin

In your main file which contains

```js
const { Client } = require('klasa');
```

you need to put

```js
const { Client } = require('klasa');

Client.use(require('@kcp/raw-events'));
```

and then you can continue your bot as normal.

### Notes

I suggest that you console log each planned raw event as the data might sometimes look different than what discord.js formats in the normal events.

## Further Reading:

- {@tutorial CreatingRawEvents}
