/// <reference types="vite/client" />
declare module '*.vue' {
    import type { ComponentOptions } from 'vue'
    const Component: ComponentOptions
    export default Component
  }
  
  declare module '*.md' {
    import type { ComponentOptions } from 'vue'
    const Component: ComponentOptions
    export default Component
  }

  interface ImportMeta {
    glob: (pattern: string) => Record<string, () => Promise<{ [key: string]: any }>>;
    globEager: (pattern: string) => Record<string, { [key: string]: any }>;
  }