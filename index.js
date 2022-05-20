// essa função é uma função criadora de ação
// ela devolve um objeto JSON
// uma ação é um objeto JSON

const criarContrato = (nome, taxa) => {
    return {
        type: "CRIAR_CONTRATO",
        payload: {
            nome, taxa
        }

    }    
}

const cancelarContrato = (nome) => {
    return {
        type: "CANCELAR_CONTRATO",
        payload: { nome }
    }
}

const solicitarCashback = (nome, valor) => {
    return {
        type: "SOLICITAR_CASHBACK",
        payload: {
            nome, valor
        }
    }
}

//FUNÇÃO REDUCER

const historicoDePedidosDeCashbackReducer = (historicoDePedidosDeCashbackAtual = [], acao) => {
    if(acao.type === "SOLICITAR_CASHBACK"){
        return [
            ...historicoDePedidosDeCashbackAtual,
            acao.payload
        ]
    }
    return historicoDePedidosDeCashbackAtual
}

const caixaReducer = (dinheiroEmCaixa = 0, acao) => {
    if(acao.type === "SOLICITAR_CASHBACK"){
        dinheiroEmCaixa = dinheiroEmCaixa - acao.payload.valor;
    } else if(acao.type === "CRIAR_CONTRATO"){
        dinheiroEmCaixa = dinheiroEmCaixa + acao.payload.taxa;
    }
    return dinheiroEmCaixa
}