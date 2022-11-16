function CantidadEntradas(){

    let EntradaGeneral = +prompt ("Ingresar cuántas entradas generales se vendieron");
    let EntradaMayor65 = +prompt ("Ingresar cuántas entradas a personas mayores de 65 se vendieron");
    let EntradaMenores = +prompt ("Ingresar cuántas entradas a personas menores se vendieron");

    let EntradaG = 150 
    let EntradaM = 50 
    let EntradaMe = 80
    
    alert(`La ganancia en Entradas generales es S/ ${EntradaGeneral*EntradaG}, la ganancia en entradas para gente mayor a 65 es S/ ${EntradaMayor65*EntradaM}, la ganancia en entradas para gente menor es S/ ${EntradaMenores*EntradaMe}, por consiguiente, el total que se recaudo es S/ ${(EntradaGeneral*EntradaG)+(EntradaMayor65*EntradaM)+(EntradaMenores*EntradaMe)}`);
    
    }
    
    CantidadEntradas()