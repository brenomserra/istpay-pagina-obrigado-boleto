// Download automático de boleto ao recarregar a página

window.onload = function() {
    const tagLink = document.createElement('a');
    //Inserir o caminho para o donwload do boleto (consumir dados do Back)
   tagLink.href = '#';
   tagLink.download = 'Boleto-Teste.pdf';
   // Função que faz com que o elemento criado na const tagLink seja clicado, de maneira "invisível", para que possa baixar o boleto
   tagLink.click();
    //Impedir o loop de download do arquivo
   tagLink.remove();
};