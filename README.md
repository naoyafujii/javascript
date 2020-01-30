# Starter Kit 2019

フロントエンド開発のボイラープレートです。
基本的にはシンプルに、JavaScript を最新の標準仕様で書くというところにフォーカスしていますが、
scss→css, ejs→html のコンパイル等も行います。

- Node.js v10.1.0+
- npm v6.1.0+

## npm scripts

### `npm start`

`./src`以下の開発ソースを監視し、開発サーバを起動します。

### `npm run build`

`./src`以下の開発ソースからプロダクションビルドを行い、`./dist`へ展開します。この際、各バンドルファイルを圧縮します。**配信前には必ずビルドを行ってください。**

## JavaScript

ES2017 (async / await あたり) のトランスパイルに加え、

- Object rest spread
- Class-properties
- Decorators

あたりの仕様も組み込んでいます。

`./src/assets/js` 直下の`.js`ファイルがすべてエントリーポイントとなりますので、
モジュールは適宜ディレクトリを切って管理してください。

※javaScript 周りは主に`webpack`にて取り扱っています。
※`webpack`の`optimization.splitChunks`を有効にしています。
※`polyfill (core-js / regenerator-runtime)`をすべてのエントリーポイントで import しています。

### `optimization.splitChunks` について

現状、`modules.js`として、複数のエントリーポイント間で利用している共通モジュールをバンドルしたファイルを生成します。
このため、エントリーポイントが唯一となるケース（単一 LP や SPA）では、これを使用しないように設定してください。詳しくは webpack の公式ドキュメントを参照してください。

※SPA の場合、フレームワークごとにサポートされている CLI ツールを使用されることを推奨します。

## Sass

※JavaScript 以外は`gulp@4.0.0`にて取り扱っています。

`./src/assets/sass`以下の`.scss`が`./dist/assets/css`以下へコンパイルされます。
`Autoprefixer`対応済みです。

## EJS

`./src`以下のすべての`.ejs`ファイルは`./dist`へコンパイルされます。

※`.html`ファイルも可能ですが、ejs を推奨します。

---

## 開発環境のカスタマイズ

この環境は主に webpack, gulp で構築しています。

ユニットテストの追加実装等、webpack を触る際は、`./.webpack`以下のファイルを編集してください。

gulp 関連は`./.gulp`以下に格納しています。
