# portfolio-garcia

Portfólio de Arthur Garcia — arquiteto de software e integrações.

Site estático em [Astro](https://astro.build), sem framework de UI: cada interação
(mapa de integrações, rastreio de indicador, checklist de vistoria, simulador de rate limit)
é um componente `.astro` com um `<script>` pequeno.

```bash
nvm use            # Node 22 (.nvmrc)
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + astro build -> dist/
```

## Estrutura

```
src/
  data/site.ts            conteúdo: projetos, trajetória, contato
  layouts/Base.astro      cabeçalho, rodapé/contato, tema, SEO
  layouts/CaseStudy.astro estrutura dos estudos de caso
  components/             mapa, cards de projeto, princípios e os demos interativos
  pages/                  home, /projetos/{visuai,checkhome,quintoandar}, 404
public/media/             capas, quadros e vídeos (gerados a partir dos vídeos dos produtos)
```

## Deploy

`.github/workflows/deploy.yml` publica no GitHub Pages a cada push na `main`
(Settings → Pages → Source: GitHub Actions). Para domínio próprio, troque `SITE` e
use `BASE=/` no workflow.
