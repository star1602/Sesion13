function CalcularDinero(){

    let dinero = prompt("Ingrese un monto de dinero aleatorio");
    let Persona1 = (dinero*30/100);
    let Persona2 = (dinero*20/100);
    let Persona3 = (dinero*50/100);

    alert(`Al socio A le corresponde S/${Persona1}, mientras que al socio B le pertenece S/${Persona2}, y por último al socio C se le otorgaría S/${Persona3}`);

}

CalcularDinero()