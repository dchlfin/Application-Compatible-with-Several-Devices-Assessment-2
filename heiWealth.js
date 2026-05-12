// toggle nav start
    const btn = document.getElementById('toggle-nav-btn')
    const nav = document.getElementById('nav')

    btn.addEventListener("click", () => {
        nav.classList.toggle("open")
    })
// toggle nav end

// syllable flashcards start
const syllableData = [
    {
        id: 1,
        kanji: "ま",
        syllable: "Ma", 
        origin: "Mame",
        foodType: "Beans/Legumes",
        example: "Soybeans, Tofu, Natto",
        nutrition: "Protein"
    },
    {
        id: 2,
        kanji: "ご)",
        syllable: "Go", 
        origin: "Goma",
        foodType: "Seeds/Nuts",
        example: "Sesame Seeds, Walnuts",
        nutrition: "Protein, Minerals, Antioxidants"
    },
    {
        id: 3,
        kanji: "わ",
        syllable: "Wa", 
        origin: "Wakame",
        foodType: "Seaweed",
        example: "Kombu, Nori, Wakame",
        nutrition: "Calcium"
    },
    {
        id: 4,
        kanji: "や",
        syllable: "Ya", 
        origin: "Yasai",
        foodType: "Vegetables",
        example: "Spinach, Carrots, Daikon",
        nutrition: "Variety of Nutrients"
    },
    {
        id: 5, 
        kanji: "さ",
        syllable: "Sa", 
        origin: "Sakane",
        foodType: "Fish",
        example: "Salmon, Mackarel",
        nutrition: "Protein"
    },
    {
        id: 6,
        kanji: "し",
        syllable: "Shii", 
        origin: "Shiitake",
        foodType: "Mushrooms",
        example: "Shiitake, Enoki, Maitake",
        nutrition: "Vitamin D"
    },
    {
        id: 7,
        kanji: "い",
        syllable: "Ii", 
        origin: "Imo",
        foodType: "Potatoes",
        example: "Sweet Potatoes, Taro, Potatoes",
        nutrition: "Fiber, Vitamin C"
    },
];

// select items
const kanji = document.getElementById('s-kanji');
const syllable = document.getElementById('syllable');
const origin = document.getElementById('origin');
const foodType = document.getElementById('c1-values');
const example = document.getElementById('c2-values');
const nutrition = document.getElementById('c3-values');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0; 

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    const item = syllableData[currentItem];
    kanji.textContent = item.kanji;
    syllable.textContent = item.syllable;
    origin.textContent = item.origin;
    foodType.textContent = item.foodType;
    example.textContent = item.example;
    nutrition.textContent = item.nutrition; 
})

// show info based on syllable
function showSyllable(s) {
    const item = syllableData[s];
    kanji.textContent = item.kanji;
    syllable.textContent = item.syllable;
    origin.textContent = item.origin;
    foodType.textContent = item.foodType;
    example.textContent = item.example;
    nutrition.textContent = item.nutrition; 
}

// show next syllable info
nextBtn.addEventListener("click", function() {
    currentItem++; 

    if (currentItem > syllableData.length - 1) {
        currentItem = 0; 
    }
    showSyllable(currentItem)
})

// show prev syllable info
prevBtn.addEventListener("click", function() {
    currentItem--;

    if (currentItem < 0) {
        currentItem = syllableData.length -1; 
    }
    showSyllable(currentItem); 
})

// syllable flashcards end