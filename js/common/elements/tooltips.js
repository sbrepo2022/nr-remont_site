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
        $(this.selector + ">h3").html(options.title);
        $(this.selector + ">p").html(options.text);
        $(this.selector).css('left', `${x - $(this.selector).width() - 70}px`);
        $(this.selector).css('top', `${y - $(this.selector).height()/2 - 15}px`);
        $(this.selector).css('opacity', '1');
        $(this.selector).show();
    }

    this.bindTo = function (selector_elem) {
        let that = this;
        $(selector_elem).on('mouseover', function() {
            let x = $(this).offset().left;
            let y = $(this).offset().top;
            let new_title = $(this).attr('data-title');
            let new_text = $(this).attr('data-text');
            that.show(x, y, {title: new_title, text: new_text});
        });
    }
}
