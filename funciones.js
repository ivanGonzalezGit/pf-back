export function numeroAleatorio(inicio, tope)
{
    return inicio + Math.floor(Math.random() * tope);
}

export function generarPedido(comb)
{
    let cantidadCombos = numeroAleatorio(1, 6);
    let nuevoPedido = [];

    for(let i=0;i<cantidadCombos;i++)
    {
        nuevoPedido.push(comb[numeroAleatorio(0, 6)]);
    }
    return nuevoPedido;
} 
