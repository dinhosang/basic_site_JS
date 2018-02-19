const CAT_ARRAY = [

  {name: "Boba", food: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", food: "Tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {name: "Max", food: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}

]

const makeListItem = function(header, information){
  const listItem      = document.createElement('li')
  listItem.innerText  = `${header} ${information}`
  return listItem
}

const makeImgListItem = function(url, width){
  const image = document.createElement('img')
  image.src   = url
  image.width = width
  const listItem = document.createElement('li')
  listItem.appendChild(image)
  return listItem
}

const makeEmptyUnorderedList = function(className){
  const list = document.createElement('ul')
  list.classList.add(className)
  return list
}

const makeEmptyAnimalSection = function(sectionName){
  const section = document.createElement('section')
  section.id = sectionName
  return section
}

const makeFilledUnorderedList = function(className, details, imgWidth){
  const list = makeEmptyUnorderedList(className)
  const listItemName  = makeListItem("Name:", details.name)
  const listItemFood  = makeListItem("Favourite Food:", details.food)
  const listItemImage = makeImgListItem(details.image, imgWidth)

  list.appendChild(listItemName)
  list.appendChild(listItemFood)
  list.appendChild(listItemImage)

  return list
}

const makeFilledAnimalSection = function(animals, sectionName, className, imgWidth){

  const body = document.querySelector('body')
  console.log(body);
  const section = makeEmptyAnimalSection(sectionName)
  console.log(section);
  const arrayOfLists = []

  animals.forEach(function(animal){
    const list = makeFilledUnorderedList(className, animal, imgWidth)
    arrayOfLists.push(list)
  })

  arrayOfLists.forEach(list => section.appendChild(list))

  body.appendChild(section)
}

const makeCatSection = function(){
  return makeFilledAnimalSection(CAT_ARRAY, "cats", "cat", "500")
}



document.addEventListener("DOMContentLoaded", makeCatSection)
