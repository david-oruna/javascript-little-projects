Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }


const cities = ['Chicago', 'Dubai','Florency', 'Kioto', 'NewYork'];

const images = ['Chicago.jpg', 'Dubai.jpg','Florency.jpg', 'Kioto.jpg', 'NewYork.jpg']


const city = document.getElementById('city');

const btnStart = document.getElementById("btnStart");



function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    } return arr; 
}




function getRandomElements(arr, count) {
    arr = shuffle(arr);
    return arr.slice(0, count);
}

function insertAtRandomIndex(arr, element) {
 
    const randomIndex = Math.floor(Math.random() * (arr.length + 1));
    arr.splice(randomIndex, 0, element);
    return arr;
}


document.getElementById("imgContainer").style.display = 'none'

btnStart.addEventListener('click', function() {
    document.getElementById("imgContainer").style.display = 'grid';
    c = cities.random();
    city.textContent= c;
    const rand = [c + ".jpg"]
    const randmore = getRandomElements(images, 4);

    for (let i=0; rand.length < 5; i++){
        
        elm = randmore[i];
        if (!rand.includes(elm)) {
            rand.push(elm)
        }
    }

    const dir = 'photos/';


    for (let i = 0; i<rand.length; i++) {
        const img = document.getElementById(`img${i+1}`);
        img.src = dir + rand[i];
    }

   

})

const img1Click = document.getElementById("img1Click");

const img2Click = document.getElementById("img2Click");

const img3Click = document.getElementById("img3Click");

const img4Click = document.getElementById("img4Click");



    function checkImg(event) {

        city.textContent= c
        event.preventDefault(); 
        
        const anchor = event.currentTarget; 
        const img = anchor.querySelector('img'); 
        if (c + '.jpg' === img.src.split('/').pop()) {
            city.textContent = city.textContent + '✅';
        } else {
            city.textContent = city.textContent + '✖️';
        }
    }

img1Click.addEventListener("click", checkImg)
img2Click.addEventListener("click", checkImg)
img3Click.addEventListener("click", checkImg)
img4Click.addEventListener("click", checkImg)



img1Click.addEventListener("click", checkImg)
img2Click.addEventListener("click", checkImg)
img3Click.addEventListener("click", checkImg)
img4Click.addEventListener("click", checkImg)

