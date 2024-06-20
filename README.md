<div>
  <h1 align="center">Hzy UI 🚀</h1>
   <h4 align="center">
    Elevate your React projects with sleek, responsive components crafted with the power of <a href="https://tailwindcss.com/">Tailwind CSS</a>.
  </h4>

  <br />

  <p align="center">
    <a href="https://github.com/hattaalfaritzy/hzy-ui/blob/main/LICENSE">
      <img alt="GitHub License" src="https://img.shields.io/github/license/hattaalfaritzy/hzy-ui">
    </a>
    <a href="https://github.com/hattaalfaritzy/hzy-ui/actions/workflows/main.yml">
      <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/hattaalfaritzy/hzy-ui/main.yml">
    </a>
    <a href="https://github.com/hattaalfaritzy/hzy-ui/releases">
      <img alt="GitHub Release" src="https://img.shields.io/github/v/release/hattaalfaritzy/hzy-ui">
    </a>
  </p>
</div>

<br />

## 🚀 Introduction

Hzy UI is a library of ready-to-use, accessible, reusable, and composable React UI components built with the [Tailwind CSS](https://tailwindcss.com/) framework. It aims to simplify the development of modern web applications by providing a set of high-quality, customizable components that adhere to the latest web standards.
This lib provides ready-to-use, accessible, reusable, and composable

## 📦 Installation

To get started with Hzy UI, you can install it using either Yarn or npm:

```sh
# with Yarn
$ yarn add @hattaalfaritzy/hzy-ui

# with npm
$ npm i @hattaalfaritzy/hzy-ui
```

## 🚀 Usage

Start using the components in your application by importing them:

```jsx
import { Button } from '@hattaalfaritzy/hzy-ui';

const App = () => {
  const handleClick = () => alert('Button Clicked!');

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Button
        align="center"
        className="w-full"
        label="Click Me"
        size="md"
        variant="informative"
        onClick={handleClick}
      />
    </div>
  );
};

export default App;

```

## 📚 Documentation

For detailed usage and examples, check out the full [documentation](https://hattaalfaritzy.github.io/hzy-ui/).

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for more details.

<div align="center">
  <br />
  <img src="https://raw.githubusercontent.com/hattaalfaritzy/hzy-ui/main/assets/footer.png" alt="Hzy UI Footer" width="50%">
</div>