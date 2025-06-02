# ArticGrannie - Sewing & Knitting Pattern Showcase

This project is a website to showcase and (initially) link to Etsy listings for handmade sewing and knitting patterns created by ArticGrannie. The future goal is to integrate an on-page shop.

## About This Project

This website serves as an online catalog for beautiful, unique patterns inspired by arctic themes. It aims to provide customers with:
- A clear view of available patterns.
- Detailed information about each pattern.
- A personal connection to the designer, ArticGrannie.
- Easy access to purchase patterns via Etsy (current setup).

## Files Included

- **index.html**: The main landing page/homepage.
- **patterns.html**: A page dedicated to listing all available patterns.
- **bout.html**: Information about ArticGrannie and her story.
- **contact.html**: How to get in touch.
- **css/style.css**: The main stylesheet for all pages.
- **js/script.js**: JavaScript for dynamic behavior (footer year, active nav link).
- **images/**: Folder for website images (currently empty, add your pattern photos here).
- **README.md**: This file.

## How to Use / Local Development

1.  Clone or download this repository.
2.  Navigate to the project folder (ArticGrannie).
3.  Open index.html in your web browser to view locally.

## Setting Up with GitHub & GitHub Pages (for a NEW Repository)

1.  **Create a New Repository on GitHub:**
    - Name it (e.g., ArticGrannie-Patterns or similar).
    - Make it Public.
    - **DO NOT** initialize with a README if pushing this existing local project.

2.  **Initialize Git in Your Local Project Folder (ArticGrannie):**
    `ash
    git init
    git branch -M main
    `

3.  **Add and Commit Files:**
    `ash
    git add .
    git commit -m "Initial commit: Setup ArticGrannie website structure and placeholder content"
    `

4.  **Link to GitHub Repository and Push:**
    `ash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    `

5.  **Enable GitHub Pages:**
    - In GitHub repo: Settings > Pages.
    - Source: Deploy from a branch.
    - Branch: main, / (root).
    - Save. Site will be live at https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/.

## Customization - IMPORTANT!

1.  **Placeholder Text:**
    - Replace all [Placeholder: ...] text and bracketed items (like [Etsy Link to ...], [Link to Instagram if available]) in all .html files with actual content for ArticGrannie.
    - Update the email address in contact.html.
2.  **Images:**
    - Add high-quality pattern photos to the images/ folder.
    - Update <img src="..."> paths in .html files.
    - Provide descriptive lt text for all images.
    - Replace images/pattern-placeholder.jpg. Consider a hero image too.
3.  **Etsy Links:** Ensure all Etsy links are correct and specific.
4.  **CSS Styling (css/style.css):** Adjust to match ArticGrannie's brand aesthetic.
5.  **Footer:** Update policy links if needed.

## Future Plans
- Integrate an on-page shop (VISA, VIPPS).
- Blog section.
- Advanced SEO.
- Email newsletter.
