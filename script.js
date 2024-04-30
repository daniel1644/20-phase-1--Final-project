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




  //...
  $(function () {
    $('.carousel-next').click(function () {
      $('.carousel-inner').animate({ scrollLeft: '+=33.33%' }, 500);
    });
  
    $('.carousel-prev').click(function () {
      $('.carousel-inner').animate({ scrollLeft: '-=33.33%' }, 500);
    });
  });


  //...
  const boxes = document.querySelectorAll('.box');

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        boxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
    });
});

//...