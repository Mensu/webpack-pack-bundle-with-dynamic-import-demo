export function getAsyncNum() {
  return import('./async').then(mod => mod.default);
}
