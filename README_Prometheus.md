# Unpuzzle: A Web-Based Word Puzzle Solving Utility

## Project Overview

Unpuzzle is a web-based puzzle-solving utility designed to assist users in solving word and number puzzles, with a current focus on codewords (also known as codecrackers) puzzles.

### Key Features
- Interactive Codewords Helper tool
- Word search functionality based on partial letter information
- Supports finding words with specific letter constraints

### Purpose
The primary goal of Unpuzzle is to provide puzzle enthusiasts with a practical tool for solving challenging word puzzles. It addresses the common difficulty of finding word possibilities when solving codewords puzzles by offering a flexible word search mechanism.

### Benefits
- Helps solve word puzzles more efficiently
- Supports partial word knowledge
- User-friendly web interface
- Flexible word matching based on known letters and word length

### Puzzle Type Support
Currently focused on codewords puzzles, which are word puzzles where:
- Each cell contains a number representing a letter
- All 26 letters of the alphabet are used
- The goal is to fill the entire grid with valid words

### Unique Functionality
The tool allows users to input partial word information using an intuitive syntax, such as:
- `c1t` for a 3-letter word starting with 'c' and ending with 't'
- `t2t1` for a 5-letter word with 't' as the first and fourth letters

## Getting Started, Installation, and Setup

### Quick Start

Unpuzzle is a tool designed to help solve word puzzles, particularly codewords (codecrackers). The project provides a web-based interface for finding word possibilities based on specific puzzle constraints.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python (for word list preprocessing)

### Running the Project

1. Clone the repository
2. Open the `site/index.html` file in your web browser
3. Navigate to the Codewords Helper tool

### Using the Codewords Helper

The Codewords Helper allows you to find word possibilities by entering partial word information:

- Enter known letters along with numbers representing empty cell spaces
- Examples:
  - Find a 3-letter word starting with 'C' and ending with 'T': Enter `c1t`
  - Find a 5-letter word with 'T' as the first and fourth letters: Enter `t2t1`

#### Word Search Syntax
- Alphabetic characters represent known letters
- Numeric characters represent the number of unknown letters between known letters

### Word List Generation

The project includes a Python script (`cleanup.py`) to process and clean the word list:

```bash
python cleanup.py
```

This script:
- Reads words from `raw_words.txt`
- Removes non-alphabetic entries
- Eliminates words with repeated letters
- Saves cleaned words to `site/words.txt`

### Development Notes

- The tool uses client-side JavaScript to filter words
- Word matching is performed using regular expressions
- Words are loaded from the `words.txt` file

## Feature Highlights

### Codewords Puzzle Helper

The application provides a specialized tool for solving codewords (or codecrackers) puzzles, offering the following key features:

#### Word Search Functionality
- Supports finding words based on partial letter knowledge
- Allows specifying known letters and word length patterns
- Provides flexible search using a unique input format

#### Search Input Capabilities
- Enter known letters with numeric placeholders for unknown letters
- Examples of input patterns:
  - `c1t`: 3-letter word starting with 'c' and ending with 't'
  - `t2t1`: 5-letter word with 't' as the first and fourth letters

#### Word Matching Mechanism
- Dynamically generates regex patterns from user input
- Searches through a predefined word list
- Displays matching words instantly
- Supports case-insensitive matching

#### User Interface
- Simple, straightforward form for word puzzle solving
- Real-time results display
- No login or complex setup required

## Configuration

The project provides minimal configuration options with two primary configuration points:

### Word List Configuration
- Source file: `raw_words.txt`
  - Contains the initial list of words to be processed
  - Each word should be on a separate line
  - Words are automatically cleaned during processing

### Filtering Criteria
The `cleanup.py` script applies the following automatic filtering rules:
- Converts all words to lowercase
- Removes non-alphabetic words
- Eliminates words with all identical characters
- Writes processed words to `site/words.txt`

### JavaScript Configuration
The `codewords.js` script supports dynamic word filtering with the following regex generation rules:
- Alphabetic characters match themselves exactly
- Numeric characters represent word length constraints (e.g., `3` means a 3-letter word)
- Input is case-insensitive
- Matches are performed against the words in `words.txt`

#### Input Validation
- Accepts alphabetic and numeric characters
- Generates a regex pattern based on the input codeword
- Supports partial matching of word patterns

## Project Structure

The project is organized with the following key directories and files:

### Root Directory
- `cleanup.py`: A Python script that processes and cleans word lists
- `raw_words.txt`: Source file containing unprocessed words

### Site Directory
- `site/`: Contains the web application files
  - `index.html`: Main HTML page for the web application
  - `codewords.html`: Likely a specialized page related to code words
  - `codewords.js`: JavaScript file for handling codewords functionality
  - `words.txt`: Processed word list used by the application

The project follows a simple structure with a Python utility script for data preprocessing and a self-contained web application in the `site/` directory.

## Technologies Used

#### Frontend Technologies
- HTML5
- JavaScript (Vanilla)

#### Development and Deployment
- Plain text file handling
- Browser-based web application

#### Key Technologies and Concepts
- Regex (Regular Expressions)
- Text processing
- Fetch API for file retrieval
- DOM manipulation

#### File Handling
- Client-side file reading
- Text file processing

#### Browser APIs
- `fetch()` for file retrieval
- `addEventListener()`
- DOM manipulation methods

## Additional Notes

### Word Processing

The project includes a word cleanup script (`cleanup.py`) that processes a raw word list, performing the following filtering:
- Removes non-alphabetic words
- Eliminates words consisting of repeated characters
- Converts words to lowercase
- Saves the cleaned word list to `site/words.txt`

### Codewords Puzzle Helper

The project provides a web-based tool for solving codewords (codecracker) puzzles, which are word grid puzzles without traditional crossword clues. Key features include:

#### Functionality
- Supports finding words based on partial letter information
- Allows input of known letters with placeholders for unknown letters
- Dynamically searches through a predefined word list
- Provides real-time word suggestions matching the specified pattern

#### Usage Examples
- Search for a 3-letter word starting with 'C' and ending with 'T': `c1t`
- Find a 5-letter word with 'T' as the first and fourth letters: `t2t1`

### Word List Management
- The project maintains a curated list of words in `words.txt`
- Words are preprocessed to ensure quality and relevance for puzzle solving

### Browser Compatibility
Designed as a client-side web application, compatible with modern web browsers that support JavaScript and `fetch` API.

## Contributing

We welcome contributions to this project! Here are some guidelines to help you get started:

### How to Contribute

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes
4. Write or update tests as needed
5. Ensure all tests pass
6. Submit a pull request with a clear description of your changes

### Contribution Requirements

- Ensure code is clean and well-documented
- Follow consistent code style
- Include tests for new functionality
- Update documentation as needed
- Be respectful and constructive in discussions

### Reporting Issues

If you find a bug or have a suggestion:
- Check existing issues to avoid duplicates
- Use the GitHub issue tracker
- Provide a clear and detailed description
- Include steps to reproduce the issue if applicable

### Code of Conduct

We aim to maintain a welcoming and inclusive environment for all contributors. Please be kind, respectful, and considerate in all interactions.

## License

This project is currently unlicensed. By default, this means that the original authors retain all rights to the source code, and no one else can reproduce, distribute, or create derivative works from the code without explicit permission.

#### Implications
- No one is legally permitted to use, copy, modify, or distribute the code
- The code is protected by default copyright laws
- Potential users should contact the project owners for explicit permission to use the code

If you intend to share or collaborate on this project, it is recommended to choose an appropriate open-source license that clearly defines usage rights and permissions.