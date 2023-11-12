import {Lang} from 'src/app/_common/types/translation/lang.type'

export type Translation <T extends Record<Lang, object>> = T[Lang]
