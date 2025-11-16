declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Fix for Vuex 4.x with moduleResolution: "bundler"
// This resolves the "could not be resolved when respecting package.json exports" error
declare module 'vuex' {
  export * from 'vuex/types/index.d.ts'
  export { Store, useStore } from 'vuex/types/index.d.ts'
}
