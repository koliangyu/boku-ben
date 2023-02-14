export function useAssetsUrl(name) {
    return new URL(`../assets/img/${name}`, import.meta.url).href
}
