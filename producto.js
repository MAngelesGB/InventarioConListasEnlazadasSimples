class Producto{
    
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre; 
        this.cantidad = cantidad; 
        this.costo = costo; 
        this.next = null; 
    }

    getCodigo()
    {
        return this.codigo; 
    }

    getNombre()
    {
        return this.nombre; 
    }

    getCantidad()
    {
        return this.cantidad; 
    }

    getCosto()
    {
        return this.costo;    
    }

    info()
    {
        return `<p>.- Producto: ${this.getNombre()} Cantidad: ${this.getCantidad()} Costo: ${this.getCosto()}$ </p>`; 
    }
}