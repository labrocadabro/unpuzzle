# Unpuzzle: A Web-Based Toolkit for Puzzle Enthusiasts

## Project Overview

Unpuzzle is a specialized web-based toolkit designed to assist puzzle enthusiasts, particularly those who enjoy word and number puzzles. The primary focus of the project is to provide interactive tools that help solve challenging puzzle types.

### Core Purpose
The project aims to create practical, user-friendly solutions for puzzle solvers, with a current emphasis on codewords (or codecracker) puzzles. These are unique word puzzles that require deciphering letter combinations without traditional crossword clues.

### Key Features
- **Codewords Helper**: An interactive web tool that assists in solving codewords puzzles
- Supports finding word possibilities based on:
  - Specific word lengths
  - Known letter positions
  - Partial word patterns

### Benefits
- Simplifies the process of solving complex word puzzles
- Provides a flexible, intuitive interface for puzzle solving
- Helps puzzle enthusiasts overcome challenging word placement obstacles

The project includes a preprocessing script to curate and clean a word list, ensuring high-quality word suggestions for puzzle solvers.

## Getting Started, Installation, and Setup

### Prerequisites

- A modern web browser
- Python 3.x (for word list preparation)

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unpuzzle.git
   cd unpuzzle
   ```

2. Prepare Word List (Optional)
   If you want to customize the word list, run the cleanup script:
   ```bash
   python cleanup.py
   ```
   This generates a cleaned word list in `site/words.txt`.

3. Run the Application
   Simply open the `site/index.html` file in your web browser.

### Development Setup

#### Word List Preparation

The project includes a Python script `cleanup.py` that processes a raw word list:
- Input: `raw_words.txt`
- Output: `site/words.txt`
- Removes non-alphabetic entries
- Removes words with repeating characters
- Converts words to lowercase

#### Customizing Word List

1. Edit `raw_words.txt` with additional words
2. Run `python cleanup.py`
3. The updated `site/words.txt` will be used by the Codewords tool

### Usage

1. Navigate to the Codewords page
2. Enter a pattern using letters and numbers
   - Letters represent known letters
   - Numbers represent the count of unknown letters
   
#### Pattern Examples
- `c1t`: Find 3-letter words starting with 'c' and ending with 't'
- `t2t1`: Find 5-letter words with 't' as the 1st and 4th letters

### Deployment

This is a static web application that can be hosted on any web server or static site hosting service. Simply copy the contents of the `site` directory to your hosting platform.

## Deployment

### Static Site Deployment

This project is a static website that can be easily deployed to various hosting platforms.

#### Deployment Options

1. **GitHub Pages**
   - Push the contents of the `site` directory to a GitHub repository
   - Enable GitHub Pages in repository settings, pointing to the root directory

2. **Netlify**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Deploy from the site directory
   netlify deploy --dir=site
   ```

3. **Manual Hosting**
   - Upload the contents of the `site` directory to any static file hosting service
   - Ensure all files (`index.html`, `codewords.html`, `codewords.js`, `words.txt`) are included

#### Deployment Considerations
- No build process is required
- No server-side dependencies
- Works with any static hosting service
- Compatible with modern web browsers

#### Recommended Hosting Platforms
- GitHub Pages (Free)
- Netlify (Free tier available)
- Vercel
- Amazon S3
- Firebase Hosting

## Feature Highlights

### Codewords Puzzle Helper

The project provides a specialized web-based tool for solving codewords puzzles, offering the following key features:

#### Flexible Word Search
- Enter partial word patterns using letters and numbers
- Supports finding words with known letter positions
- Handles variable-length word segments

#### Pattern Matching Capabilities
- Generate dynamic regular expressions based on user input
- Search through a comprehensive word list
- Instantly display matching words

#### User-Friendly Interface
- Simple input form for entering codeword patterns
- Immediate results display
- No complex setup required

#### Search Pattern Examples
- Find 3-letter words starting with 'C' and ending with 'T': Enter `c1t`
- Locate 5-letter words with 'T' as the first and fourth letters: Enter `t2t1`

### Input Flexibility
The tool supports flexible input patterns:
- Alphabetic characters represent known letters
- Numeric characters represent the number of unknown letters between known letters
- Case-insensitive matching

## Configuration

The project's configuration is primarily managed through JavaScript and HTML files. 

### Codewords Functionality Configuration
The codewords feature supports two primary configuration types:

#### Input Configuration
- The application uses a form with an input field (`#codeword-input`) to accept user-defined codewords
- Codewords can include:
  - Lowercase alphabetic characters
  - Numeric characters that represent word length constraints

#### Regex Generation Rules
The `generateRegex()` function creates regex patterns based on input constraints:
- Alphabetic characters are matched exactly
- Numeric characters trigger a variable-length word match (e.g., `3` means a 3-letter word)
- Unsupported characters are filtered out

### Word List Source
- Words are sourced from `/words.txt`
- The application loads and filters words dynamically on the client-side

### Browser Compatibility
- Requires modern browsers supporting ES6 features
- Uses `fetch()` for file retrieval
- Implements client-side regex matching and DOM manipulation

## Project Structure

The project is organized with the following key directories and files:

#### Root Directory
- `cleanup.py`: A Python script for processing and cleaning word lists
- `raw_words.txt`: Source file containing the original, unprocessed word list

#### Site Directory
- `site/`: Contains the web-based component of the project
  - `index.html`: Main HTML file for the web application
  - `codewords.html`: Likely a specific page or component of the application
  - `codewords.js`: JavaScript file for client-side functionality
  - `words.txt`: Processed word list used by the web application

The project follows a simple structure with a preprocessing script and a web-based frontend, with clear separation between raw data, processed data, and web assets.

## Technologies Used

#### Frontend
- HTML5
- Vanilla JavaScript
- Fetch API for asynchronous data retrieval

#### Backend/Scripting
- Python 3
  - Standard library file and set operations

#### Tools and Development
- Text file processing
- Regular expression manipulation
- Browser-based web application

#### File Handling
- Plain text files (.txt)
- Static HTML site deployment

## Additional Notes

### Puzzle Solving Methodology

The Codewords Helper is designed to assist players in solving codeword puzzles by providing intelligent word suggestions based on partial information. Unlike traditional word search tools, this utility allows for complex pattern matching that respects the unique constraints of codeword puzzles.

### Word Processing

The project includes a robust word cleaning mechanism that prepares the word list by:
- Converting words to lowercase
- Removing non-alphabetic entries
- Filtering out words with repeated characters
- Generating a sanitized word list suitable for puzzle solving

### Pattern Matching Capabilities

Users can input complex word patterns using an intuitive syntax:
- Alphabetic characters represent known letters
- Numeric characters represent the number of unknown letters between known characters

#### Example Patterns
- `c1t`: Finds 3-letter words starting with 'c' and ending with 't'
- `t2t1`: Finds 5-letter words with 't' as the first and fourth letters

### Performance Considerations

The word-finding algorithm uses regex-based filtering, which provides efficient matching against a pre-processed word list. The approach supports real-time suggestion generation with minimal computational overhead.

### Platform Support

The tool is web-based and designed to work across modern browsers, providing a responsive and accessible interface for puzzle enthusiasts.

## Contributing

We welcome contributions to this project! By contributing, you can help improve and expand the functionality of this repository.

### How to Contribute

1. **Fork the Repository**
   - Create a fork of the project on GitHub
   - Clone your forked repository to your local machine

2. **Create a Branch**
   - Create a new branch for your contribution
   - Use a clear and descriptive branch name
   - Example: `feature/add-new-functionality` or `bugfix/resolve-issue`

3. **Make Changes**
   - Make your modifications in the new branch
   - Ensure your code follows the project's existing code style
   - Write clear, concise commit messages

4. **Testing**
   - Add or update tests to cover your changes
   - Ensure all existing tests pass
   - Run tests locally before submitting a pull request

### Contribution Guidelines

- Maintain consistent code quality
- Keep changes focused and modular
- Document any new features or significant changes
- Be respectful and constructive in discussions

### Reporting Issues

- Use the GitHub Issues section to report bugs or suggest improvements
- Provide detailed information about the issue
- Include steps to reproduce the problem if applicable

### Pull Request Process

1. Ensure your code passes all existing tests
2. Update the README.md with details of changes if necessary
3. Submit a pull request with a clear description of your changes

### Code of Conduct

- Be inclusive, respectful, and considerate of others
- Collaborate in a professional and constructive manner

Thank you for contributing to our project!

## License

This project is currently unlicensed. This means:

- No formal permissions are granted for using, modifying, or distributing the code
- Copyright is retained by the original author
- Others cannot legally use, modify, or share the code without explicit permission

If you wish to use this code, it is recommended to contact the repository owner to discuss licensing terms.