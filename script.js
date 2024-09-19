function drawBouquet() {
    const canvas = document.getElementById('flowerCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    let step = 0;

    function drawStep() {
        if (step === 0) {
            // Dibujar tallos
            ctx.beginPath();
            ctx.moveTo(200, 400);
            ctx.lineTo(150, 250);
            ctx.moveTo(200, 400);
            ctx.lineTo(250, 250);
            ctx.moveTo(200, 400);
            ctx.lineTo(200, 150); // Hacer el tallo más alto
            ctx.moveTo(200, 400);
            ctx.lineTo(100, 250);
            ctx.moveTo(200, 400);
            ctx.lineTo(300, 250);
            ctx.strokeStyle = '#228B22';
            ctx.lineWidth = 5;
            ctx.stroke();
        } else if (step === 1) {
            // Dibujar hojas
            ctx.beginPath();
            ctx.moveTo(150, 250);
            ctx.lineTo(120, 220);
            ctx.moveTo(250, 250);
            ctx.lineTo(280, 220);
            ctx.moveTo(100, 250);
            ctx.lineTo(70, 220);
            ctx.moveTo(300, 250);
            ctx.lineTo(330, 220);
            ctx.strokeStyle = '#228B22';
            ctx.lineWidth = 5;
            ctx.stroke();
        } else if (step === 2) {
            // Dibujar girasoles más grandes y alejados
            drawSunflower(ctx, 150, 200);
            drawSunflower(ctx, 250, 200);
            drawSunflower(ctx, 200, 100);
            drawSunflower(ctx, 100, 200);
            drawSunflower(ctx, 300, 200);
        } else if (step === 3) {
            // Dibujar otras flores y adornos
            drawOtherFlowers(ctx, 50, 300);
            drawOtherFlowers(ctx, 350, 300);
            drawOtherFlowers(ctx, 50, 100);
            drawOtherFlowers(ctx, 350, 100);
        } else if (step === 4) {
            // Dibujar más mariposas
            drawButterfly(ctx, 80, 80);
            drawButterfly(ctx, 320, 80);
            drawButterfly(ctx, 80, 320);
            drawButterfly(ctx, 320, 320);
            drawButterfly(ctx, 200, 50);
            drawButterfly(ctx, 200, 350);
        } else if (step === 5) {
            // Mostrar frase romántica con emojis de cerdita
            document.getElementById('phrase').innerText = '🌻 Mi amor, cada día a tu lado es un regalo que atesoro con todo mi corazón. 💖 Eres la luz que ilumina mis días y la razón de mis sonrisas. 😊 Desde el momento en que te conocí, supe que mi vida cambiaría para siempre. 🌟 Tu amor me llena de alegría y me inspira a ser mejor cada día. 💪 Gracias por ser mi compañera, mi confidente y mi mejor amiga. 👩‍❤️‍👨 No hay palabras suficientes para expresar cuánto te amo y cuánto significas para mí. 💕 Eres mi todo, y prometo amarte y cuidarte siempre. 🌹 🐷💌';
        }

        step++;
        if (step <= 5) {
            setTimeout(drawStep, 1000);
        }
    }

    drawStep();
}

function drawSunflower(ctx, x, y) {
    // Dibujar pétalos más grandes y con bordes negros
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.ellipse(x + 40 * Math.cos(i * Math.PI / 6), y + 40 * Math.sin(i * Math.PI / 6), 15, 40, i * Math.PI / 6, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD700';
        ctx.fill();
        ctx.strokeStyle = '#000'; // Bordes negros
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Dibujar centro más grande y con bordes negros
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2, false);
    ctx.fillStyle = '#8B4513';
    ctx.fill();
    ctx.strokeStyle = '#000'; // Bordes negros
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawOtherFlowers(ctx, x, y) {
    // Dibujar otras flores y adornos
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2, false);
    ctx.fillStyle = '#FF69B4';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = '#FF1493';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawButterfly(ctx, x, y) {
    // Dibujar mariposa
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + 20, y - 20, x + 40, y + 20, x + 60, y);
    ctx.bezierCurveTo(x + 40, y + 20, x + 20, y - 20, x, y);
    ctx.fillStyle = '#FF69B4';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + 60, y);
    ctx.bezierCurveTo(x + 80, y - 20, x + 100, y + 20, x + 120, y);
    ctx.bezierCurveTo(x + 100, y + 20, x + 80, y - 20, x + 60, y);
    ctx.fillStyle = '#FF69B4';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
}













