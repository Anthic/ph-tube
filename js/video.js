//catagories and display api add
const catagoriesApi= () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCatagories(data.categories))
    .catch(error => console.log(error))
}
//video api added
const videoApi = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideo(data.videos))
    .catch(error => console.log(error))
}
const buttonHandler = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then(response => response.json())
  .then(data => displayVideo(data.category))
  .catch(error => console.log(error))
}

// card Object
const cardDemo={
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}
const displayVideo = (videos) => {
    const videoContainer = document.getElementById('video-container')
    videoContainer.innerHTML = '';
    if(videos.length == 0){
      videoContainer.innerHTML = '<h2 class="text-center text-gray-500 font-bold">No Video Found</h2>';
    }
    videos.forEach((items) => {
        console.log(items);
        const videoCard = document.createElement('div');
        videoCard.classList= 'card card-compact';
        videoCard.innerHTML= `
      <figure class="h-[200px] relative ">
        <img class="w-full h-full object-cover" src="${items.thumbnail}"/>
        ${
        items.others.posted_date?.length == 0 ? "" : 
        `<span class=" absolute bottom-2 right-2 bg-black text-white  px-1 py-0.5 text-xs font-bold">${items.others.posted_date}</span>`
        }

      </figure>
      <div class="px-0 py-3 flex gap-2 ">
        <div>
          <img src="${items.authors[0].profile_picture}" class="h-7 w-7 rounded-full object-cover"/>
        </div>
        <div>
        <h2 class="text-md font-bold ">${items.title}</h2>
        <div class="flex  items-center gap-1">
        <p class="text-xs text-gray-500 font-bold" >${items.authors[0].profile_name}</p>
        ${items.authors[0].verified == true? `<img class="h-4 w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2az08TQRTHN+hR/QNM9ODVqAcvBk3ovBZ/HMATEcXon2CigvFUj+AN8aAJmEjnlYSTnk3UgzcjnozExKghUVQOwr63tQqseWyBWrtlpu2sVHnJO3R3uvP5zryZNzuznrdl/7ApTVdB+1e8VjSVD84qpCXQtJzO0UWvlUzlfVCavgNyGDn9SCGd8DaDZe4HexXSW0AaTqOf6XgSbi+/r5APA/LCOnzkCok7cnykvGw2G7ZJeYV8QyG/Oj4R7HEuADDo/R2MPwPyWErz6Yz2DyjNs5Xwa2U1z0oZKSv/UdF/y8oEvc4FKKTbcYCNutI04lwAIL90J4CnnMK3j37dqTQtOuyBxZO5uV3OBEDe73QFDyWXicFJy0fw9MC1AJA68n6n1Fk3cCbPuwG5SyEPAtIzpanoHpz/CCeZWgH5rkK6oPL+fmMBgDydNDBs5JpfGwtQyENJA55/WKjdI8iDxgJSOjiaJPzlR4Xw3bel8M5UMV7ARNBuLEBSPGj+lCT8zELk1URIxu6ZDLd5Niap3jV8/+NC+L4MXlx+91WEk0Ie9WxN5bg7yZafKcGLqCrlu6wFyKLLFfxATMv3V4cPhcWu9WWJW2NVmSQ8lFaxwmT+MoI8v1ngYW0cEIGmUzXh0+j32WTdjeZukwHbbwC/3hNUVNo/VxUekC+tvMMaPmzkedEYoJGWh0rXtAxI1xoSIPCmIE2FxxoCTENI5mhToGbDq1ohZDOIq83hH+aXwutPC+7g0WAQ20yjtUQ0v+XZfBq1SWRxM0u1awP1xjzWkcjESlsfGz68Wk80bcBiqQdy3G0tADTfM60gTkQz4CHyMSv4lR0zy6VEpYgmwofWy+kMBsfqqWhVRDPhoeTykmUTPjfrrUgGayMDFuJ7YailX+qVpjctva2SxsI+77/Z2Ioz2fZzLSCV89OeK+uYDHeApp8uw6bdRcuXm2yBOxOA/MIpfCSARpyFkKZbf+OIaQ6QxwGDHjVOh2puiGn+Ann/YDSWaBiQP5bfT+vgjHMBchAneUISi2RHWXaYHPLJtcolcTYbtskzSnux04kc8pkYaF9t2mNWm1Br2YPuVZPPDFr2U4Mt88zsF/L7hiBlV3/sAAAAAElFTkSuQmCC">`:""}

        </div>
        <p class="text-xs text-gray-500 font-bold">${items.others.views} Views</p>
        </div>
      </div>
        `;
        videoContainer.appendChild(videoCard);
})
}

//catagories orginal work part
// {
//     category_id: '1001', 
//     category: 'Music'
// }
const displayCatagories = (catagories) => {
const catagoriesContainer = document.getElementById('categorizes-container')
   catagories.forEach((items) => {
        console.log(items);

        //button creation
        const buttonContainers = document.createElement('div');
        
        buttonContainers.innerHTML= `
          <button onclick="buttonHandler(${items.category_id})" class="py-3 px-4 rounded-md text-lg font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 btn-md">${items.category}
          </button>
        `;
        
        //add button category container
        catagoriesContainer.appendChild(buttonContainers);
   });
}
catagoriesApi()
videoApi()