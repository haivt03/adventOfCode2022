import { maxCalories, splitFileContent, totalMaxCalories } from "./day1/day1";

const filePath = './src/day1/inputDay1.txt';
function main(){
    const blocks = splitFileContent(filePath);
    const maxCalo = maxCalories(blocks);
    const total = totalMaxCalories(blocks)
    console.log(maxCalo);
    console.log(total);
    
}
main()