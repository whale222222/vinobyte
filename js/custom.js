particlesJS.load('particles-js', 'js/particles-js/particlesjs-config.json', function() { });

setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
}, 500);
