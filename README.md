# Next Storybook with Material Ui

This repository contains my personal documentation diving into Next.js14, Storybook 8, and Material Ui🤖

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Storybook](#storybook)
- [Themes](#themes)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

```sh
node >= 14
pnpm
```

### Installation

A step by step series of examples that tell you how to get a development environment running.

```sh
pnpm i
pnpm dev
```

### Storybook

This project uses Storybook to develop and test UI components in isolation. You can run Storybook locally by executing:

```sh
pnpm storybook
```

Navigate to `http://localhost:6006/` to view your storybook.

### Adding New Stories

To add a new story, create a .stories.tsx file in the src/stories/ directory. Refer to the existing stories as examples.

### Themes

The application supports light and dark themes. Themes are defined in the src/themes/ directory. You can switch themes using the ThemeProvider in your components.

- Light Theme
- Dark Theme

### License

This project is licensed under the `MIT License` - see the LICENSE.md file for details.
