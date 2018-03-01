
# ESLint Config

A shared [ESLint](https://eslint.org/) config for my open source projects.


## Usage

Install with:

```sh
npm install --save-dev @rowanmanning/eslint-config
```

Add one of the following to your `.eslintrc` file.

For modern JavaScript syntax which uses `async`/`await` (Node.js 8+):

```json
{
    "extends": "@rowanmanning/eslint-config/es2017"
}
```

For modern JavaScript syntax but without `async/await` (Node.js 4+):

```json
{
    "extends": "@rowanmanning/eslint-config/es2015"
}
```

For more legacy JavaScript environments:

```json
{
    "extends": "@rowanmanning/eslint-config/legacy"
}
```


## License

ESLint Config is licensed under the [MIT](LICENSE) license.<br/>
Copyright &copy; 2017, Rowan Manning
