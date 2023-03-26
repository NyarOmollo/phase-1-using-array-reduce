const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 31
function getSumAmountOfbatterybatches(batterybatches){
let totalBatteries = 0;

for (const batteryBatch of batteryBatches){
    totalBatteries += batteryBatch. batch;
};
return totalBatteries;
}
const doubledAndSummed = [4,5,3,4,4,6,5].reduce(function(accumulator, element){ return element *2 + accumulator})