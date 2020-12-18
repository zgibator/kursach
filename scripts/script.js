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
        textComment: '',
        counterOfGood: 1,
        price: 0,
        totalValuePrice: 0,
        totalValuePrice2: 0,
        commentRate: 0,
        totalPrice: 0,
        indexT: 3,
        uploadedGood: 0,
        counterOfSorter: 1,
        a: '',
        p: 3,
        discountPrice: 0,
        scetchik: 0,
        countOfClick: 0,
        countOfClick2: 0,
        countOfClick3: 0,
        revItemGood: [],
        itemOfSort: [],
        itemFilters: [],
        cart: [
            { id: 1, codeOfGood: 0, countOfGood: 2 },
            { id: 2, codeOfGood: 3, countOfGood: 4 },
            { id: 3, codeOfGood: 2, countOfGood: 1 }
        ],
        massProizv: [],
        goodItem: [],
        itemGood: [
            {
                name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", description: 'Гитара J8 ST HMG 101 BK электро ,сочетает в себе все,что нужно для электрогитары. Стандартная гитара типа Stratocaster. Отлично подойдет для скоростной техники игры.', specific: '-Корпус: ольха', proizvoditel: 'j8', codeOfGood: 0,
                comment: [{ userName: 'ivanenko', rating: 4, dateOfWrite: '29.02.2019', textOfComment: 'Хорошая гитара!' }], price: 3772, discount: 39, image: ['img/guitar.jpg', 'img/guitar.jpg', 'img/guitar.jpg', 'img/guitar.jpg', 'img/guitar.jpg', 'img/guitar2.jpg', 'img/guitar3.jpg', 'img/guitar4.jpg'], image1: 'img/guitar2.jpg', image3: 'img/guitar3.jpg', image4: 'img/guitar4.jpg', date: "12.29.2019"
            },
            {
                name: "Барабан J8 ST HMG 101 BK", proizvoditel: 'Yamaha', codeOfGood: 1, comment: [{ userName: 'ivanenko', rating: 4, dateOfWrite: '29.02.2019', textOfComment: 'Хорошая гитара!' }],
                price: 2772, discount: 10, image: ['img/good1.png'], date: '11.23.2021'
            },
            {
                name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", proizvoditel: 'Fender', codeOfGood: 2, comment: [{ userName: 'ivanenko', rating: 4, dateOfWrite: '29.02.2019', textOfComment: 'Хорошая гитара!' }],
                price: 2772, discount: 0, image: ['img/good1.png'], date: '11.23.2021'
            },
            {
                name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", description: 'Гитара J8 ST HMG 101 BK электро ,сочетает в себе все,что нужно для электрогитары. Стандартная гитара типа Stratocaster. Отлично подойдет для скоростной техники игры.', specific: '-Корпус: ольха', proizvoditel: 'j8', codeOfGood: 3, comment: [{ userName: 'ivanenko', rating: 4, dateOfWrite: '29.02.2019', textOfComment: 'Хорошая гитара!' }, { userName: 'nagibator228', rating: 1, dateOfWrite: '29.02.2019', textOfComment: 'Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!Мне не понравилась!' }, { userName: 'Беляк Владислав', rating: 2, dateOfWrite: '29.02.2019', textOfComment: 'Я вообще не гитарист)))' }],
                price: 2772, discount: 15, image: ['img/guitar.jpg', 'img/guitar.jpg', 'img/guitar.jpg', 'img/guitar.jpg', 'img/guitar.jpg', 'img/guitar2.jpg', 'img/guitar3.jpg', 'img/guitar4.jpg'], date: '11.23.2021'
            },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", proizvoditel: 'Yamaha', codeOfGood: 4, comment: [{ userName: 'ivanenko', rating: 4, dateOfWrite: '29.02.2019', textOfComment: 'Хорошая гитара!' }], price: 2772, discount: 10, image: ['img/good1.png'], date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", proizvoditel: 'Fender', codeOfGood: 5, comment: [{ userName: 'ivanenko', rating: 4, dateOfWrite: '29.02.2019', textOfComment: 'Хорошая гитара!' }], price: 2772, discount: 10, image: ['img/good1.png'], date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", proizvoditel: 'Yamaha', codeOfGood: 6, comment: [{ userName: 'ivanenko', rating: 4, dateOfWrite: '29.02.2019', textOfComment: 'Хорошая гитара!' }], price: 2772, discount: 10, image: ['img/good1.png'], date: '11.23.2021' },
            { name: "ЭЛЕКТРОГИТАРА J8 ST HMG 101 BK", proizvoditel: 'j8', codeOfGood: 7, comment: [{ userName: 'ivanenko', rating: 4, dateOfWrite: '29.02.2019', textOfComment: 'Хорошая гитара!' }], price: 3772, discount: 10, image: ['img/good1.png'], date: '11.23.2021' },
        ],
    },
    computed: {
        reversedItemGood: {
            get: function () {
                return this.revItemGood = this.itemGood.slice().reverse();
            },
            set: function (Value) {
                this.revItemGood = Value;
            }
        },
        totalPriceCart: function () {
            this.totalValuePrice = 0;
            for (let i = 0; i < this.cart.length; i++) {
                this.totalValuePrice += this.discountPrice2(this.itemGood[this.cart[i].codeOfGood]) * this.cart[i].countOfGood;
            }
            return this.totalValuePrice
        },
        filtersProizv: function () {
            for (let i = 0; i < this.itemGood.length; i++) {
                if (!this.massProizv.includes(this.itemGood[i].proizvoditel)) {
                    this.massProizv.push(this.itemGood[i].proizvoditel);
                }
            }
            return this.massProizv;
        }
    },
    methods: {

        sorting: function (a) {
            if (a == 1) {
                return this.reversedItemGood = this.itemGood.slice().reverse();
            }
            if (a == 2) {
                return this.reversedItemGood.sort(function (a, b) {
                    return Math.round(a.price - (a.price / 100 * a.discount)) - Math.round(b.price - (b.price / 100 * b.discount));
                })
            }
            if (a == 3) {
                return this.reversedItemGood.sort(function (a, b) {
                    return Math.round(b.price - (b.price / 100 * b.discount)) - Math.round(a.price - (a.price / 100 * a.discount));
                })
            }
            if (a == 4) {
                return this.reversedItemGood.sort(function (a, b) {
                    let countStars = 0;
                    for (let i = 0; i < a.comment.length; i++) {
                        countStars += a.comment[i].rating;
                    }
                    let countStars2 = 0;
                    for (let j = 0; j < b.comment.length; j++) {
                        countStars2 += b.comment[j].rating;
                    }
                    return countStars - countStars2;
                }
                )
            }
        },
        changedFilters: function (a) {
            let good = true;
            for (let i = 0; i < this.itemFilters.length; i++) {
                if (this.itemFilters[i]) {
                    if (a.proizvoditel == this.massProizv[i]) {
                        return good = true;
                    } else { good = false; }
                }
            }
            return good;
        },
        show_popup(a) {
            let el = document.getElementById(a);
            el.className = 'popup_add_success popup_add_success_open';
            setTimeout(() => el.classList.remove('popup_add_success_open'), 5000);
        },
        addToCart(item, count) {
            this.cart.push({ id: this.cart.length + 1, codeOfGood: item.codeOfGood, countOfGood: count });
            this.show_popup('add_success');
        },
        addRateClick1() {
            this.commentRate = 1;
        },
        addRateClick2() {
            this.commentRate = 2;
        },
        addRateClick3() {
            this.commentRate = 3;
        },
        addRateClick4() {
            this.commentRate = 4;
        },
        addRateClick5() {
            this.commentRate = 5;
        },
        rating(p, g) {
            let countStars = 0;
            for (let i = 0; i < g.length; i++) {
                countStars += g[i].rating;
            }
            countStars = Math.round(countStars / g.length);
            if (p <= countStars) {
                return this.imageRate = this.rated;
            } else { return this.imageRate = this.unrated; }
        },
        ratingCom(p, g) {
            if (p <= g.rating) {
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
            return this.discountPrice = Math.round(good.price - (good.price / 100 * good.discount));
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

function addRateHover1() {
    let elem = document.getElementsByClassName('u_comment_rating');
    elem[0].src = 'img/rated.png';
}
function addRateHover2() {
    let elem = document.getElementsByClassName('u_comment_rating');
    elem[1].src = 'img/rated.png';
    addRateHover1();
}
function addRateHover3() {
    let elem = document.getElementsByClassName('u_comment_rating');
    elem[2].src = 'img/rated.png';
    addRateHover2();
}
function addRateHover4() {
    let elem = document.getElementsByClassName('u_comment_rating');
    elem[3].src = 'img/rated.png';
    addRateHover3();
}
function addRateHover5() {
    let elem = document.getElementsByClassName('u_comment_rating');
    elem[4].src = 'img/rated.png';
    addRateHover4();
}
function addRate() {
    let elem = document.getElementsByClassName('u_comment_rating');
    for (let i = 0; i < 5; i++) {
        elem[i].src = 'img/unrated.png';
    }
}


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
