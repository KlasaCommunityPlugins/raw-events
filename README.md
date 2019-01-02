# raw-events

Simple plugin to handle raw events with ease.

## How To Use

<!-- markdownlint-disable MD029 -->

1. Install the plugin.

```bash
npm i KlasaCommunityPlugins/raw-events
```

2. Use `klasa-raw-events` in your client.

```js
const { Client } = require("klasa");
Client.use(require("klasa-raw-events"));
```

3. Create a new `raw-event` in your `rawEvents` folder.

```js
const { RawEvent } = require("klasa-raw-events");

module.exports = class extends RawEvent {

    run() {
        // Your Code Here
    }

}
```

4. Done!

## License

MIT
