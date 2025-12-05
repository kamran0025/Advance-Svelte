# Advance-Svelte

A comprehensive SvelteKit 5 demo project showcasing advanced features, routing patterns, state management, and modern web development practices.

## 🚀 Features

### 📁 File & Folder Structure
- **User Data Display** - Browse and view user profiles with detailed information
- **Server-Side Rendering (SSR)** - Data fetching with `+page.server.ts` and `+layout.server.ts`
- **Dynamic Routes** - User detail pages with `[id]` parameter
- **Custom Error Pages** - Styled error handling with `+error.svelte`
- **Navigation Loading States** - Visual feedback during page transitions

### 🔀 Advanced Routing Patterns
- **Dynamic Routes** - `[id]` for recipe details
- **Rest Parameters** - `[...slug]` for multi-segment paths
- **Optional Parameters** - `[[optional]]` for flexible URLs
- **Route Matchers** - Custom parameter validation with `fruit.ts` matcher
- **Route Groups** - `(marketing)` for layout organization without URL impact
- **Recipe Listing** - Card-based UI with responsive grid layout

### 🔄 Lifecycle Methods
- **onMount** - Component initialization
- **onDestroy** - Cleanup operations
- **beforeNavigate** - Navigation interception and confirmation
- **$effect** - Reactive side effects
- **$effect.pre** - Pre-update effects with proper state tracking

### 🏪 State Management
- **Custom Stores** - Writable stores with methods
- **Counter Example** - Increment, decrement, and reset functionality
- **Reactive UI** - Beautiful gradient design with Tailwind CSS

### 🎨 Context API
- **Context Provider** - Shared state across components
- **Type-Safe Context** - TypeScript integration
- **Component Communication** - Parent-child data flow

### 🎯 UI/UX Features
- **Tailwind CSS v4** - Modern utility-first styling
- **Responsive Design** - Mobile-first approach
- **Gradient Backgrounds** - `bg-linear-to-*` gradients
- **Interactive Components** - Hover effects, transitions, and animations
- **Sidebar Navigation** - Collapsible sidebar with smooth animations
- **Loading Indicators** - Navigation progress feedback

## 🛠️ Tech Stack

- **SvelteKit 5** - Full-stack framework with Svelte 5 runes
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **ESLint & Prettier** - Code quality and formatting

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/kamran0025/Advance-Svelte.git
cd Advance-Svelte

# Install dependencies
npm install
# or
pnpm install
```

## 🚀 Development

Start the development server:

```bash
npm run dev
# or
pnpm dev

# Open in browser
npm run dev -- --open
```

The app will be available at `http://localhost:5173`

## 🏗️ Building

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Root layout with sidebar
│   ├── +page.svelte            # Home page
│   ├── files/                  # File & data management
│   │   ├── +layout.svelte      # Files layout
│   │   ├── +layout.server.ts   # Layout data fetching
│   │   ├── +page.svelte        # User listing
│   │   ├── +page.server.ts     # Page data fetching
│   │   ├── +error.svelte       # Error page
│   │   └── [id]/               # User detail pages
│   ├── routing/                # Routing examples
│   │   ├── (marketing)/        # Route group (layout-only)
│   │   ├── [[optional]]/       # Optional parameters
│   │   ├── [...slug]/          # Rest parameters
│   │   ├── [id]/               # Dynamic routes
│   │   └── fruits/
│   │       └── [page=fruit]/   # Route matchers
│   ├── lcm/                    # Lifecycle methods demo
│   ├── store/                  # State management demo
│   └── context/                # Context API demo
├── components/
│   ├── Sidebar.svelte          # Navigation sidebar
│   ├── UserCard.svelte         # User data card
│   └── RecipeCard.svelte       # Recipe card component
├── store/
│   └── store.ts                # Custom writable stores
├── params/
│   └── fruit.ts                # Route parameter matcher
└── types.ts                    # TypeScript type definitions
```

## 🎓 Key Concepts Demonstrated

### Svelte 5 Runes
- `$props()` - Component props
- `$state()` - Reactive state
- `$derived()` - Derived values
- `$effect()` - Side effects
- `$effect.pre()` - Pre-update effects

### SvelteKit Features
- Server-side rendering (SSR)
- Data loading with load functions
- Progressive enhancement
- Error handling
- Navigation lifecycle
- Route matchers
- Route groups

### Best Practices
- Type-safe development with TypeScript
- Component composition
- Separation of concerns
- Responsive design
- Accessibility considerations
- Code organization

## 📚 Route Examples

| Route | Description |
|-------|-------------|
| `/` | Home page with welcome message |
| `/files` | User listing with cards |
| `/files/11` | User detail page |
| `/routing` | Recipe listing |
| `/routing/11` | Recipe detail (dynamic) |
| `/routing/a/b/c` | Rest parameters example |
| `/routing/en/home` | Optional parameter (language) |
| `/routing/fruits/apple` | Route matcher (only apple/orange) |
| `/routing/about` | Marketing layout example |
| `/lcm` | Lifecycle methods demo |
| `/store` | State management with counter |
| `/context` | Context API example |

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [SvelteKit Documentation](https://kit.svelte.dev)
- [Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

---

Built with ❤️ using SvelteKit 5 and Tailwind CSS
