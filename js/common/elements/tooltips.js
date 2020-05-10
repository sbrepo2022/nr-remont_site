/*
{
        title: "string",
        text: "string"
}
*/

function TooltipDialog(selector) {
    $(document).mousedown(function (e){ // событие клика по веб-документу
		var div = $(selector);
		if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.css('opacity', 0); // скрываем его
            div.hide();
		}
	});

    this.selector = selector;

    this.show = function (x, y, options) {
        let screen_w = $(document).outerWidth();
        $(this.selector + ">h3").html(options.title);
        $(this.selector + ">p").html(options.text);
        if (x < screen_w / 2)
            $(this.selector).css('left', `${x}px`);
        else
            $(this.selector).css('left', `${x - $(this.selector).outerWidth()}px`)
        $(this.selector).css('top', `${y - $(this.selector).outerHeight()/2}px`);
        $(this.selector).css('opacity', '1');

        if (x < screen_w / 2) {
            $(this.selector).removeClass('tooltip-right');
            $(this.selector).addClass('tooltip-left');
        }
        else {
            $(this.selector).removeClass('tooltip-left');
            $(this.selector).addClass('tooltip-right');
        }
        $(this.selector).show();
    }

    this.bindTo = function (selector_elem) {
        let that = this;
        $(selector_elem).on('mouseover click', function() {
            let screen_w = $(document).outerWidth();
            let x = $(this).offset().left;
            if (x < screen_w / 2)
                x += $(this).outerWidth() * 1.5;
            else
                x -= $(this).outerWidth() * 0.5;
            let y = $(this).offset().top + $(this).outerHeight() / 2;
            let new_title = $(this).attr('data-title');
            let new_text = $(this).attr('data-text');
            that.show(x, y, {title: new_title, text: new_text});
        });
    }
}
