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
        const lang = next.paramMap.get('lang')
        console.log('lang', lang)
        if (lang !== 'en' && lang !== 'ru') {
            const englishUrl = `en/${state.url}`
            return this.router.parseUrl(englishUrl)
        }
        return true
    }

}
