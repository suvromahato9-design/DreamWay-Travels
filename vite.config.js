import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' + HashRouter = works on any GitHub Pages path without 404 fallbacks
export default defineConfig({ base: './', plugins: [react()] })
