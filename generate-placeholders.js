const fs = require('fs');
const path = require('path');

// Function to create an SVG placeholder image
function createSvgPlaceholder(width, height, bgColor, textColor, label) {
  const fontSize = Math.floor(Math.min(width, height) / 10);
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text 
      x="50%" 
      y="50%" 
      font-family="Arial, sans-serif" 
      font-size="${fontSize}px" 
      font-weight="bold"
      fill="${textColor}" 
      text-anchor="middle" 
      dominant-baseline="middle"
    >${label}</text>
  </svg>`;
}

// Team member images (square)
const teamMembers = [
  { name: 'alex', label: 'Alex J.' },
  { name: 'maya', label: 'Maya R.' },
  { name: 'david', label: 'David C.' },
  { name: 'sarah', label: 'Sarah W.' },
  { name: 'michael', label: 'Michael O.' },
  { name: 'leila', label: 'Leila P.' }
];

// Gallery images
const galleryImages = [
  { name: 'office-space', label: 'Office Space', width: 800, height: 400, color: '#3b82f6' }, // Wide
  { name: 'team-meeting', label: 'Team Meeting', width: 400, height: 400, color: '#8b5cf6' },
  { name: 'team-event', label: 'Team Event', width: 800, height: 400, color: '#14b8a6' }, // Wide
  { name: 'coding-session', label: 'Coding Session', width: 400, height: 600, color: '#ef4444' }, // Tall
  { name: 'celebration', label: 'Celebration', width: 400, height: 400, color: '#f59e0b' },
  { name: 'design-review', label: 'Design Review', width: 400, height: 400, color: '#10b981' }
];

// About images
const aboutImages = [
  { name: 'team-growth', label: 'Team Growth', width: 800, height: 600, color: '#6366f1' } // 4:3 ratio
];

// Create team member images
const teamDir = path.join(__dirname, 'public', 'images', 'team');
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

teamMembers.forEach(member => {
  const svg = createSvgPlaceholder(400, 400, '#1e293b', '#ffffff', member.label);
  fs.writeFileSync(path.join(teamDir, `${member.name}.jpg`), svg);
  console.log(`Created placeholder for ${member.name}`);
});

// Create gallery images
const galleryDir = path.join(__dirname, 'public', 'images', 'gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

galleryImages.forEach(image => {
  const svg = createSvgPlaceholder(image.width, image.height, image.color, '#ffffff', image.label);
  fs.writeFileSync(path.join(galleryDir, `${image.name}.jpg`), svg);
  console.log(`Created placeholder for ${image.name}`);
});

// Create about images
const aboutDir = path.join(__dirname, 'public', 'images', 'about');
if (!fs.existsSync(aboutDir)) {
  fs.mkdirSync(aboutDir, { recursive: true });
}

aboutImages.forEach(image => {
  const svg = createSvgPlaceholder(image.width, image.height, image.color, '#ffffff', image.label);
  fs.writeFileSync(path.join(aboutDir, `${image.name}.jpg`), svg);
  console.log(`Created placeholder for ${image.name}`);
});

console.log('All placeholder images have been created successfully!'); 