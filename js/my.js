window.onload = function() {
    var circle = new ProgressBar.Circle('#java', {
        color: '#FCB03C',
        strokeWidth: 3,
        trailWidth: 1,
        duration: 1500,
        text: {
            value: '0'
        },
        step: function (state, bar) {
            bar.setText("4 year for Java J2SE");
        }
    });

    circle.animate(0.58, function () {
    })
}