import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/ingestion.ts', 'src/subscription.ts'],
	clean: true,
	minify: true,
	format: ['esm'],
	outDir: 'dist',
})
