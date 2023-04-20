//choices
const menuSelect = () => {
    const elements = document.querySelectorAll('.menu__select');
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            itemSelectText: '',
            classNames: {
                containerOuter: 'header__choices',
                containerInner: 'header__inner',
            },
        });
    });
}
menuSelect ();

const gallery = () => {
    const element = document.querySelector('.gallery__select');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        resetScrollPosition: false,
        classNames: {
            containerOuter: 'gallery__choices',
            containerInner: 'gallery__inner',
            list: 'gallery__list',
        },
    });
};
gallery();


 //menu-tabs open
let tabsBtn = document.querySelectorAll('.menu__tabs-btn');
let tabsItem = document.querySelectorAll('.menu__item');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        tabsBtn.forEach(function(btn){ btn.classList.remove('menu__tabs-btn--active')});
        e.currentTarget.classList.add('menu__tabs-btn--active');
        tabsItem.forEach(function(element){ element.classList.remove('menu__item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('menu__item--active');
    });
});


//menu-tabs closed
window.onclick = function(event) {
    if (!event.target.matches('.menu__tabs-name')) {
        var dropdowns = document.getElementsByClassName("menu__item");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('menu__item--active')) {
                openDropdown.classList.remove('menu__item--active');
                tabsBtn.forEach(function(btn){ btn.classList.remove('menu__tabs-btn--active')});
                e.currentTarget.classList.add('menu__tabs-btn--active');  
            }
        }
    }
}


//swiper
const swiperGallery = document.querySelector('.gallery__swiper');
const swiperEvents = document.querySelector('.events__swiper');
const swiperProjects = document.querySelector ('.projects__swiper')
const swiperHero = document.querySelector('.hero__swiper')

let heroSwiper = new Swiper(swiperHero, {
    speed: 800,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    effect: 'fade',
    fadeEffect: {
        croossFade: true,
    },
});

let gallerySwiper = new Swiper(swiperGallery, {
    speed: 300,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    spaceBetween: 25,
    loop: false,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
        950: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        650: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 38,
        },
    }
});

let eventsSwiper = new Swiper(swiperEvents, {
    speed: 300,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.events-button-next',
        prevEl: '.events-button-prev',
    },
    pagination: {
        clickable: true,
        el: '.events-pagination',
        type: 'bullets',
    },
    loop: false,
    breakpoints: {
        1201: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
            pagination: {
                el: false,
                type: false,
            },
        },
        950: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 27,
            pagination: {
                clickable: true,
                el: '.events-pagination',
                type: 'bullets',
            },
        },
        650: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
            pagination: {
                clickable: true,
                el: '.events-pagination',
                type: 'bullets',
            },
        },
    },
});

let projectsSwiper = new Swiper(swiperProjects, {
    speed: 300,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.projects-button-next',
        prevEl: '.projects-button-prev',
    },
    loop: false,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
        950: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },
        650: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 34,
        },
    },
});


//acardion

$( function() {
    $( ".catalog__accordion" ).accordion({
        icons: false,
        heightStyle: "content",
        collapsible: true,
        active: 0
    });
    
});

//maps
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
        // Создание карты.
     const myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
         center: [55.76035256508636,37.614690103118896],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
         zoom: 17,
           });
        // Создание геообъекта с типом точка (метка).
    const myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
        },
    });
    myMap.behaviors
    myMap.behaviors.disable('scrollZoom')
    const myPlacemark = new ymaps.Placemark([55.76035256508636,37.614690103118896], {}, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/myMaps.svg',
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    })
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
}

  
//form
let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.contacts__address-form', {
    colorWrong: '#D11616',
    rules: {
        name: {
            required: true
        },
        phone: {
            required: true,
            function: (name, value) => {
                const ph = phone.inputmask.unmaskedvalue();
                return Number(ph) && ph.length ===  10;
            }
        },
    },
   messages: {
       name: "Недопустимый формат",
       phone: {
           required: "Недопустимый формат",
           function: "Не достаточно количество символов"
       }
   },
    submitHandler: function(form) {
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        form.reset();
    }
});


//popup
const galleryPopups = document.querySelectorAll('.gallery-popup');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 800;

if (galleryPopups.length > 0) {
    for (let index = 0; index < galleryPopups.length; index++) {
        const galleryPopup = galleryPopups[index];
        galleryPopup.addEventListener("click", function (e) {
            const popupName = galleryPopup.getAttribute('href').replace ('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.popup__closed')
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.container') + 'px';
    if (lockPadding.length >0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
    }
        }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});


//Tabs
const tabs1 = new GraphTabs('tab', {
    isChanged: (tabs) => {
    }
});


//Burger-menu
let menuBody = document.querySelector('.header__nav');
let iconMenu = document.querySelector('.header__burger');
let navLinks = document.querySelectorAll('.nav__link');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}

if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
         const navLink = e.target;
         if (iconMenu.classList.contains('active')) {
             body.classList.remove('lock');
             iconMenu.classList.remove('active');
             menuBody.classList.remove('active');
         }
    }
}



//search
document.querySelector(".btn-open").addEventListener("click", function() {
    document.querySelector(".header__form-search").classList.add("form__active");
    document.querySelector(".btn-open").classList.add("btn-open__active");
    this.classList.add("active");
    if (iconMenu.classList.contains('active')) {
        body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
    }
})

document.querySelector(".btn-closed").addEventListener("click", function() {
    document.querySelector(".header__form-search").classList.remove("form__active");
    document.querySelector(".btn-open").classList.remove("btn-open__active");
})

let formSearch = document.querySelector(".form-menu");
formSearch.addEventListener('submit', formOff);

async function formOff(e) {
    e.preventDefault();
}


//hover 
if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    console.log('this is a touch device');
    } else {
        console.log('this is not a touch device');
        document.body.classList.add('no-touch');
    }


//tolltip
tippy('[data-tippy-content]', {
    animation: 'scale',
    theme: 'blue',
});





