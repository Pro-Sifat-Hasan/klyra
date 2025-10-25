# Contributing to Klyra AI

Thank you for your interest in contributing to Klyra AI! This document provides guidelines for contributing to the project.

## 🤝 How to Contribute

### Reporting Issues

Before creating an issue, please:
1. Check if the issue already exists
2. Use the issue templates provided
3. Provide detailed information about the problem
4. Include steps to reproduce the issue

### Suggesting Enhancements

For feature requests:
1. Check if the feature is already requested
2. Provide a clear description of the proposed feature
3. Explain why this feature would be beneficial
4. Consider implementation complexity

## 🚀 Development Setup

### Prerequisites
- Python 3.9+
- Node.js 16+
- OpenAI API Key
- Git

### Setup Steps

1. **Fork the repository**
   ```bash
   git clone https://github.com/Pro-Sifat-Hasan/klyra.git
   cd klyra
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   cd Frontend && npm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

5. **Run the application**
   ```bash
   # Backend
   uvicorn main:app --reload
   
   # Frontend (in another terminal)
   cd Frontend && npm run dev
   ```

## 📝 Code Style Guidelines

### Python Code
- Follow PEP 8 style guidelines
- Use type hints where appropriate
- Write descriptive docstrings
- Keep functions focused and small

### JavaScript/React Code
- Use ESLint and Prettier
- Follow React best practices
- Use meaningful variable names
- Add comments for complex logic

### General Guidelines
- Write clear, descriptive commit messages
- Keep changes focused and atomic
- Test your changes thoroughly
- Update documentation when needed

## 🔄 Pull Request Process

### Before Submitting
1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, well-documented code
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   # Test backend
   python -m pytest tests/
   
   # Test frontend
   cd Frontend && npm test
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: brief description of changes"
   ```

### Submitting PR
1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**
   - Use the PR template
   - Provide a clear description
   - Link related issues
   - Add screenshots if UI changes

3. **Respond to feedback**
   - Address review comments
   - Make requested changes
   - Keep the PR up to date

## 🧪 Testing

### Backend Testing
```bash
# Run all tests
python -m pytest

# Run specific test file
python -m pytest tests/test_main.py

# Run with coverage
python -m pytest --cov=main
```

### Frontend Testing
```bash
cd Frontend

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint
```

## 📚 Documentation

### Code Documentation
- Add docstrings to functions and classes
- Include type hints for better IDE support
- Comment complex algorithms or business logic

### README Updates
- Update setup instructions if dependencies change
- Add new features to the features list
- Update API documentation if endpoints change

### Documentation Files
- Keep docs in the `docs/` directory
- Use clear, concise language
- Include code examples where helpful
- Update when making changes

## 🐛 Bug Reports

When reporting bugs, please include:

### Required Information
- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, Python version, Node version
- **Screenshots**: If applicable

### Bug Report Template
```markdown
## Bug Description
Brief description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Environment
- OS: [e.g., Windows 10, macOS 12.0]
- Python: [e.g., 3.9.7]
- Node: [e.g., 16.14.0]

## Additional Context
Any other context about the problem
```

## ✨ Feature Requests

When requesting features, please include:

### Required Information
- **Feature Description**: Clear description of the proposed feature
- **Use Case**: Why this feature would be useful
- **Proposed Solution**: How you think it should work
- **Alternatives**: Other solutions you've considered

### Feature Request Template
```markdown
## Feature Description
Brief description of the feature

## Use Case
Why would this feature be useful?

## Proposed Solution
How should this feature work?

## Alternatives
What other solutions have you considered?

## Additional Context
Any other context about the feature request
```

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `wontfix`: This will not be worked on

## 📋 Commit Message Format

Use clear, descriptive commit messages:

```
type: brief description

Detailed description of changes (optional)

Closes #issue_number
```

### Commit Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```
feat: add image upload functionality

Add support for users to upload skin condition photos
for AI analysis. Includes file validation and error handling.

Closes #123
```

```
fix: resolve API timeout issue

Increase timeout duration for OpenAI API calls to prevent
premature failures during image analysis.

Fixes #456
```

## 🤔 Questions?

If you have questions about contributing:

1. **Check existing issues** - Your question might already be answered
2. **Create a discussion** - Use GitHub Discussions for general questions
3. **Join our community** - Connect with other contributors

## 📄 License

By contributing to Klyra AI, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- Project documentation

Thank you for contributing to Klyra AI! 🎉
