const Products = {
    crazy: {
        id: 1,
        name: "Crazy",
        price: 31000,
        amount: 0,
        img: "./images/burger_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        id: 2,
        name: "Light",
        price: 26000,
        amount: 0,
        img: "./images/burger_2.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        id: 3,
        name: "CheeseBurger",
        price: 29000,
        amount: 0,
        img: "./images/burger_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    dburger: {
        id: 4,
        name: "dBurger",
        price: 29000,
        amount: 0,
        img: "./images/burger_4.png",
        get Summ() {
            return this.price * this.amount
        }
    },
}

const btns = document.querySelectorAll('.card__shop'),
    shop = document.querySelector('.shop'),
    basket = document.querySelector('.basket'),
    basketClose = document.querySelector('.basket__close'),
    shopItem = document.querySelector('.shop__item ');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = btn.closest('.card'),
            parentId = parent.getAttribute('id')
        Products[parentId].amount++
        basketInfo()
    })
})
function basketInfo() {
    const productsArr = []
    for (const key in Products) {
        const pk = Products[key]
        const span = document.querySelector(`#${key} .card__item`)
        if (pk.amount) {
            productsArr.push(pk)
            span.classList.add('active')
            span.innerHTML = pk.amount
        }
    }
    shopItem.classList.add('active')
    let allAmount = 0
    for (let i = 0; i < productsArr.length; i++) {
        allAmount += productsArr[i].amount
    }
    shopItem.innerHTML = allAmount
    shopItem.innerHTML >= 10 
    ? shopItem.style = `width:25px;height:25px` 
    : shopItem.style = `width:20px;height:20px`;
}

shop.onclick = () => {
    basket.classList.add('active')
}

basketClose.onclick = () => {
    basket.classList.remove('active')
}
let lvl = 0;
const lvlBar = document.getElementById("lvlBar");

const segments = [
    { min: 1, max: 20,  color: "#ff66cc", speed: 80 },
    { min: 21, max: 40, color: "#33ccff", speed: 70 },
    { min: 41, max: 60, color: "#33ff77", speed: 60 },
    { min: 61, max: 80, color: "#ffcc33", speed: 50 },
    { min: 81, max: 99, color: "#ff5533", speed: 40 }
];

const lvl100 = { color: "#cc33ff" };

function getSegment(level) {
    if (level === 100) return lvl100;
    return segments.find(s => level >= s.min && level <= s.max);
}

function animateLevel() {
    lvl++;
    if (lvl > 100) return; 

    const s = getSegment(lvl);

    lvlBar.style.color = s.color;
    lvlBar.textContent = lvl + " LVL";

    if (lvl < 100) {
        setTimeout(animateLevel, s.speed);
    }
}

animateLevel();



