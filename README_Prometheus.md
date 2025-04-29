# Unpuzzle: A Web-Based Codewords Puzzle Solving Assistant

## Project Overview

Unpuzzle is a specialized web-based tool designed to assist puzzle enthusiasts, particularly those solving codewords (codecracker) puzzles. The project provides a user-friendly web interface and supporting utility scripts to help solve word-based number puzzles more efficiently.

### Core Purpose
The primary goal of Unpuzzle is to simplify the process of solving complex word puzzles by offering a targeted helper tool. It specifically addresses the challenges of codewords puzzles, where players must decode a grid of letters using number-to-letter mapping.

### Key Features
- Interactive Codewords Puzzle Helper
- Dynamic word suggestion based on partial letter and length constraints
- Simple, intuitive web interface
- Word list preprocessing and cleanup utility

### Benefits
- Reduces time spent solving word puzzles
- Provides flexible search options for word possibilities
- Supports puzzle solvers with a user-friendly digital tool
- Offers a clean, minimalist approach to puzzle assistance

## Getting Started, Installation, and Setup

### Prerequisites

- Python 3.x
- Web browser

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unpuzzle.git
   cd unpuzzle
   ```

2. Prepare word lists (optional):
   ```bash
   python3 cleanup.py
   ```
   This script processes `raw_words.txt` and generates a cleaned word list in `site/words.txt`.

### Running the Project

#### Web Interface

1. Open `site/index.html` in your web browser
2. Navigate to the Codewords page by clicking the link

#### Generating Word Lists

To clean and prepare word lists:
```bash
python3 cleanup.py
```

### Development Notes

- The project uses static HTML files
- No server or additional dependencies required
- Works directly in modern web browsers

### File Structure

- `raw_words.txt`: Source word list
- `cleanup.py`: Script to clean and process word lists
- `site/`: Directory containing web interface files
  - `index.html`: Main project page
  - `codewords.html`: Codewords puzzle tool
  - `words.txt`: Processed word list

## Deployment

### Deployment Options

This project is a static web application that can be deployed to multiple hosting platforms with minimal configuration.

#### Hosting Platforms
- **Netlify**: 
  ```bash
  # Install Netlify CLI
  npm install netlify-cli -g
  
  # Deploy to Netlify
  netlify deploy --prod
  ```

- **GitHub Pages**:
  ```bash
  # Copy site contents to a docs/ directory
  cp -r site/ docs/
  
  # Configure GitHub Pages in repository settings to serve from docs/ folder
  ```

- **Vercel**:
  ```bash
  # Install Vercel CLI
  npm install -g vercel
  
  # Deploy to Vercel
  vercel
  ```

#### Docker Deployment
For containerized deployment:

```dockerfile
FROM nginx:alpine
COPY site/ /usr/share/nginx/html
EXPOSE 80
```

Build and run the Docker container:
```bash
docker build -t unpuzzle .
docker run -p 8080:80 unpuzzle
```

#### Deployment Requirements
- Web server capable of serving static files
- No backend dependencies
- Supports HTML5, JavaScript

### Performance Considerations
- Minimal dependencies
- Static site reduces server load
- Lightweight hosting requirements

## Feature Highlights

The project provides a web-based tool for solving codewords (codecracker) puzzles. Key features include:

### Codeword Puzzle Solver
- Interactive web interface for finding word possibilities in codeword puzzles
- Supports complex word search patterns based on known letters and word structure
- Input flexibility with intuitive pattern matching

#### Pattern Matching Examples
- Search for words with specific letter placements
- Supports variable-length letter gaps between known letters
- Comprehensive word matching using regex-based search

#### Search Functionality
- Input a pattern like `c1t` to find 3-letter words starting with 'c' and ending with 't'
- Enter `t2t1` to find 5-letter words with 't' as the first and fourth letters
- Real-time word list generation based on user-defined patterns

#### Word Discovery
- Fetches words from a predefined dictionary
- Dynamically displays matching words
- Instant feedback on potential word solutions for codeword puzzles

## Configuration

The project offers several configuration options and behaviors:

### Word Processing
- The application processes words with specific filtering criteria:
  - Only alphabetic words are accepted
  - Words containing all identical letters are excluded
  - Words are converted to lowercase during processing

### Regex Generation
The word search functionality supports a unique regex generation method:
- Alphabetic characters are matched exactly
- Numeric characters represent word length constraints
  - Example: Input `a3` matches 3-letter words starting with 'a'

### File Management
- Raw word list is sourced from `raw_words.txt`
- Processed words are written to `site/words.txt`
- Cleaned words are sorted alphabetically before writing

### Search Functionality
- Case-insensitive word matching
- Supports partial and full word pattern matching
- Handles both alphabetic and numeric input in search patterns

## Project Structure

The project is organized into a simple, straightforward directory structure:

### Root Directory
- `cleanup.py`: A Python script for processing and cleaning word lists
- `raw_words.txt`: Source file containing unprocessed words

### Site Directory
The `site` directory contains the web application files:
- `index.html`: Main landing page of the web application
- `codewords.html`: Webpage for the Codewords puzzle tool
- `codewords.js`: JavaScript functionality for the Codewords page
- `words.txt`: Processed word list used by the application

### Key Relationships
- `cleanup.py` reads `raw_words.txt` and generates a cleaned word list in `site/words.txt`
- Web pages in the `site` directory provide the user interface for the application

The structure supports a simple word puzzle tool with a clean separation between data processing and web presentation.

## Technologies Used

### Programming Languages
- JavaScript
- Python
- HTML

### Frontend Technologies
- Vanilla JavaScript
- HTML5

### Tools and Utilities
- Text file processing
- Regular expressions
- Fetch API for client-side data retrieval

### Development Tools
- Plain text editor
- Web browser
- Python for data preprocessing

### Key Libraries and Frameworks
- None (pure vanilla JavaScript and HTML)

### Deployment
- Static file hosting (browser-based application)

## Additional Notes

### Word Processing

The project includes a word cleaning utility (`cleanup.py`) that processes a raw word list by:
- Removing non-alphabetic entries
- Eliminating words with repeated characters
- Converting words to lowercase
- Sorting and saving the cleaned word list

### Puzzle Resources

The project provides resources for puzzle solving, specifically focusing on word-based puzzles:
- A collection of cleaned words is maintained in `site/words.txt`
- The web interface includes a Codewords tool for puzzle solving

### Browser Compatibility

The web interface is designed to be responsive, with a viewport meta tag ensuring proper rendering across different device sizes and screen resolutions.

### Future Expansion

The current structure suggests potential for additional puzzle-solving tools, with the existing codebase providing a flexible framework for expanding puzzle-related utilities.

## Contributing

We welcome contributions to this project! Here are some guidelines to help you get started:

### How to Contribute

1. **Fork the Repository**: Create a fork of the project on GitHub.

2. **Create a Branch**: 
   - Create a new branch for your feature or bugfix
   - Use a clear and descriptive branch name
   - Example: `feature/add-new-word-list` or `bugfix/fix-word-generation`

3. **Make Your Changes**:
   - Ensure your code follows the existing project structure
   - Add or update tests if applicable
   - Verify that all existing tests pass

4. **Submit a Pull Request**:
   - Provide a clear description of your changes
   - Reference any related issues
   - Ensure your code is well-documented

### Contribution Requirements

- **Code Style**: 
  - Follow the existing code style in the project
  - Use clear, readable, and well-commented code
  - Maintain consistent formatting

- **Testing**:
  - Add tests for new functionality
  - Ensure all tests pass before submitting a pull request
  - Test across different environments if possible

### Files and Structure

When contributing, pay attention to the project's key files:
- `cleanup.py`: Likely handles data processing or cleanup
- `raw_words.txt`: Appears to be a source of word data
- `site/` directory: Contains HTML, JavaScript, and word-related files

### Reporting Issues

- Use GitHub Issues to report bugs or suggest improvements
- Provide detailed information about the issue
- Include steps to reproduce, expected behavior, and actual results

### Code of Conduct

- Be respectful and considerate of other contributors
- Collaborate in a constructive and positive manner
- Help maintain an inclusive and welcoming community

Thank you for considering contributing to this project!

## License

This project is currently unlicensed. 

#### Copyright Status
Without a specific license, the default copyright laws apply. This means:
- The original author retains all rights to the code
- Others cannot reproduce, distribute, or create derivative works without explicit permission
- No one else has the legal right to use, modify, or share the code without consent

#### Recommended Action
If you intend to share or collaborate on this project, it is strongly recommended to add an open-source license to clearly define usage rights and permissions.