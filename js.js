function checkNumber(number) {
  if (number == 2) {
    alert(number + ' là số nguyên tố')
  }
  else {
    for (i = 2; i < number; i++) {
      let value = number % i;
      if (value == 0) {
        return false
      }
      else {
        return true
      }
    }
  }
}


if (checkNumber) {
  alert(number + ' là số nguyên tố')
}
else {
  alert(number + ' không phải là số nguyên tố')
}

