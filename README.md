# Portfólio — Victor Hugo Aureliano Coltro

Site pessoal estático em HTML, CSS e JavaScript, compatível com GitHub Pages e sem dependências de execução ou etapa de build.

## Abrir localmente

Abra `index.html` no navegador ou use **Open with Live Server** no VS Code. Para testar a cópia de e-mail, use localhost ou HTTPS; o navegador pode restringir a área de transferência quando a página é aberta como arquivo.

## Páginas e funcionalidades

- `index.html`: apresentação, nove projetos com filtros por categoria, formação, competências e contato.
- `curriculo.html`: currículo com links selecionados e botão para imprimir ou salvar como PDF pelo navegador.
- `css/style.css`: identidade visual, layouts responsivos, impressão e preferência de movimento reduzido.
- `css/resume.css`: apresentação do currículo e impressão A4.
- `js/script.js`: menu acessível, filtros, cópia de e-mail, navegação ativa e impressão.
- `img/optimized/`: versões JPEG reduzidas das imagens originais; os PNGs foram preservados.

O conteúdo principal continua acessível sem JavaScript. Links externos abrem em nova aba na página principal. Não há formulário com envio simulado: o contato usa e-mail, LinkedIn e GitHub.

## Atualizar conteúdo

Edite os textos e projetos diretamente em `index.html`. Cada projeto possui `data-category` (`aplicacoes`, `apis` ou `interfaces`). Ao adicionar projetos, atualize também a contagem inicial e o número no filtro Todos. Atualize `curriculo.html` junto com o portfólio para manter as informações consistentes.

Os dados foram mantidos a partir do portfólio original. A formação, o telefone e os cursos foram atualizados com o currículo fornecido pelo titular. Não foram inventadas datas de graduação, experiência de emprego ou proficiência. As descrições dos projetos são apresentações concisas; não representam auditoria de seus repositórios ou garantias de disponibilidade das APIs externas.

## Publicar

Mantenha a configuração existente do GitHub Pages. Depois de revisar as mudanças, faça commit e push pelo fluxo habitual do repositório. O diretório é estático e usa caminhos relativos, funcionando sob `/portifolio/`. Se o domínio mudar, atualize a URL canônica e os metadados Open Graph em `index.html`, além dos links no currículo.

## Conferência recomendada

Confira as larguras de 360 px, 768 px e desktop, navegação por teclado, menu mobile (inclusive Escape), filtros, detalhes dos projetos, links externos e impressão do currículo. No diálogo de impressão, selecione A4 e desative cabeçalhos e rodapés do navegador para um resultado mais limpo.

## Ampliação do conteúdo

Informações acadêmicas e contato atualizados a partir do currículo fornecido. Repositórios VT-IMPORTS, API--A-melhor-rede-social e app-vendas-mobile consultados via API pública do GitHub em 18/09/2026. As tecnologias foram conferidas nos manifests e, quando disponível, no README; não foi feita auditoria funcional desses sistemas. Os painéis gráficos dos destaques são composições tipográficas, não capturas das aplicações. A busca combina texto e categoria, ignora acentos e inclui estado vazio. Nenhuma chamada externa é necessária para exibir os projetos.

## Identidade visual

A camada `css/theme.css` define a identidade escura para telas: grafite, marfim e champagne. Carregada após os estilos estruturais e limitada a `screen`, preserva a impressão clara do currículo e da página.
