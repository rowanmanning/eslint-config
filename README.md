
# ESLint Config

A shared [ESLint](https://eslint.org/) config for my open source projects.


## Table of Contents

  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)


## Requirements

This library requires the following to run:

  * [Node.js](https://nodejs.org/) 16+


## Usage

Install with [npm](https://www.npmjs.com/) alongside `eslint`:

```sh
npm install --save-dev eslint @rowanmanning/eslint-config
```

Add this to your `.eslintrc` file:

```json
{
    "extends": "@rowanmanning/eslint-config"
}
```

If your project uses JSX via Preact, add this instead:

```json
{
    "extends": [
        "@rowanmanning/eslint-config",
        "@rowanmanning/eslint-config/jsx"
    ]
}
```


## Contributing

Genuinely unless you're Rowan Manning, you probably don't need to contribute to this. However if you decide you really need to, then [the contributing guide is available here](docs/contributing.md). All contributors must follow [this library's code of conduct](docs/code_of_conduct.md).


## License

ESLint Config is licensed under the [MIT](LICENSE) license.<br/>
Copyright &copy; 2020, Rowan Manning
