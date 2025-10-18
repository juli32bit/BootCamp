import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const dist = 'dist';

// Remove dist directory if it exists and create a new one
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist);

console.log('Building Chrome extension...');

// Copy essential files
const filesToCopy = ['manifest.json'];
for (const file of filesToCopy) {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(dist, file));
    console.log(`✓ Copied ${file}`);
  }
}

// Copy directories
const directoriesToCopy = ['src', 'icons'];
for (const dir of directoriesToCopy) {
  if (fs.existsSync(dir)) {
    fs.cpSync(dir, path.join(dist, dir), { recursive: true });
    console.log(`✓ Copied ${dir}/ directory`);
  }
}

// Generate ZIP file
const zipPath = path.join(dist, 'extension.zip');
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`✓ Created extension.zip (${archive.pointer()} bytes)`);
  console.log('Build completed successfully!');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add all files from dist except the zip itself
archive.directory(dist, false, (entry) => {
  return entry.name !== 'extension.zip' ? entry : false;
});

await archive.finalize();