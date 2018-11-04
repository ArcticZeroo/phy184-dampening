function capacitorEnergy(capacitance, voltage) {
    return Math.pow(voltage, 2) * capacitance / 2;
}
var L = 3.59E-2;
var initialV = 70;
var comparisonV = 50;
var totalCycles = 11;
var totalMs = 0.8;
var angularFrequency = (2 * Math.PI * totalCycles) / (totalMs / 1000);
var C = 1 / (Math.pow(angularFrequency, 2) * L);
var initialEnergy = capacitorEnergy(C, initialV);
var k = Math.log(initialV / comparisonV) / totalMs;
function a() {
    var desiredCycles = 15;
    var msForDesiredCycles = desiredCycles * (totalMs / totalCycles);
    var energyAtDesiredCycles = initialEnergy * Math.exp(-2 * k * msForDesiredCycles);
    return energyAtDesiredCycles;
}
function b() {
    var desiredDissipation = 93.0;
    var remainingPercentMultiplier = (100 - desiredDissipation) / 100;
    var remainingEnergy = initialEnergy * remainingPercentMultiplier;
    var t = Math.log((C * Math.pow(initialV, 2)) / (2 * remainingEnergy)) / (2 * k);
    return t;
}
console.log('Part A:', a());
console.log('Part B:', b());
