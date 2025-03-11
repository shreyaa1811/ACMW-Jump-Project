# ACMW-Jump Documentation Project

<div align="center">
  <img src="static/img/github-profile.png" alt="Project Logo" width="100" height="100" style="border-radius: 50%;">
  <h3 align="center">ACMW-Jump Mentorship Documentation Template</h3>
  <p align="center">
    A Docusaurus-powered documentation site template for mentees to document their learning journey
    <br />
    <a href="https://eigenvectorsandchill.github.io/ACMW-Jump-Project/"><strong>View Demo »</strong></a>
  </p>
</div>

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Local Development](#local-development)
- [Customizing Your Site](#customizing-your-site)
  - [Basic Configuration](#basic-configuration)
  - [Updating Your Profile](#updating-your-profile)
  - [Site Navigation](#site-navigation)
- [Adding Content](#adding-content)
  - [Documentation](#documentation)
  - [Blog Posts](#blog-posts)
  - [Adding Images](#adding-images)
  - [Adding Code Samples](#adding-code-samples)
- [Deployment](#deployment)
  - [GitHub Pages Setup](#github-pages-setup)
  - [Manual Deployment](#manual-deployment)
  - [Automatic Deployment](#automatic-deployment)
- [Project Timeline](#project-timeline)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🌟 About The Project

This project is part of the ACM-W's JuMP (Junior Mentorship Program) - a 3-month mentorship initiative designed to help participants learn from experienced mentors, collaborate on exciting projects, and grow in their technical journey.

This template provides a structured documentation website where mentees can:

- Document their learning progress
- Create technical documentation for projects
- Write blog posts about their experiences
- Showcase their skills and achievements

The documentation site is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator that makes it easy to create beautiful documentation websites.

## 📁 Repository Structure

The repository is organized as follows:

```
ACMW-Jump-Project/
├── docs/                 # Documentation files (Markdown)
│   ├── blog-posts/       # Blog post Markdown files
│   │   ├── index.md      # Blog landing page
│   │   └── *.md          # Individual blog posts
│   ├── documentation/    # Technical documentation files
│   │   ├── index.md      # Documentation landing page  
│   │   └── *.md          # Individual documentation pages
│   ├── intro.md          # Main introduction page
│   └── profile.md        # Your profile page
├── src/                  # Source files for the website
│   ├── components/       # React components
│   ├── css/              # CSS files
│   └── pages/            # Main pages
├── static/               # Static files (images, etc.)
│   └── img/              # Image files
├── docusaurus.config.js  # Docusaurus configuration
├── sidebars.js           # Sidebar configuration
└── package.json          # Node.js dependencies
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version 18.0 or above
- [Git](https://git-scm.com/) for version control
- A GitHub account for deployment

### Installation

1. Fork this repository to your GitHub account
   - Visit the [repository page](https://github.com/prakash-aryan/ACMW-Jump-Project)
   - Click the "Fork" button in the top-right corner

2. Clone your forked repository
   ```bash
   git clone https://github.com/YOUR-USERNAME/ACMW-Jump-Project.git
   cd ACMW-Jump-Project
   ```

3. Install dependencies
   ```bash
   npm install
   ```

### Local Development

1. Start the development server
   ```bash
   npm start
   ```

2. Open your browser and visit [http://localhost:3000/ACMW-Jump-Project/](http://localhost:3000/ACMW-Jump-Project/)

3. The site will automatically reload if you make changes to the files

## 🎨 Customizing Your Site

### Basic Configuration

The main configuration file is `docusaurus.config.js`. You'll need to update several fields in this file to customize your site:

```javascript
// Update your personal information
title: 'Your Name',  // Change to your name
tagline: 'Your personal tagline', // Change to your tagline
favicon: 'img/your-favicon.png', // Add your own favicon

// Update GitHub deployment settings
url: 'https://YOUR-USERNAME.github.io',  // Change to your GitHub username
baseUrl: '/ACMW-Jump-Project/',  // Change if you rename the repository
organizationName: 'YOUR-USERNAME',  // Change to your GitHub username
projectName: 'ACMW-Jump-Project',  // Change if you rename the repository

// Update links to your profiles
navbar: {
  title: 'Your Name',  // Change to your name
  // ...other settings
}

// Update footer links
footer: {
  // ...update links to your profiles
}
```

Each section that needs to be customized is marked with a `TODO: MENTEE` comment in the configuration file.

### Updating Your Profile

The `docs/profile.md` file contains your profile information. Update this file with your:

- Name and photo (GitHub profile picture by default)
- Educational background
- Professional experience
- Skills and expertise
- Projects and achievements
- Contact information

Example:
```markdown
---
id: profile
title: Mentor Profile
---

# Your Name

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
  <img src="https://github.com/your-username.png" alt="Your Name" style={{borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover'}}/>
</div>

## About Me

Brief introduction about yourself...

## Education

- **Degree**, University Name, Year-Year

## Professional Experience

### Job Title
**Company Name** | *Date Range*

- Accomplishment 1
- Accomplishment 2

### Skills

- Skill Category 1: Skill A, Skill B, Skill C
- Skill Category 2: Skill D, Skill E, Skill F

...
```

### Site Navigation (Skip This for Now)

The `sidebars.js` file controls the navigation sidebar on your documentation site. You can add new sections or items as you create content:

```javascript
tutorialSidebar: [
  'intro',
  'profile',
  'documentation/index',
  'blog-posts/index',
  // Add more items here as you create content
  // 'documentation/new-page',
  // {
  //   type: 'category',
  //   label: 'My Projects',
  //   items: ['projects/project-1', 'projects/project-2'],
  // },
],
```

## 📝 Adding Content

### Documentation

The `docs/documentation/` directory contains your technical documentation. Start with the `index.md` file and add new Markdown files for each documentation topic.

To add a new documentation page:

1. Create a new Markdown file in the `docs/documentation/` directory
2. Add front matter at the top of the file:
   ```markdown
   ---
   title: Your Page Title
   sidebar_label: Shorter Title (Optional)
   description: Brief description of the page
   ---

   # Your Page Title

   Content of your documentation...
   ```


Example documentation page (`docs/documentation/react-components.md`):
```markdown
---
title: Building React Components
sidebar_label: React Components
description: A guide to building reusable React components
---

# Building React Components

This guide explains how to create reusable React components...

## Component Structure

A well-structured React component typically includes...

## Code Example

```jsx
function Button({ text, onClick, variant = 'primary' }) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
```

## Best Practices

When creating React components, follow these best practices...
```

### Blog Posts

The `docs/blog-posts/` directory contains your blog posts. Start with the `index.md` file and add new Markdown files for each blog post.

To add a new blog post:

1. Create a new Markdown file in the `docs/blog-posts/` directory
2. Add front matter at the top of the file:
   ```markdown
   ---
   title: Your Blog Post Title
   sidebar_label: Shorter Title (Optional)
   description: Brief description of the blog post
   ---

   # Your Blog Post Title

   Content of your blog post...
   ```
Example blog post (`docs/blog-posts/learning-docusaurus.md`):
```markdown
---
title: My Experience Learning Docusaurus
sidebar_label: Learning Docusaurus
description: Reflections on my journey learning Docusaurus for documentation
---

# My Experience Learning Docusaurus

Today I started learning how to use Docusaurus for documentation...

## First Impressions

My first impressions of Docusaurus were...

## Challenges Faced

I encountered several challenges while setting up my documentation site...

## What I Learned

Through this process, I learned several key concepts...
```

### Adding Images

To add images to your documentation or blog posts:

1. Place your image files in the `static/img/` directory
2. Reference them in your Markdown files using the following syntax:
   ```markdown
   ![Alt text for your image](/img/your-image.png)
   ```

For example, to add a screenshot of your project:
```markdown
## Project Screenshot

![Screenshot of my React application](/img/project-screenshot.png)
```

### Adding Code Samples

To add code samples with syntax highlighting:

````markdown
```javascript
// This is a JavaScript code sample
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('ACMW Mentee'));
```
````

You can specify different languages for syntax highlighting:
- `javascript` for JavaScript
- `python` for Python
- `java` for Java
- `jsx` for React components
- `css` for CSS
- `html` for HTML
- `bash` for shell commands
- And many more...

## 🚢 Deployment

### GitHub Pages Setup

1. In your GitHub repository, go to "Settings" > "Pages"
2. Set the "Source" to "GitHub Actions"

### Manual Deployment

You can manually deploy your site using the following command:

```bash
npm run build
npm run deploy
```

This will build the static files and push them to the `gh-pages` branch of your repository.

### Automatic Deployment

This repository is set up to automatically deploy to GitHub Pages whenever you push changes to the `main` branch. The GitHub Actions workflow will:

1. Build the static site
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://YOUR-USERNAME.github.io/ACMW-Jump-Project/`

## 📅 Project Timeline

The ACMW-Jump Mentorship Program follows this timeline:

* **LEARN Phase**: 3rd February 2025 - 7th March 2025
* **BUILD Phase**: 7th March 2025 - 27th April 2025
* **FINAL Phase (Project Presentation)**: 27th April – 2nd May 2025

Use this documentation site to track your progress throughout these phases.

## 🔍 Troubleshooting

### Common Issues

1. **Site not building**
   - Make sure you have the correct Node.js version installed
   - Run `npm install` to ensure all dependencies are installed
   - Check for any error messages in the console

2. **Changes not appearing on the live site**
   - Ensure you've pushed your changes to the `main` branch
   - Check the GitHub Actions tab for any deployment errors
   - Make sure GitHub Pages is set up correctly

3. **Markdown formatting issues**
   - Refer to the [Docusaurus Markdown features guide](https://docusaurus.io/docs/markdown-features)
   - Ensure proper spacing in your Markdown files

4. **Images not displaying**
   - Check that the image path is correct
   - Make sure the image file exists in the specified location
   - Verify the image filename case (GitHub Pages is case-sensitive)

### Getting Help

If you encounter issues not covered here, reach out to your mentor or create an issue in the repository.

## 🤝 Contributing

This template is designed to be forked and customized for your personal use. However, if you find bugs or have suggestions for improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## 📬 Contact

Project Lead - [Prakash Aryan](https://github.com/prakash-aryan)

Project Link: [https://github.com/prakash-aryan/ACMW-Jump-Project](https://github.com/prakash-aryan/ACMW-Jump-Project)
