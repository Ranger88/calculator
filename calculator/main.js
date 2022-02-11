//income ipulse
const incomeSalary = document.getElementById('income-salary'),
     incomeFreelance = document.getElementById('income-freelance'),
     incomeExtra1 = document.getElementById('income-extra-1'),
     incomeExtra2 = document.getElementById('income-extra-2');
     
     //cost ipulse
const costsFlat = document.getElementById('costs-flat'),
     costsHouseServices = document.getElementById('costs-house-services'),
     costTransport = document.getElementById('costs-transport'),
     costsCredit = document.getElementById('costs-credit');

//total inputs
const totalMonthInput = document.getElementById('total-month'),
     totalDayInput = document.getElementById('total-day'),
     totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

//money box
const MoneyBoxRange = document.getElementById('money-box-range'),
      accumulationInput = document.getElementById('accumulation');
      spend = document.getElementById('spend');

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.input');
for(input of inputs) {
    input.addEventListener('input',() => {
        countingAvailableMoney(); 
        calculationProcents();  
    })
}

const StrToNum = str => str.value ? parseInt(str.value) : 0;


const countingAvailableMoney = () => {
   const totalPerMonth = StrToNum(incomeSalary) + StrToNum(incomeFreelance) + StrToNum(incomeExtra1) + StrToNum(incomeExtra2);
   const totalCosts = StrToNum(costsFlat) + StrToNum(costsCredit) + StrToNum(costsHouseServices) + StrToNum(costTransport);
   
  totalMonth = totalPerMonth - totalCosts; 
  totalMonthInput.value = totalMonth;
}

MoneyBoxRange.addEventListener('input', e => {
    const totalPrecentsE1 = document.getElementById('total-precents');
    totalPrecents = e.target.value;
    totalPrecentsE1.innerHTML = totalPrecents;
    calculationProcents();

})
const calculationProcents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationInput.value = accumulation;
    spend.value = totalMonth - accumulation;
    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;
    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
}



