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
### Backend:

Node.js

Express

Stripe API

dotenv

CORS

### Frontend:

HTML5

CSS3 (Tailwind CSS)

JavaScript (Vanilla JS)

### Serviços Externos:

Stripe (pagamento com cartão)

Firebase Firestore (armazenamento de pedidos)

WhatsApp (fluxo de pagamento via PIX)

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

##  Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o **Manu Ateliê** em ambiente local para desenvolvimento ou testes.

---

##  Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes do Node)
- Uma conta no **Stripe**
- Uma conta no **Firebase**

---

##  1. Clonar o Repositório

Abra o terminal e execute:

```
git clone https://github.com/Kaio-0708/atelie_manu.git
 ```

cd atelie_manu
 2. Instalar as Dependências
Instale as dependências do projeto:


```
npm install
```
 3. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com base no exemplo:

```
cp .env.example .env
```
Preencha o arquivo .env com suas credenciais:

env
```
STRIPE_SECRET_KEY=sk_test_sua_chave_aqui
```
Importante:
Nunca versionar o arquivo .env. Ele contém informações sensíveis.

 4. Configurar o Firebase
 5. Iniciar o Backend
O backend está localizado na pasta api.

No terminal, execute:
```
node api/server.js
```
O servidor será iniciado em:
```
http://localhost:3000
```
 6. Executar o Frontend
O frontend é composto por arquivos estáticos dentro da pasta public.

Você pode executar de duas formas:

 Opção 1 — Abrir diretamente no navegador
text

/public/index.html
 Opção 2 — Usar Live Server (recomendado)
Instale a extensão Live Server no VS Code

Clique com o botão direito em index.html

Selecione Open with Live Server

 7. Fluxo de Teste Recomendado

- Adicione produtos ao carrinho

- Selecione tamanho

- Escolha forma de entrega

- Finalize o pedido

- Teste:

- Pagamento com cartão

- Pagamento via PIX (WhatsApp)

- Verifique o pedido salvo no Firebase

## Autor

Kaio Vitor - [GitHub](https://github.com/Kaio-0708)
