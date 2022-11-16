function CalcularIgv(){

    let Precio = +prompt("Ingrese un monto");
    let IGV = (Precio * 19/100);
    let Total = (Precio + IGV);

    alert(`El igv es: S/${IGV} y el precio final es: S/${Total}`)
    }

  CalcularIgv()