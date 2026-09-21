# No Limite da Resposta

Jogo local de perguntas e eliminação para até 10 participantes ou equipes. É uma PWA instalável, funciona offline depois do primeiro acesso e foi criada com identidade original.

## Recursos

- Modos individual e por equipes.
- Perguntas abertas e de múltipla escolha.
- Respostas avaliadas automaticamente: texto digitado nas abertas e alternativa clicada nas questões de múltipla escolha.
- Palco 2D com personagens ilustrados, plataformas, alçapões e animação de queda.
- Oito personagens selecionáveis no modo individual; qualquer personagem pode ser repetido e cada participante é identificado pelo nome.
- Seis emblemas coloridos selecionáveis no modo equipes, com o nome da equipe dentro do emblema e a mesma animação de alçapão.
- Sons de início, contagem regressiva, seleção, acerto, erro e vitória.
- Controle geral para ligar ou desligar os sons.
- Cronômetro, eliminação animada, salvamento automático e tela do campeão.

## Rodar no computador

É necessário ter Node.js 20 ou mais recente.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal. Para gerar a versão final, use `npm run build`.

## Publicar no GitHub Pages

1. Crie um repositório vazio no GitHub.
2. Envie todos os arquivos deste projeto para a branch `main`.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **GitHub Actions**.
5. Abra a aba **Actions** e aguarde o processo “Publicar no GitHub Pages”.

Cada novo envio à branch `main` publicará a versão mais recente automaticamente.

## Instalar como aplicativo

Abra o endereço publicado no Chrome ou Edge e escolha **Instalar aplicativo** no menu do navegador. No iPhone/iPad, use **Compartilhar → Adicionar à Tela de Início**.

## Perguntas

O banco fica salvo somente no aparelho. Na tela **Banco de perguntas**, escolha entre resposta aberta e múltipla escolha antes de adicionar cada questão. Também é possível excluir, exportar e importar um arquivo JSON. Faça uma exportação para manter uma cópia de segurança.

O importador reconhece automaticamente três formatos: o formato completo exportado pelo próprio aplicativo, o formato compacto `{ "p", "a", "c" }` e o formato `{ "q", "options", "correct" }`. Nos dois formatos compactos, `c` ou `correct` é o índice da alternativa correta, começando em zero.

## Identidade

O projeto é inspirado em jogos de perguntas e eliminação, sem usar nome, logotipo, músicas, cenário ou materiais oficiais de programas de televisão.
