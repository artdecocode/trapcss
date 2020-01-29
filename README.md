# trapcss

[![npm version](https://badge.fury.io/js/trapcss.svg)](https://www.npmjs.com/package/trapcss)

`trapcss` is Removes unused selectors from CSS files to achieve maximum optimisation. Can be used as an API function or with CLI.

```sh
yarn add trapcss
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`trapcss(opts: Config): Return`](#trapcssopts-config-return)
  * [`Config`](#type-config)
  * [`Return`](#type-return)
- [CLI](#cli)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import trapcss from 'trapcss'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>trapcss</ins>(</code><sub><br/>&nbsp;&nbsp;`opts: Config,`<br/></sub><code>): <i>Return</i></code>
Parses the supplied HTML and CSS and removes
unused selectors. Also removes empty CSS rules.

 - <kbd><strong>opts*</strong></kbd> <em><code><a href="#type-config" title="Options for the program.">Config</a></code></em>: The options for _TrapCSS_.

__<a name="type-config">`Config`</a>__: Options for the program.


|     Name      |               Type                |                                                                                                     Description                                                                                                      | Default |
| ------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| __html*__     | <em>string</em>                   | The input HTML.                                                                                                                                                                                                      | -       |
| __css*__      | <em>string</em>                   | The CSS to drop selectors from.                                                                                                                                                                                      | -       |
| keepAlternate | <em>boolean</em>                  | Whether to keep the `@alternate` comment for<br/>Closure Stylesheets.                                                                                                                                                | `false` |
| shouldDrop    | <em>(sel: string) => boolean</em> | Whether _TrapCSS_ should remove this selector.<br/>The `shouldDrop` hook is called for every CSS selector<br/>that could not be matched in the html. Return `false`<br/>to retain the selector or `true` to drop it. | -       |


__<a name="type-return">`Return`</a>__: Return Type.


|   Name    |            Type             |     Description     |
| --------- | --------------------------- | ------------------- |
| __css*__  | <em>string</em>             | The dropped CSS.    |
| __sels*__ | <em>!Set&lt;string&gt;</em> | The used selectors. |

```js
import trapcss from 'trapcss'

(async () => {
  const res = await trapcss({
    text: 'example',
  })
  console.log(res)
})()
```
```

```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## CLI

The package can also be used from the CLI.

<table>
 <thead>
  <tr>
   <th>Argument</th> 
   <th>Short</th>
   <th>Description</th>
  </tr>
 </thead>
  <tr>
   <td>input</td>
   <td></td>
   <td>The path to the input file.</td>
  </tr>
  <tr>
   <td>--output</td>
   <td>-o</td>
   <td>Where to save the output. By default prints to stdout. Default <code>-</code>.</td>
  </tr>
  <tr>
   <td>--init</td>
   <td>-i</td>
   <td>Initialise in the current folder.</td>
  </tr>
  <tr>
   <td>--help</td>
   <td>-h</td>
   <td>Print the help information and exit.</td>
  </tr>
  <tr>
   <td>--version</td>
   <td>-v</td>
   <td>Show the version's number and exit.</td>
  </tr>
</table>

```
Removes unused selectors from CSS files to achieve maximum optimisation. Can be used as an API function or with CLI.

  trapcss input [-o output] [-ihv]

	input        	The path to the input file.
	--output, -o 	Where to save the output. By default prints to stdout.
	             	Default: -.
	--init, -i   	Initialise in the current folder.
	--help, -h   	Print the help information and exit.
	--version, -v	Show the version's number and exit.

  Example:

    trapcss example.txt -o out.txt
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/3.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

<table>
  <tr>
    <td><img src="https://avatars3.githubusercontent.com/u/38815725?v=4&amp;s=100" alt="artdecocode"></td>
    <td>© <a href="https://www.artd.eco">Art Deco™</a> 2020</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>