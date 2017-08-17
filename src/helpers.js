/**
 * Created by kmukai on 8/15/2017.
 */

module.exports = {
    formatToCurrency: function (value) {
        return value.toFixed(2).replace(/./g, function(c, i, a) {
            return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
        });
    }
};
