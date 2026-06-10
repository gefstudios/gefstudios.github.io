class Particle {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;

  constructor(private canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
    this.size = Math.random() * 2 + 1;
  }

  update(): void {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > this.canvas.width) this.x = 0;
    if (this.x < 0) this.x = this.canvas.width;
    if (this.y > this.canvas.height) this.y = 0;
    if (this.y < 0) this.y = this.canvas.height;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = '#00f3ff';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

let animationId: number | null = null;

export function initBackgroundCanvas(): void {
  const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  if (animationId !== null) {
    cancelAnimationFrame(animationId);
  }

  const particles: Particle[] = [];
  const particleCount = 60;

  const resizeCanvas = (): void => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas));
  }

  const animate = (): void => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw(ctx);
    });
    animationId = requestAnimationFrame(animate);
  };

  animate();
}
