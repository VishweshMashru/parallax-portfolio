gsap.fromTo('.profile', {opacity: 0, y: 120, x: "-100%"}, {duration: 1.5, y: "-10", x: 0, opacity: 1, ease: 'power2.out'});
gsap.from('.title', {duration: 1, y: 50, opacity: 0})
gsap.fromTo('.expeirence', {opactiy: 0, x: 0, y: 0}, {opacity: 1, duration: 3, x: '%75', y: 350, ease: 'cicr.out' })