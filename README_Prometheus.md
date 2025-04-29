# Unpuzzle: An Interactive Web-Based Codewords Puzzle Solving Assistant

## Project Overview

Unpuzzle is a specialized web-based tool designed to assist puzzle enthusiasts in solving Codewords (or codecrackers) word puzzles. Codewords are unique word puzzles that resemble crosswords without traditional clues, where each cell contains a number representing a letter of the alphabet.

### Core Purpose
The application provides an interactive word-finding helper that allows users to:
- Search for words based on partial letter knowledge
- Generate word possibilities using flexible search patterns
- Support puzzle-solving for word puzzle enthusiasts

### Key Features
- Dynamic word search using pattern-based input
- Support for complex word pattern matching
- Client-side word filtering from a comprehensive word list
- User-friendly interface for entering puzzle constraints

### Benefits
- Speeds up Codewords puzzle solving
- Reduces manual word searching
- Provides flexible word discovery
- Works with various word puzzle constraints

### How It Works
Users can enter a pattern using letters and numbers, where:
- Letters represent known positions
- Numbers represent the count of unknown letters between known letters

#### Example Patterns
- `c1t`: Finds 3-letter words starting with 'c' and ending with 't'
- `t2t1`: Finds 5-letter words with 't' in the first and fourth positions

## Getting Started, Installation, and Setup

### Prerequisites

- A modern web browser
- Python 3.x (for word list processing)

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unpuzzle.git
   cd unpuzzle
   ```

2. Open the application:
   - Navigate to the `site` directory
   - Open `index.html` in your web browser

### Word List Processing

If you want to process or clean the word list:

1. Ensure you have Python 3.x installed
2. Run the cleanup script:
   ```bash
   python cleanup.py
   ```
   This script processes `raw_words.txt` and generates a cleaned word list in `site/words.txt`

### Project Components

- `site/index.html`: Main landing page
- `site/codewords.html`: Codewords puzzle tool
- `site/codewords.js`: JavaScript for the codewords puzzle
- `raw_words.txt`: Original word list
- `cleanup.py`: Python script for word list processing

### Development Notes

- No additional build steps are required
- The project is a static web application
- All tools can be run directly from the browser
- Word list processing can be done using the provided Python script

### Browser Compatibility

The application is designed to work with modern web browsers that support HTML5 and JavaScript.

## Deployment

The Unpuzzle application is a static web application that can be deployed using various hosting platforms.

### Deployment Options

#### Static Hosting Platforms
The application can be easily deployed on static hosting platforms such as:

- **Netlify**
  - Simply drag and drop the `site` directory into Netlify
  - Alternatively, connect your GitHub repository and set the publish directory to `site`

- **Vercel**
  - Import the project from GitHub
  - Set the output directory to `site`

#### Manual Deployment
For manual deployment:
- Copy the contents of the `site` directory to your web server's root directory
- Ensure the HTML, JavaScript, and text files are preserved in their relative structure

#### Docker Deployment
While not specifically configured, you can create a simple Dockerfile for deployment:

```dockerfile
FROM nginx:alpine
COPY site/ /usr/share/nginx/html/
EXPOSE 80
```

### Deployment Considerations
- The application requires no build step
- No server-side processing is needed
- All files are static and can be served directly from a web server

## Feature Highlights

Unpuzzle provides a specialized tool for solving word puzzles, with a primary focus on Codewords (codecracker) puzzle assistance:

### Codewords Helper
- Interactive web-based tool for solving word puzzles
- Allows users to find word possibilities based on:
  * Specific word length
  * Known letter positions
- Flexible input pattern matching:
  * Enter known letters
  * Specify number of unknown letters between known letters
- Supports complex pattern searches like:
  * `c1t` for 3-letter words starting with 'c' and ending with 't'
  * `t2t1` for 5-letter words with 't' in first and fourth positions
- Dynamically generates and applies regex patterns to filter word lists
- Instantly displays matching words from a comprehensive word database

### Key Input Capabilities
- Case-insensitive letter matching
- Flexible pattern representation using numbers to indicate unknown letter count
- Real-time word suggestion generation

## Configuration

### Word Filtering Rules

The application implements specific filtering and processing rules for words:

- Words are converted to lowercase
- Non-alphabetic words are excluded
- Words consisting of a single repeated character are removed
- Words are sorted alphabetically when processed

### Input Constraints

The codeword input supports two types of characters:
- Alphabetic characters (a-z): Matched exactly
- Numeric characters (0-9): Represents the number of wildcard letters to match

#### Regex Generation Example
- Input `a3b` would match words like:
  - `apple`
  - `amber`
  - `about`

### File Processing

Word lists are processed through:
- `raw_words.txt`: Source input file
- `cleanup.py`: Filtering and cleaning script
- `site/words.txt`: Final processed word list

### Browser Compatibility

The configuration relies on modern browser features:
- `fetch()` API for retrieving word lists
- DOM manipulation methods
- Regular expression support

## Project Structure

The project is organized into two main directories with specific purposes:

### Root Directory
The root directory contains essential project files:
- `cleanup.py`: A Python script for processing and cleaning word lists
- `raw_words.txt`: The original, unprocessed word list input file

### Site Directory
The `site` directory contains the web application files:
- `index.html`: The main landing page of the web application
- `codewords.html`: A page dedicated to the codewords puzzle tool
- `codewords.js`: JavaScript functionality for the codewords page
- `words.txt`: A processed and cleaned version of the word list

#### File Relationships
- `cleanup.py` reads `raw_words.txt`
- `cleanup.py` processes the words and writes the cleaned list to `site/words.txt`
- The site files create a web interface for a puzzle-solving tool, with a focus on codewords

## Technologies Used

### Frontend
- HTML5
- Vanilla JavaScript
- Web Browser APIs (Fetch API)

### Development and Deployment
- Text processing with Python
- Plain text file management

### Core Technologies
- DOM manipulation
- Regular expressions
- Client-side data processing

### Platform
- Web browsers
- Cross-platform compatible

## Additional Notes

### Word Processing
The project includes a word cleanup script (`cleanup.py`) that processes a raw word list, removing:
- Non-alphabetic entries
- Words with all identical letters

### Puzzle Helper Tools
The site includes a Codewords Helper tool, designed to assist with solving word puzzles:
- Supports finding words based on partial letter information
- Helps solve codewords/codecracker puzzles
- Allows flexible pattern matching for word discovery

### Data Files
- `raw_words.txt`: Original word list before processing
- `site/words.txt`: Cleaned and sorted word list used by the tool

### Browser Compatibility
The web interface is designed to be responsive and should work on various devices and screen sizes.

### Performance Considerations
- The word processing script runs as a preprocessing step
- The JavaScript-based word search is designed for client-side execution

## Contributing

We welcome contributions to this project! Here are some guidelines to help you get started:

### How to Contribute

1. **Fork the Repository**: Create a fork of the project on your GitHub account.

2. **Clone the Repository**: 
   ```bash
   git clone https://github.com/your-username/unpuzzle.git
   cd unpuzzle
   ```

3. **Create a Branch**: 
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Contribution Guidelines

#### Code Contributions
- Ensure your code follows clean and readable coding practices
- Add or update tests for any new functionality
- Ensure all existing tests pass before submitting a pull request

#### Commit Messages
- Use clear and descriptive commit messages
- Prefix commits with the type of change (e.g., `feat:`, `fix:`, `docs:`, `refactor:`)

### Reporting Issues
- Use the GitHub Issues section to report bugs or suggest improvements
- Provide detailed information about the issue, including:
  - Steps to reproduce
  - Expected behavior
  - Actual behavior
  - Environment details

### Pull Request Process
1. Update the README.md with details of changes if applicable
2. Ensure your code passes all existing tests
3. Submit a pull request with a clear description of your changes

### Code of Conduct
- Be respectful and inclusive
- Collaborate constructively
- Help create a positive and welcoming environment for all contributors

### Questions?
If you have any questions about contributing, please open an issue to discuss before making significant changes.

## License

This project is currently unlicensed. Without a specific license, the default copyright laws apply:

- The original author retains all copyright
- No one else can reproduce, distribute, or create derivative works
- No permissions are granted for using, modifying, or sharing the code

If you wish to use this code, you should contact the original author to request explicit permission. For open-source collaboration, it is recommended to add an appropriate open-source license to clarify usage rights and encourage community contribution.