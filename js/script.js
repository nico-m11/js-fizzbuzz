var list = document.getElementById('lista');
for (var i = 1; i <= 100; i++) {

  if (i % 15 === 0)  {
    listaLi = "FizzBuzz";
  } else if (i % 5 === 0) {
    listaLi = "Buzz";
  }else if (i % 3 === 0)  {
    listaLi = "Fizz"
  }else if ((i % 3 > 0) || ( i % 5 > 0)) {
   listaLi = i;
  }
  document.getElementById('lista').innerHTML += '<li>' + listaLi +'</li>';
}
