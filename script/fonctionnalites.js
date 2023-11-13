$(document).ready(function () {

    // CAROUSSEL TEXTE
    $container = $('.container');
    $p1 = $('#picto1');
    $p2 = $('#picto2');
    $p3 = $('#picto3');

    // TELEPHONE
    $s1 = $('#screen1');
    $s2 = $('#screen2');
    $s3 = $('#screen3');

    // AU CLIQUE
    $p1.click(function () {
        $p1.addClass('pictoActif');
        $p2.removeClass('pictoActif');
        $p3.removeClass('pictoActif');

        $container.css({
            transform: 'translateX(0%)'
        });

        $s1.addClass('actif');
        $s2.removeClass('actif');
        $s3.removeClass('actif');
    });

    $p2.click(function () {
        $p1.removeClass('pictoActif');
        $p2.addClass('pictoActif');
        $p3.removeClass('pictoActif');

        $container.css({
            transform: 'translateX(-33.3%)'
        });

        $s1.removeClass('actif');
        $s2.addClass('actif');
        $s3.removeClass('actif');
    });

    $p3.click(function () {
        $p1.removeClass('pictoActif');
        $p2.removeClass('pictoActif');
        $p3.addClass('pictoActif');

        $container.css({
            transform: 'translateX(-66.6%)'
        });

        $s1.removeClass('actif');
        $s2.removeClass('actif');
        $s3.addClass('actif');
    });


});