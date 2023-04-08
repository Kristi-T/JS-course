function printPowsOf2(number) {
  if (typeof number == "number") {
    ///Вивести у консоль числа які є степенем двійки та не більші заданого значення
    for (let i = 1; i <= number; i++) {
      console.log(Math.pow(i, 2));
    }
  } else {
    console.log("It's incorrect type");
  }
}

printPowsOf2(128);
printPowsOf2(60);
printPowsOf2("302");
printPowsOf2(null);
