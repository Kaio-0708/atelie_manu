#  Manu Ateliê — Plataforma de Vendas Online

Aplicação web full-stack desenvolvida para um ateliê, com foco em **experiência do usuário**, **pagamentos online** e **integração com serviços externos**.

##  Objetivo do Projeto

Desenvolver uma solução completa de e-commerce sob medida para um pequeno negócio, permitindo:

- Venda online de produtos físicos
- Pagamentos seguros via cartão e PIX
- Comunicação direta com o cliente via WhatsApp
- Persistência confiável de pedidos
- Interface simples, rápida e responsiva

O projeto foi pensado para **uso real em produção**, priorizando **simplicidade**, **performance** e **facilidade de manutenção**.

---

## Visão Técnica & Arquitetura

O sistema adota uma arquitetura **frontend + backend desacoplados**, com integração a serviços externos.

## Fluxo da Aplicação

O fluxo de dados segue uma arquitetura unidirecional e segura:

Frontend (HTML/CSS/JS) → Backend (Node.js + Express) → Stripe / Firebase / WhatsApp

## Tecnologias Utilizadas
Backend
Node.js (Runtime environment)

Express (Framework web)

Stripe API (Processamento de pagamentos)

dotenv (Gerenciamento de variáveis de ambiente)

CORS (Segurança de requisições)

Frontend
HTML5 (Estrutura semântica)

CSS3 (Estilização com Tailwind CSS)

JavaScript (Vanilla JS - sem frameworks)

Serviços Externos
Stripe (Pagamento com cartão de crédito)

Firebase Firestore (Banco de dados NoSQL para pedidos)

WhatsApp (API/Link para fluxo de pagamento via PIX)

## Funcionalidades Implementadas
 Carrinho de Compras
Seleção obrigatória de tamanho antes de adicionar.

Incremento e decremento automático de quantidade.

Remoção de itens do carrinho.

Cálculo dinâmico do subtotal e total.

Geração de identificação única de pedido.

## Entrega

Retirada na loja: Opção sem custo.

Entrega local: Cálculo com taxa fixa.

Entrega externa: Tratativa personalizada redirecionada para o WhatsApp.

## Pagamentos

Cartão de Crédito: Integração segura via Stripe Checkout.

PIX: Fluxo manual com envio automático dos detalhes do pedido para o WhatsApp da loja.

Feedback: Páginas dedicadas de sucesso (obrigado) e cancelamento.

## Persistência de Dados

Salvamento automático de pedidos no Firebase Firestore.

Estrutura de dados organizada por ID do pedido.

Capacidade de recuperação de pedido mesmo após cancelamento no checkout.

## Diferenciais do Projeto

Zero Dependências Pesadas: Feito com JavaScript puro no frontend (Vanilla JS), garantindo alta performance.

Arquitetura Limpa: Código organizado, legível e de fácil manutenção.

Escalável: Estrutura pronta para crescer com novas funcionalidades.

Integração Real: Conectado a serviços líderes de mercado (Stripe e Firebase).

Produção: Sistema validado em uso real.
