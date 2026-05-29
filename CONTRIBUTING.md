# Contributing to OpenRadio

Thank you for your interest in contributing to OpenRadio! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## Getting Started

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/openradio.git
cd openradio
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Make Your Changes

Follow the project's code style and conventions.

### 5. Test Your Changes

```bash
pnpm lint
pnpm build
pnpm test
```

### 6. Commit Your Changes

```bash
git commit -m "feat: add amazing feature"
git commit -m "fix: resolve critical bug"
```

Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for code style changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance

### 7. Push & Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a PR on GitHub.

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Format with Prettier

```bash
pnpm format
```

### Testing

Write tests for new features:

```bash
# Run tests
pnpm test

# Watch mode
pnpm test --watch
```

### Documentation

Update documentation for any user-facing changes:

- README.md
- docs/*.md
- Code comments for complex logic

## Pull Request Process

1. **Title**: Clear and descriptive
2. **Description**: Explain what and why
3. **Linked Issues**: Reference related issues
4. **Tests**: Include test coverage
5. **Documentation**: Update relevant docs

### PR Checklist

- [ ] Code follows style guidelines
- [ ] Tests pass locally
- [ ] Documentation updated
- [ ] No console errors/warnings
- [ ] Commit messages are clear
- [ ] Related issues linked

## Feature Proposals

For new features:

1. Open a Discussion on GitHub
2. Describe the feature and use case
3. Gather feedback
4. If approved, create an issue and PR

## Bug Reports

When reporting bugs:

1. Use a clear title
2. Describe the problem
3. Steps to reproduce
4. Expected vs actual behavior
5. Environment details (OS, Node version, etc.)

## Project Structure

```
openradio/
├── apps/web/        # Next.js frontend
├── apps/backend/    # Express backend
├── packages/        # Shared libraries
├── docs/           # Documentation
└── .github/        # GitHub workflows
```

## Areas for Contribution

### High Priority
- [ ] AI DJ improvements
- [ ] Music generation features
- [ ] Analytics dashboard
- [ ] Performance optimization

### Medium Priority
- [ ] UI/UX improvements
- [ ] Documentation enhancements
- [ ] Test coverage
- [ ] Bug fixes

### Community
- [ ] Community support
- [ ] Blog posts
- [ ] Examples & tutorials
- [ ] SDK development

## Development Tips

### Hot Reload
Development servers support hot reload:

```bash
pnpm dev
```

### Database Tools
View/edit database:

```bash
pnpm db:studio
```

### Debug Mode
Run with debugging:

```bash
DEBUG=openradio:* pnpm dev
```

### Performance Testing
Use Chrome DevTools and Lighthouse.

## Commits & Releases

### Release Process

1. Update version in package.json
2. Update CHANGELOG.md
3. Create release commit
4. Tag release: `git tag v0.2.0`
5. GitHub Actions creates release

### Version Numbering
We use Semantic Versioning:
- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Bug fixes

## Support

- **Questions?** [GitHub Discussions](https://github.com/idkwii5/openradio/discussions)
- **Issues?** [GitHub Issues](https://github.com/idkwii5/openradio/issues)
- **Discord**: [Join our community](https://discord.gg/openradio)

## License

By contributing, you agree your code will be licensed under MIT License.

---

Thank you for contributing! 🙏
