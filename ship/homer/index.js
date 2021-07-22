import _ from 'lodash';

function image() {
  const img = document.createElement('img');
  img.src = "./homer/homer.jpeg"
  img.width = 400
  img.height = 200
  return img;
}

function title() {
  const title = document.createElement('h3')
  title.innerHTML = "WOOHOO!!!!"
  return title
}

if(document.body){
  document.body.appendChild(title());
  document.body.appendChild(image());
}
