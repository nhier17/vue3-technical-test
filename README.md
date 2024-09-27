# vue-project

This project is a collection of various Vue 3 features, showcasing basic component creation, composition API usage, form handling, API integration, performance optimization, custom directives, teleportation, and unit testing. Each component is implemented as a separate task to demonstrate proficiency in Vue 3.

## Table of Contents
- Task 1: Basic Component Creation
- Task 2: Composition API Refactoring
- Task 3: Form Handling with Validation
- Task 4: API Integration
- Task 5: Performance Optimization
- Task 6: Custom Directives
- Task 7: Teleport (Modal Component)
- Task 8: Unit Testing with Jest and Vue Test Utils

### Task 1 and Task 2

Component: Task1.vue

This component accepts an array of items via props and displays them in a styled list. If the list is empty, a message saying "No items available" is shown.

Props:

items: An array of objects representing the items to be displayed.

Composition Refactoring

This component was refactored from the Options API to the Composition API. It displays a simple message using Vue 3’s Composition API.

Features:

Reactive message display using ref.

### Task 3: Form Handling and Validation

Component: FormValidation.vue

This form component handles user input with validation. It includes fields for name, email, and password with the following validation rules:

Name: Cannot be empty.
Email: Must be a valid email format.
Password: Must be at least 6 characters long.
Features:

Uses Vue’s ref and computed properties for form handling.
Displays appropriate error messages for invalid fields.

### Task 4: Api Integration
Component: ApiIntegration.vue

This component fetches data from a public API using the Fetch API and displays it in a list.

Features:

Fetches data on component mount.
Displays a loading state while fetching data and an error state if the request fails.

### Task 5: Perfomance optimization
Component: PerfomanceOptimization.vue

This component optimizes performance by using v-for and :key bindings. Potential performance issues were identified and addressed to ensure smoother rendering of large lists.

Optimization:

Added :key to each list item for efficient updates.
Prevented unnecessary re-renders.

### Task 6: Custom Derivatives
Component: CustomDerivatives.vue

A custom directive to toggle the background color of an element when clicked. It switches between two colors on each click.

### Task 7: Teleport

Component: Teleport.vue, TeleportModal.vue

This component demonstrates Vue 3’s Teleport feature, allowing the modal to be rendered outside of its parent component's DOM hierarchy.

Features:

Opens and closes via a button click.
Uses Teleport to render the modal in a specific part of the DOM, outside the normal flow.

### Task 8: Unit Testing with Jest and Vue Test Utils
Test Suite: CounterComponent.spec.js

Unit tests for the CounterComponent that includes:

Checking the initial render.
Testing the increment functionality on button click.
Tools Used:

Jest
Vue Test Utils

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
