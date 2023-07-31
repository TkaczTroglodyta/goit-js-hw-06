const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listOfImages = document.querySelector('.gallery');

// longer and harder way, without destructuring assignment

// const elementsOfGallery = images.map(image => {
//   const img = `<img src="${image.url}" alt="${image.alt}" width="252" heigth="142" style="padding: 0 12px;" />`;
//   return img;
// });

// listOfImages.innerHTML = elementsOfGallery.join('');

//shorter way, with destructuring assignment and method chaining

const elementsOfGallery = images
  .map(
    ({ url, alt }) => `<li><img src="${url}" alt = "${alt}" width="252px" height="142px" /></li>`
  )
  .join('');

// flexbox

// listOfImages.style.[list-style] = "none"; // prettier do not allow this, dunno why...
listOfImages.style.listStyle = 'none';
listOfImages.style.display = 'flex';
listOfImages.style.flexWrap = 'wrap-reverse';
listOfImages.style.justifyContent = 'center';
listOfImages.style.alignContent = 'center';
listOfImages.style.gap = '12px';

listOfImages.insertAdjacentHTML('afterbegin', elementsOfGallery);
