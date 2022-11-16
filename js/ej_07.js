function SumaDigitos(){
    let num = prompt("Ingresa un número que contenga 3 cifras, por favor");
    
    var Sumatorio = function(num) {
        
        if(0<num) {
          return (num%10) + Sumatorio(Math.floor(num/10));
        }
        return num;
      };
    
     alert(`La suma de los dígitos elevado al cuadrado es ${(Sumatorio(num))*(Sumatorio(num))}`);
    }

SumaDigitos()    