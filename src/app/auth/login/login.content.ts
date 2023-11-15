export const dictionary = {
    en: {
        signup: 'Sign up',
        policy: 'By continuing, you agree to our User Agreement and Privacy Policy.',
        google: 'Continue with google',
        or: 'or',
        form: {
            email: 'email',
            password: 'password'
        },
        forgot: 'Forgot your ',
        password: 'password',
        new: 'New?',
        login: 'log in',
    },
    ru: {
        signup: 'регистрация',
        policy: 'Продолжая, вы соглашаетесь с нашим Пользовательским соглашением и Политикой конфиденциальности.',
        google: 'Continue with google',
        or: 'или',
        form: {
            email: 'email',
            password: 'пароль'
        },
        forgot: 'Забыли ',
        password: 'пароль',
        new: 'Впервые?',
        login: 'войти',
    }
}
export const initValues = {
    email: '',
    password: ''
}

export const initErrors = {
    email: '',
    password: ''
}

export const validations = {
    email: {minLength: 5, isEmail: true, maxLength: 50},
    password: {minLength: 5, maxLength: 50}
}
