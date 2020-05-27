class NegociacaoController{
    // Essa classe tem atributos que são reponsaveis por recevber informações da tela 
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    // = new |já cria um a instancia 
    private _negociacoes = new Negociacoes();
    //passar informações usasse aspas simples
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    // Mensagem
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        // a # declara o ID 
        // Input Element 
        // Capturando o objeto na tela 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor= $('#valor');
        this._negociacoesView.update(this._negociacoes);

    }

    adiciona(event: Event){

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, '-')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())     
        );
        
        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update('Negociação adicionada com sucesso!');
        
        /*
        Teste utilizados durante a codificação 
        // quebra o encapsulamento quando declara length = 0;
        this._negociacoes.retornaArray().length = 0;
        console.log(this._negociacoes.retornaArray());
                                      // forEach -Percorrendo atraves do array de Negociacao 
        this._negociacoes.retornaArray().forEach(negociacao=>{
            console.log(negociacao.data);
           console.log(negociacao.quantidade);
          console.log(negociacao.valor);
        });
        */
    }

    


}