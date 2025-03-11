/**
 * Sidebar Configuration File
 * 
 * This file defines the sidebar structure for your documentation site.
 * 
 * Creating a sidebar enables you to:
 * - Create an ordered group of docs
 * - Render a sidebar for each doc of that group
 * - Provide next/previous navigation between docs
 * - Automatically show a table of contents for each doc
 * - Display the current doc's position within the sidebar
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main sidebar for documentation
  tutorialSidebar: [
    // Root level pages
    'intro',                  // Main landing page for docs
    'profile',                // Your profile page
    
    // Documentation section
    // TODO: MENTEE - Expand this section with your technical documentation
    // You can either add more files as direct entries or create nested categories
    'documentation/index',    // Documentation landing page
    
    // Example of how to add a specific document
    // 'documentation/etl-process', 
    
    // Example of how to create a category with nested pages
    // {
    //   type: 'category',
    //   label: 'Project Guides',
    //   items: [
    //     'documentation/project-a',
    //     'documentation/project-b',
    //   ],
    // },
    
    // Blog posts section
    // TODO: MENTEE - Add your blog posts here as they're created
    'blog-posts/index',       // Blog posts landing page
    
    // Example of how to add a specific blog post
    // 'blog-posts/git-branching',
    
    // TODO: MENTEE - Add more categories or documents as needed
    // For example:
    // {
    //   type: 'category',
    //   label: 'Tutorials',
    //   items: ['tutorials/getting-started', 'tutorials/advanced'],
    // },
  ],
  
  // TODO: MENTEE - You can create additional sidebars for different sections
  // Example:
  // projectSidebar: [
  //   'projects/overview',
  //   'projects/project-one',
  //   'projects/project-two',
  // ],
};

module.exports = sidebars;