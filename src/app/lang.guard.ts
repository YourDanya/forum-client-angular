import {inject} from '@angular/core'
import {Route, UrlSegment} from '@angular/router'
import {Router} from '@angular/router'

export const canMatch = (_: Route, segments: UrlSegment[]) => {
    const router = inject(Router)

    if (segments[0]?.path !== 'en' && segments[0]?.path !== 'ru') {
        const newUrl = `/en/${segments.join('/')}`
        router.navigate([newUrl])
        return false
    }

    return true
}
