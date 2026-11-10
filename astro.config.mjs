// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';

// SITE e BASE vêm do ambiente para o mesmo código servir em domínio próprio
// (BASE=/) e no GitHub Pages de projeto (BASE=/portfolio-garcia).
export default defineConfig({
  site: process.env.SITE ?? 'https://garcia235.github.io',
  base: process.env.BASE ?? '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
