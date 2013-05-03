// references app.js
if (typeof (Meracord.Dashboard.Index) === "undefined") {
    Meracord.Dashboard.Index = {};
}

Meracord.Dashboard.Index = (function ($) {
    // configure load of recent scheduling errors to load on start and refresh every 60 seconds
    var setupRecentSchedulingErrors = function () {
        loadRecentSchedulingErrors();
        setInterval(loadRecentSchedulingErrors, 60 * 1000);
    };

    var loadRecentSchedulingErrors = function () {
        $.getJSON("/api/errors", null, function(data) {
            var $self = $("#infobox-schedulingerrors .sparkline");
            var $box = $self.closest('.infobox');
            var barColor = !$box.hasClass('infobox-dark') ? $box.css('color') : '#FFF';
            $self.sparkline(data, { type: 'bar', barColor: barColor, chartRangeMin: $(this).data('min') || 0 });
        });
    };

    return {
        init: function () {
            setupRecentSchedulingErrors();
        }
    };
})(window.jQuery);