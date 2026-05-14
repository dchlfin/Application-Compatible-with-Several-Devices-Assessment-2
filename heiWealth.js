// toggle nav start
const navBtn = document.getElementById('toggle-nav-btn')
const nav = document.getElementById('nav')

navBtn.addEventListener("click", () => {
    nav.classList.toggle("open")
})
// toggle nav end

// syllable flashcards start

if (document.getElementById('s-kanji')) {
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
            kanji: "ご",
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
            origin: "Sakana",
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
}

// syllable flashcards end

// faq question start

if (document.querySelector('.question')) {
        const questions = document.querySelectorAll(".question");

    questions.forEach(function(question) {
        const btn = question.querySelector(".question-btn");

        btn.addEventListener("click", function() {
            questions.forEach(function(item) {
                if (item !== question) {
                    item.classList.remove("show-text");
                };
            });
        });
    });

    // traversing the dom

    const questionBtns = document.querySelectorAll(".question-btn");

    questionBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const question = e.currentTarget.parentElement.parentElement; 

            question.classList.toggle("show-text"); 
        });
    });
}

// build your plate start
if (document.querySelector('.dropdown')) {
    const data = [
        {
            id: 'soup1',
            img: 'https://www.dropbox.com/scl/fi/a87z2tujsy0whetg6ea11/soup1.png?rlkey=gmk71bp6tth3b7lht6kogvs2i&e=1&st=hob770xl&raw=1',
            plate: 'soup'
        },
        {
            id: 'soup2',
            img: 'https://www.dropbox.com/scl/fi/a1mr4760clop3vh7i2k04/soup2.png?rlkey=t36ems5lakcp44c2l9mhxpko2&e=1&st=zz7sess1&raw=1',
            plate: 'soup'
        },
        {
            id: 'soup3',
            img: 'https://www.dropbox.com/scl/fi/y1g89eek6cdb8evthkce9/soup3.png?rlkey=wf60xwtt8535kf9b0neom3nyi&st=logbl0rd&raw=1',
            plate: 'soup'
        },
        {
            id: 'rice1',
            img: 'https://www.dropbox.com/scl/fi/7otjtxu0boz6d2b0s41mo/rice1.png?rlkey=q6bp8wn1whu07iqou6yi42je4&e=1&st=em55b6wy&raw=1',
            plate: 'rice'
        },
        {
            id: 'rice2',
            img: 'https://www.dropbox.com/scl/fi/u5shgj3047cerzj4ui1zh/rice2.png?rlkey=bxelimgbpfu36ecmb0mtmjm4e&e=1&st=apinsda7&raw=1',
            plate: 'rice'
        },
        {
            id: 'rice3',
            img: 'https://www.dropbox.com/scl/fi/6el2ngy2aiqj9km63b7n6/rice3.png?rlkey=ulbs2rier4yp85cph6wjqgxzg&e=1&st=p75jz1xa&raw=1',
            plate: 'rice'
        },
        {
            id: 'main1',
            img: 'https://www.dropbox.com/scl/fi/cjs6vc8v5miigh2ajj3hg/md1.png?rlkey=a4embvqwgja2eq4fs345fgr9s&e=1&st=8tfyw557&raw=1',
            plate: 'main-dish'
        },
        {
            id: 'main2',
            img: 'https://www.dropbox.com/scl/fi/3a774bv5u4aouxym0eh4w/md2.png?rlkey=51kqrgyacxjibkbz1lkulo4q2&e=1&st=0c0q87gj&raw=1',
            plate: 'main-dish'
        },
        {
            id: 'main3',
            img: 'https://www.dropbox.com/scl/fi/34n79106yxbwyfm7yx0hx/md3.png?rlkey=jigybjjin778piv5pavxcd8q9&e=1&st=8qtolqdn&raw=1',
            plate: 'main-dish'
        },
        {
            id: 'side1',
            img: 'https://www.dropbox.com/scl/fi/xy79151t9xmx3n0fqkypk/sd1.png?rlkey=amqdyotzxxbbcc6d5tylvet43&e=1&st=10oo7iew&raw=1',
            plate: 'side-dish'
        },
        {
            id: 'side2',
            img: 'https://www.dropbox.com/scl/fi/e6f0a6bhch28wmzeckeff/sd2.png?rlkey=6pf4xbhgwydvd69kporpounnw&e=1&st=j237s5r7&raw=1',
            plate: 'side-dish'
        },
        {
            id: 'side3',
            img: 'https://www.dropbox.com/scl/fi/u88j2i89nfz43d4wgja8j/sd3.png?rlkey=onj346gzkoqpfnvanfm2ew07i&e=1&st=385zxi3m&raw=1',
            plate: 'side-dish'
        },
        {
            id: 'pickles1',
            img: 'https://www.dropbox.com/scl/fi/vqtvupg9qnmcvh1k7x3ti/p1.png?rlkey=ahncfmgjyh6oiof3woqj3vx76&e=1&st=4q5y7oyb&raw=1',
            plate: 'pickles'
        },
        {
            id: 'pickles2',
            img: 'https://www.dropbox.com/scl/fi/i0eq12wbvjhbbzrbxhmj2/p2.png?rlkey=f5ehtrhcyfrx9crn68ltg54t6&e=1&st=5cb92q4j&raw=1',
            plate: 'pickles'
        },
        {
            id: 'pickles3',
            img: 'https://www.dropbox.com/scl/fi/aifmcdt0b4p586uyvl3r9/p3.png?rlkey=khhsgnv4qu5qpojqjpypgi8kf&e=1&st=gjfxyxbz&raw=1',
            plate: 'pickles'
        }
    ];

    data.forEach(function(item) {
        const btn = document.getElementById(item.id);
        if (!btn) return;

        btn.addEventListener('click', function() {
            const plateSection = document.getElementById(item.plate);

            plateSection.style.backgroundImage = `url('${item.img}')`;
            plateSection.style.backgroundSize = 'cover';
            plateSection.style.backgroundPosition = 'center';

            plateSection.textContent = '';
        });
    });
}

