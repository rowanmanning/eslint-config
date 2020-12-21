
# ESLint Config

A shared [ESLint](https://eslint.org/) config for my open source projects.


## Usage

Install with:

```sh
npm install --save-dev @rowanmanning/eslint-config
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


## License

ESLint Config is licensed under the [MIT](LICENSE) license.<br/>
Copyright &copy; 2020, Rowan Manning
