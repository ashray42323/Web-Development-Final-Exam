# King's College - In the Area
## Web Development Exam Project

## Project Requirements

1.  Create pixel perfect design
2.  Add a button that will alternate the design
3.  Mobile responsive
4.  Font Family => Lora

## Project Structure

project-folder/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # Toggle functionality
├── Kings.jpeg          # Kings College Building image
└── README.md           # Documentation


## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Styling, transitions, responsive design
- **JavaScript (ES3)** - Toggle functionality
- **Google Fonts** - Lora font family

## My Development Process

### HTML (index.html)
I created the basic structure with:
- Container for layout
- Content section with subtitle, title, image, and description
- Toggle button with onclick event

### CSS (styles.css)
I developed the styling myself:
- Used Flexbox for centering content
- Created two designs with `.design-two` class toggle
- Background colors: `#cdd4be` (design 1) and `#d4d9cc` (design 2)
- **Key feature - Text overlap effect:**
  ```css
  body:not(.design-two) .title {
      margin-bottom: -50px;  /* Makes title overlap image */
  }
- Made responsive with media queries and `clamp()` for fluid typography
- Added smooth transitions for better UX

### JavaScript (script.js)
I wrote the toggle function using ES3 syntax:

```javascript
function toggleDesign() {
    var body = document.body;
    var className = body.className;
    if (className.indexOf('design-two') !== -1) {
        // Remove 'design-two' class
        body.className = className.replace('design-two', '').replace(/\s+/g, ' ').trim();
    } else {
        // Add 'design-two' class
        body.className = className + ' design-two';
    }
}

**My Logic:**
1. Get the body element and its current classes
2. Check if 'design-two' class exists using `indexOf()`
3. If exists, remove it using `replace()`
4. If doesn't exist, add it with string concatenation
5. Clean up extra whitespace

## 🤖 AI Assistance Usage

I developed **70-75% of the code myself**. I used AI (Claude) for specific technical challenges:

### Specific AI Assistance Prompts:

1. **For Responsive Typography:**
   - Prompt: *"How to make font sizes scale smoothly across different screen sizes without writing multiple media queries?"*
   - Learned: CSS `clamp()` function
   - Applied it myself to the title element

2. **For ES3 JavaScript Compatibility:**
   - Prompt: *"What's the ES3 compatible way to toggle classes in JavaScript? I'm using classList.toggle() but need older syntax"*
   - Learned: Using `indexOf()`, `replace()`, and string manipulation
   - Wrote the toggle function myself based on this understanding

3. **For Text Overlap Effect:**
   - Prompt: *"How can I make a heading text appear overlapping on top of an image below it using CSS?"*
   - Learned: Negative margin technique with z-index
   - Implemented and adjusted the values myself

4. **For CSS Class Structure:**
   - Prompt: *"What's the best practice for toggling between two different designs - using multiple classes or one toggle class?"*
   - Learned: Single class toggle pattern
   - Built entire CSS architecture around this myself


## Design Features

### Design 1 (Default)
- Background: `#cdd4be`
- Title overlaps image (-50px margin)
- Subtitle: 12px, spacing: 25px

### Design 2 (After Toggle)
- Background: `#d4d9cc`
- Normal layout (no overlap)
- Subtitle: 11px, spacing: 20px

### Mobile Responsive
- Breakpoint: 768px
- Reduced overlap on mobile (-30px)
- Smaller button and adjusted spacing


## Key Techniques I Used

1. **Flexbox Centering** - For layout alignment
2. **Negative Margins** - Creating text overlap effect
3. **Z-index Layering** - Positioning title above image
4. **CSS Transitions** - Smooth design switching
5. **Fluid Typography** - Using `clamp()` for responsive text
6. **ES3 JavaScript** - For maximum compatibility


## How to Run

1. Place all files in the same folder
2. Ensure `Kingss.jpeg` is included
3. Open `index.html` in browser
4. Click "Toggle Design" to switch layouts


## Challenges & Solutions

**Challenge 1: Text Overlap**
- Used negative margin (`-50px`) with `z-index: 10`

**Challenge 2: ES3 Syntax**
- Used `indexOf()` and `replace()` instead of modern methods

**Challenge 3: Responsive Design**
- Implemented `clamp()` and media queries

## Self-Assessment

**What I Did Myself:**
- ✅ Complete HTML structure
- ✅ Most CSS styling and layout
- ✅ Responsive design implementation
- ✅ JavaScript logic (after understanding concepts)
- ✅ File organization

**What AI Helped With:**
- Specific CSS/JS techniques I hadn't learned yet
- Best practices for certain implementations

**Overall:** ~70-75% independent work, AI assisted with specific concepts

## 👤 Developer

**Name:** Ashray Poudel
**Course:** Basic Web Development  
**Institution:** King's College  
**Date:** December 2025
# Web-Development-Final-Exam
