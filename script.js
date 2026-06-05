function enviarPedido() {

  const carne = parseInt(document.getElementById('carne').value) || 0;
  const frango = parseInt(document.getElementById('frango').value) || 0;

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;
  const bairro = document.getElementById('bairro').value;
  const referencia = document.getElementById('referencia').value;
  const obs = document.getElementById('obs').value;

  let total = (carne * 14) + (frango * 12);

  const pagamento = document.querySelector('input[name="pagamento"]:checked').value;

  if (pagamento === "Cartão") {
    total += 2;
  }

  const mensagem =
`🥞 NOVO PEDIDO - PANQUECAS DA VILA

Nome: ${nome}

Telefone: ${telefone}

Endereço: ${endereco}

Bairro: ${bairro}

Referência: ${referencia}

Pedido:
${carne}x Panqueca de Carne
${frango}x Panqueca de Frango

Pagamento: ${pagamento}

Observações:
${obs}

Total: R$ ${total.toFixed(2)}
`;

  const numero = "5521965323676";

  const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}
