const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const rules = [
  { match: /(?<!dark:)(bg-white)/g, replace: 'bg-white dark:bg-[#020617]' },
  { match: /(?<!dark:)(text-slate-900)/g, replace: 'text-slate-900 dark:text-white' },
  { match: /(?<!dark:)(text-slate-800)/g, replace: 'text-slate-800 dark:text-slate-200' },
  { match: /(?<!dark:)(text-slate-700)/g, replace: 'text-slate-700 dark:text-slate-300' },
  { match: /(?<!dark:)(text-slate-600)/g, replace: 'text-slate-600 dark:text-slate-400' },
  { match: /(?<!dark:)(text-slate-500)/g, replace: 'text-slate-500 dark:text-slate-400' },
  { match: /(?<!dark:)(bg-slate-50(?!\/))/g, replace: 'bg-slate-50 dark:bg-slate-900' },
  { match: /(?<!dark:)(bg-slate-100(?!\/))/g, replace: 'bg-slate-100 dark:bg-slate-800/50' },
  { match: /(?<!dark:)(border-slate-100(?!\/))/g, replace: 'border-slate-100 dark:border-slate-800/50' },
  { match: /(?<!dark:)(border-slate-200(?!\/))/g, replace: 'border-slate-200 dark:border-slate-800' },
];

for (const file of files) {
  if (file === 'Navbar.tsx' || file === 'YouNityLogo.tsx' || file === 'ThemeProvider.tsx') continue; // Already handled
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const rule of rules) {
    // Only replace if it doesn't already have the dark mode equivalent
    content = content.replace(rule.match, (match) => {
      // Very basic check: just apply the replacement
      return rule.replace;
    });
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}
