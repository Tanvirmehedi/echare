jQuery(document).ready(function ($) {

    // For Home Page
    let i = 2;
    var radius = 200;
    var fields = $('.itemDot');
    var container = $('.dotCircle');
    var width = container.width();
    radius = width / 2.5;

    var height = container.height();
    var angle = 0,
        step = (2 * Math.PI) / fields.length;
    fields.each(function () {
        var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
        var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);

        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        angle += step;
    });

    $('.itemDot').click(function () {
        var dataTab = $(this).data("tab");
        $('.itemDot').removeClass('active');
        $(this).addClass('active');
        $('.CirItem').removeClass('active');
        $('.CirItem' + dataTab).addClass('active');

        i = dataTab;

        $('.dotCircle').css({
            "transform": "rotate(" + (360 - (i - 1) * 36) + "deg)",
            "transition": "2s"
        });
        $('.itemDot').css({
            "transform": "rotate(" + ((i - 1) * 36) + "deg)",
            "transition": "1s"
        });
    });

    setInterval(function () {
        var dataTab = $('.itemDot.active').data("tab");
        if (dataTab > 5 || i > 5) {
            dataTab = 1;
            i = 1;
        }
        $('.itemDot').removeClass('active');
        $('[data-tab="' + i + '"]').addClass('active');
        $('.CirItem').removeClass('active');
        $('.CirItem' + i).addClass('active');
        i++;

        $('.dotCircle').css({
            "transform": "rotate(" + (360 - (i - 2) * 36) + "deg)",
            "transition": "2s"
        });
        $('.itemDot').css({
            "transform": "rotate(" + ((i - 2) * 36) + "deg)",
            "transition": "1s"
        });
    }, 5000);
});