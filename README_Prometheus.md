# Unpuzzle: An Interactive Web-Based Codewords Puzzle Solver

## Project Overview

Unpuzzle is a web-based puzzle-solving tool specifically designed to assist users in solving codewords (also known as codecrackers) - a challenging word puzzle format. 

#### Purpose
The project provides an interactive web application that helps puzzle enthusiasts find potential word solutions based on partial letter information. Unlike traditional crossword puzzles, codewords replace letters with numbers, requiring strategic deduction to complete the grid.

#### Key Features
- Interactive codewords puzzle helper
- Dynamic word search based on pattern matching
- Supports flexible input for word pattern discovery
- Comprehensive word list for solution generation

#### How It Works
Users can input a pattern representing known letters and word structure using a simple notation:
- Letters are entered as-is (e.g., 'c' for a known 'c')
- Numbers represent the count of unknown letters between known letters (e.g., 'c2t' for a 3-letter word starting with 'c' and ending with 't')

The tool leverages a pre-processed word list and regex pattern matching to quickly identify potential word solutions, making puzzle-solving more efficient and enjoyable.

## Getting Started, Installation, and Setup

### Prerequisites

- Python 3.6 or higher
- Web browser (Chrome, Firefox, Safari, or Edge recommended)

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unpuzzle.git
   cd unpuzzle
   ```

2. Prepare the word list:
   Run the cleanup script to generate the processed word list:
   ```bash
   python cleanup.py
   ```
   This script filters and prepares words from `raw_words.txt` for use in the codewords puzzle tool.

### Running the Application

The project is a static web application. You can run it directly from the `site` directory:

1. Open `site/index.html` in your web browser
   - No web server is required for local development
   - Click on the "Codewords" link to access the puzzle tool

### Development Notes

- The application is client-side and does not require additional dependencies
- Word processing is handled by the `cleanup.py` script
- Word lists are stored in `site/words.txt`

### Browser Compatibility

The web application is designed to work with modern web browsers supporting HTML5 and JavaScript.

## Deployment

### Web Application Deployment

The application is a static web application that can be deployed to various hosting platforms:

#### Deployment Options

1. **Static Hosting Platforms**
   - The application can be easily deployed to static hosting services like:
     - Netlify
     - Vercel
     - GitHub Pages
     - Firebase Hosting

2. **Manual Deployment**
   - Simply upload the contents of the `site` directory to your preferred web hosting service
   - Ensure all files (`index.html`, `codewords.html`, `codewords.js`, `words.txt`) are deployed together

#### Deployment Steps

1. Prepare deployment files:
   ```bash
   # Files to deploy are located in the 'site' directory
   # No build process required
   ```

2. Deploy using Netlify CLI (example):
   ```bash
   # Install Netlify CLI globally
   npm install netlify-cli -g

   # Deploy from site directory
   netlify deploy --dir=site
   ```

#### Requirements
- No server-side processing is needed
- Modern web browser with JavaScript support
- Static hosting platform that supports HTML, JS, and text files

#### Notes
- No additional configuration is required for deployment
- The application runs entirely client-side

## Feature Highlights

### Codewords Puzzle Helper

The project offers a specialized tool for solving codewords puzzles, providing an interactive web-based interface to find word possibilities:

#### Key Features
- **Flexible Word Search**: Find words based on partial letter information and word length
- **Pattern Matching**: Support for specifying known letters and unknown letter positions
- **Dynamic Word Lookup**: Searches through a comprehensive word list to find matching possibilities

#### Usage Examples
- Search for a 3-letter word starting with 'C' and ending with 'T': Input `c1t`
- Find a 5-letter word with 'T' as the first and fourth letters: Input `t2t1`

#### Word Finding Mechanism
- Generates a dynamic regular expression based on user input
- Matches words against a predefined word list
- Displays matching words instantly on the web interface

The tool is particularly useful for puzzle enthusiasts and word game players looking to solve challenging codewords or codecracker puzzles efficiently.

## Configuration

The project provides minimal explicit configuration options, but there are several configurable aspects to be aware of:

### Word List Configuration
- The application uses a word list file located at `site/words.txt`
- The word list can be customized by modifying the source input file `raw_words.txt`
- A cleanup script (`cleanup.py`) processes the raw words with the following filters:
  * Removes non-alphabetic words
  * Removes words with identical repeated characters
  * Converts all words to lowercase

### Frontend Configuration
The JavaScript application (`codewords.js`) supports dynamic word searching with the following regex generation rules:
- Alphabetic characters are matched exactly
- Numeric characters represent word length constraints (e.g., `3` means match exactly 3 lowercase letters)
- The search is case-insensitive
- Words are matched from start to end

### Input Validation
- Codeword inputs are processed through a custom regex generation function
- Only alphabetic and numeric characters are supported in the input

## Project Structure

The project is organized into the following key directories and files:

### Root Directory
- `cleanup.py`: A Python script for processing and cleaning word lists
- `raw_words.txt`: Source file containing unprocessed words

### `site/` Directory
Contains the web application files for the Unpuzzle project:
- `index.html`: Main landing page for the web application
- `codewords.html`: Webpage for the codewords puzzle tool
- `codewords.js`: JavaScript functionality for the codewords puzzle
- `words.txt`: Processed and cleaned word list used by the application

#### File Relationships
- `cleanup.py` reads `raw_words.txt`
- Cleans and filters the words
- Writes the processed words to `site/words.txt`

The structure supports a simple web-based puzzle tool with a clean separation between data processing and web presentation.

## Technologies Used

### Frontend
- HTML5
- Vanilla JavaScript
- CSS (implied from HTML file)

### Backend/Tooling
- Python
- Text file processing

### Development and Deployment
- Plain text file manipulation
- Browser-based web application
- Client-side JavaScript fetch API
- Regex-based string matching

### Key JavaScript Features
- DOM manipulation
- Event handling
- Fetch API for file retrieval
- Regular expression generation
- Dynamic list rendering

### File Handling
- Text file processing
- File reading and writing

## Additional Notes

### Word Processing

The project includes a word cleanup script (`cleanup.py`) that processes a raw word list to create a clean, usable word list for the Codewords Helper tool. This script performs the following filtering:
- Removes non-alphabetic words
- Eliminates words with all repeated characters
- Converts words to lowercase
- Writes the cleaned and sorted words to `site/words.txt`

### Codewords Puzzle Assistance

The Codewords Helper is a web-based tool designed to assist with solving word puzzles. Key features include:
- Dynamic word searching based on partial word patterns
- Support for specifying known letters and unknown letter positions
- Regex-based word matching algorithm

#### Usage Examples
- Find 3-letter words with 'C' at the start and 'T' at the end: Enter `c1t`
- Locate 5-letter words with 'T' as the first and fourth letters: Enter `t2t1`

### Performance Considerations
- Word matching is performed client-side using JavaScript
- Words are fetched from a static text file, enabling quick local searching
- The tool provides real-time filtering of word possibilities

## Contributing

We welcome contributions to the project! Here are some guidelines to help you get started:

### Ways to Contribute
- Reporting bugs
- Suggesting improvements
- Submitting pull requests

### Contribution Process
1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes
4. Ensure all existing functionality remains intact
5. Submit a pull request with a clear description of your changes

### Code Guidelines
- Write clean, readable, and well-documented code
- Follow Python best practices
- Ensure new code is compatible with existing project structure

### Testing
- Test your changes thoroughly before submitting
- Verify that no existing functionality is broken

### Reporting Issues
- Use the GitHub Issues section to report bugs or suggest improvements
- Provide detailed information about the issue, including:
  - Steps to reproduce
  - Expected behavior
  - Actual behavior
  - Any relevant error messages or screenshots

### Code of Conduct
- Be respectful and inclusive
- Collaborate constructively
- Help maintain a positive and welcoming community

### Questions?
If you have any questions about contributing, please open an issue in the repository.

## License

This project is currently unlicensed. Without a specific license, the default copyright laws apply:

- The original author retains all rights to the code
- Others cannot reproduce, distribute, or create derivative works without permission
- No explicit open-source permissions are granted

If you wish to use this code, you should contact the repository owner to discuss usage rights and potential licensing options.