import fs from 'fs';

const content = 'This is the content that will be written to the new file.';
const filePath = 'jaiminfile.txt';

fs.writeFileSync(filePath, content);

console.log(`File '${filePath}' created successfully!`);

