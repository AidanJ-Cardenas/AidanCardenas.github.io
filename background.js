const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
let particles = [];
let particleCount = window.innerWidth < 768 ? 100 : 220; 

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        const angle = (Math.floor(Math.random() * 6) * 60) * (Math.PI / 180);
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.cos(angle) * 0.4,
            vy: Math.sin(angle) * 0.4
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx; p.y += p.vy;
        
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;

        for (let j = i + 1; j < particles.length; j++) {
            let p2 = particles[j];
            let dist = Math.sqrt((p.x - p2.x)**2 + (p.y - p2.y)**2);
            if (dist < 140) {
                // Using Deep Teal #0d7991
                let opacity = 1 - (dist / 140);
                ctx.strokeStyle = `rgba(13, 121, 145, ${opacity * 0.4})`;
                ctx.lineWidth = 0.8;
                ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
            }
        }
    }
    requestAnimationFrame(draw);
}
window.addEventListener('resize', init);
init(); draw();