let filmsData
fetch("https://ghibliapi.dev/films")
.then(response => response.json())
.then( data => {
    filmsData = data
    const imageContainers = document.getElementById('thumbnail-container')
    filmsData.forEach(item =>{
        const image = document.createElement('img')
        image.src = item.image
        console.log(item.image)
        image.alt = item.title
        image.className = 'img'
        imageContainers.appendChild(image)
        image.addEventListener('click', ()=>{
            document.getElementById('film-title').innerText = item.title
            document.getElementById('film-image').src = item.image
            document.getElementById('film-description').innerText = item.description
            document.getElementById('film-director').innerText = item.director
            document.getElementById('film-producer').innerText = item.producer
            document.getElementById('film-release-date').innerText = item.release_date

            imageContainers.style.display = 'none'
            document.getElementById('more-info').style.display = 'block'
        })

        
         document.getElementById('back-button').addEventListener('click', () => {
            document.getElementById('more-info').style.display = 'none'
            imageContainers.style.display = 'inline-block'
        })

    })
})
.catch(error => console.error(`Error fetching films:`, error))