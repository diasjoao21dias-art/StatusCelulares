# Status Celulares — site pronto para Render

Site estático premium, responsivo e em português, com identidade visual preta/dourada inspirada no perfil fornecido. Inclui catálogo filtrável, seções de smartphones/acessórios/assistência, menu mobile, animações suaves, SEO, JSON-LD, favicon e imagem OG 1200×630.

## Publicar no Render
1. Extraia este ZIP.
2. Envie os arquivos para um repositório GitHub.
3. No Render, escolha **New + → Static Site** e conecte o repositório.
4. Deixe **Build Command** vazio e configure **Publish Directory** como `.`.
5. Publique. `render.yaml` também oferece configuração de Static Site Blueprint.

## Ajustes obrigatórios antes de divulgar
- **WhatsApp:** o print não mostra o número de contato de forma legível. Para evitar inventar, `script.js` tem `WHATSAPP_NUMBER` vazio. Preencha com código do país + DDD + número, só dígitos (exemplo de formato: `5562999999999`). Até configurar, os botões levam à página oficial de links `https://beacons.ai/statuscelulares`.
- **Domínio:** substitua `https://SEU-DOMINIO.com.br/` no `index.html` pelo domínio real para canonical, Open Graph e JSON-LD.
- **Catálogo:** os cartões são categorias demonstrativas, não estoque confirmado. Atualize com os modelos, fotos, marcas e preços reais da loja.
- **Endereço:** foi transcrito do print como Rua José Borges, Qd. 23, Lt. 09, Sala 5, Centro, Caldas Novas - GO, CEP 75680-051; confirme a grafia/número antes de publicar.
- **Serviços:** não foram inventados preços, prazos de reparo, garantias ou horários.

## Arquivos
- `index.html` — estrutura, conteúdo, SEO e dados estruturados
- `styles.css` — identidade visual e layout responsivo
- `script.js` — menu mobile, filtros, animações e configuração WhatsApp
- `assets/favicon.svg` — favicon
- `assets/og-image.png` — imagem de compartilhamento 1200×630
- `render.yaml` — configuração de deploy
