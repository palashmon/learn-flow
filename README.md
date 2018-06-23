# Learn Flow

> Simplest case example of Facebook's [Flow](https://flow.org/en/)

This repository aims to be a simplest case example for writing typed JavaScript with
Facebook's Flow - a static type checker for JavaScript.

We will first discover how to set up our tools to get us running. Afterwards, we
will dive into some examples of how we can leverage types to make our JavaScript
code more predictable and even maybe more robust.

# How to set up your Flowtyped Project

We assume that you are using following toolchain:

- Babel 6 for transpiling ES6 -> ES5 code
- ESlint for style checking
- Flow >= 0.75.0

## Flow Installation

Flow works best when installed per-project with explicit versioning rather than globally.

Add a devDependency on the flow-bin npm package:

```
npm install --save-dev flow-bin
```

Add a "flow" script to your package.json

## Babel 6 Configuration

Since Flow's syntax supports an extended set of JavaScript, it is required to
strip away all Flow-Type code before execution.

This can be done via the `babel-preset-flow` babel-plugin.

```
npm install --save-dev babel-cli babel-preset-flow
```

## ESLint Configuration

Now that our babel configuration allows us to parse Flow typed JavaScript, we
can now utilize the `babel-eslint` parser to pass in sanatized JavaScript code.
Although this would already work by now, there will be some warnings about
unused variables whenever you write type declarations.

The `eslint` plugin `eslint-plugin-flowtype` will mute those warnings, so let
us install all the eslint stuff we need:

```
# ESlint stuff (you probably already did that)
npm install eslint babel-eslint --save-dev

# Now the flow related stuff
npm install eslint-plugin-flowtype
```

Done! Now if we run `eslint src/some.js`, eslint should run through and there
shouldn't be any errors because of unknown syntax.

# Using flow

First of all, before you can even use `flow`, you need to create a `.flowconfig`
in your local project's folder. This can be done by running `flow init`, which
will create a very basic INI file.

By default, `flow` will run a local server, which will parse your project for
`js` and `json` files, so you might see some problems with third-party
`node_modules` dependencies, which might contain stuff like malformed JSON files
or other unuseful stuff. For these edge-cases, you can put a regex matcher in
your `.flowconfig`'s `[ignore]` section, which will cause the program to skip
these defined files.

The `flow` server will provide important endpoints for retrieving data about
parsed files, so it is usually launched by your IDE / Text-Editor (if you installed
the proper plugins of course). Without that architecture, auto-completion would
be hard, so we should appreciate that awesome feature!
