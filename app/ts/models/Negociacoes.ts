class Negociacoes{
                        // uma Array de Negociacao, pegando o objeto 
    private _negociacoes: Negociacao[] = [];


    adiciona(negociacao: Negociacao){
        // Push-Responsavel por armazenar o vetor 
        this._negociacoes.push(negociacao);

    }
    // TS não verifica metodo e sim atributos.
    //tipamos o metodo como Array. 
    retornaArray(): Negociacao[] {
        
        return [].concat(this._negociacoes);
    }

}