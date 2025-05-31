// Nome do arquivo: script.js
// Autor: [Seu Nome]
// Data: [Data de Criação]
// Descrição: [Breve descrição do propósito do arquivo]

// Modo estrito para evitar erros comuns
'use strict';

// Função principal
(function () {
    // Inicialização
    console.log('Script inicializado!');

    // Variáveis globais
    const appName = 'Bea O.E. Website';
    const version = '1.0.0';

    // Funções utilitárias
    function saudacao(nome) {
        return `Olá, ${nome}! Bem-vindo ao ${appName} versão ${version}.`;
    }

    // Exemplo de execução
    console.log(saudacao('Usuário'));
})();