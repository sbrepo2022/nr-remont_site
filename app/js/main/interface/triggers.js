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

        {
            event: 'change',
            selector: 'input[name="examples"]',
            callback: function () {
                if (this.checked) {
                    let index = $(this).attr('tab-index');
                    $('.quality-price').removeClass('opacity-1');
                    $(`.quality-price[data-index="${index}"]`).addClass('opacity-1');
                }
            }
        },

        {
            event: 'click',
            selector: '[name="examples-descr"]',
            callback: function () {
                let href = $(this).attr('data-target');
                $('#examplesDescrTabContent > .tab-pane').removeClass('show');
                $('#examplesDescrTabContent > .tab-pane').removeClass('active');
                $(href).tab('show');
            }
        },

        {
            event: 'click',
            selector: '[data-toggle="tab-calc"]',
            callback: function () {
                let href = $(this).attr('data-target');
                $('#calcTabs > .tab-pane').removeClass('show');
                $('#calcTabs > .tab-pane').removeClass('active');
                $(href).tab('show');
            }
        },

        {
            event: 'click',
            selector: '[data-toggle="tab-calc-modal"]',
            callback: function () {
                let href = $(this).attr('data-target');
                $('#calcModalTabs > .tab-pane').removeClass('show');
                $('#calcModalTabs > .tab-pane').removeClass('active');
                $(href).tab('show');
            }
        },

        {
            event: 'submit',
            selector: '.confidence-validate',
            callback: function () {
                if ($(this).find('.confidence-checkbox > input[type="checkbox"]').prop('checked')) {
                    $($(this).attr('alert-select')).removeClass('show');
                    return true;
                }
                else {
                    $($(this).attr('alert-select')).addClass('show');
                    return false;
                }
            }
        },

        {
            event: 'click',
            selector: '#calcToResult',
            callback: function () {
                let radio = $('input[name="remont-cat-5"]:checked');
                $('#calcPresentImg').css('background-image', 'url(' + $(radio).attr('data-pimage') + ')');
                $('#calcPresentText').html($(radio).attr('data-ptext'));
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
