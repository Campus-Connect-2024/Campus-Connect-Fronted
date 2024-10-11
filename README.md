# Campus-Connect Frontend

Welcome to the **Campus-Connect Frontend** repository! This project is the frontend interface of Campus-Connect, a platform designed to enhance student engagement by facilitating campus-related activities, events, announcements, and collaborations.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [Code Style Guidelines](#code-style-guidelines)
- [Issue Reporting](#issue-reporting)
- [License](#license)
  
## Overview

Campus-Connect aims to bridge the communication gap among students and faculty, offering a central hub for announcements, event scheduling, club activities, study group formations, and general campus news. The frontend is built with modern web technologies and is designed to offer a seamless user experience.

## Project Structure

```bash
campus-connect-frontend/
├── public/                  # Static files like index.html
├── src/
│   ├── assets/              # Images, fonts, icons
│   ├── components/          # Reusable components
│   ├── pages/               # Different pages of the app (Home, Events, etc.)
│   ├── services/            # API service calls
│   ├── styles/              # Global styles and theme files
│   ├── utils/               # Utility functions
│   ├── App.jsx               # Main app component
│   └── main.jsx             # Entry point of the app
├── .gitignore               # Ignored files for git
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation (you are here!)
```

## Tech Stack

- **React**: Core library for building user interfaces.
- **React Router**: For client-side routing.
- **Axios**: To handle API requests.
- **Styled Components**: For writing scoped CSS.
- **JavaScript (ES6+)**: Core language for the project.
- **HTML5 & CSS3**: For structure and styling.

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- **Node.js** (>= 14.x)
- **npm** (>= 6.x) or **yarn** (>= 1.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/campus-connect-frontend.git
   ```

2. Navigate into the project directory:

   ```bash
   cd campus-connect-frontend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Running the Project

To start the development server and view the app in your browser:

```bash
npm start
```

or

```bash
yarn start
```

The app should now be running at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

or

```bash
yarn build
```

The production-ready files will be available in the `build/` directory.

## Contributing

We welcome contributions from the community! To contribute:

1. **Fork** the repository.
2. **Create a feature branch** (`git checkout -b feature-branch`).
3. Make your changes.
4. **Commit** your changes (`git commit -m 'Add new feature'`).
5. **Push** the branch to your forked repository (`git push origin feature-branch`).
6. Open a **Pull Request** with a detailed description of your changes.

Please ensure that your code follows the project's guidelines and that all tests are passing before submitting your pull request.

### Local Development Branches

- **main**: Production-ready code.
- **develop**: Development branch where new features are integrated before merging into `main`.

### Code Style Guidelines

We use **ESLint** for code linting and **Prettier** for code formatting. Please follow the linting rules and keep your code clean and consistent.

Run the following commands to check for linting issues:

```bash
npm run lint
```

or

```bash
yarn lint
```

### Commit Message Format

Use the following format for commit messages:

```bash
type(scope): description
```

Example:

```bash
feat(events): add filtering by event category
```

Types:

- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation changes.
- **style**: Formatting changes (white-space, comma).
- **refactor**: Code changes that neither fix a bug nor add a feature.
- **test**: Adding or fixing tests.
- **chore**: Maintenance or project setup.

## Issue Reporting

Found a bug or have a feature request? Please check the [issue tracker](https://github.com/your-username/campus-connect-frontend/issues) and open a new issue if it hasn't been reported yet.

When reporting an issue, please provide:

- Clear steps to reproduce the issue.
- Browser and OS information.
- Any error messages you encountered.

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

Thank you for contributing to **Campus-Connect**! If you have any questions or need help, feel free to reach out via the issue tracker or contact the maintainers.



