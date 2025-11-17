#  Horse Racing Game

An interactive horse racing championship game built with Vue 3, TypeScript, and Vuex.

##  Project Overview

This project simulates a complete horse racing championship with 20 unique horses competing across 6 rounds at varying distances. The application features real-time race animation, dynamic program generation, and comprehensive result tracking.

### Key Features

- **Dynamic Horse Generation**: 20 horses with unique names, colors, and condition scores (1-100)
- **Automated Race Scheduling**: 6 rounds with different track distances (1200m - 2200m)
- **Real-Time Race Animation**: Visual horse movement with progress tracking
- **Interactive UI**: Clean, intuitive interface with responsive design
- **Championship Results**: Complete race history and final podium
- **State Management**: Centralized Vuex store for predictable state updates
- **Component Architecture**: Modular, reusable components organized by feature
- **Performance Optimized**: Efficient rendering and computation strategies

## Live Demo

🚀 **[View Live Application](https://horse-racing-gamee.netlify.app/)**

## Tech Stack

### Core
- **Vue 3.4** - Composition API with `<script setup>` syntax
- **TypeScript 5.3** - Full type safety throughout the application
- **Vuex 4.1** - State management
- **Vite 5** - Build tool and dev server
- **SCSS** - Advanced styling with variables and nesting

### Testing
- **Vitest 3.2** - Unit testing framework
- **Cypress 14** - End-to-end testing
- **@vue/test-utils** - Vue component testing utilities

### Development
- **ESLint** - Code quality
- **TypeScript ESLint** - TypeScript-specific linting
- **Vue TSC** - Type checking for Vue components

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/kemaloncell/Horse-Racing-Game.git
cd horse-racing-game

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`


##  How to Use

1. **Generate Program**: Click the "Generate" button to create a racing schedule with 20 horses and 6 rounds
2. **View Horses**: Browse the complete list of horses with their conditions and colors
3. **Start Championship**: Click "START" to begin the race sequence
4. **Watch Races**: Observe real-time animation as horses compete
5. **Celebration**: After each round, a celebration modal shows the winner
6. **Final Results**: At the end of Round 6, view the championship podium with top 3 finishers

## Testing

### Unit Tests

 The project includes comprehensive unit tests for core utilities:

- **Horse Generation**: Validates correct number, unique IDs, proper conditions, unique colors
- **Schedule Generation**: Ensures 6 rounds, correct distances, proper horse selection
- **Random Selection**: Verifies random distribution and no duplicates per race

```bash
npm test
```

**Test Coverage**: 11 unit tests covering critical game logic

### E2E Tests

End-to-end tests verify the complete user flow:

- Application initialization
- Program generation
- Race start and execution
- Result display
- Full championship completion

```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Run E2E tests
npm run test:e2e
```

**Test Scenarios**: 6 E2E tests covering the entire user journey

##  Architecture Decisions

### Component Organization

Components are organized by feature domain rather than type:
- **panels/**: Components that display tabular data
- **track/**: Race-specific visual components
- **base/**: Reusable UI primitives
- **celebration/**: Modal and overlay components

This structure improves:
- Code discoverability
- Feature isolation
- Scalability for future features

### State Management

Vuex was chosen for centralized state management:
- **Predictable state updates** through actions and mutations
- **Single source of truth** for race data
- **Time-travel debugging** capabilities
- **Clear data flow** from components → actions → mutations → state

### Composables Pattern

Business logic is extracted into composables:
- **Separation of concerns**: Logic separated from UI
- **Reusability**: Share logic across components
- **Testability**: Easier to unit test
- **Type safety**: Full TypeScript support

## Design Patterns

- **Composition API**: Modern Vue 3 patterns with `<script setup>`
- **Single Responsibility**: Each component has one clear purpose
- **DRY Principle**: Shared logic in composables, shared UI in base components
- **Type Safety**: Comprehensive TypeScript coverage
- **Props Validation**: Strict prop types with defaults


##  Race Simulation Algorithm

The race simulator uses a physics-based approach:

1. **Speed Calculation**: `speed = condition * randomFactor` (±15% variance)
2. **Position Update**: Updated every 50ms based on elapsed time
3. **Progress Tracking**: Real-time progress callbacks for UI updates
4. **Finish Detection**: Tracks completion and final times
5. **Result Sorting**: Orders horses by finishing position



## Author

**Kemal Öncel**

