<div>
  <h1 align="center">Hzy UI 🚀</h1>
   <h4 align="center">
    Elevate your React projects with sleek, responsive components crafted with the power of <a href="https://tailwindcss.com/">Tailwind CSS</a>.
  </h4>

  <br />

  <p align="center">
    <a href="https://github.com/hattaalfaritzy/hzy-ui/blob/master/LICENSE">
      <img alt="GitHub License" src="https://img.shields.io/github/license/hattaalfaritzy/hzy-ui">
    </a>
    <a href="https://github.com/hattaalfaritzy/hzy-ui/actions/workflows/main.yml">
      <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/hattaalfaritzy/hzy-ui/release.yml">
    </a>
    <a href="https://github.com/hattaalfaritzy/hzy-ui/releases">
      <img alt="GitHub Release" src="https://img.shields.io/github/v/release/hattaalfaritzy/hzy-ui">
    </a>
    <a href="https://www.npmjs.com/package/@hattaalfaritzy/hzy-ui">
      <img src="https://img.shields.io/npm/v/@hattaalfaritzy/hzy-ui?logo=npm">
    </a>
  </p>
</div>

<br />

## 🚀 Introduction

Hzy UI is a library of ready-to-use, accessible, reusable, and composable React UI components built with the [Tailwind CSS](https://tailwindcss.com/) framework. It aims to simplify the development of modern web applications by providing a set of high-quality, customizable components that adhere to the latest web standards.
This lib provides ready-to-use, accessible, reusable, and composable

**Note:** This project is currently under active development. Features and APIs are subject to change. Contributions and feedback are welcome!

## 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Customization](#customization)
- [License](#license)

## 📦 Installation

To get started with Hzy UI, you can install it using either yarn or npm:

```sh
# with yarn
$ yarn add @hattaalfaritzy/hzy-ui

# with npm
$ npm i @hattaalfaritzy/hzy-ui
```

## 🚀 Usage

1. To start using the components, on your application entry point, import the CSS file.

```jsx
// Do this at the root of your application
import "@hattaalfaritzy/hzy-ui/dist/index.css";
```

2. Start using the components in your application
   Here's a quick example to get you started:

```jsx
import { Button } from "@hattaalfaritzy/hzy-ui";

const App = () => {
  const handleClick = () => alert("Button Clicked!");

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

## 📚 Components

Explore our comprehensive set of components that are designed to be flexible and easy to use.

- **Button**: Highly customizable buttons with multiple variants and sizes.
- **Input**: Text inputs, checkboxes, radio buttons, and more.
- **Modal**: Beautiful and accessible modals for dialogs and popups.
- **Dropdown**: Feature-rich dropdown menus with support for custom items.
- ...and many more!

For detailed usage and examples, check out the full [documentation](https://hattaalfaritzy.github.io/hzy-ui/).

## 🎨 Customization

Hzy-UI is built with Tailwind CSS, making it incredibly easy to customize components to match your design system.
You can override default styles or extend them using Tailwind's utility classes.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/hattaalfaritzy/hzy-ui/blob/main/LICENSE) file for more details.
