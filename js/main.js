// Download automático de boleto ao recarregar a página

window.onload = function() {
    const link = document.createElement('a');
    //Inserir o caminho para o donwload do boleto
    link.href = '';
    link.download = '';
    link.click();
    //Impedir loop de download de arquivo
    link.remove();
};