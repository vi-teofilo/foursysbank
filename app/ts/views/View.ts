
abstract class View<T>{
    // abstract vc não pode intanciar só herdar 
    // a classe recebe um parameto 
    //protected- acessado do mesmo pacote
    private _elemento: JQuery;

    constructor(seletor:string){
        //selector- id do atributo de tela 
        // ele recebe uma string e armazena dentro de um elemento de tela 
        this._elemento  = $(seletor);
    }

    update(model: T): void{
        this._elemento.html(this.template(model));
    }

    
    abstract template(model: T): string;

}