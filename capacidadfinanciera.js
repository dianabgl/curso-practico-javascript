const salary1 = 6000;
const spending1 = 4000;

function PorcentajeCantidad(cantidad, porcentaje){
    return (porcentaje * cantidad) / 100;
}

function Strategy50_30_20(salary){
    const salary50_30_20 = {
          gastosBasicos: PorcentajeCantidad(salary, 50),
          gastosPersonales: PorcentajeCantidad(salary, 30),
          ahorro: PorcentajeCantidad(salary, 20)
    };
    return salary50_30_20;
}

function capacidadEndeudamiento(salary, spending){
    const capacidadDeuda = (salary - spending) * 0.35;
    return capacidadDeuda;
}

function capacidadDePago(salary, spending){
    const available = salary - spending;
    const contingencies = available * 0.2;
    const availableAfterContingencies = available - contingencies;

    const eventual = availableAfterContingencies * 0.1;
    const availableAfterEventual = availableAfterContingencies - eventual;

    const capacidadPago =  (availableAfterEventual / salary) *100;
    return capacidadPago.toFixed(2);
}

function rangoCapacidadDePago(percentagePaymentCapacity){
    if (percentagePaymentCapacity < 10){
        return "Baja";
    }
    if (percentagePaymentCapacity >= 10 && percentagePaymentCapacity <=30){
        return "Media";
    }
    if (percentagePaymentCapacity > 30){
        return "Alta";
    }
}

function porcentajesComparacionSalarios(personSalary){
    
    personSalary = Number(personSalary);
    const salariosPais = colombia.map(
        function(persona) {
            return persona.salary;
        }
    );

    salariosPais.push(
        personSalary,
    );

    const salariosPaisSorted = salariosPais.sort(
        function (salaryA, salaryB){
             return salaryA - salaryB;
        }
    );

    const personsSameSalary = salariosPaisSorted.filter( function(personPaisSalary){ 
        return personPaisSalary === personSalary;
    });

    const vPercentageEqual = (personsSameSalary.length - 1) * 100 / (salariosPaisSorted.length - 1);
    const vPercentageLower = (salariosPaisSorted.indexOf(personSalary) * 100) / (salariosPaisSorted.length - 1);
    const vPercentageHigher = ((salariosPaisSorted.length -personsSameSalary.length - salariosPaisSorted.indexOf(personSalary)) * 100) / (salariosPaisSorted.length - 1);


    const percentagesSalaryComparison = {
        percentageEqual: vPercentageEqual,
        percentageHigher: vPercentageHigher,
        percentageLower: vPercentageLower
    };

    return percentagesSalaryComparison;
}

function onClickButtonCapacidadFinanciera(){
    const inputMonthlySalary = document.getElementById("InputMonthlySalary");
    const monthlySalary = inputMonthlySalary.value;

    const inputMonthlySpendings = document.getElementById("InputMonthlySpendings");
    const monthlySpendings = inputMonthlySpendings.value;

    const porcentajes503020 =  Strategy50_30_20(monthlySalary);
    pBasicExpenses.innerText = porcentajes503020.gastosBasicos;
    pPersonalExpenses.innerText = porcentajes503020.gastosPersonales;
    pAhorro.innerText = porcentajes503020.ahorro;

    const indebtedness = capacidadEndeudamiento(monthlySalary, monthlySpendings);
    pIndebtednessCapacity.innerText = indebtedness;

    const payment = capacidadDePago(monthlySalary, monthlySpendings);
    pPaymentCapacity.innerText = payment + "% " + rangoCapacidadDePago(payment);

    const salaryComparison = porcentajesComparacionSalarios(monthlySalary);
    pHigherSalary.innerText = salaryComparison.percentageHigher + "%";
    pEqualSalary.innerText = salaryComparison.percentageEqual + "%";
    pLowerSalary.innerText = salaryComparison.percentageLower + "%";
}