# Contributing to Campus-Connect Frontend

Thank you for your interest in contributing to **Campus-Connect Frontend**! We welcome all kinds of contributions including bug fixes, feature enhancements, and documentation improvements. This guide will help you contribute effectively.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Contributing Code](#contributing-code)
- [Getting Started](#getting-started)
- [Pull Request Process](#pull-request-process)
- [Code Guidelines](#code-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Review Process](#review-process)

## Code of Conduct

Before contributing, please read and understand our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold this code and help create a welcoming environment for everyone.

## How Can I Contribute?

### Reporting Bugs

If you encounter any bugs or issues while using the project, you can help by reporting them. To file a bug report, follow these steps:

1. Search the [issue tracker](https://github.com/your-username/campus-connect-frontend/issues) to see if the bug has already been reported.
2. If it's a new bug, open an issue and include:
   - A clear, descriptive title.
   - Steps to reproduce the problem.
   - Expected vs. actual behavior.
   - Relevant screenshots, if applicable.
   - Browser, operating system, and version details.
   - Any console errors or logs.

### Suggesting Features

We’re always open to new ideas! If you have a feature you'd like to see, please follow these steps:

1. Check the [issues section](https://github.com/your-username/campus-connect-frontend/issues) to see if someone else has already suggested it.
2. If not, open a new issue and describe:
   - The motivation behind the feature.
   - How it would benefit the project.
   - Any potential implementation details or technical challenges.

### Contributing Code

You can contribute code by fixing bugs, implementing features, improving the codebase, or optimizing performance. Before starting, make sure to check if someone is already working on a similar task by reviewing the open issues or contacting the maintainers.

#### Development Workflow

1. **Fork** the repository.
2. **Clone** your fork to your local machine:

   ```bash
   git clone https://github.com/your-username/campus-connect-frontend.git
   cd campus-connect-frontend
   ```

3. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature/my-feature
   ```

4. Make your changes and commit them (see [Commit Message Guidelines](#commit-message-guidelines)).
5. Push your changes to your fork:

   ```bash
   git push origin feature/my-feature
   ```

6. Open a **Pull Request** from your fork's branch to the `develop` branch of the main repository.
7. Wait for code review and feedback.

## Getting Started

To start contributing code, follow the steps below to set up your development environment:

1. **Install Dependencies**:

   Make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed.

   ```bash
   npm install
   ```

2. **Run the Application**:

   To run the app locally, use the following command:

   ```bash
   npm start
   ```

   This will start the development server at `http://localhost:3000`.

3. **Run Tests**:

   To ensure your changes do not break existing functionality, run tests before submitting your pull request:

   ```bash
   npm test
   ```

## Pull Request Process

1. Ensure that your changes pass all linting and testing requirements.
2. Update the documentation as necessary (in the `README.md` or elsewhere).
3. Make sure your commit messages are clear and concise (see [Commit Message Guidelines](#commit-message-guidelines)).
4. Submit your pull request to the `develop` branch, not the `main` branch.
5. Include a detailed description of your changes in the pull request.
6. After submission, your pull request will be reviewed. Please be open to feedback and ready to make adjustments if requested.

## Code Guidelines

To maintain consistency and quality, follow these code guidelines:

1. **Code Style**:
   - Use **ESLint** to lint your code and **Prettier** for consistent formatting.
   - Stick to **JavaScript (ES6+)** features and syntax.
   - Use **functional components** in React, unless there’s a strong reason to use class components.
   - Keep your components modular and reusable.
   - Avoid deeply nested code. Break large components into smaller, more manageable parts.

2. **File Naming**:
   - Use **camelCase** for filenames and component names (`myComponent.js`).
   - Use **PascalCase** for React components (`MyComponent.js`).

3. **Comments**:
   - Use comments to explain why something is done, not how it is done.
   - Ensure that any complex code logic is explained adequately.

4. **Testing**:
   - Write tests for new features or fixes.
   - Ensure existing tests pass.

## Commit Message Guidelines

Follow this format for commit messages to ensure consistency:

```bash
type(scope): description
```

**Type** can be one of the following:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (no code change)
- `refactor`: Code restructuring (no feature or bug fixes)
- `test`: Adding or fixing tests
- `chore`: Maintenance tasks (e.g., tool config)

**Scope** is the area of the codebase the commit impacts, such as a component or file. For example:

```bash
feat(events): add filter for event categories
fix(api): resolve issue with login API request
```

## Review Process

After you submit your pull request, it will be reviewed by a project maintainer. We follow these principles during the review process:

- We aim to provide feedback within a reasonable time (usually within a few days).
- Reviews are intended to be constructive. If changes are requested, please address them as soon as possible.
- If the pull request is approved, it will be merged into the `develop` branch. Larger changes may be further tested before being merged into the `main` branch.

---

Thank you for your interest in contributing to Campus-Connect! We appreciate your time and effort in helping us improve the project. If you have any questions, feel free to open an issue or reach out to the maintainers.

