import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot} from '@angular/router'
import {Router} from '@angular/router'
import {RouterStateSnapshot} from '@angular/router'
import {CanActivate} from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class LangGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const lang = next.params['lang']
        console.log('test', lang)

        if (lang !== 'en' && lang !== 'ru') {
            const englishUrl = `en${state.url}`
            console.log('englishUrl', englishUrl)
            const url = this.router.parseUrl('/en')
            // console.log('url', url)
            return url
        }
        return true
    }

}
