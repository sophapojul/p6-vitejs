# Base de code du projet P6 - Parcours Front-end

## Démarrer le projet

npm install.

### Déploiement sur github-pages

git remote add p6-vitejs https://github.com/sophapojul/p6-vitejs.git
git branch -M main
git push -u p6-vitejs main
nvim vite.config.js
import { defineConfig } from 'vite';

        export default defineConfig({
        base: '/p6-vitejs/'
        });

npm run build
git add -f dist
git commit -am "adding dist"
git subtree push --prefix dist p6-vitejs gh-pages
go to github repo p6-vitejs and settings then pages
go to Source Branch gh-pages then save
go to Actions wait workflow's end
the site is published at https://sophapojul.github.io/p6-vitejs/
