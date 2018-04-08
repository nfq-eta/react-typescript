import { rootStore } from '../src/client/core/store';

declare module '*.json';
declare module 'webpack-dashboard';
declare module 'webpack-dashboard/plugin';

declare global {
  interface Window {
    __PRELOADED_STATE__: typeof rootStore;
  }
}

window.__PRELOADED_STATE__ = window.__PRELOADED_STATE__ || {};
