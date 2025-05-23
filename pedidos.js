
export class Pedido
{
	estado="Recibido";

	constructor(n, c, comboGenesis)
	{
		this.nombre=n;
		this.contenido=c;
		this.original=comboGenesis;
		this.precio=this.contenido.reduce((ac, e)=>ac+e.precio,0);
	}

	setEstado(es)
	{
		this.estado=es;
	}

	imprimirEstado()
	{
		console.log("");
		console.log(this.nombre);
		console.log(this.estado);
		console.log("");
	}

	ordenarCombos()
	{
		let arrContabilizado=[];
		let acumulador=0;

		for(let i=1;i<7;i++)
		{
			for (let j=0; j<this.contenido.length; j++) 
			{
				if(this.contenido[j].id===i)
				{
					acumulador++;
				}
			}
			let auxElemento = [i, acumulador];
			arrContabilizado.push(auxElemento);
			acumulador=0;
		}
		return arrContabilizado;
	}

	imprimirPedido()
	{
		let salida = this.ordenarCombos();
		console.log("");
		console.log(this.nombre);
		console.log(this.estado);
	
		for(let i = 0; i < salida.length; i++)
		{
			let idCombo = salida[i][0];
			let cantidad = salida[i][1];
	
			if (cantidad > 0) {
				let combo = this.original.find(c => c.id === idCombo);
				if (combo) {
					console.log(`${cantidad} Combo ${combo.nombre} $${combo.precio * cantidad}`);
				}
			}
		}
	
		console.log();
		console.log("Total: $" + this.precio);
		console.log("");
	}
}
