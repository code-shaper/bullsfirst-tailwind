# Bullsfirst Tailwind

This is an example of integrating [Tailwind CSS](https://tailwindcss.com/) with
a React app generated using [Code Shaper](https://code-shaper.dev).

![Holdings Page](assets/holdings.png)

## Architecture

The repository contains a sample stock trading application called Bullsfirst,
which uses React as its base framework. It depends on a package called
`ui-lib-react` for common reusable components like buttons and cards. All
components in the app and the library are built using Tailwind CSS. A Tailwind
preset is available in `tailwind-utils` which is used by both the app and the
library. `tailwind-utils` also houses two brand palettes that can be used to
configure the application's theme using CSS variables.

![Architecture](assets/architecture.png)

## Building Bullsfirst

### Development Build

```shell
# Run ci in the root directory to install dependencies
npm ci

# Run a full build to make sure libraries are available to the apps
npm run build

# Run the apps
npm run dev
```

Point your browser to http://localhost:3000/ to see the running app.

> Note: Do not run `npm install` or `npm ci` in any of the subdirectories. It
> will break the build. There should be only one `package-lock.json` file in the
> entire repo (at the root).

### Production Build

To build all packages and apps for production, run the following command:

```shell
npm ci
npm run build
npm run preview -w @bullsfirst/bullsfirst-react
```

### Clean Build

Removes all build artifacts and performs a clean build.

```shell
npm run clean
npm ci
npm run dev
```

For an "aggressive" clean build, add one more step as shown below. This will
build the lock file from scratch.

```shell
npm run clean
rm package-lock.json
npm install
npm run dev
```

## Running Storybook

```shell
# Install Storybook dependencies
cd storybbok
npm ci
cd ..

# Run Storybook
npm run storybook
```

## Running Unit Tests

```shell
npm test
```

## Running End-to-End Tests

**Not yet started**

```shell
npm run dev # starts a local server hosting the react app

# run cypress in a different shell
npm run cypress
```

## Code Formatting

```shell
npm run format
```
