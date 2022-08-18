// https://calculator.swiftutors.com/truncated-cone-volume-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const volumeofTruncatedConeRadio = document.getElementById('volumeofTruncatedConeRadio');
const smallerRadiusoftheConeRadio = document.getElementById('smallerRadiusoftheConeRadio');
const biggerRadiusoftheConeRadio = document.getElementById('biggerRadiusoftheConeRadio');
const heightoftheConeRadio = document.getElementById('heightoftheConeRadio');

let volumeofTruncatedCone;
const PI = Math.PI;
let smallerRadiusoftheCone = v1;
let biggerRadiusoftheCone = v2;
let heightoftheCone = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

volumeofTruncatedConeRadio.addEventListener('click', function() {
  variable1.textContent = '(r1) Smaller Radius of the Cone';
  variable2.textContent = '(r2) Bigger Radius of the Cone';
  variable3.textContent = '(h) Height of the Cone';
  smallerRadiusoftheCone = v1;
  biggerRadiusoftheCone = v2;
  heightoftheCone = v3;
  result.textContent = '';
});

smallerRadiusoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Truncated Cone';
  variable2.textContent = '(r2) Bigger Radius of the Cone';
  variable3.textContent = '(h) Height of the Cone';
  volumeofTruncatedCone = v1;
  biggerRadiusoftheCone = v2;
  heightoftheCone = v3;
  result.textContent = '';
});

biggerRadiusoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Truncated Cone';
  variable2.textContent = '(r1) Smaller Radius of the Cone';
  variable3.textContent = '(h) Height of the Cone';
  volumeofTruncatedCone = v1;
  smallerRadiusoftheCone = v2;
  heightoftheCone = v3;
  result.textContent = '';
});

heightoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Truncated Cone';
  variable2.textContent = '(r1) Smaller Radius of the Cone';
  variable3.textContent = '(r2) Bigger Radius of the Cone';
  volumeofTruncatedCone = v1;
  smallerRadiusoftheCone = v2;
  biggerRadiusoftheCone = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(volumeofTruncatedConeRadio.checked)
    result.textContent = `Volume of Truncated Cone = ${computeVolumeofTruncatedCone().toFixed(2)}`;

  else if(smallerRadiusoftheConeRadio.checked)
    result.textContent = `Smaller Radius of the Cone = ${computeSmallerRadiusoftheCone().toFixed(2)}`;

  else if(biggerRadiusoftheConeRadio.checked)
    result.textContent = `Bigger Radius of the Cone = ${computeBiggerRadiusoftheCone().toFixed(2)}`;

  else if(heightoftheConeRadio.checked)
    result.textContent = `Height of the Cone = ${computeHeightoftheCone().toFixed(2)}`;
})

// calculation

function computeVolumeofTruncatedCone() {
  return (1 / 3) * PI * Number(heightoftheCone.value) * (Math.pow(Number(smallerRadiusoftheCone.value), 2) + Math.pow(Number(biggerRadiusoftheCone.value), 2) + (Number(smallerRadiusoftheCone.value) * Number(biggerRadiusoftheCone.value)));
}

function computeSmallerRadiusoftheCone() {
  return (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value)) + Number(salvageValue.value);
}

function computeBiggerRadiusoftheCone() {
  return Number(assetValue.value) - (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value));
}

function computeHeightoftheCone() {
  return (Number(volumeofTruncatedCone.value) * 3) / (PI * (Math.pow(Number(smallerRadiusoftheCone.value), 2) + Math.pow(Number(biggerRadiusoftheCone.value), 2) + (Number(smallerRadiusoftheCone.value) * Number(biggerRadiusoftheCone.value))));
}