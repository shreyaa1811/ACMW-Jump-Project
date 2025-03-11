---
title: Documentation
sidebar_label: Documentation
slug: /documentation
---

# Technical Documentation

This section contains technical documentation for various projects, code samples, and technical guides. Below you'll find guides on how to update and add content to your project documentation.

## How to Update Documentation

### Editing Markdown Files

Markdown files use a simple syntax for formatting text:

- Use `#` for headings (more `#` means smaller headings)
- Use `*` or `-` for bullet points
- Use `1.`, `2.`, etc. for numbered lists
- Use `**text**` for **bold text**
- Use `*text*` for *italic text*
- Use `[link text](URL)` for [links](https://docusaurus.io)

### Adding Code Samples

To add code snippets, use triple backticks with the language name:

```javascript
// JavaScript example
function hello() {
  console.log('Hello, world!');
}
```

```python
# Python example
def hello():
    print("Hello, world!")
```

### Adding Images

To add images to your documentation, place them in the `static/img/` directory and reference them like this:

```markdown
![Image description](/img/your-image.png)
```

Example:
![ETL Process Diagram](/img/etl.png)

### Creating Links to Other Documents

To link to other documentation files within your project:

```markdown
[Link to ETL Process Guide](./etl-process)
```

Example: Check out our [ETL Process Guide](./etl-process) for a detailed example.

### Updating JavaScript Files

When updating JavaScript files like `docusaurus.config.js` or component files:

1. Open the file in your code editor
2. Make the necessary changes
3. Save the file
4. Rebuild your site using `npm run build` or test changes with `npm start`

For example, to update the site title in `docusaurus.config.js`:

```javascript
// Find this section
const config = {
  title: 'Your Name', // Change this line
  tagline: 'Your tagline',
  // ...rest of config
}
```

## Example Documentation

For a complete example of documentation that includes code, images, and detailed explanations, see:

- [ETL Process Guide](./etl-process) - A comprehensive guide to building ETL pipelines

## Project Documentation

<!-- TODO: MENTEE - Add documentation for your projects here -->

## Technical Guides

<!-- TODO: MENTEE - Add technical guides and tutorials here -->

## Learning Notes

<!-- TODO: MENTEE - Add technical notes from your learning journey here -->
```

This updated file:

1. Provides instructions for editing Markdown
2. Shows how to add code blocks with syntax highlighting
3. Explains how to add images with an example that uses the etl.png
4. Shows how to create links to other documentation files
5. Includes guidance on updating JavaScript files
6. Provides a direct link to the ETL Process Guide (etl-process.md) as a reference example

The mentees can use this as a reference for adding their own documentation, code samples, and project details.