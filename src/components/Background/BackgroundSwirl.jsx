import React, { useEffect, useRef } from "react";

// SimplexNoise implementation
class SimplexNoise {
  constructor() {
    this.grad3 = [
      [1, 1, 0],
      [-1, 1, 0],
      [1, -1, 0],
      [-1, -1, 0],
      [1, 0, 1],
      [-1, 0, 1],
      [1, 0, -1],
      [-1, 0, -1],
      [0, 1, 1],
      [0, -1, 1],
      [0, 1, -1],
      [0, -1, -1],
    ];
    this.p = [];
    for (let i = 0; i < 256; i++) {
      this.p[i] = Math.floor(Math.random() * 256);
    }
    this.perm = [];
    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
    }
  }

  dot(g, x, y) {
    return g[0] * x + g[1] * y;
  }

  noise(xin, yin) {
    let n0, n1, n2;
    const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;

    let i1, j1;
    if (x0 > y0) {
      i1 = 1;
      j1 = 0;
    } else {
      i1 = 0;
      j1 = 1;
    }

    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1.0 + 2.0 * G2;
    const y2 = y0 - 1.0 + 2.0 * G2;

    const ii = i & 255;
    const jj = j & 255;
    const gi0 = this.perm[ii + this.perm[jj]] % 12;
    const gi1 = this.perm[ii + i1 + this.perm[jj + j1]] % 12;
    const gi2 = this.perm[ii + 1 + this.perm[jj + 1]] % 12;

    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 < 0) n0 = 0.0;
    else {
      t0 *= t0;
      n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0);
    }

    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 < 0) n1 = 0.0;
    else {
      t1 *= t1;
      n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1);
    }

    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 < 0) n2 = 0.0;
    else {
      t2 *= t2;
      n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2);
    }

    return 70.0 * (n0 + n1 + n2);
  }

  noise3D(x, y, z) {
    return this.noise(x + z, y + z);
  }
}

const BackgroundSwirl = () => {
  const canvasARef = useRef(null);
  const canvasBRef = useRef(null);
  const animationRef = useRef(null);
  //   const dataRef = useRef({});

  useEffect(() => {
    // Constants
    const particleCount = 700;
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const rangeY = 100;
    const baseTTL = 50;
    const rangeTTL = 150;
    const baseSpeed = 0.1;
    const rangeSpeed = 2;
    const baseRadius = 1;
    const rangeRadius = 4;
    const baseHue = 220;
    const rangeHue = 100;
    const noiseSteps = 8;
    const xOff = 0.00125;
    const yOff = 0.00125;
    const zOff = 0.0005;
    const backgroundColor = "hsl(226, 59%, 15%)";
    const TAU = Math.PI * 2;

    // Helper functions
    const rand = (n) => Math.random() * n;
    const randRange = (n) => n - rand(2 * n);
    const fadeInOut = (t, m) => {
      let hm = 0.5 * m;
      return Math.abs(((t + hm) % m) - hm) / hm;
    };
    const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;
    const cos = Math.cos;
    const sin = Math.sin;

    const canvasA = canvasARef.current;
    const canvasB = canvasBRef.current;
    const ctxA = canvasA.getContext("2d");
    const ctxB = canvasB.getContext("2d");

    let tick = 0;
    let simplex = new SimplexNoise();
    let particleProps = new Float32Array(particlePropsLength);
    let center = [];

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvasA.width = width;
      canvasA.height = height;
      canvasB.width = width;
      canvasB.height = height;

      center[0] = 0.5 * width;
      center[1] = 0.5 * height;
    };

    const initParticle = (i) => {
      const x = rand(canvasA.width);
      const y = center[1] + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);

      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };

    const checkBounds = (x, y) => {
      return x > canvasA.width || x < 0 || y > canvasA.height || y < 0;
    };

    const drawParticle = (x, y, x2, y2, life, ttl, radius, hue) => {
      ctxA.save();
      ctxA.lineCap = "round";
      ctxA.lineWidth = radius;
      ctxA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctxA.beginPath();
      ctxA.moveTo(x, y);
      ctxA.lineTo(x2, y2);
      ctxA.stroke();
      ctxA.closePath();
      ctxA.restore();
    };

    const updateParticle = (i) => {
      const i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i,
        i9 = 8 + i;

      const x = particleProps[i];
      const y = particleProps[i2];
      const n =
        simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
      const vx = lerp(particleProps[i3], cos(n), 0.5);
      const vy = lerp(particleProps[i4], sin(n), 0.5);
      const life = particleProps[i5];
      const ttl = particleProps[i6];
      const speed = particleProps[i7];
      const x2 = x + vx * speed;
      const y2 = y + vy * speed;
      const radius = particleProps[i8];
      const hue = particleProps[i9];

      drawParticle(x, y, x2, y2, life, ttl, radius, hue);

      particleProps[i] = x2;
      particleProps[i2] = y2;
      particleProps[i3] = vx;
      particleProps[i4] = vy;
      particleProps[i5] = life + 1;

      if (checkBounds(x, y) || life > ttl) {
        initParticle(i);
      }
    };

    const drawParticles = () => {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
      }
    };

    const renderGlow = () => {
      ctxB.save();
      ctxB.filter = "blur(8px) brightness(200%)";
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();

      ctxB.save();
      ctxB.filter = "blur(4px) brightness(200%)";
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    };

    const renderToScreen = () => {
      ctxB.save();
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    };

    const draw = () => {
      tick++;

      ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, canvasA.width, canvasA.height);

      drawParticles();
      renderGlow();
      renderToScreen();

      animationRef.current = requestAnimationFrame(draw);
    };

    const initParticles = () => {
      tick = 0;
      simplex = new SimplexNoise();
      particleProps = new Float32Array(particlePropsLength);

      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
      }
    };

    const setup = () => {
      resize();
      initParticles();
      draw();
    };

    const handleResize = () => {
      resize();
    };

    // Initialize
    setup();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <canvas ref={canvasBRef} />
      <canvas ref={canvasARef} />
    </div>
  );
};

export default BackgroundSwirl;
