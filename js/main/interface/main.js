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

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});
