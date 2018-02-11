export class Bike {
    public nameBike    : string;
    public motor       : string; 
    public ciclos      : string;
    public marchas     : string;
    public transmision : string;
    public cilindrada  : string;
    public valor       : string;
    constructor (nameBike:string, motor:string, ciclos:string, marchas:string, transmision:string, cilindrada:string,valor:string)
    {
        this.nameBike    = nameBike;
        this.motor       = motor;
        this.ciclos      = ciclos;
        this.marchas     = marchas;
        this.transmision = transmision;
        this.cilindrada  = cilindrada;
        this.valor       = valor;
    }
}