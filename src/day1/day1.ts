import * as fs from 'fs';

export function splitFileContent(filePath: string): string[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const blocks = fileContent.split(/\n\s*\n/);
    return blocks;
}

export function maxCalories(items: string[]): number {
    const sums = items.map(block => {
        const numbers = block.split('\n').map(line => parseInt(line.trim()));
        return numbers.reduce((sum, num) => sum + num, 0);
    });

    return Math.max(...sums);
}

export function totalMaxCalories(items: string[]): number {
    const sums = items.map(block => {
        const numbers = block.split('\n').map(line => parseInt(line.trim()));
        return numbers.reduce((sum, num) => sum + num, 0);
    });

    const sortedSums = sums.sort((a, b) => b - a);

    const max1 = sortedSums[0] || 0;
    const max2 = sortedSums[1] || 0;
    const max3 = sortedSums[2] || 0;

    const total = max1 + max2 + max3;
    return total;
}
