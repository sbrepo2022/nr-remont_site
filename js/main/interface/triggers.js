function Interface() {
    /* для того, чтобы создать обработчик события, добавте объект события в массив */
    this.bindings = [
        {
            event: 'click',
            selector: '#menuButton',
            callback: function () {
                if ($('#menuButton').hasClass('active')) {
                    $('#menuButton').removeClass('active');
                    $('#pageWrapper').removeClass('open-nav');
                }
                else {
                    $('#menuButton').addClass('active');
                    $('#pageWrapper').addClass('open-nav');
                }
            }
        },

        {
            event: 'click',
            selector: 'button[role="scroll-to"]',
            callback: function () {
                let dest = $(this).attr('dest');
                let t_offset = $(dest).offset().top;
                $('html, body').animate({ scrollTop : t_offset}, 1500);
            }
        },
    ];

    /* метод проходится по массиву bindings и регистрирует обработчики */
    this.bindAll = function () {
        for (let i in this.bindings) {
            $(this.bindings[i].selector).on(this.bindings[i].event, this.bindings[i].callback);
        }
    };

    this.init = function() {
        this.bindAll();
    };
}
