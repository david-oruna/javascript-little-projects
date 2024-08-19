const btnStart = document.getElementById("btnStart");

const dish = document.getElementById("dish");

const submit = document.getElementById("submit");
const dishes = ["pizza", "ratatouille", "ramen", "sushi"]

let dishesObject = {
    "pizza": 'Pizza 🍕',
    "ratatouille": 'Ratatouille 🐀',
    "ramen": 'Ramen 🍜',
    "sushi": 'Sushi 🍣'
}

console.log(dishes["pizza"])

const pizza = ['flour', 'cheese', 'oil', 'salt', 'ham', 'tomatoes'];

const ratatouille = ['tomatoes', "zucchini", "eggplant","onion", "garlic"];

const ramen = ["eggs", "noodles","onion", "leek", "pork"];

const sushi = ["rice", "fish"];

const pizzaList = document.getElementById("pizza");

const ratatouilleList = document.getElementById("ratatouille");
const ramenList = document.getElementById("ramen");
const sushiList = document.getElementById("sushi");



pizzaList.style.display = 'none';
ratatouilleList.style.display = 'none';
ramenList.style.display = 'none';
sushiList.style.display = 'none';

let check = false;

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }


btnStart.addEventListener('click', function () {
    
pizzaList.style.display = 'none';
ratatouilleList.style.display = 'none';
ramenList.style.display = 'none';
sushiList.style.display = 'none';

    const d = dishes.random()
    dish.textContent = dishesObject[d];
    document.getElementById(d).style.display="block";
    check=true;
})





submit.addEventListener('keypress' , function(e) {

    
    if (e.key == "Enter") {
        if (check){
        const input = submit.value;
        
        if (input.length == 0) {
            document.getElementById("msgAlert").textContent="Please enter a valid ingredient";
            
        } else {
            document.getElementById("msgAlert").textContent = '';

            if (input.includes(input)) {
                console.log(true)
                document.getElementById(input).textContent=input;
            }


        }}else{
        document.getElementById("msgAlert").textContent="Get an order first!"
    }
    }

})
