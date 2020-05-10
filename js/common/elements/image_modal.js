function showImageModal(swiper, options) {
    $('#imgmSquare').html(options.square || " - ");
    $('#imgmSquareWord').html(options.square_word || "площадь<br>квартиры");
    $('#imgmDays').html(options.days || " - ");
    $('#imgmDaysWord').html(options.days_word || "дней");
    $('#imgmRate').html(options.rate || " - ");
    $('#imgmPrice').html(options.price || " - ");
    $('#imgmMatPrice').html(options.mat_price || " - ");
    $('#imgmWorker').html(options.worker || " - ");
    $('#imgmManager').html(options.manager || " - ");
    $('#imgmDesigner').html(options.designer || " - ");

    let selector;
    selector = '#imgmSquareBlock';
    if (options.hide_square) {
        $(selector).removeClass('d-block');
        $(selector).addClass('d-none');
    } else {
        $(selector).removeClass('d-none');
        $(selector).addClass('d-block');
    }

    selector = '#imgmDaysBlock';
    if (options.hide_days) {
        $(selector).removeClass('d-block');
        $(selector).addClass('d-none');
    } else {
        $(selector).removeClass('d-none');
        $(selector).addClass('d-block');
    }

    selector = '#imgmRateBlock';
    if (options.hide_rate) {
        $(selector).removeClass('d-block');
        $(selector).addClass('d-none');
    } else {
        $(selector).removeClass('d-none');
        $(selector).addClass('d-block');
    }

    selector = '#imgmPriceBlock';
    if (options.hide_price) {
        $(selector).removeClass('d-block');
        $(selector).addClass('d-none');
    } else {
        $(selector).removeClass('d-none');
        $(selector).addClass('d-block');
    }

    selector = '#imgmMatPriceBlock';
    if (options.hide_mat_price) {
        $(selector).removeClass('d-block');
        $(selector).addClass('d-none');
    } else {
        $(selector).removeClass('d-none');
        $(selector).addClass('d-block');
    }

    selector = '#imgmWorkerBlock';
    if (options.hide_worker) {
        $(selector).removeClass('d-block');
        $(selector).addClass('d-none');
    } else {
        $(selector).removeClass('d-none');
        $(selector).addClass('d-block');
    }

    selector = '#imgmManagerBlock';
    if (options.hide_manager) {
        $(selector).removeClass('d-block');
        $(selector).addClass('d-none');
    } else {
        $(selector).removeClass('d-none');
        $(selector).addClass('d-block');
    }

    selector = '#imgmDesignerBlock';
    if (options.hide_designer) {
        $(selector).removeClass('d-block');
        $(selector).addClass('d-none');
    } else {
        $(selector).removeClass('d-none');
        $(selector).addClass('d-block');
    }

    selector = '#imgmGrayLine1';
    if (options.hide_gl1) {
        $(selector).removeClass('d-block');
        $(selector).addClass('d-none');
        $('#imgmGrayLine2').addClass('mt-5');
    } else {
        $(selector).removeClass('d-none');
        $(selector).addClass('d-block');
        $('#imgmGrayLine2').removeClass('mt-5');
    }

    selector = '#imgmGrayLine2';
    if (options.hide_gl2) {
        $(selector).removeClass('d-block');
        $(selector).addClass('d-none');
        $('#imgmGrayLine1').addClass('mt-5');
    } else {
        $(selector).removeClass('d-none');
        $(selector).addClass('d-block');
        $('#imgmGrayLine1').removeClass('mt-5');
    }

    swiper.removeAllSlides();
    for (let i in options.slides) {
        swiper.appendSlide(`<div class="swiper-slide image-cover w-100" style="background-image: url(${options.slides[i]});"></div>`);
    }
    console.log(options);
}
