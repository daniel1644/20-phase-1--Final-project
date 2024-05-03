# MAGAZINE BUILDER
This is a simple magazine builder website that includes three main sections: Entertainment, All News, and Local News. Each section has a read more button that displays more information about the section when clicked. The website also includes a search bar, a dark mode toggle, an upvote button, and a carousel.

# Features
Three main sections: Entertainment, All News, and Local News
Read more button for each section
Search bar
Dark mode toggle
Upvote button
Carousel
Getting Started
To get started with the magazine builder website, clone the repository and open the index.html file in a web browser.

# HTML
The HTML code includes a navigation bar with links to the three main sections. Each section includes a title, a description, and a read more button. The search bar and dark mode toggle are also included in the HTML code.

The carousel is implemented using JavaScript and includes previous and next buttons.

# CSS
The CSS code includes styles for the navigation bar, main sections, read more button, search bar, dark mode toggle, and carousel.

# JavaScript
The JavaScript code includes several functions that handle different features of the website, such as search functionality, dark mode toggle, upvote functionality, read more button, and carousel navigation.

The code starts by adding an event listener to the DOMContentLoaded event, which is fired when the HTML document has been completely loaded and parsed.

The first function in the code is a fetchToys function that sends a POST request to the server with toy data. The function retrieves the toy data from the server and logs it to the console.

The next section of the code handles the search functionality. It includes a searchInput variable that references the search input field, a searchButton variable that references the search button, and a searchResults variable that references the search results container. The code adds an event listener to the search button that sends a GET request to the server with the search term. The server responds with a JSON array of search results, which are then displayed in the search results container.

The code also includes a debounce function that delays the execution of a function until a certain amount of time has passed since the last time the function was called. This is used to improve the performance of the search functionality by limiting the number of requests sent to the server.

The next section of the code handles the dark mode toggle. It includes a modeButton variable that references the dark mode toggle button and adds an event listener to the button that toggles the dark-mode class on the body element.

The next section of the code handles the upvote functionality. It includes an upvoteButton variable that references the upvote button and a voteCount variable that references the vote count element. The code adds an event listener to the upvote button that increments the vote count by one.

The next section of the code handles the read more button. It includes three readMoreButton variables that reference the read more buttons for each content area and adds event listeners to each button that toggle the display of the corresponding hidden content.

The next section of the code gets all elements with the class "box" and assigns them a random background color from an array of colors.

The last section of the code handles the previous and next navigation buttons for the carousel. It includes a content variable that references the content container, a carInner variable that references the carousel inner container, a carItems variable that references the carousel items, a carPrev variable that references the previous button, and a carNext variable that references the next button. The code adds event listeners to the previous and next buttons that update the current index and call the updateCarousel function to update the display of the carousel items.

# Contributing
Contributions are welcome! If you have any suggestions or find any bugs, please open an issue or submit a pull request.

# License
This project is licensed under the MIT License - [see the LICENSE file for details](https://daniel1644.github.io/20-phase-1--Final-project/).