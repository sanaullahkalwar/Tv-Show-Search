const form = document.querySelector("#searchForm");
const results = document.querySelector("#results")

form.addEventListener('submit',async function(event){
    event.preventDefault();
    const valueSearched = form.elements.query.value;
    const config = {params: {q:valueSearched}}
    const response =await axios.get(`https://api.tvmaze.com/search/shows`,config) 
    console.log(response.data[0].show.image.medium)
    removeImages()
    makeImages(response.data);
    form.elements.query.value ="";
})



// //add all the images 
// function makeImages(shows){
//     for(result of shows){
//         if(result.show.image){
//         const img = document.createElement('IMG')
//         img.src =  result.show.image.medium
//         document.body.append(img)

//     }}
// }


function makeImages(shows) {
    const resultsContainer = document.getElementById('results');

    // Clear existing images
    resultsContainer.innerHTML = '';
    
    for (result of shows) {
      if (result.show.image) {
        const img = document.createElement('img');
        img.classList.add('m-2')
        img.src = result.show.image.medium;
        resultsContainer.append(img);
      }
    }
  }


//remove all the all images from privious search
function removeImages(){
    const images = document.querySelectorAll('img');
    for(image of images){
        image.remove();
    }
}