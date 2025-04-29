# Unpuzzle: A Lightweight Puzzle-Solving Toolkit for Word and Number Enthusiasts

## Project Overview

Unpuzzle is a collection of simple tools designed to help solve various number and word puzzles. The project provides utilities to assist puzzle enthusiasts in tackling challenging word and number-based challenges.

### Core Functionality

The primary focus of Unpuzzle is to offer practical tools for puzzle solving, with an initial emphasis on word-based puzzles. The project includes:

- A word processing utility that cleans and prepares word lists for puzzle solving
- A web-based interface for accessing puzzle-solving tools
- A curated list of words for puzzle enthusiasts

### Key Features

- Word list cleaning and preprocessing
- Simple, lightweight web interface
- Support for codeword puzzles
- Automatic filtering of non-alphabetic and repetitive words

### Benefits

- Streamlines puzzle-solving processes
- Provides a clean, organized word list for various puzzle types
- Easy-to-use web-based tools
- Lightweight and straightforward implementation

The project is particularly useful for word puzzle solvers, crossword enthusiasts, and anyone looking for simple tools to assist in solving linguistic challenges.

## Getting Started, Installation, and Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic internet connection

### Quick Start

1. Clone the repository
2. Open the `site/index.html` file in your web browser
3. Navigate to the Codewords Helper tool

### Usage: Codewords Helper

The Codewords Helper is a tool designed to assist with solving word puzzles. Here's how to use it:

#### Finding Word Possibilities

1. Open the `site/codewords.html` page
2. Enter your codeword pattern in the input field
3. Use the following pattern format:
   - Letters represent known letters
   - Numbers represent unknown letter count between known letters
   - Examples:
     - `c1t`: 3-letter word starting with 'c' and ending with 't'
     - `t2t1`: 5-letter word with 't' as first and fourth letters

#### Example Patterns

- `h3t`: 4-letter word starting with 'h' and ending with 't'
- `s1a2`: 4-letter word with 's' first, 'a' third

### Development Setup

1. No additional setup required
2. Files can be run directly from the `site` directory
3. Modify `site/words.txt` to customize word lists

### Deployment

- The project is a static web application
- Can be hosted on any static file hosting service
- No build process required

## Deployment

### Deployment Options

#### Static Hosting
The application can be deployed to static hosting platforms with minimal configuration:

- **Vercel**: 
  - Connect your GitHub repository
  - Select the `site` directory as the root directory
  - No additional build steps required

- **Netlify**:
  - Create a new site from Git
  - Point to the `site` directory
  - Deploy branch: `main`

#### Manual Deployment
For manual deployment to a web server:

1. Copy the contents of the `site` directory to your web server's document root
2. Ensure the following files are included:
   - `index.html`
   - `codewords.html`
   - `codewords.js`
   - `words.txt`

#### Docker Deployment
A simple Dockerfile for containerization:

```dockerfile
FROM nginx:alpine
COPY site/ /usr/share/nginx/html/
EXPOSE 80
```

Build and run the container:
```bash
docker build -t unpuzzle .
docker run -p 8080:80 unpuzzle
```

#### Deployment Considerations
- No server-side processing required
- No build step necessary
- Static files only
- Compatible with any static file hosting service

## Feature Highlights

The Unpuzzle Me application provides a specialized tool for solving codewords puzzles, offering the following key features:

### Codewords Puzzle Helper
- Interactive web-based interface for solving word puzzles
- Dynamic word search functionality based on partial word information
- Supports flexible pattern matching for word discovery

#### Pattern Matching Capabilities
- Enter known letters and their positions in a word
- Use numeric placeholders to represent unknown letters
- Examples of pattern matching:
  - `c1t`: Find 3-letter words starting with 'c' and ending with 't'
  - `t2t1`: Locate 5-letter words with 't' as the first and fourth letters

#### Word Discovery Process
- Processes user-defined letter patterns
- Searches through a comprehensive word list
- Dynamically generates and displays matching words
- Supports lowercase letter inputs
- Handles variable-length word searches

### Technical Highlights
- Frontend implemented with vanilla JavaScript
- Uses regex-based word matching algorithm
- Fetches and processes word list dynamically
- Simple, intuitive user interface for puzzle solvers

## Configuration

The project uses a simple text-based configuration approach with minimal setup requirements.

### Word Processing Configuration
The configuration for word processing is managed through text files:

- `raw_words.txt`: Source file containing the initial list of words
- `site/words.txt`: Processed and cleaned word list

#### Word Filtering Rules
The configuration includes automatic word filtering with the following criteria:
- Convert all words to lowercase
- Remove non-alphabetic words
- Exclude words with repeated characters
- Sort words alphabetically after processing

### File Locations
- Input file: `raw_words.txt`
- Output file: `site/words.txt`
- Web files located in: `site/` directory

No external configuration files or complex settings are required for basic operation.

## Project Structure

The project is organized with the following key directories and files:

### Root Directory
- `cleanup.py`: A Python script for processing and cleaning word lists
- `raw_words.txt`: Source file containing the original, unprocessed word list

### Site Directory
- `site/`: Contains the web application files
  - `index.html`: Main HTML page for the web application
  - `codewords.html`: Likely a specific page related to code or word processing
  - `codewords.js`: JavaScript file for client-side functionality
  - `words.txt`: Cleaned and processed word list used by the application

### File Relationships
The `cleanup.py` script reads `raw_words.txt`, processes the words by removing non-alphabetic entries and words with repeated characters, and writes the cleaned list to `site/words.txt`. This processed word list is then used by the web application files in the `site/` directory.

## Technologies Used

### Frontend
- HTML5
- Vanilla JavaScript
- Fetch API for AJAX requests

### Development and Deployment
- Plain text files for data storage
- Simple file-based web hosting

### Key Technologies
- Browser-based web application
- Regular Expression (Regex) processing
- DOM manipulation

## Additional Notes

### Word Processing

The project includes a word cleanup script (`cleanup.py`) that processes a raw word list by:
- Removing non-alphabetic words
- Eliminating words with repeated characters
- Sorting and saving cleaned words to `site/words.txt`

### Puzzle Solving Tools

The project provides a web-based Codewords puzzle helper tool located in the `site` directory. This tool assists with solving codewords puzzles by:
- Helping users find word possibilities based on word length
- Supporting partial word completion with known letters
- Providing a simple interface for entering puzzle constraints

#### Usage Example
- Enter `c1t` to find 3-letter words starting with 'c' and ending with 't'
- Enter `t2t1` to find 5-letter words with 't' as the first and fourth letters

### Data Files
- `raw_words.txt`: Original word list before processing
- `site/words.txt`: Cleaned and processed word list used by the tool
- `site/words.txt`: Processed word list for puzzle solving

### Browser Compatibility
The web-based tools are designed to work with modern web browsers, supporting responsive design for various device sizes.

## Contributing

We welcome contributions to this project! Here are some guidelines to help you get started:

### How to Contribute

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes
4. Ensure your code follows the project's coding standards
5. Write or update tests as necessary
6. Submit a pull request with a clear description of your changes

### Contribution Guidelines

#### Code Style
- Use lowercase and alphanumeric characters
- Avoid single-character or repetitive character words
- Follow Python's PEP 8 style guide for Python scripts

#### Testing
- Verify that your changes do not introduce new errors
- If adding new functionality, include appropriate test cases

#### Word Processing
When contributing word-related changes:
- Update `raw_words.txt` with new words
- Ensure words meet the existing filtering criteria:
  - Contains only alphabetic characters
  - Contains variation in characters
  - Lowercase format preferred

#### Reporting Issues
- Use the GitHub Issues section
- Provide a clear and descriptive title
- Include steps to reproduce the issue
- Specify the expected and actual behavior

### Pull Request Process
1. Ensure all tests pass
2. Update documentation if necessary
3. Your pull request will be reviewed by the maintainers
4. Merge will occur after successful review and approval

## License

This project is currently unlicensed. Without a specific license, the default copyright laws apply:

- The original authors retain all rights to the source code
- Others cannot reproduce, distribute, or create derivative works without permission
- No one else has the legal right to use, modify, or share the code

If you wish to use this code, you should contact the project owners directly to obtain explicit permission.