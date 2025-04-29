# Unpuzzle: A Web-Based Puzzle Solving Toolkit for Word and Number Enthusiasts

## Project Overview

Unpuzzle is a specialized web-based toolset designed to assist puzzle enthusiasts, particularly those who enjoy word and number puzzles. The primary focus of this project is to provide interactive helpers that make solving complex puzzle types more manageable.

### Core Purpose
The project addresses the challenges puzzle solvers face by offering targeted digital assistance. Currently, it provides a dedicated helper for codewords (or codecrackers) - a challenging word puzzle format where each cell is represented by a number corresponding to a letter of the alphabet.

### Key Features
- **Codewords Helper Tool**: An interactive web interface that allows users to find word possibilities based on:
  - Specific word lengths
  - Known letter positions
  - Partial word information

### Benefits
- Simplifies the process of solving complex word puzzles
- Provides a user-friendly interface for exploring word possibilities
- Supports puzzle solvers in finding potential word solutions quickly
- Offers flexibility in searching for words with various constraints

### Puzzle Solving Approach
The tool enables users to input puzzle-specific information using an intuitive pattern matching system. For example:
- Search for 3-letter words starting with 'C' and ending with 'T'
- Find 5-letter words with specific letter placements

The project includes a word processing script that cleans and prepares a word list, ensuring high-quality and varied word suggestions for puzzle solving.

## Getting Started, Installation, and Setup

### Quick Start

Unpuzzle is a web-based tool designed to help solve word puzzles, specifically codewords (codecrackers). The project provides a simple web interface for finding word possibilities based on known letters and word structure.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of word puzzles

### Installation

1. Clone the repository or download the project files
2. No additional dependencies or installations are required

### Running the Application

#### Development Mode

1. Open the `site/index.html` file in your web browser
2. Navigate to the Codewords Helper page by clicking the "Codewords" link

### Usage Guide

#### Codewords Helper

The Codewords Helper allows you to find word possibilities by entering partial word information:

- Use letters and numbers to represent known and unknown letters
- Letters represent specific known letters
- Numbers represent the count of unknown letters between known letters

##### Examples

- Find a 3-letter word starting with 'C' and ending with 'T': 
  - Enter `c1t`
- Find a 5-letter word with 'T' as the first and fourth letters: 
  - Enter `t2t1`

### Word List Generation

A `cleanup.py` script is included to process `raw_words.txt` and generate a clean `site/words.txt` for the word search functionality. This script:
- Converts words to lowercase
- Removes non-alphabetic entries
- Removes words with repeated letters

### Compatibility

- Works in all modern web browsers
- No server-side setup required
- Completely client-side word search functionality

## Deployment

The application can be deployed as a static website, utilizing the files in the `site` directory.

### Deployment Options

#### Static Website Hosting
The project includes static files that can be deployed to platforms supporting static hosting:

- Netlify
- GitHub Pages
- Vercel

##### Manual Deployment
1. Upload the contents of the `site` directory to your chosen hosting platform
2. Ensure the following files are in the root directory:
   - `index.html`
   - `codewords.html`
   - `codewords.js`
   - `words.txt`

##### Recommended Deployment Platforms
- **Netlify**: Drag and drop the `site` directory or use Netlify CLI
- **GitHub Pages**: Place files in the root directory of your GitHub repository
- **Vercel**: Connect your repository and set the output directory to `site`

### Deployment Considerations
- No build process is required
- No server-side dependencies
- Works with static file hosting services
- Supports direct browser rendering

## Feature Highlights

The Unpuzzle Me project provides a specialized web-based tool for solving word puzzles, with a primary focus on Codewords (codecrackers) puzzles.

### Codewords Helper
- **Puzzle Type Support**: Focuses on Codewords, a crossword-like word puzzle where each cell contains a number representing a letter of the alphabet
- **Flexible Search Functionality**: Allows users to find word possibilities based on:
  - Specific word length
  - Known letter positions
  - Partial word information

#### Search Patterns
Users can enter search patterns using a unique syntax:
- Letters represent known letters
- Numbers represent the count of unknown letters between known letters

##### Example Search Patterns
- `c1t`: Find 3-letter words starting with 'c' and ending with 't'
- `t2t1`: Find 5-letter words with 't' as the first and fourth letters

#### Key Features
- Real-time word suggestion
- Dynamic word list generation
- Client-side regex-based word matching
- Supports all word lengths
- Uses a pre-loaded word dictionary for matching

## Configuration

The project uses minimal configuration, primarily relying on input and output file paths:

### Input File
- `raw_words.txt`: Source file containing words to be processed
  - Each line represents a single word
  - Words are cleaned and filtered during processing

### Output File
- `site/words.txt`: Processed and cleaned words file
  - Contains alphabetically sorted unique words
  - Each line represents a cleaned word

#### Word Filtering Criteria
Words are filtered based on the following rules:
- Must contain only alphabetic characters
- Must not consist of repeated identical characters

### Configuration Constraints
- Input file must be a plain text file
- Words are automatically converted to lowercase
- Non-alphabetic entries are automatically removed

## Project Structure

The project is organized into the following key directories and files:

### Root Directory
- `cleanup.py`: A Python script likely responsible for data processing or cleanup operations
- `raw_words.txt`: A text file containing raw word data
- `README.md`: Project documentation file

### `site` Directory
Contains the web-based components of the project:
- `index.html`: Main HTML entry point for the web application
- `codewords.html`: Likely a specific page or component of the web application
- `codewords.js`: JavaScript file providing functionality for the web application
- `words.txt`: A text file containing processed or working word data

The structure suggests a simple web application with supporting Python scripts for data management, and static web files for frontend presentation.

## Technologies Used

### Frontend
- HTML5
- Vanilla JavaScript
- Fetch API for data retrieval

### Development and Utility
- Text file processing
- Regular expression manipulation

### Core Technologies
- Web browser-based application
- Plain text file processing

### Platforms
- Client-side web application
- Cross-browser compatible

## Additional Notes

### Word Processing
The project includes a word cleanup script (`cleanup.py`) that processes a raw word list, filtering out:
- Non-alphabetic entries
- Words with repeated characters

### Project Limitations
- The current implementation focuses on a single puzzle type (Codewords)
- Word list is manually curated and may not be comprehensive

### Browser Compatibility
The web interface is designed with a simple, minimalist approach and should be compatible with modern web browsers. Ensure JavaScript is enabled for full functionality.

### Performance Considerations
- Word processing is done via a lightweight Python script
- Word list is pre-processed to optimize lookup and filtering

### Future Potential
The project structure suggests room for expansion into additional puzzle types or word-related tools.

## Contributing

We welcome contributions to the project! Here are some guidelines to help you get started:

### How to Contribute

1. **Fork the Repository**
   - Create a fork of the project on GitHub
   - Clone your forked repository to your local machine

2. **Create a Branch**
   - Create a new branch for your contribution
   - Use a clear and descriptive branch name
   - Example: `feature/add-new-word-list` or `bugfix/resolve-html-rendering`

3. **Make Changes**
   - Ensure your code follows the project's existing code style
   - Add or update tests for your changes
   - Verify that all existing tests pass

4. **Submit a Pull Request**
   - Push your changes to your fork
   - Open a pull request with a clear title and description
   - Describe the purpose and details of your contribution

### Contribution Guidelines

#### Code Style
- Follow the existing code structure in the project
- Maintain consistent formatting
- Use clear and meaningful variable and function names

#### Testing
- All code changes should be accompanied by appropriate tests
- Ensure all tests pass before submitting a pull request
- Add new tests for any new functionality

#### File Considerations
- When adding or modifying word lists, ensure they are appropriate and follow the project's purpose
- Update documentation if your changes impact existing functionality

### Reporting Issues
- Use the GitHub Issues section to report bugs or suggest improvements
- Provide detailed information about the issue, including:
  - Steps to reproduce
  - Expected behavior
  - Actual behavior
  - Relevant screenshots or error messages

### Code of Conduct
- Be respectful and inclusive
- Collaborate constructively
- Help maintain a positive and welcoming community

**Thank you for your interest in contributing!**

## License

This project is currently unlicensed. Without a specific license, the default copyright laws apply:

- No one else can reproduce, distribute, or create derivative works from this code
- The original author retains all rights to the code
- Others cannot use, copy, or modify the code without explicit permission

If you wish to use this code, please contact the repository owner to discuss licensing terms. It is recommended to add an open-source license to clarify usage rights and encourage collaboration.