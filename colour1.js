const imageSources = ['back.jpg','broock.webp','crow.webp','francky.webp','goku.webp','home.webp','logo.webp',
    'luffy.webp','monkey.webp','sabodi.webp','samurai.webp','trio.webp','zoro.webp'];

        function changeBackgroundImage() {
            const randomIndex = Math.floor(Math.random() * imageSources.length);
            document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
        }

        // Change the background image every 5 seconds (5000 milliseconds)
        setInterval(changeBackgroundImage, 900);