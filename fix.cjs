const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.push('./index.html');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/Emerging Technologies\./g, 'Emerging Technologies');
  
  // Remove full stops in specific files
  if (file.includes('courses.ts')) {
    newContent = newContent.replace(/([a-zA-Z])\."/g, '$1"');
  }
  if (file.includes('ProjectOverview.tsx')) {
    newContent = newContent.replace(/([a-zA-Z])\.",/g, '$1",');
  }
  if (file.includes('AboutSection.tsx')) {
    newContent = newContent.replace(/([a-zA-Z])\.",/g, '$1",');
  }
  if (file.includes('MissionSection.tsx')) {
    newContent = newContent.replace(/([a-zA-Z])\.",/g, '$1",');
  }
  if (file.includes('EnrollmentModal.tsx') || file.includes('Contact.tsx')) {
    // Remove "live endpoint." -> "live endpoint"
    newContent = newContent.replace(/live endpoint\."/g, 'live endpoint"');
    newContent = newContent.replace(/emerging technologies\./g, 'emerging technologies');
    newContent = newContent.replace(/clear\./g, 'clear');
  }
  if (file.includes('About.tsx')) {
    newContent = newContent.replace(/([a-zA-Z])\.",/g, '$1",');
    newContent = newContent.replace(/impact\./g, 'impact');
  }

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Fixed dots in:', file);
  }
});

// Swap the Team Section and Contact Cards in Contact.tsx
const contactPath = './src/pages/Contact.tsx';
let contactContent = fs.readFileSync(contactPath, 'utf8');

const cardsStart = contactContent.indexOf('<div className="mt-12 grid gap-8 lg:grid-cols-2">');
const teamStart = contactContent.indexOf('{/* Team Section */}');
const teamEnd = contactContent.indexOf('</section>');

if (cardsStart !== -1 && teamStart !== -1 && cardsStart < teamStart) {
  const cardsCode = contactContent.substring(cardsStart, teamStart);
  const teamCode = contactContent.substring(teamStart, teamEnd);
  
  const newContactContent = contactContent.substring(0, cardsStart) + teamCode + cardsCode + contactContent.substring(teamEnd);
  fs.writeFileSync(contactPath, newContactContent, 'utf8');
  console.log('Swapped sections in Contact.tsx');
}
