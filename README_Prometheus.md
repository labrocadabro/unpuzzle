# Unpuzzle: Web-Based Word Puzzle Solving Utility

## Project Overview

Unpuzzle is a web-based puzzle-solving utility designed to assist puzzle enthusiasts, particularly those tackling codewords (also known as codecrackers) word puzzles. 

### Purpose
The primary goal of Unpuzzle is to provide an interactive tool that helps solve word-based puzzles by finding potential word matches based on specific letter constraints. It simplifies the process of cracking challenging word puzzles by offering a flexible search mechanism.

### Key Features
- Codewords Puzzle Helper: A specialized tool for finding words that match specific letter patterns
- Dynamic Word Matching: Supports complex search patterns using a flexible input system
- Web-based Interface: Easy-to-use web application accessible through a browser
- Extensive Word Dictionary: Utilizes a pre-processed word list for comprehensive matching

### How It Works
Users can input a partial word pattern using letters and numbers, where:
- Letters represent known characters in specific positions
- Numbers represent the number of unknown letters between known characters

#### Example Searches
- `c1t`: Finds 3-letter words starting with 'c' and ending with 't'
- `t2t1`: Locates 5-letter words with 't' as the first and fourth letters

### Benefits
- Speeds up puzzle-solving process
- Reduces manual word searching
- Provides instant word suggestions
- Supports various word puzzle solving strategies

## Getting Started, Installation, and Setup

### Prerequisites

- Web browser (modern, JavaScript-enabled)
- Internet connection (for local development)

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unpuzzle.git
   cd unpuzzle
   ```

2. Open the project:
   - Navigate to the `site` directory
   - Open `index.html` in your web browser

### Running the Project

The project is a static web application that can be run directly from the file system:

- No server or compilation required
- Simply open `site/index.html` in a web browser
- Currently supports a Codewords puzzle tool accessible from the main page

### Development

The project is lightweight and requires no additional build steps:

- Edit HTML, JavaScript, and text files directly
- Recommended to use a code editor with live preview capabilities
- No additional dependencies or package managers needed

### Available Tools

- Codewords Puzzle Solver: Access via `site/codewords.html`
- Additional tools may be added in future updates

### Browser Compatibility

- Tested on modern browsers (Chrome, Firefox, Safari, Edge)
- Ensure JavaScript is enabled for full functionality

### Notes

- The project is a simple, static web application
- Minimal setup required
- Designed for easy puzzle-solving tools

## Deployment

### Static Site Deployment

This project is a static web application that can be easily deployed to various hosting platforms.

#### Deployment Options

##### Netlify
To deploy on Netlify:
1. Ensure the contents of the `site` directory are deployed as the root directory
2. No build steps are required as the project contains static files

##### Vercel
To deploy on Vercel:
1. Upload the contents of the `site` directory
2. Confirm that `index.html` is set as the entry point
3. No additional configuration or build process is needed

##### Manual Hosting
For manual hosting:
1. Copy the contents of the `site` directory to your web server's document root
2. Ensure the following files are preserved:
   - `index.html`
   - `codewords.html`
   - `codewords.js`
   - `words.txt`

#### Deployment Considerations
- No server-side processing is required
- The application runs entirely client-side
- Recommended to serve files with appropriate MIME types
  - HTML: `text/html`
  - JavaScript: `application/javascript`
  - Text files: `text/plain`

## Feature Highlights

### Codewords Puzzle Helper
The Unpuzzle application provides a specialized tool for solving codewords puzzles, offering the following key features:

#### Word Pattern Matching
- Search for words based on precise pattern matching
- Support for partial word knowledge with flexible input
- Dynamically generate regex patterns from user input

#### Input Flexibility
- Enter known letters and specify unknown letter positions
- Use numbers to represent the count of unknown letters between known characters
- Case-insensitive word matching

#### Usage Examples
- Find 3-letter words starting with 'c' and ending with 't': Enter `c1t`
- Locate 5-letter words with 'T' as the first and fourth letters: Enter `t2t1`

#### Search Capabilities
- Real-time word list generation
- Instant display of matching words
- Leverages a pre-defined word list for comprehensive search results

## Configuration

### Environment Configuration

The project uses minimal configuration, primarily managed through text files and JavaScript parameters.

#### Input Files
- `raw_words.txt`: Source file containing original word list
- `site/words.txt`: Processed word list generated by cleanup script

#### Cleanup Process
The `cleanup.py` script processes words with the following filtering rules:
- Converts words to lowercase
- Removes non-alphabetic entries
- Excludes words with all identical characters
- Sorts and writes cleaned words to `site/words.txt`

#### JavaScript Configuration
The `codewords.js` script supports configuration through:
- Regex generation based on input codeword
- Character-based pattern matching
  - Alphabetic characters match themselves
  - Numeric characters specify word length

#### Browser Interaction
- Form submission handled via `codeword-form`
- Input captured through `codeword` input field
- Results displayed in `word-list` element

#### Performance Considerations
- Word matching occurs client-side
- Words loaded dynamically via `fetch()` from `/words.txt`

## Technologies Used

### Languages
- JavaScript (Frontend interaction)
- Python (Data preprocessing)
- HTML (Web page structure)

### Frontend Technologies
- Vanilla JavaScript
  - DOM manipulation
  - Event handling
  - Fetch API for data retrieval

### Development and Tooling
- Text file processing
- Regular expression generation
- Client-side word filtering

### Key Capabilities
- Dynamic web application
- Text-based word search functionality
- Client-side data filtering
- Simple regex-based matching mechanism

## Additional Notes

### Word Processing
The project includes a cleanup script (`cleanup.py`) that processes word lists by:
- Removing non-alphabetic entries
- Eliminating words with repeated characters
- Converting words to lowercase
- Sorting and saving cleaned words to `site/words.txt`

### Site Structure
The project contains a simple website with a single page that links to a Codewords tool. This suggests the project is aimed at puzzle enthusiasts or those interested in word and number games.

### Performance Considerations
The word processing script uses efficient set operations to clean and deduplicate word lists, which can be beneficial for large datasets.

### Future Extensions
The current implementation provides a basic framework for puzzle-related tools, with potential for expanding the range of puzzle-solving utilities.

## Contributing

We welcome contributions to the project! Here are some guidelines to help you get started:

### How to Contribute

1. **Fork the Repository**
   - Create a personal fork of the project on GitHub
   - Clone your forked repository to your local machine

2. **Create a Branch**
   - Create a new branch for your contribution
   - Use a clear and descriptive branch name
   - Example: `feature/add-new-word-list` or `bugfix/resolve-html-rendering`

3. **Make Changes**
   - Make your changes in the new branch
   - Ensure your code follows the project's existing style and structure
   - If adding new features, include appropriate updates to related files

4. **Testing**
   - Verify that your changes do not break existing functionality
   - If applicable, add or update tests to cover your modifications
   - Ensure all tests pass before submitting a pull request

5. **Commit and Push**
   - Write clear, concise commit messages describing your changes
   - Push your changes to your fork on GitHub

6. **Submit a Pull Request**
   - Open a pull request from your fork to the main repository
   - Provide a detailed description of your changes
   - Reference any related issues

### Contribution Guidelines

- Maintain the existing code style and conventions
- Keep changes focused and atomic
- Update documentation when necessary
- Be respectful and constructive in discussions

### Reporting Issues

- Use the GitHub Issues section to report bugs or suggest improvements
- Provide detailed information, including:
  - Steps to reproduce the issue
  - Expected behavior
  - Actual behavior
  - Relevant code snippets or error messages

### Code of Conduct

- Treat all contributors with respect
- Be inclusive and supportive
- Collaborate constructively

Thank you for your interest in contributing to the project!

## License

This project is currently unlicensed. Without a specific license, the default copyright laws apply, which means:

- The original author retains all rights to the code
- Others cannot reproduce, distribute, or create derivative works without permission
- No one else has the legal right to use, modify, or share the code

If you intend to share or collaborate on this project, it is strongly recommended to add an open-source license to clarify usage terms and encourage community participation.