document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');
  const modeButton = document.getElementById('modeButton');
  const content = document.getElementById('content');
  const upvoteButton = document.getElementById('upvoteButton');
  const voteCount = document.getElementById('voteCount');
  const carInner = document.querySelector('.car-inner');
  const carItems = document.querySelectorAll('.car-item');
  const carPrev = document.querySelector('.car-prev');
  const carNext = document.querySelector('.car-next');
  
  let currentIndex = 0;
  
  fetch('http://localhost:3000/toys', {
  method: 'GET',
  headers: {
  "Content-Type": "application/json",
  Accept: "application/json"
  },
  body: JSON.stringify({
  name: 'user 1'
  })
  })
  .then(response => response.json())
  .then(data => {
  console.log(data);
  const toysList = document.getElementById('toysList');
  const toyItems = data.toys.map(toy => `<li>${toy.name}</li>`);
  toysList.innerHTML = `<ul>${toyItems.join('')}</ul>`;
  })
  .catch(error => console.error(error));
  
  
  //... Search functionality
  searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  // Perform search using searchTerm
  searchResults.innerHTML = `<p>Search results for "${searchTerm}":</p>`;
  });
  
  searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value;
  // Display suggested search terms based on searchTerm
  searchResults.innerHTML = `<p>Suggested search terms:</p>
  <ul>
  <li>Search 1</li>
  <li>Search 2</li>
  <li>Search 3</li>
  </ul>`;
  });
  
  // Dark mode toggle
  modeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  });
  
  // Upvote functionality
  upvoteButton.addEventListener('click', () => {
  const currentCount = parseInt(voteCount.innerText);
  voteCount.innerText = currentCount + 1;
  });
  
  //...
  const readMoreButton1 = document.getElementById('read-more-button1');
  
  readMoreButton1.addEventListener('click', function(event) {
  event.preventDefault();
  const hiddenContent = document.querySelector('.hidden-content1');
  hiddenContent.style.display = 'block';
  readMoreButton.style.display = 'none';
  
  // Fetch the news content from the server
  fetch('https://epaper.standardmedia.co.ke/')
  .then(response => response.text())
  .then(data => {
  // Update the "news-content" div with the new content
  const newsContentDiv = document.getElementById('news-content1');
  newsContentDiv.innerHTML = data;
  });
  });
  
  ///...
  const readMoreButton2 = document.getElementById('read-more-button2');
  
  readMoreButton2.addEventListener('click', function(event) {
  event.preventDefault();
  const hiddenContent = document.querySelector('.hidden-content2');
  hiddenContent.style.display = 'block';
  readMoreButton.style.display = 'none';
  
  // Fetch the news content from the server
  fetch('https://epaper.standardmedia.co.ke/')
  .then(response => response.text())
  .then(data => {
  // Update the "news-content" div with the new content
  const newsContentDiv = document.getElementById('news-content2');
  newsContentDiv.innerHTML = data;
  });
  });
  
  ///...
  const readMoreButton3 = document.getElementById('read-more-button3');
  
  readMoreButton3.addEventListener('click', function(event) {
  event.preventDefault();
  const hiddenContent = document.querySelector('.hidden-content3');
  hiddenContent.style.display = 'block';
  readMoreButton.style.display = 'none';
  
  
  // Fetch the news content from the server
  fetch('https://epaper.standardmedia.co.ke/')
  .then(response => response.text())
  .then(data => {
  // Update the "news-content" div with the new content
  const newsContentDiv = document.getElementById('news-content3');
  newsContentDiv.innerHTML = data;
  });
  });
  
  //... Get all elements with class "box"
  const boxes = document.getElementsByClassName("box");
  // Define an array of 5 different colors
  const colors = ["#ff69b4", "#33cc33", "#6666ff",];
  // Loop through each box and change the background color
  for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = colors[i % colors.length];
  }
  
  //...previous and next navigation buttons
  carPrev.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
  currentIndex = carItems.length - 1;
  }
  updateCarousel();
  });
  
  carNext.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carItems.length) {
  currentIndex = 0;
  }
  updateCarousel();
  });
  
  function updateCarousel() {
  carItems.forEach((item, index) => {
  item.classList.remove('active');
  if (index === currentIndex) {
  item.classList.add('active');
  }
  });
  }
  });
  