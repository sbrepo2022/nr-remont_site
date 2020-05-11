$(() => {
    let interface = new Interface();
    interface.init();

    let tooltip_dialog = new TooltipDialog('#examplesTooltip');
    tooltip_dialog.bindTo('.example-point');

    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
        threshold: 2000,
        cancel_on_exit: true,
    });
    console.log(lazyLoadInstance);

    let d_width = $(document).width() - 40;
    if (d_width > 640) d_width = 640;
    $('.cbox-video').colorbox({iframe:true, innerWidth:d_width, innerHeight:d_width / 16 * 9});

    $(".phone-mask").mask("+7(999) 999-99-99");

    /* examples swiper */
    let examples_swiper = new Swiper ('#examplesSwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    examples_swiper.on('transitionEnd', function () {
        $(`input[name="examples"][tab-index="${examples_swiper.realIndex}"]`).prop("checked", true);

        $('.quality-price').removeClass('opacity-1');
        $(`.quality-price[data-index="${examples_swiper.realIndex}"]`).addClass('opacity-1');
    });

    $('input[name="examples"]').on('click', function () {
        let index = $(this).attr('tab-index');
        examples_swiper.slideTo(index);
    });

    /* realised swiper */
    let realised_swiper = new Swiper ('#realisedSwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    realised_swiper.on('transitionEnd', function () {
        $(`input[name="realised"][tab-index="${realised_swiper.realIndex}"]`).prop("checked", true);

        $('.quality-price').removeClass('opacity-1');
        $(`.quality-price[data-index="${realised_swiper.realIndex}"]`).addClass('opacity-1');
    });

    $('input[name="realised"]').on('click', function () {
        let index = $(this).attr('tab-index');
        realised_swiper.slideTo(index);
    });

    realised_swiper.on('transitionEnd', function () {
        $(`input[name="realised-md"][tab-index="${realised_swiper.realIndex}"]`).prop("checked", true);

        $('.quality-price').removeClass('opacity-1');
        $(`.quality-price[data-index="${realised_swiper.realIndex}"]`).addClass('opacity-1');
    });

    $('input[name="realised-md"]').on('click', function () {
        let index = $(this).attr('tab-index');
        realised_swiper.slideTo(index);
    });

    /* design projects swiper */
    let design_projects_swiper = new Swiper ('#designProjectsSwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    design_projects_swiper.on('transitionEnd', function () {
        $(`input[name="design-projects"][tab-index="${design_projects_swiper.realIndex}"]`).prop("checked", true);

        $('.quality-price').removeClass('opacity-1');
        $(`.quality-price[data-index="${design_projects_swiper.realIndex}"]`).addClass('opacity-1');
    });

    $('input[name="design-projects"]').on('click', function () {
        let index = $(this).attr('tab-index');
        design_projects_swiper.slideTo(index);
    });

    design_projects_swiper.on('transitionEnd', function () {
        $(`input[name="design-projects-md"][tab-index="${design_projects_swiper.realIndex}"]`).prop("checked", true);

        $('.quality-price').removeClass('opacity-1');
        $(`.quality-price[data-index="${design_projects_swiper.realIndex}"]`).addClass('opacity-1');
    });

    $('input[name="design-projects-md"]').on('click', function () {
        let index = $(this).attr('tab-index');
        design_projects_swiper.slideTo(index);
    });

    /* team swiper */
    let team_swiper = new Swiper ('#teamSwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        observer: true,
        observeParents: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="team-pagination-bullet ${className} mr-4"></span>`;
            },
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    /* managers swiper */
    let managers_swiper = new Swiper ('#managersSwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        observer: true,
        observeParents: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="team-pagination-bullet ${className} mr-4"></span>`;
            },
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    /* managers swiper */
    let partners_swiper = new Swiper ('#partnersSwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /* image modal swiper */
    let images_modal_swiper = new Swiper ('#imagesModalSwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        observer: true,
        observeParents: true,

        // If we need pagination
        pagination: {
            el: '#imagesModalSwiper > .swiper-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="img-modal-pagination-bullet ${className} mr-4"></span>`;
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '#imagesModalSwiper > .swiper-button-next',
            prevEl: '#imagesModalSwiper > .swiper-button-prev',
        },
    });


    let image_modal_options = [
        {
            square: '58',
            days: '60',
            rate: 'Капитальный',
            price: '377 219',
            mat_price: '147 089',
            worker: 'Иванов С.В.',
            manager: 'Петров Р.М.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/1.jpg',
                'resources/images/static/main_page/realised_detailed/2.jpg',
                'resources/images/static/main_page/realised_detailed/3.jpg',
                'resources/images/static/main_page/realised_detailed/4.jpg',
            ],
        },

        {
            square: '43',
            days: '45',
            rate: 'До 45 м²',
            price: '347 867',
            mat_price: '136 753',
            worker: 'Иванов Д.Л.',
            manager: 'Петров А.Ю.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/5.jpg',
                'resources/images/static/main_page/realised_detailed/6.jpg',
                'resources/images/static/main_page/realised_detailed/7.jpg',
                'resources/images/static/main_page/realised_detailed/8.jpg',
            ],
        },

        {
            square: '56',
            days: '55',
            rate: 'Капитальный',
            price: '367 928',
            mat_price: '142 923',
            worker: 'Иванов С.А.',
            manager: 'Петров А.Ю.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/9.jpg',
                'resources/images/static/main_page/realised_detailed/10.jpg',
                'resources/images/static/main_page/realised_detailed/11.jpg',
                'resources/images/static/main_page/realised_detailed/12.jpg',
            ],
        },

        {
            square: '48',
            days: '90',
            rate: 'Капитальный',
            price: '355 000',
            mat_price: '213 927',
            worker: 'Иванов С.А.',
            manager: 'Петров А.Ю.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/13.jpg',
                'resources/images/static/main_page/realised_detailed/14.jpg',
                'resources/images/static/main_page/realised_detailed/15.jpg',
                'resources/images/static/main_page/realised_detailed/16.jpg',
            ],
        },

        {
            square: '65',
            days: '70',
            rate: 'Комфорт',
            price: '525 751',
            mat_price: '178 021',
            worker: 'Иванов Д.Л.',
            manager: 'Петров Р.М.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/17.jpg',
                'resources/images/static/main_page/realised_detailed/18.jpg',
                'resources/images/static/main_page/realised_detailed/19.jpg',
                'resources/images/static/main_page/realised_detailed/20.jpg',
            ],
        },

        {
            square: '45',
            days: '55',
            rate: 'Комфорт',
            price: '340 163',
            mat_price: '192 218',
            worker: 'Иванов С.А.',
            manager: 'Петров А.Ю.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/21.jpg',
                'resources/images/static/main_page/realised_detailed/22.jpg',
                'resources/images/static/main_page/realised_detailed/23.jpg',
                'resources/images/static/main_page/realised_detailed/24.jpg',
            ],
        },

        {
            square: '68',
            days: '65',
            rate: 'Капитальный',
            price: '438 397',
            mat_price: '158 475',
            worker: 'Иванов С.А.',
            manager: 'Петров Р.М.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/25.jpg',
                'resources/images/static/main_page/realised_detailed/26.jpg',
                'resources/images/static/main_page/realised_detailed/27.jpg',
                'resources/images/static/main_page/realised_detailed/28.jpg',
            ],
        },

        {
            square: '68',
            days: '65',
            rate: 'Капитальный',
            price: '438 397',
            mat_price: '158 475',
            worker: 'Иванов С.А.',
            manager: 'Петров Р.М.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/29.jpg',
                'resources/images/static/main_page/realised_detailed/30.jpg',
                'resources/images/static/main_page/realised_detailed/31.jpg',
                'resources/images/static/main_page/realised_detailed/32.jpg',
            ],
        },

        {
            square: '105',
            days: '120',
            rate: 'Капитальный',
            price: '710 648',
            mat_price: '290 435',
            worker: 'Петров И.Д.',
            manager: 'Петров А.Ю.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/33.jpg',
                'resources/images/static/main_page/realised_detailed/34.jpg',
                'resources/images/static/main_page/realised_detailed/35.jpg',
                'resources/images/static/main_page/realised_detailed/36.jpg',
            ],
        },

        {
            square: '62',
            days: '65',
            rate: 'Капитальный',
            price: '428 592',
            mat_price: '169 763',
            worker: 'Иванов С.А.',
            manager: 'Петров А.Ю.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/37.jpg',
                'resources/images/static/main_page/realised_detailed/38.jpg',
                'resources/images/static/main_page/realised_detailed/39.jpg',
                'resources/images/static/main_page/realised_detailed/40.jpg',
            ],
        },

        {
            square: '73',
            days: '70',
            rate: 'Комфорт',
            price: '658 277',
            mat_price: '142 928',
            worker: 'Чадов Е.В.',
            manager: 'Петров А.Ю.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/41.jpg',
                'resources/images/static/main_page/realised_detailed/42.jpg',
                'resources/images/static/main_page/realised_detailed/43.jpg',
                'resources/images/static/main_page/realised_detailed/44.jpg',
            ],
        },

        {
            square: '5',
            square_word: 'площадь<br>',
            days: '2',
            days_word: 'недели',
            hide_rate: true,
            price: '48 500',
            hide_mat_price: true,
            hide_worker: true,
            manager: 'Петров А.Ю.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/65.jpg',
                'resources/images/static/main_page/realised_detailed/66.jpg',
                'resources/images/static/main_page/realised_detailed/67.jpg',
                'resources/images/static/main_page/realised_detailed/68.jpg',
            ],
        },

        {
            square: '4.5',
            square_word: 'площадь<br>',
            days: '2',
            days_word: 'недели',
            hide_rate: true,
            price: '45 600',
            hide_mat_price: true,
            hide_worker: true,
            manager: 'Петров А.Ю.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/69.jpg',
                'resources/images/static/main_page/realised_detailed/70.jpg',
                'resources/images/static/main_page/realised_detailed/71.jpg',
                'resources/images/static/main_page/realised_detailed/72.jpg',
            ],
        },

        {
            square: '8',
            square_word: 'площадь<br>',
            days: '3',
            days_word: 'недели',
            hide_rate: true,
            price: '54 000',
            hide_mat_price: true,
            hide_worker: true,
            manager: 'Петров А.Ю.',
            hide_designer: true,
            slides: [
                'resources/images/static/main_page/realised_detailed/73.jpg',
                'resources/images/static/main_page/realised_detailed/74.jpg',
                'resources/images/static/main_page/realised_detailed/75.jpg',
                'resources/images/static/main_page/realised_detailed/76.jpg',
            ],
        },

        {
            hide_square: true,
            hide_days: true,
            hide_rate: true,
            hide_price: true,
            hide_mat_price: true,
            hide_worker: true,
            hide_manager: true,
            hide_gl2: true,
            designer: '<br>Степанова Александра',
            slides: [
                'resources/images/static/main_page/realised_detailed/mini1.jpg',
                'resources/images/static/main_page/realised_detailed/mini2.jpg',
                'resources/images/static/main_page/realised_detailed/mini3.jpg',
                'resources/images/static/main_page/realised_detailed/mini4.jpg',
            ],
        },

        {
            hide_square: true,
            hide_days: true,
            hide_rate: true,
            hide_price: true,
            hide_mat_price: true,
            hide_worker: true,
            hide_manager: true,
            hide_gl2: true,
            designer: '<br>Степанова Александра',
            slides: [
                'resources/images/static/main_page/realised_detailed/mini5.jpeg',
                'resources/images/static/main_page/realised_detailed/mini6.jpeg',
                'resources/images/static/main_page/realised_detailed/mini7.jpeg',
            ],
        },

        {
            hide_square: true,
            hide_days: true,
            hide_rate: true,
            hide_price: true,
            hide_mat_price: true,
            hide_worker: true,
            hide_manager: true,
            hide_gl2: true,
            designer: '<br>Степанова Александра',
            slides: [
                'resources/images/static/main_page/realised_detailed/mini8.jpeg',
                'resources/images/static/main_page/realised_detailed/mini9.jpeg',
                'resources/images/static/main_page/realised_detailed/mini10.jpeg',
            ],
        },

        {
            hide_square: true,
            hide_days: true,
            hide_rate: true,
            hide_price: true,
            hide_mat_price: true,
            hide_worker: true,
            hide_manager: true,
            hide_gl2: true,
            designer: '<br>Степанова Александра',
            slides: [
                'resources/images/static/main_page/realised_detailed/new1.jpeg',
                'resources/images/static/main_page/realised_detailed/new2.jpeg',
                'resources/images/static/main_page/realised_detailed/new3.jpeg',
            ],
        },

        {
            hide_square: true,
            hide_days: true,
            hide_rate: true,
            hide_price: true,
            hide_mat_price: true,
            hide_worker: true,
            hide_manager: true,
            hide_gl2: true,
            designer: '<br>Степанова Александра',
            slides: [
                'resources/images/static/main_page/realised_detailed/new4.jpeg',
                'resources/images/static/main_page/realised_detailed/new5.jpeg',
                'resources/images/static/main_page/realised_detailed/new6.jpeg',
                'resources/images/static/main_page/realised_detailed/new7.jpeg',
            ],
        },

        {
            hide_square: true,
            hide_days: true,
            hide_rate: true,
            hide_price: true,
            hide_mat_price: true,
            hide_worker: true,
            hide_manager: true,
            hide_gl2: true,
            designer: '<br>Степанова Александра',
            slides: [
                'resources/images/static/main_page/realised_detailed/new8.jpeg',
                'resources/images/static/main_page/realised_detailed/new9.jpg',
                'resources/images/static/main_page/realised_detailed/new10.png',
                'resources/images/static/main_page/realised_detailed/new11.jpg',
            ],
        },

        {
            hide_square: true,
            hide_days: true,
            hide_rate: true,
            hide_price: true,
            hide_mat_price: true,
            hide_worker: true,
            hide_manager: true,
            hide_gl2: true,
            designer: '<br>Степанова Александра',
            slides: [
                'resources/images/static/main_page/realised_detailed/art1.jpg',
                'resources/images/static/main_page/realised_detailed/art2.jpg',
                'resources/images/static/main_page/realised_detailed/art3.jpg',
            ],
        },

        {
            hide_square: true,
            hide_days: true,
            hide_rate: true,
            hide_price: true,
            hide_mat_price: true,
            hide_worker: true,
            hide_manager: true,
            hide_gl2: true,
            designer: '<br>Степанова Александра',
            slides: [
                'resources/images/static/main_page/realised_detailed/art4.jpg',
                'resources/images/static/main_page/realised_detailed/art5.jpg',
            ],
        },

        {
            hide_square: true,
            hide_days: true,
            hide_rate: true,
            hide_price: true,
            hide_mat_price: true,
            hide_worker: true,
            hide_manager: true,
            hide_gl2: true,
            designer: '<br>Степанова Александра',
            slides: [
                'resources/images/static/main_page/realised_detailed/art6.jpeg',
                'resources/images/static/main_page/realised_detailed/art7.jpeg',
                'resources/images/static/main_page/realised_detailed/art8.jpeg',
            ],
        },
    ];
    $('[data-target="#imagesModal"]').on('click', function () {
        showImageModal(images_modal_swiper, image_modal_options[$(this).attr('data-index')]);
    });

    $('#calculateSquareSlider > input').bootstrapSlider({
        min: 30,
        max: 200,
        step: 1,
        value: 60,
    }).on('slide', function (obj) {
        $('#calcSliderResult').html(obj.value);
    });
});
