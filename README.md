![npm](https://img.shields.io/npm/v/advanced-logs?label=npm&style=for-the-badge)
![npm](https://img.shields.io/npm/dt/advanced-logs?style=for-the-badge)

[Need help? Contact me on Discord.](https://discord.com/users/852606013126606908)
<br /><br />

# Installation
```shell
npm i --save advanced-logs
yarn add advanced-logs
```

# Usage
```js
require('advanced-logs'); // CJS
import 'advanced-logs'; // ESM

console.setConfig({
    background: true,
    timestamp: false
}); // new | optional

console.getConfig(); // new | optional

console.success("Success");
console.info("Info");
console.error("Error");
console.warn("Warn");
console.debug("Debug");
console.info("Info", "Custom Title");
```

# License
```
MIT License

Copyright (c) 2022 Loiren

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<h6 align="center">Developed with 💙 by Loiren</h6>
