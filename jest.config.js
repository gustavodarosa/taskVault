module.exports = {
  testEnvironment: 'node', // Define o ambiente de teste como Node.js
  testMatch: ['**/*.test.ts'], // Padrão para encontrar arquivos de teste
  transform: {
    '^.+\\.ts$': 'ts-jest', // Usa ts-jest para transformar arquivos TypeScript
  },
};