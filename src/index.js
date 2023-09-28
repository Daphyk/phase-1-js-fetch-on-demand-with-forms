
const init = () => {

    //target the DOM element
    const inputForm = document.querySelector('form')

    // add an event listener which has two arguements(type of the event, a string and the listener, a call back function)
    inputForm.addEventListener('submit', (event) => {

        //call event behaviour to stop refreshing
      event.preventDefault();

      //access inpur value directly
      const input = document.querySelector('input#searchByID');
  
      fetch(`http://localhost:5000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
  
        title.innerText = data.title;
        summary.innerText = data.summary;
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);