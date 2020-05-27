class NegociacoesView extends View<Negociacoes>{

    /*
    private _elemento: Element;

    constructor(seletor:string){
        //selector- id do atributo de tela 
        // ele recebe uma string e armazena dentro de um elemento de tela 
        this._elemento  = document.querySelector(seletor);
    }*/

    /*
    update(model: Negociacoes): void{
        //innerHTML renderiza o template 
        this._elemento.innerHTML = this.template(model);
    }
    */

    template(model: Negociacoes): string {
 
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
    
                <tbody>
                ${model.retornaArray().map(negociacao =>
                    `<tr>
                        <td>${negociacao.data.getUTCDate()}/${negociacao.data.getUTCMonth() + 1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>                        
                    `).join('')} 


                </tbody>
    
                <tfoot>
                </tfoot>
            </table>               
            `
    }



}