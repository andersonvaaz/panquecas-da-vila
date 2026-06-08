let carne = 0;
let frango = 0;

function alterarQtd(tipo, valor){

if(tipo === "carne"){
carne += valor;
if(carne < 0) carne = 0;
document.getElementById("qtd-carne").innerText = carne;
}

if(tipo === "frango"){
frango += valor;
if(frango < 0) frango = 0;
document.getElementById("qtd-frango").innerText = frango;
}

atualizarTotal();

}

function atualizarTotal(){

let total = (carne * 14) + (frango * 12);

const pagamento = document.querySelector('input[name="pagamento"]:checked').value;

if(pagamento === "Cartão"){
total += 2;
}

let resumo = "";

if(carne > 0){
resumo += `🥞 Carne: ${carne}x = R$ ${carne * 14}<br>`;
}

if(frango > 0){
resumo += `🥞 Frango: ${frango}x = R$ ${frango * 12}<br>`;
}

if(resumo === ""){
resumo = "Nenhum item selecionado";
}

document.getElementById("resumoPedido").innerHTML = resumo;

document.getElementById("valorTotal").innerText =
`R$ ${total.toFixed(2).replace(".", ",")}`;

}

function enviarPedido(){

if(carne === 0 && frango === 0){
alert("Selecione pelo menos uma panqueca.");
return;
}

const nome = document.getElementById("nome").value;
const telefone = document.getElementById("telefone").value;
const endereco = document.getElementById("endereco").value;
const bairro = document.getElementById("bairro").value;
const referencia = document.getElementById("referencia").value;
const obs = document.getElementById("obs").value;

const pagamento = document.querySelector('input[name="pagamento"]:checked').value;

let total = (carne * 14) + (frango * 12);

if(pagamento === "Cartão"){
total += 2;
}

let pedido = "🥞 *PANQUECAS DA VILA*%0A%0A";

pedido += "📋 *Pedido:*%0A";

if(carne > 0){
pedido += `${carne}x Panqueca de Carne%0A`;
}

if(frango > 0){
pedido += `${frango}x Panqueca de Frango%0A`;
}

pedido += `%0A💰 Total: R$ ${total.toFixed(2)}%0A`;

pedido += `💳 Pagamento: ${pagamento}%0A%0A`;

pedido += `👤 Nome: ${nome}%0A`;

pedido += `📞 Telefone: ${telefone}%0A`;

pedido += `📍 Endereço: ${endereco}%0A`;

pedido += `🏘️ Bairro: ${bairro}%0A`;

pedido += `📌 Referência: ${referencia}%0A%0A`;

pedido += `📝 Observações: ${obs}`;

window.open(
`https://wa.me/5521965323676?text=${pedido}`,
"_blank"
);

}

atualizarTotal();
