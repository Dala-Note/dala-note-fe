# Dala-Note Dependencies Guide

This document provides a comprehensive overview of all dependencies used in the Dala-Note project and their specific purposes.

## Project Overview

Dala-Note is a React-based note-taking application built with modern web technologies. The project uses Vite as the build tool and includes features for rich text editing and OCR capabilities.

## Production Dependencies

### Core Framework
- **react** (^19.1.1) - The main JavaScript library for building user interfaces
- **react-dom** (^19.1.1) - Provides DOM-specific methods for React components

### Styling & UI
- **tailwindcss** (^4.1.12) - Utility-first CSS framework for rapid UI development
- **@tailwindcss/vite** (^4.1.12) - Vite plugin for Tailwind CSS integration
- **react-icons** (^5.5.0) - Popular icon library providing thousands of icons as React components

### Rich Text Editor
- **@tiptap/react** (^3.2.1) - React wrapper for the Tiptap rich text editor
- **@tiptap/pm** (^3.2.1) - ProseMirror integration for Tiptap
- **@tiptap/starter-kit** (^3.2.1) - Essential extensions bundle for Tiptap editor

### State Management
- **zustand** (^5.0.8) - Lightweight state management solution for React applications

### OCR & Image Processing
- **tesseract.js** (^6.0.1) - Pure JavaScript OCR library for extracting text from images

## Development Dependencies

### Build Tools
- **vite** (^7.1.2) - Fast build tool and development server
- **@vitejs/plugin-react** (^5.0.0) - Official Vite plugin for React support

### Code Quality & Linting
- **eslint** (^9.33.0) - JavaScript linter for code quality enforcement
- **@eslint/js** (^9.33.0) - ESLint's JavaScript configuration
- **eslint-plugin-react-hooks** (^5.2.0) - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** (^0.4.20) - ESLint plugin for React Fast Refresh
- **globals** (^16.3.0) - Global variables for different JavaScript environments

### Testing
- **jest** (^30.0.5) - JavaScript testing framework

### TypeScript Support
- **@types/react** (^19.1.10) - TypeScript definitions for React
- **@types/react-dom** (^19.1.7) - TypeScript definitions for React DOM

## Key Features Enabled by Dependencies

### 1. Rich Text Editing
The combination of Tiptap packages provides a powerful, extensible rich text editor:
- **@tiptap/react**: React integration
- **@tiptap/pm**: ProseMirror foundation for document editing
- **@tiptap/starter-kit**: Common editing features (bold, italic, lists, etc.)

### 2. Modern Styling
- **Tailwind CSS v4**: Utility-first styling with the latest features
- **React Icons**: Comprehensive icon library for UI elements

### 3. OCR Capabilities
- **Tesseract.js**: Client-side optical character recognition for extracting text from images

### 4. State Management
- **Zustand**: Lightweight, flexible state management without boilerplate

### 5. Development Experience
- **Vite**: Fast HMR and optimized builds
- **ESLint**: Code quality and consistency
- **Jest**: Unit testing capabilities

## Project Structure

```
src/
├── components/
│   └── styles/
│       ├── App.css      # Component-specific styles
│       └── index.css    # Global styles with Tailwind import
├── App.jsx              # Main application component
└── main.jsx            # Application entry point
```

## Getting Started

### 1. Clone the Repository

```bash
# Clone the repository
git clone <https://github.com/Dala-Note/dala-note-fe.git>

# Navigate to the project directory
cd Dala-Note/dala-note-fe/dala-note
```

### 2. Set Up Development Branch

**Important: Always develop new features on the development branch, not main.**

```bash
# Switch to development branch
git checkout development

# If development branch doesn't exist, create it from main
git checkout -b development

# Pull latest changes from development branch
git pull origin development
```

### 2.1. Merging New Changes from the Base Repository's Development Branch with your Forked Repo's Development Branch
This is necessary because someone else has probably made changes to their forked repo and these changes have been merged with the base repo. For you to get those changes from the base repo's development branch without losing your work, follow these steps.
 - Run "git remote add upstream https://github.com/Dala-Note/dala-note-fe.git" in your terminal, this adds the main repo as an upstream remote.
 - Run "git remote -v" shortly after. This checks the remote that has just been added.
 - After that, run "git fetch upstream", this will fetch the changes from the base repository's branches.
 - Run "git checkout Development" to switch to your dev branch if you're not already there.
 - Run "git merge upstream/Development". This should merge the changes.
 - Lastly, push your changes back to your forked repo's branch.



### 3. Adding New Features

When adding a new feature, follow this workflow:

```bash
# 1. Create a new feature branch from development
git checkout development
git pull origin development
git checkout -b feature/your-feature-name

# 2. Make your changes and commit them
git add .
git commit -m "Add: your feature description"

# 3. Push your feature branch
git push origin feature/your-feature-name

# 4. Create a Pull Request to merge into development branch (NOT main)
# Use your Git hosting platform (GitHub, GitLab, etc.) to create PR from:
# feature/your-feature-name → development

# 5. After PR is approved and merged, clean up
git checkout development
git pull origin development
git branch -d feature/your-feature-name
```

**Branch Strategy:**
- `main` - Production-ready code only
- `development` - Integration branch for new features
- `feature/*` - Individual feature branches

### 4. Install Dependencies

```bash
npm install
```

### 3. Development Commands

**Start development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Run linting:**
```bash
npm run lint
```

**Preview production build:**
```bash
npm run preview
```

## Configuration Files

- **vite.config.js**: Vite configuration with React and Tailwind plugins
- **eslint.config.js**: ESLint configuration for code quality
- **package.json**: Project metadata and dependency management

## Notes

- The project uses ES modules (`"type": "module"`)
- React 19 is used with the latest features
- Tailwind CSS v4 is integrated via Vite plugin for optimal performance
- ESLint is configured with React-specific rules and hooks validation