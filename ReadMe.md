# このソフトウェアについて

　[require.js](http://requirejs.org/)のプラグイン[domReady](https://requirejs.org/docs/download.html#domReady)でDOM読込後に実行する方法。[demo](https://ytyaru.github.io/JS.require.plugin.domReady.20180811100000)

# コード

```javascript
require.config({
    paths: {
        "require.domReady": "js/lib/require/plugin/domReady",
    }
});
require(['require.domReady'], function(domReady) {
    domReady(function () {
        requirejs(['js/app/main.js']);
    });
});
```

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * Chromium 56

# ライセンス

　このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

　使用ソフトウェアは以下。

Library|License|Copyright
-------|-------|---------
[require](http://requirejs.org/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright jQuery Foundation and other contributors](https://github.com/requirejs/requirejs/blob/master/LICENSE)
[require domReady](https://github.com/requirejs/domReady)|[MIT](https://opensource.org/licenses/MIT)|[
Copyright jQuery Foundation and other contributors](https://github.com/requirejs/domReady/blob/master/LICENSE)
[jQuery](https://jquery.com/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright JS Foundation and other contributors](https://jquery.org/license/)
[JsonToHtmlTable](https://github.com/c-cho/JsonToHtmlTable)|[MIT](https://opensource.org/licenses/MIT)|[Copyright (c) 2017 CHO](https://github.com/c-cho/JsonToHtmlTable/blob/master/LICENSE)

　[JsonToHtmlTable](https://github.com/c-cho/JsonToHtmlTable)はrequire.js(AMD方式)でモジュール化するようコードを改変した。（元はNode.js(CommonJS方式)）

