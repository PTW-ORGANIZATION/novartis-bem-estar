# Convenções do projeto — Novartis Programa Bem Estar

Site estático em HTML + CSS + JavaScript puro (sem frameworks/build step), gerado a partir do Figma
"Projeto FHC0087 - RFP - Novartis Website Saúde Novartis" (fileKey `fQ2WrMFxmMjDxqvu7c4eFH`, página "Desktop").

## Estrutura de pastas
```
/index.html              → Home (já pronta, use como referência de padrão)
/pages/<nome>.html        → demais páginas
/partials/header.html     → navbar (injetado via JS)
/partials/footer.html     → footer (injetado via JS)
/partials/accessibility-widget.html → widget fixo de acessibilidade (injetado via JS)
/css/base.css             → tokens, reset, .container (maxwidth 1140px)
/css/header.css           → estilos do header
/css/footer.css           → estilos do footer
/css/components.css       → botões, tags, widget de acessibilidade (compartilhados)
/css/home.css             → estilos específicos da Home
/css/<nome>.css           → crie um arquivo por página nova, com estilos específicos dela
/js/include.js            → injeta header/footer/a11y via fetch (já pronto, não mexer)
/js/carousel.js           → lógica de carrossel da Home (não mexer, crie novo arquivo se a página tiver carrossel próprio)
/assets/images/           → imagens (fotos, pngs)
/assets/icons/            → ícones svg
```

## Regras obrigatórias
1. **NÃO adicionar atributo `alt` nas tags `<img>`** (será preenchido depois pelo usuário). Deixe `<img src="...">` sem `alt`.
2. **Reaproveite os componentes existentes**: toda página inclui o header e footer via:
   ```html
   <div data-include="header"></div>
   ... conteúdo da página em <main> ...
   <div data-include="footer"></div>
   <div data-include="a11y"></div>
   <script src="/js/include.js"></script>
   ```
   Nunca duplique o HTML do navbar/footer dentro da página.
3. **Container com maxwidth**: envolva o conteúdo de cada seção com `<section class="container">` ou `<div class="container">` (classe já definida em `base.css`, max-width 1140px, centralizado, padding lateral). Para seções com fundo colorido de largura total, use um wrapper full-width por fora e `.container` por dentro (ver `.specialties` / `.campaigns` em `home.css` como exemplo).
4. **Todos os caminhos são absolutos a partir da raiz** (`/css/...`, `/js/...`, `/assets/...`, `/pages/...`), nunca relativos — funciona em `/index.html` e em `/pages/*.html` igualmente.
5. **Tipografia**: fonte `Nunito Sans` (Google Fonts, já carregada no `<head>` do index — copie o mesmo bloco `<link>` de fontes).
6. **Cores (tokens já definidos em `base.css`, use as CSS vars)**:
   - `--color-blue-dark: #002068` (títulos)
   - `--color-blue: #0460a9` (links, botões, destaques)
   - `--color-blue-light: #bce5fd`
   - `--color-blue-bg: #f3f5fb` (fundos claros)
   - `--color-gray-text: #5b616e` (parágrafos)
7. **Componentes repetidos dentro da própria página**: se você notar o mesmo padrão visual repetido 3+ vezes (cards, listas de acordeão, etc.), gere o HTML com uma estrutura de classe reutilizável (ex.: `.faq-item`, `.card`) em vez de estilos inline repetidos — mas isso ainda é HTML estático, não é necessário criar componentização em JS a menos que haja interação (ex.: accordion abre/fecha).
8. **Imagens/ícones**: baixe cada asset do Figma (`curl` na URL retornada por `get_design_context`) para `/assets/images` ou `/assets/icons` com nome descritivo em kebab-case, e referencie localmente. As URLs do Figma expiram em ~7 dias — nunca deixe a URL remota do Figma no HTML final.
9. Antes de criar uma imagem/ícone nova, **verifique se já existe um asset equivalente** em `/assets/images` ou `/assets/icons` (logo, ícones de header/footer, setas, etc.) e reaproveite em vez de baixar duplicado.
10. Siga o skill `figma-design-to-code`: chame sempre `get_design_context` (nunca invente markup a partir só do screenshot).

## Como rodar localmente
```
cd "/Users/victor.lima/Documents/COMPANIES/NOVARTIS/Site Novartis - BEM ESTAR/codigo"
python3 -m http.server 8090
```
Depois abrir `http://localhost:8090/index.html`. (A porta 8080 está ocupada por outro serviço nesta máquina — use 8090.)
