/*swiper*/
new Swiper('.slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    spaceBetween: 1000,
    initialSlide: 0,
    loop: true,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 800,
});

/*Vue.js*/
var app_1 = new Vue({
    el: '#app_1',
    data: {
        rated: "img/rated.png",
        unrated: "img/unrated.png",
        counter: 0,
        imageRate: '',
        t: 0,
        a: '',
        p: 3,
        discountPrice: 0,
        itemGood: [
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 1, rate: 4, comment: 3, price: 2772, discount: 10, image1: 'img/guitar.jpg', date: "12.29.2019" },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 2, rate: 4, comment: 3, price: 2772, discount: 10, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 4, comment: 3, price: 2772, discount: 10, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 4, comment: 3, price: 2772, discount: 10, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 4, comment: 3, price: 2772, discount: 10, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 4, comment: 3, price: 2772, discount: 10, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 0, comment: 3, price: 2772, discount: 10, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 0, comment: 3, price: 3772, discount: 10, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 0, comment: 3, price: 3772, discount: 10, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 0, comment: 3, price: 3772, discount: 0, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 0, comment: 3, price: 3772, discount: 0, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 4, comment: 3, price: 2772, discount: 0, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 4, comment: 3, price: 2772, discount: 0, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 4, comment: 3, price: 2772, discount: 0, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 0, comment: 3, price: 2772, discount: 0, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 0, comment: 3, price: 3772, discount: 0, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 0, comment: 3, price: 3772, discount: 0, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 0, comment: 3, price: 3772, discount: 0, image1: 'img/good1.png', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 0, comment: 3, price: 3772, discount: 0, image1: 'img/good1.png', date: '11.23.2021' },
        ],
    },
    methods: {
        rating(p, g) {
            if (p <= g.rate) {
                return this.imageRate = this.rated;
            } else { return this.imageRate = this.unrated; }
        },
        discountPrice3: function () {
            let s = 0;
            for (let i = 0; i < this.itemGood.length; i++) {
                if (this.itemGood[i].discount > 0) {
                    s++;
                }
            }
            return s;
        },
        discountPrice2: function (good) {
            return this.discountPrice = Math.round(good.price - (good.price * good.discount / 100));
        },
        newItem: function (g) {
            let now = new Date(),
                j = 0,
                dateItem = new Date(g.date);
            j = Math.floor((now - dateItem) / (60 * 60 * 24 * 1000));
            if (j < 30) {
                let s = 0;
                s++;
                return s;
            }
        },
        newItem2: function () {
            let now = new Date();
            s = 0,
                j = 0;
            for (let i = 0; i < this.itemGood.length; i++) {
                let dateItem = new Date(this.itemGood[i].date);
                j = Math.floor((now - dateItem) / (60 * 60 * 24 * 1000));
                if (j < 30) {
                    s++;
                }
            }
            return s;
        },
        anim3(a) {
            var animat = document.getElementById(a);
            function draw(timePassed) {
                animat.scrollBy(12, 0);
            }
            let start = Date.now();
            let timer = setInterval(function () {
                let timePassed = Date.now() - start;

                if (timePassed >= 300) {
                    clearInterval(timer);
                    return;
                }
                draw(timePassed);

            }, 15);
        },
        anim4(a) {
            var animat = document.getElementById(a);
            function draw(timePassed) {
                animat.scrollBy(-12, 0);
            }
            let start = Date.now();
            let timer = setInterval(function () {
                let timePassed = Date.now() - start;

                if (timePassed >= 300) {
                    clearInterval(timer);
                    return;
                }
                draw(timePassed);

            }, 15);
        },
        scr() {
            const anchors = document.querySelectorAll('a[href*="#"]')

            for (let anchor of anchors) {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault()

                    const blockID = anchor.getAttribute('href').substr(1)

                    document.getElementById(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                })
            }
        }
    }
});
