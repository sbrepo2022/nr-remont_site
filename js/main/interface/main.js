$(() => {
    let interface = new Interface();
    interface.init();

    let tooltip_dialog = new TooltipDialog('#examplesTooltip');
    tooltip_dialog.bindTo('.example-point');

    let examples_swiper = new Swiper ('#examplesSwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

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

    examples_swiper.on('transitionEnd', function () {
        console.log(examples_swiper.realIndex);
        $(`input[name="examples"][tab-index="${examples_swiper.realIndex + 1}"]`).prop("checked", true);
    });

    $('input[name="examples"]').on('click', function () {
        let index = $(this).attr('tab-index');
        examples_swiper.slideTo(index);
    });
});
