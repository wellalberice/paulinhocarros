# Paulinho Carros - Website

Site informacional de vendas de veículos para pessoa física. Desenvolvido com **React 19 + Tailwind CSS 4**.

## 🎯 Características

- ✅ Hero section com imagem de fundo cinematic
- ✅ Carrossel de fotos com navegação e zoom
- ✅ Informações técnicas dos carros (modelo, ano, chassis)
- ✅ Preços destacados em ouro
- ✅ Links diretos para WhatsApp e telefone
- ✅ Design Premium Automotive Minimalism
- ✅ Responsivo para mobile e desktop
- ✅ Tipografia elegante (Playfair Display + Lato)

## 🚀 Como Usar

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview
```

### Editar Dados dos Carros

Abra o arquivo `client/src/pages/Home.tsx` e atualize:

#### 1. Números de contato (linhas 54-55):

```typescript
const WHATSAPP_NUMBER = "5511999999999"; // Seu número WhatsApp
const PHONE_NUMBER = "(11) 9 9999-9999"; // Seu telefone
```

#### 2. Dados dos carros (array `CARS_DATA`):

```typescript
const CARS_DATA = [
  {
    id: 1,
    name: "Nome do Carro",
    year: "2022",
    model: "Modelo Completo",
    chassis: "Número do chassis",
    price: "R$ 000.000",
    mainImage: "https://url-da-imagem.com/carro.jpg",
    gallery: [
      "https://url-da-imagem-1.com/carro.jpg",
      "https://url-da-imagem-2.com/carro.jpg",
      "https://url-da-imagem-3.com/carro.jpg"
    ],
    description: "Descrição detalhada do veículo"
  },
  // ... adicione mais carros aqui
];
```

## 🎨 Design

- **Paleta de Cores**: Navy Blue (#1e3a5f), Gold (#d4af37), Branco
- **Tipografia**: Playfair Display (títulos), Lato (corpo)
- **Estilo**: Premium Automotive Minimalism
- **Foco**: Elegância através da simplicidade

## 📁 Estrutura do Projeto

```
client/
  ├── src/
  │   ├── pages/
  │   │   ├── Home.tsx          ← Página principal (edite aqui!)
  │   │   └── NotFound.tsx
  │   ├── components/           ← Componentes reutilizáveis
  │   ├── contexts/             ← React contexts
  │   ├── lib/                  ← Utilitários
  │   ├── index.css             ← Estilos globais
  │   ├── App.tsx               ← Rotas
  │   └── main.tsx              ← Entry point
  ├── public/
  │   ├── favicon.ico
  │   └── robots.txt
  └── index.html
server/                          ← Backend (placeholder)
shared/                          ← Tipos compartilhados
```

## 🔧 Tecnologias

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Build**: Vite
- **Routing**: Wouter
- **Icons**: Lucide React

## 📝 Próximos Passos

1. Substitua os números de telefone/WhatsApp
2. Adicione as fotos reais dos carros
3. Atualize as informações técnicas de cada veículo
4. Customize as cores se necessário (editar `client/src/index.css`)
5. Publique no Manus ou implante em seu servidor

## 📞 Suporte

Para dúvidas sobre o código, consulte a documentação do [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com) e [shadcn/ui](https://ui.shadcn.com).

---

**Desenvolvido com ❤️ para Paulinho Carros**
