const value = document.getElementById('value');
const convertBtn = document.getElementById('convertBtn');
const answer = document.getElementById('answer');

const unitLevel = {
  nm: 1,
  mm: 2,
  cm: 3,
  m: 4,
  km: 5,
};

const unitValue = {
  nm: 1,
  mm: 1000000,
  cm: 10,
  m: 100,
  km: 1000,
};

convertBtn.onclick = () => {
  const unitI = document.getElementById('unitI').value;
  const unitO = document.getElementById('unitO').value;
  const val = Number(value.value);

  let result = 0;

  if (!val) return;

  if (val === 69) convertBtn.textContent = '420';
  else convertBtn.textContent = 'Convert';

  if (unitLevel[unitI] === unitLevel[unitO])
    return (answer.textContent = `= ${val}${unitO}`);

  if (unitLevel[unitI] < unitLevel[unitO]) {
    let dividor = 1;

    for (let i = unitLevel[unitI]; i < unitLevel[unitO]; i++) {
      dividor *=
        unitValue[
          Object.keys(unitLevel).find((key) => unitLevel[key] === i + 1)
        ];
    }

    result = val / dividor;
  }

  if (unitLevel[unitI] > unitLevel[unitO]) {
    let multiplier = 1;

    for (let i = unitLevel[unitO]; i < unitLevel[unitI]; i++) {
      multiplier *=
        unitValue[Object.keys(unitLevel).find((key) => unitLevel[key] === i + 1)];
    }

    result = val * multiplier;
  }

  return (answer.textContent = `= ${result}${unitO}`);
  /* return (answer.textContent = `= ${Number(
    BigInt(result).toString()
    )}${unitO}`);*/
};
