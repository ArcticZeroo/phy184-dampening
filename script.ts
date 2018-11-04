function capacitorEnergy(capacitance: number, voltage: number) {
    return Math.pow(voltage, 2) * capacitance / 2;
}

const L = 3.59E-2;
const initialV = 70;
const comparisonV = 50;
const totalCycles = 11;
const totalMs = 0.8;

const angularFrequency = (2 * Math.PI * totalCycles) / (totalMs / 1000);

const C = 1 / ( Math.pow(angularFrequency, 2) * L );

const initialEnergy = capacitorEnergy(C, initialV);

const k = Math.log(initialV / comparisonV) / totalMs;

function a() {
    const desiredCycles = 15;

    const msForDesiredCycles = desiredCycles * (totalMs / totalCycles);

    const energyAtDesiredCycles = initialEnergy * Math.exp(-2 * k * msForDesiredCycles);

    return energyAtDesiredCycles;
}

function b() {
    const desiredDissipation = 93.0 ;

    const remainingPercentMultiplier = (100 - desiredDissipation) / 100;
    const remainingEnergy = initialEnergy * remainingPercentMultiplier;

    const t = Math.log((C * Math.pow(initialV, 2)) / (2 * remainingEnergy)) / (2 * k);

    return t;
}

console.log('Part A:', a());
console.log('Part B:', b());