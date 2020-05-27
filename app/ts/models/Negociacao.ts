    class Negociacao {
        // nunca mexer nos arquivos js, eles são modificados automaticamente 
        // declaração das propriedades da classe 
        // any tipo implicito
        // no tsconfig.json se vc coloca a tipagem de "noImpictAny"- vc é obrigado a declarar o tipo da variavel
        
         
        // contrutor e atributos 
        // convenção esse _ ele significa que é imutavel 
        //this = referencia ao Objeto 
        constructor(private _data: Date, 
            private _quantidade: number, 
            private _valor: number){ }

        get data(){
            return this._data;
        }

        get quantidade(){
            return this._quantidade;
        }
        
        get valor(){
            return this._valor;
        }

        get volume(){
            return this._quantidade * this._valor;
        }
        
        

    }