import { readFile, writeFile } from 'fs/promises'; // Use fs/promises for ESM
import { primoConfig } from './primo.config.js';

async function updatePackageJson() {
    try {
        const packageData = await readFile('package.json', 'utf8');
        const packageJson = JSON.parse(packageData);

        // Conditionally add dependencies based on the imported config object
        if (primoConfig.provider && primoConfig.dependencies) {
            // Loop through the dependencies object and add each key-value pair to packageJson.dependencies
            for (const dependency in primoConfig.dependencies) {
                const version = primoConfig.dependencies[dependency];
                packageJson.dependencies[dependency] = version;
            }
        }

        // Write the updated package.json back to the file
        await writeFile('package.json', JSON.stringify(packageJson, null, 2), 'utf8');
    } catch (err) {
        console.error('Error reading/parsing/writing package.json:', err);
    }
}
updatePackageJson();
