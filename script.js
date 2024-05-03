document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(data => {
  console.log(data);
  })
  .catch(error => {
  console.error(error);
  });
  
  //....POST Method
  async function fetchToys() {
  const toysData = {
  name: 'Toy Car',
  price: 10.99,
  description: 'A small toy car for kids',
  image: 'https://example.com/toy-car.jpg'
  };
  const response = await fetch('http://localhost:3000/toys', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify(toysData)
  });
  const toys = await response.json();
  console.log(toys);
  }
  fetchToys();
  
  
  //... Search functionality
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');
  
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      // Make a search request to the server with the search term
      fetch(`/search?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          // Clear previous search results
          searchResults.innerHTML = '';
  
          // Display the new search results
          data.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.textContent = item.name;
            searchResults.appendChild(resultElement);
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });
  
  searchInput.addEventListener('input', debounce(() => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      // Display suggested search terms based on searchTerm
      searchResults.innerHTML = `<p>Suggested search terms:</p>
      <ul>
        <li>Search 1</li>
        <li>Search 2</li>
        <li>Search 3</li>
      </ul>`;
    } else {
      // Clear search results
      searchResults.innerHTML = '';
    }
  }, 300));
  
  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Dark mode toggle
  const modeButton = document.getElementById('modeButton');
  modeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  });
  
  // Upvote functionality
  const upvoteButton = document.getElementById('upvoteButton');
  const voteCount = document.getElementById('voteCount');
  upvoteButton.addEventListener('click', () => {
  const currentCount = parseInt(voteCount.innerText);
  voteCount.innerText = currentCount + 1;
  });
  
  //...read More Button
const readMoreButton1 = document.getElementById('read-more-button1');
const readMoreButton2 = document.getElementById('read-more-button2');
const readMoreButton3 = document.getElementById('read-more-button3');

readMoreButton1.addEventListener('click', function(event) {
  event.preventDefault();
  toggleReadMore(1);
});

readMoreButton2.addEventListener('click', function(event) {
  event.preventDefault();
  toggleReadMore(2);
});

readMoreButton3.addEventListener('click', function(event) {
  event.preventDefault();
  toggleReadMore(3);
});

function toggleReadMore(index) {
  const hiddenContent = document.querySelector(`.hidden-content${index}`);
  const readMoreButton = document.getElementById(`read-more-button${index}`);
  const loadingText = document.getElementById(`news-content${index} p`);

  hiddenContent.style.display = 'block';
  readMoreButton.style.display = 'none';
  loadingText.style.display = 'none';

  // Fetch the news content from the server
  fetch(`https://epaper.standardmedia.co.ke/publication/3/the-standard/${index}`)
    .then(response => response.json())
    .then(data => {
      // Display the news content in the "news-content" div
      const newsContent = document.getElementById(`news-content${index}`);
      newsContent.innerText = data.content;
      newsContent.style.display = 'block';
    });
}

  //... Get all elements with class "box"
  const boxes = document.getElementsByClassName("box");
  // Define an array of 5 different colors
  const colors = ["#ff69b4", "#33cc33", "#6666ff",];
  // Loop through each box and change the background color
  for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = colors[i % colors.length];
  }
  
  //...previous and next navigation buttons
  const content = document.getElementById('content');
  const carInner = document.querySelector('.car-inner');
  const carItems = document.querySelectorAll('.car-item');
  const carPrev = document.querySelector('.car-prev');
  const carNext = document.querySelector('.car-next');

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
  