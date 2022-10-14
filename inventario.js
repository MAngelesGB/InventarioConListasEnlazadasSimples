class Inventario{

    constructor(){
        this.primero = null; 
    }

    agregar(producto)
    {
        if (this.primero === null)
        {
            this.primero = producto;
        }
        else{
            let temp = this.primero;
            while (temp.next !== null)
            { 
                temp = temp.next;

            }
            temp.next = producto;
        }
    }
        

    buscar(codigo)
    {
        let temp = this.primero;
    
        while (temp !== null)
        { 
            if(temp.codigo === codigo)
            {
                return temp; 
            }
            temp = temp.next;
        }
        return null; 
    }

    eliminar(codigo)
    {
        let primerValor  = 0; 
        let ultimoValor = this.inventario.length - 1;
        let valorMedio = 0; 
        
        while(primerValor <= ultimoValor)
        {
            valorMedio = Math.floor((primerValor+ultimoValor)/2);

            if(this.inventario[valorMedio].getCodigo() === codigo)
            {
                for(let j = valorMedio; j <= ultimoValor; j++)
                {   
                    this.inventario[j]= this.inventario[j+1];
                }
                this.inventario.pop();
            }
            else if(this.inventario[valorMedio].getCodigo() > codigo)
            { 
                ultimoValor = valorMedio -1; 
            }
            else
            {
                primerValor = valorMedio +1;
            }

        }
    }

    listar()
    {
        let listaProductos = ''; 
        let temp = this.primero;

        while(temp !== null){
            listaProductos += temp.info();
            temp = temp.next;
        }  

        return listaProductos; 
    }

    listarInverso()
    {
        let listaInverso = ''; 
        let temp = this.primero;

        while(temp !== null){
            listaInverso =  temp.info() +" "+ listaInverso;
            temp = temp.next;
        }  

        return listaInverso; 
    }
}

 













