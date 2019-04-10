class ToyCard {
    
    constructor(toy){

        this.toy = toy

        const cardDiv = document.createElement('div')
        cardDiv.className = 'card'
        ToyCard.collection.append(cardDiv)
        //cards should be on the page

        const nameTag = document.createElement('h2')
        nameTag.innerText = toy.name 

        const imageTag = document.createElement('img')
        imageTag.src = toy.image 
        imageTag.className = 'toy-avatar'

        const likesTag = document.createElement('p')
        this.likesTag = likesTag
        likesTag.innerText = toy.likes

        const likeBtn = document.createElement('button')
        likeBtn.innerText = "Like<3"
        likeBtn.className = 'like-btn'
        likeBtn.addEventListener('click', () => {
            this.like()
        })

        cardDiv.append(nameTag, imageTag, likesTag, likeBtn)
    }


    like(){
        //toy.likes++
        const toy = this.toy
        const likesTag = this.likesTag
        toy.likes = toy.likes + 1
        likesTag.innerText = `${toy.likes}`
        fetch(`http://localhost:3000/toys/${toy.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            likes : toy.likes
          })
          })
          .then(function(response){
  
          })
      }

      static create(name, image){
        fetch ("http://localhost:3000/toys",{
            method: "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
              name: name,
              image: image,
              likes : 0
            })
          })
          .then(function(response){
            return response.json()
          })
          .then(function(response){
            new ToyCard(response)
          })
      }
}

ToyCard.collection = document.querySelector('#toy-collection')