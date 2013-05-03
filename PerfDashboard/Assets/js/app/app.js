if (!window.console) {
    console = {
        log: function (s) {
            // swallow console write when we don't have an output
        }
    };
}

if (typeof (Meracord) === "undefined") {
    Meracord = {};
}

if (typeof (Meracord.Dashboard) === "undefined") {
    Meracord.Dashboard = {};
}