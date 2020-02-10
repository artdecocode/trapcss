_TrapCSS_ does not load external resources or execute `<script>` tags, so your HTML must be fully formed (or SSR'd). Alternatively, you can use [chrome-remote-interface](https://www.npmjs.com/package/chrome-remote-interface) and a local http server to get full `<script>` execution.

[Here's a 35 line script](../tree/master/wiki/Performance/execution.js) which does exactly that:

%EXAMPLE: ./execution, ../src => trapcss%

%FORK-js wiki/Performance/execution%