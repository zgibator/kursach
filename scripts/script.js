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
        search: '',
        isActive: true,
        imageRate: '',
        counterOfGood: 1,
        price: 0,
        totalPrice: 0,
        a: '',
        p: 3,
        discountPrice: 0,
        cart: [
            { id: 1, codeOfGood: 1, countOfGood: 2 }
        ],
        goodItem: [],
        itemGood: [
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", description: 'Гитара J8 ST HMG 101 BK электро ,сочетает в себе все,что нужно для электрогитары. Стандартная гитара типа Stratocaster. Отлично подойдет для скоростной техники игры.', specific: '-Корпус: ольха', proizvoditel: 'j8', codeOfGood: 1, rate: 4, comment: 3, price: 3772, discount: 39, image2: ['img/guitar.jpg', 'img/guitar.jpg', 'img/guitar.jpg', 'img/guitar.jpg', 'img/guitar.jpg', 'img/guitar2.jpg', 'img/guitar3.jpg', 'img/guitar4.jpg'], image1: 'img/guitar2.jpg', image3: 'img/guitar3.jpg', image4: 'img/guitar4.jpg', date: "12.29.2019" },
            { name: "Барабан J8 ST HMG 101 BK", codeOfGood: 2, rate: 4, comment: 3, price: 2772, discount: 10, image1: 'img/guitar2.jpg', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 4, comment: 3, price: 2772, discount: 10, image1: 'img/guitar3.jpg', date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", codeOfGood: 3, rate: 4, comment: 3, price: 2772, discount: 10, image1: 'img/guitar4.jpg', date: '11.23.2021' },
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
        show_popup() {
            let el = document.getElementById('add_success');
            el.className = 'popup_add_success popup_add_success_open';
            setTimeout(() => el.classList.remove('popup_add_success_open'), 5000);
        },
        addToCart(item, count) {
            this.cart.push({ id: this.cart.length + 1, codeOfGood: item.codeOfGood, countOfGood: count });
            this.show_popup();
        },
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
        animScrollImgUp(a) {
            var animat = document.getElementById(a);
            function draw(timePassed) {
                animat.scrollBy(0, -2);
            }
            let start = Date.now();
            let timer = setInterval(function () {
                let timePassed = Date.now() - start;

                if (timePassed >= 360) {
                    clearInterval(timer);
                    return;
                }
                draw(timePassed);

            }, 10);
        },
        animScrollImgDown(a) {
            var animat = document.getElementById(a);
            function draw(timePassed) {
                animat.scrollBy(0, 2);
            }
            let start = Date.now();
            let timer = setInterval(function () {
                let timePassed = Date.now() - start;

                if (timePassed >= 370) {
                    clearInterval(timer);
                    return;
                }
                draw(timePassed);

            }, 10);
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
        countPlus() {
            console.log('lox');
            return this.counterOfGood++;
        }
    },
    watch: {



        search: function (newSearch) {
            if (newSearch.length > 1) {
                this.isActive = false;
                for (let i = 0; i < this.itemGood.length; i++) {
                    if (this.itemGood[i].name.toLowerCase().includes(newSearch.toLowerCase())) {
                        this.goodItem[this.counter] = this.itemGood[i];
                        console.log(this.goodItem[0]);
                        console.log(this.itemGood.length);
                        this.counter++;
                    }
                }
            } else {
                this.goodItem = [];
                this.isActive = true;
            }
        }

    }
});
var app_2 = new Vue({
    el: '#app_2',
    data: {
        search: '',
    },
    watch: {
        search: function (newSearch) {
            if (newSearch.length > 1) {
                app_1.isActive = false;
                for (let i = 0; i < this.itemGood.length; i++) {
                    if (app_1.itemGood[i].name.toLowerCase().includes(newSearch.toLowerCase())) {
                        app_1.goodItem[app_1.counter] = app_1.itemGood[i];
                        console.log(app_1.goodItem[0]);
                        console.log(app_1.itemGood.length);
                        app_1.counter++;
                    }
                }
            } else {
                app_1.goodItem = [];
                app_1.isActive = true;
            }
        }
    }
});
