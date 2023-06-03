//ELEMENTOS
const Funcion = document.getElementById("txtFuncion");
const XA = document.getElementById("txtXA");
const XB = document.getElementById("txtXB");
const pasos = document.getElementById("txtPasos");

const btnCalcular = document.getElementById("btnCalcular");


//IMPRIMIR
const pConfirmacion = document.getElementById("confirmacion");
const pResult = document.getElementById("ResultXR");


/////////////

btnCalcular.addEventListener('click', Calcular)






function Calcular(){
 
 let Ecu = Funcion.value;

 let a = parseFloat(XA.value);
 let thisA = a;
 let b = parseFloat(XB.value);
 let thisB = b;
 let Iter = pasos.value;

 let XR, FXA, FXR;
 let multi;

   
    if(!isNaN(a) && !isNaN(b) && !isNaN(Iter) && Ecu.length != 0){
        for(let i = 0; i < Iter; i++){
        
        
            XR = (b + a)/2;
            console.log(XR);
    
                let newFuncionXA = Ecu.replace(/[x]/ig, a);
                console.log(newFuncionXA);
                FXA = eval(newFuncionXA);
                console.log(FXA); 
    
            
                let newFuncionXR = Ecu.replace(/[x]/ig, XR);
                console.log(newFuncionXR);
                FXR = eval(newFuncionXR);
                console.log(FXR); 
    
            multi = FXA * FXR;
    
    
                if(multi < 0){
                    b = XR;
                }
                else{
                    a = XR;
                }
            
        }
    
        let micanvas = document.getElementById('grafica').getContext("2d");
        var char = new Chart(micanvas,{
            type:"line",
            data:{
                labels:["A","Valor Aprox","B"],
                datasets:[
                    {
                      label:"Mi Grafica",
                      backgroundColor:"rgb(0,0,0)",
                      borderColor:"rgb(0,255,0)",
                      data:[thisA,XR,thisB]  
                    }
                ]
            }
        })
        
        pResult.innerText = "La aproximacion al valor mas cercano es: " + XR;
        pConfirmacion.innerText = "Calculo realizado";
        pConfirmacion.style = "color:green"
        alert('Calculo realizado');
    }
    else{
        alert('No se puede realizar el calculo');
        pConfirmacion.style = "color:red"
        pConfirmacion.innerText = "No se puede realizar el calculo"
        pResult.innerText = "";

    }



}

