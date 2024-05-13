const fs = require('fs').promises;
const path = require('path');

async function convertToTS(inputFile, outputFile, wordType) {
  const filePath = path.resolve(__dirname, inputFile);
  const outputPath = path.resolve(__dirname, outputFile);

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const words = data.split(/\r?\n/)
                    .map(word => word.trim())
                    .filter(word => word.length === 5);
    const tsContent = `const ${wordType} = ${JSON.stringify(words, null, 2)};\nexport default ${wordType};\n`;

    await fs.writeFile(outputPath, tsContent);
    console.log('File converted successfully', outputPath);
  } catch (err) {
    console.error('Error processing file:', err);
  }
}

convertToTS('../assets/wordle-La.txt', '../assets/possible-words.ts', 'possibleWords');
convertToTS('../assets/wordle-Ta.txt', '../assets/utility-words.ts', 'utilityWords');
