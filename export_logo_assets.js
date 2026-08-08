const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const logoSvg = `
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="400" fill="#050505"/>
  <defs>
    <linearGradient id="ncMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="40%" stop-color="#E2E8F0" />
      <stop offset="70%" stop-color="#94A3B8" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>
  </defs>

  <!-- Hexagon Frame -->
  <polygon points="150,40 230,86 230,178 150,224 70,178 70,86" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>
  <path d="M 150,40 L 230,86 M 70,178 L 150,224" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>

  <!-- Monogram N & C -->
  <path d="M 102,88 L 120,88 L 120,176 L 102,176 Z" fill="url(#ncMetalGrad)"/>
  <path d="M 120,88 L 144,88 L 180,160 L 180,176 L 156,176 L 120,104 Z" fill="url(#ncMetalGrad)"/>
  <path d="M 180,88 L 198,88 L 198,140 L 180,140 Z" fill="url(#ncMetalGrad)"/>

  <path d="M 198,104 C 198,72 150,68 126,76 L 120,60 C 154,52 218,60 218,104 L 198,104 Z" fill="url(#ncMetalGrad)"/>
  <path d="M 198,160 C 198,192 150,196 126,188 L 120,204 C 154,212 218,204 218,160 L 198,160 Z" fill="url(#ncMetalGrad)"/>

  <!-- Typography -->
  <text x="280" y="160" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="900" font-size="96" fill="#FFFFFF" letter-spacing="12">NC <tspan fill="#FFD400">MASTER</tspan></text>
</svg>
`;

const monogramOnlySvg = `
<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="600" fill="#050505"/>
  <defs>
    <linearGradient id="ncMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="40%" stop-color="#E2E8F0" />
      <stop offset="70%" stop-color="#94A3B8" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>
  </defs>

  <g transform="translate(150, 150) scale(1.5)">
    <polygon points="100,10 180,56 180,148 100,194 20,148 20,56" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>
    <path d="M 100,10 L 180,56 M 20,148 L 100,194" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>

    <path d="M 52,58 L 70,58 L 70,146 L 52,146 Z" fill="url(#ncMetalGrad)"/>
    <path d="M 70,58 L 94,58 L 130,130 L 130,146 L 106,146 L 70,74 Z" fill="url(#ncMetalGrad)"/>
    <path d="M 130,58 L 148,58 L 148,110 L 130,110 Z" fill="url(#ncMetalGrad)"/>

    <path d="M 148,74 C 148,42 100,38 76,46 L 70,30 C 104,22 168,30 168,74 L 148,74 Z" fill="url(#ncMetalGrad)"/>
    <path d="M 148,130 C 148,162 100,166 76,158 L 70,174 C 104,182 168,174 168,130 L 148,130 Z" fill="url(#ncMetalGrad)"/>
  </g>
</svg>
`;

const roundMonogramSvg = `
<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ncMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="40%" stop-color="#E2E8F0" />
      <stop offset="70%" stop-color="#94A3B8" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>
  </defs>

  <!-- Circular Outer Frame in Metallic Platinum Silver -->
  <circle cx="300" cy="300" r="290" fill="#050505" stroke="#E2E8F0" stroke-width="6"/>
  <circle cx="300" cy="300" r="275" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="8 6"/>

  <g transform="translate(150, 150) scale(1.5)">
    <polygon points="100,10 180,56 180,148 100,194 20,148 20,56" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>
    <path d="M 100,10 L 180,56 M 20,148 L 100,194" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>

    <path d="M 52,58 L 70,58 L 70,146 L 52,146 Z" fill="url(#ncMetalGrad)"/>
    <path d="M 70,58 L 94,58 L 130,130 L 130,146 L 106,146 L 70,74 Z" fill="url(#ncMetalGrad)"/>
    <path d="M 130,58 L 148,58 L 148,110 L 130,110 Z" fill="url(#ncMetalGrad)"/>

    <path d="M 148,74 C 148,42 100,38 76,46 L 70,30 C 104,22 168,30 168,74 L 148,74 Z" fill="url(#ncMetalGrad)"/>
    <path d="M 148,130 C 148,162 100,166 76,158 L 70,174 C 104,182 168,174 168,130 L 148,130 Z" fill="url(#ncMetalGrad)"/>
  </g>
</svg>
`;

async function generateAssets() {
  const logoDir = path.join(__dirname, "public", "logo");
  if (!fs.existsSync(logoDir)) {
    fs.mkdirSync(logoDir, { recursive: true });
  }

  const logoBuffer = Buffer.from(logoSvg);
  const monoBuffer = Buffer.from(monogramOnlySvg);
  const roundBuffer = Buffer.from(roundMonogramSvg);

  await sharp(logoBuffer).png().toFile(path.join(logoDir, "nc-master-logo.png"));
  await sharp(logoBuffer).jpeg({ quality: 95 }).toFile(path.join(logoDir, "nc-master-logo.jpg"));
  await sharp(monoBuffer).png().toFile(path.join(logoDir, "nc-master-monogram.png"));
  await sharp(monoBuffer).jpeg({ quality: 95 }).toFile(path.join(logoDir, "nc-master-monogram.jpg"));
  await sharp(roundBuffer).png().toFile(path.join(logoDir, "nc-master-logo-round.png"));
  await sharp(roundBuffer).jpeg({ quality: 95 }).toFile(path.join(logoDir, "nc-master-logo-round.jpg"));

  console.log("All logo assets updated in public/logo/");
}

generateAssets().catch(console.error);
