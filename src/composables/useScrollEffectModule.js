import SCROLL_EFFECT_MODULE from 'js-scroll-effect-module'

export function useScrollEffectModule() {
    const ScrollEffectModule = new SCROLL_EFFECT_MODULE({
        elem: '.effect_item',
        displayRatio: 0.85,
        displayReverse: false,
        firstElem: '.effect_item--first',
        firstElemDelayTime: 300,
        firstDelayTime: 500,
        loadDelayTime: 0,
        addClassNameActive: 'active',
    })

    return ScrollEffectModule
}
