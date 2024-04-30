fetch('http://localhost:3000/toys')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error in API request');
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


  //... Click Event Listener
  const button = document.getElementById("myButton");
  button.addEventListener("click", () => {
    alert("You clicked the button!");
  });


  //... Scroll Event Listener
  const div = document.getElementById("myDiv");
div.addEventListener("scroll", () => {
  console.log("User scrolled!");
});

//...Resize Event Listener
window.addEventListener("resize", () => {
  console.log("Browser window resized!");
});


//...Search Functionality
const input = document.getElementById("searchInput");
const button = document.getElementById("searchButton");
const results = document.getElementById("searchResults");

button.addEventListener("click", () => {
  const searchTerm = input.value;
  // Perform search using searchTerm
  results.innerHTML = `<p>Search results for "${searchTerm}":</p>`;
});

input.addEventListener("input", () => {
  const searchTerm = input.value;
  // Display suggested search terms based on searchTerm
  results.innerHTML = `<p>Suggested search terms:</p>
                        <ul>
                          <li>Search term 1</li>
                          <li>Search term 2</li>
                          <li>Search term 3</li>
                        </ul>`;
});

//...Search Functionality
const button = document.getElementById("modeButton");
const content = document.getElementById("content");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//...Upvote Post
const button = document.getElementById("upvoteButton");
const count = document.getElementById("voteCount");

button.addEventListener("click", () => {
  const currentCount = parseInt(count.innerText);
  count.innerText = currentCount + 1;
});