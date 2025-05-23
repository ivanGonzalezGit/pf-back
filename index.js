import { numeroAleatorio, generarPedido } from './funciones.js';
import { combos } from './combos.js';
import { Pedido } from './pedidos.js';

var contadorDePedidos=1;
    
    function recepcionDePedidos()
    {
        var retardo = numeroAleatorio(1, 10)*1000;
        setTimeout(()=>
            {
                pedido();
                // llamo recursivamente a la función recepcionDePedidos, para que cada nuevo llamado se renueve la espera aleatoria.
                // Si utilizo setInterval, toma el primer valor de espera aleatorio y repite siempre el mismo.
                recepcionDePedidos(); 
            }, numeroAleatorio(1, 10)*1000);    
    }

    recepcionDePedidos();

    function pedido()
    {
        new Promise((res, rej)=>
            {
                let nuevoPedido = new Pedido(`pedido N° ${contadorDePedidos}`, generarPedido(combos), combos);
                contadorDePedidos+=1;
                res(nuevoPedido);
            })
        .then((res)=>{res.imprimirPedido();
                        return res;})
        .then((res)=>{
            setTimeout(()=>{
                res.setEstado('preparando...');
                res.imprimirEstado()                
                }, 1000);
                return res;})
        .then((res) => { 
// uso la propagación por que Math.max espera una lista de argumentos para encontrar el número máximo, entonces desestructuro el array que me devuelve .map con el operador ...
// se intenta simular que cada preparación de combo tarda distintos tiempos y se toma el que más tarda como tope de retardo
            let esperaPedido = Math.max(...res.contenido.map(e => e.espera));
            //tengo que hacer una nueva promesa para que setTimeout espere, por que sino ejecuta las funciones y no espera.
            return new Promise(resolve => {
                setTimeout(() => {
                    res.setEstado('Finalizado');
                    res.imprimirEstado();
                    resolve(res); // Ahora SÍ espera
                    }, esperaPedido);
                });
            })
            .then((res) => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        res.setEstado('Entregado');
                        res.imprimirEstado();
                        resolve();
                    }, 1000);
                });
            });
    }
