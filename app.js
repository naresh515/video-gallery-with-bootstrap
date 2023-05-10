$(document).ready(function () {
    $('.video-gallery').magnificPopup({
        delegate: 'a',
        type: 'iframe',
        iframe: {
            patterns: {
                mp4: {
                    index: '.mp4',
                    src: '%src%'
                }
            }
        },
        gallery: {
            enabled: true
        }
    });
})