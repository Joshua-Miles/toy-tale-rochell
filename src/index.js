const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector(".container");//used for the css styling of the doumnent??
let addToy = false;


addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
});

//fetch all toys
fetch ("http://localhost:3000/toys")
    .then(function(response){
      return response.json()
    })
    .then(function(toyData){
      toyData.forEach(function(toy){
        new ToyCard(toy)
      })
    })

toyForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const nameInput = document.querySelector('.name-input')
  const imageInput = document.querySelector('.image-input')
  ToyCard.create(nameInput.value, imageInput.value)
})