# Unpuzzle: A Web-Based Word Puzzle Solving Utility

## Project Overview

Unpuzzle is a specialized web-based utility designed to assist puzzle enthusiasts in solving word-based challenges, with a primary focus on codewords (codecrackers) puzzles.

### Purpose
The project provides an interactive tool that helps solve word puzzles by enabling users to find potential word solutions based on partial letter information and word length constraints.

### Key Features
- Codewords puzzle solver with flexible search capabilities
- Supports searching for words with:
  - Specific known letter positions
  - Partial letter information
  - Variable word lengths
- Simple, user-friendly web interface
- Dynamic word suggestion mechanism

### Benefits
- Reduces time spent manually solving word puzzles
- Provides instant word suggestions
- Helps puzzle solvers overcome challenging sections
- Works with standard word puzzle constraints
- Supports various word search patterns

## Getting Started, Installation, and Setup

### Quick Start

This web application allows you to find words based on a custom "codeword" pattern. To get started:

1. Clone the repository
2. Open the `site/index.html` file in a web browser

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No additional software installation required

### Usage Instructions

1. Open `site/index.html` in your web browser
2. Enter a "codeword" in the input field
   - Use letters (a-z) to match specific letters
   - Use numbers to specify word length for specific positions
   
#### Examples

- Enter `a2` to find 3-letter words starting with 'a'
- Enter `1o` to find any 2-letter word ending with 'o'

### Development

The application requires no build process. Simply modify the source files in the `site` directory and refresh your browser.

### Word List Management

A `cleanup.py` script is provided to process `raw_words.txt` and generate a clean word list at `site/words.txt`. Run this script to update the word list:

```bash
python cleanup.py
```

### Performance Notes

- Word matching is done client-side using JavaScript
- Large word lists may impact search performance

## Deployment

The application is a static web application that can be easily deployed to various hosting platforms.

### Deployment Options

#### Static Hosting Platforms
The application can be deployed to static hosting platforms such as:

- **Netlify**
  ```bash
  netlify deploy
  ```

- **Vercel**
  ```bash
  vercel
  ```

#### Manual Deployment
To manually deploy the application:

1. Copy the contents of the `site` directory to your web server's root directory
2. Ensure all files (`index.html`, `codewords.html`, `codewords.js`, `words.txt`) are preserved in their relative structure

#### Docker Deployment
A Dockerfile can be created for containerized deployment:

```dockerfile
FROM nginx:alpine
COPY site/ /usr/share/nginx/html/
EXPOSE 80
```

Build and run the Docker container:
```bash
docker build -t unpuzzle-app .
docker run -p 80:80 unpuzzle-app
```

### Deployment Considerations
- No server-side processing is required
- Ensure proper file permissions when deploying
- The application is client-side only and requires no additional backend setup

## Feature Highlights

The Unpuzzle Me application provides a specialized tool for solving codewords puzzles, offering the following key features:

### Codewords Puzzle Helper
- Interactive word-finding tool for solving codewords (codecracker) puzzles
- Supports complex word search patterns using a flexible input syntax
- Allows users to specify known letters and unknown letter positions

#### Pattern Matching Capabilities
- Search for words with specific known letters
- Specify the number of unknown letters between known characters
- Examples of input patterns:
  - `c1t`: Find 3-letter words starting with 'c' and ending with 't'
  - `t2t1`: Find 5-letter words with 't' as the first and fourth letters

#### Flexible Word Search
- Automatically filters a comprehensive word list
- Generates dynamic regular expressions based on user input
- Instantly displays matching words that fit the specified pattern

#### User Experience
- Simple, intuitive interface
- Real-time word suggestions
- No installation required - works directly in the web browser

## Configuration

The project provides a simple configuration for word processing and searching. Configuration is primarily managed through input files and JavaScript configuration.

### Input Files
- `raw_words.txt`: Source file containing the initial list of words
  - Words are processed to remove non-alphabetic entries
  - Removes words with repeated characters
  - Converts words to lowercase

### Word Processing
The `cleanup.py` script applies the following filtering rules:
- Removes non-alphabetic words
- Eliminates words with all characters being the same
- Generates a cleaned word list in `site/words.txt`

### Search Functionality Configuration
The search mechanism in `codewords.js` supports:
- Case-insensitive word matching
- Regex-based search using input patterns
- Supports alphabetic and numeric pattern matching
  - Alphabetic characters match exact letters
  - Numeric characters specify word length placeholders

### Regex Generation Rules
- Alphabetic characters match themselves
- Numeric characters create length-based wildcards
  - Example: Input `a3` matches 3-letter words starting with 'a'

### File Outputs
- `site/words.txt`: Processed and cleaned list of words
- `site/codewords.html`: Interface for word search functionality

## Project Structure

The project is organized into the following key directories and files:

### Root Directory
- `cleanup.py`: A Python script that processes and cleans word lists, removing non-alphabetic words and words with repeated characters.
- `raw_words.txt`: Source file containing the original, unprocessed word list.

### `site/` Directory
Contains the web application files for the Unpuzzle project:
- `index.html`: The main landing page of the web application, providing an overview and navigation.
- `codewords.html`: HTML file for the Codewords puzzle tool.
- `codewords.js`: JavaScript implementation for the Codewords puzzle functionality.
- `words.txt`: Processed and cleaned list of words, generated by the `cleanup.py` script.

The project follows a simple, straightforward structure with a focus on word puzzle tools, separating data processing (root directory) from the web application frontend (site directory).

## Technologies Used

### Frontend
- HTML5
- Vanilla JavaScript
- Web Fetch API

### Backend/Utility
- Python 3

### File Handling
- File I/O operations
- Text file processing

### Development Tools
- Text editor or IDE
- Web browser for testing

### Core Technologies
- Regular Expressions
- DOM Manipulation
- Set data structures

## Additional Notes

### Word Processing

The project includes a cleanup script (`cleanup.py`) that processes word lists, filtering out:
- Non-alphabetic words
- Words containing only a single repeated character

This ensures a clean, high-quality word list for the Codewords helper tool.

### Browser Compatibility

The web-based Codewords helper is designed to work with modern web browsers. It uses vanilla JavaScript and provides a simple, responsive interface for solving word puzzles.

### Performance Considerations

The word search functionality uses client-side JavaScript to:
- Fetch a pre-processed word list
- Generate dynamic regular expressions
- Filter words based on user input

For large word lists, users might experience slight performance variations depending on their device and browser.

### Data Privacy

No user data is stored or transmitted during the word search process. All operations occur client-side within the user's browser.

### Future Enhancements

Potential areas for future development include:
- Adding more puzzle-solving tools
- Implementing advanced filtering options
- Creating a more robust word matching algorithm

## Contributing

We welcome contributions to this project! Here are some guidelines to help you get started:

### How to Contribute

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes
4. Ensure all existing functionality remains intact
5. Submit a pull request with a clear description of your changes

### Contribution Guidelines

#### Code Quality
- Write clean, readable, and well-documented code
- Follow Python's PEP 8 style guide
- Include comments to explain complex logic

#### Testing
- Verify that your changes do not break existing functionality
- If adding new features, include appropriate test cases

#### Word Processing
When contributing to the word processing logic:
- Ensure words meet the current filtering criteria (alphabetic characters, no repeated letters)
- Test word cleaning and filtering scripts thoroughly
- Verify that modifications to `cleanup.py` maintain the current word filtering logic

#### File Management
- Do not modify `raw_words.txt` directly
- Use `cleanup.py` for processing and filtering words
- Ensure changes to word lists are consistent with the project's word selection criteria

### Reporting Issues
- Use the GitHub Issues section to report bugs or suggest improvements
- Provide detailed information about the issue, including steps to reproduce
- Include relevant code snippets or example scenarios

### Pull Request Process
- Describe the purpose and scope of your changes
- Link any related issues
- Ensure all GitHub Actions checks pass
- Wait for code review and address any feedback promptly

## License

This project is currently unlicensed. By default, this means all rights are reserved by the original authors, and:

- Others cannot reproduce, distribute, or create derivative works
- No permissions are granted for using, modifying, or sharing the code
- Commercial or non-commercial use is not permitted without explicit permission

If you wish to use this code, you will need to contact the project owners to discuss licensing terms.