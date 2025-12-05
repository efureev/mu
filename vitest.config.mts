import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    include: ['tests/**/*.ts'],
    exclude: ['node_modules', 'dist', 'tests/utils.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
    },
  },
})
