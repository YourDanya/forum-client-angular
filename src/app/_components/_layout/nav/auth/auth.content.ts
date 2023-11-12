export const dictionary = {
    en: {
        policy: 'By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.',
        google: 'Continue with google',
        or: 'or',
        form: {
            email: 'email',
            password: 'password'
        },
        forgot: 'Forgot your ',
        password: 'password',
        new: 'New?',
        signup: 'Sign Up',
        login: 'Log In'
    },
    ru: {
        policy: 'Продолжая, вы соглашаетесь с нашим Пользовательским соглашением и подтверждаете, что понимаете Политику конфиденциальности.',
        google: 'Continue with google',
        or: 'или',
        form: {
            email: 'email',
            password: 'пароль'
        },
        forgot: 'Забыли ',
        password: 'пароль',
        new: 'Впервые?',
        signup: 'Регистрация',
        login: 'Вход'
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
    email: {minLength: 5, maxLength: 50, isEmail: true},
    password: {minLength: 5, maxLength: 50}
}

