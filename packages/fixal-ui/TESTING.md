# Testing Guidelines

## Overview
This document outlines the testing strategy and guidelines for the Fixal UI components.

## Testing Framework
- Jest for unit testing
- React Testing Library for component testing
- Storybook for visual testing and documentation

## Test Structure
```
packages/fixal-ui/
├── __tests__/
│   ├── components/
│   │   ├── Button.test.js
│   │   ├── Input.test.js
│   │   └── ...
│   └── sections/
│       ├── Header.test.js
│       └── ...
└── stories/
    ├── components/
    │   ├── Button.stories.js
    │   ├── Input.stories.js
    │   └── ...
    └── sections/
        ├── Header.stories.js
        └── ...
```

## Writing Tests

### Unit Tests
1. **Component Tests**
   - Test props handling
   - Verify rendering with different states
   - Check event handlers
   - Test edge cases

2. **Utility Functions**
   - Pure functions
   - Helper functions
   - Data transformations

### Storybook Stories
1. **Basic Usage**
   - Default state
   - Required props
   - Basic functionality

2. **Variants**
   - Different prop combinations
   - Theme variations
   - Size variations

3. **States**
   - Loading states
   - Error states
   - Disabled states

4. **Interactive Stories**
   - Include actions
   - Add controls for props
   - Document usage patterns

## Best Practices

### Testing
1. Write descriptive test names
2. Keep tests focused and isolated
3. Use data-testid for testing hooks
4. Mock external dependencies
5. Test error boundaries

### Storybook
1. Document all props
2. Include examples of usage
3. Add notes for complex components
4. Use args for prop variations
5. Include performance metrics

## Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test path/to/test.js
```

## Running Storybook
```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## Code Coverage
Aim for:
- 80%+ statement coverage
- 70%+ branch coverage
- 90%+ function coverage
- 90%+ line coverage

## Performance Testing
1. Measure component rendering time
2. Test memory usage
3. Check bundle size
4. Monitor re-renders

## Accessibility Testing
1. Use axe-core for accessibility audits
2. Test keyboard navigation
3. Verify screen reader support
4. Check color contrast
5. Test form validation

## Browser Compatibility
Test across:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari
- Mobile Chrome

## Continuous Integration
- Run tests on all PRs
- Check code coverage
- Run linting
- Verify Storybook build
- Run performance tests

## Documentation
1. Document all public APIs
2. Include usage examples
3. Add prop descriptions
4. Document component limitations
5. Include performance notes
