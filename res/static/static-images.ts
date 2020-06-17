export const staticImages = {
  hero: { image: require('./jpg/background_search_desktop.jpg') },
  heroMobile: { image: require('./jpg/background_search_mobile.jpg') },
}

export type staticImageName = keyof typeof staticImages
