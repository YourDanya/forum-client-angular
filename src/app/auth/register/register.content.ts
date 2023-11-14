export const dictionary = {
    en: {
        signup: 'signup',
        policy: 'By continuing, you are setting up a account and agree to our User Agreement and Privacy Policy',
        google: 'Continue with google',
        or: 'or',
        form: {
            email: 'email',
            name: 'name',
            password: 'password',
            passwordConform: 'password confirm'
        },
        already: 'Alredy have an account?',
        login: 'log in',
    },
    ru: {
        signup: 'регистрация',
        policy: 'Продолжая, вы создаете учетную запись Reddit и соглашаетесь с нашим Пользовательским соглашением и Политикой конфиденциальности.',
        google: 'Continue with google',
        or: 'или',
        form: {
            email: 'email',
            name: 'имя',
            password: 'пароль',
            passwordConform: 'подтверждение пароля'
        },
        already: 'Уже есть аккаунт?',
        login: 'войти',
    }
}

export const initValues = {
    email: '',
    name: '',
    password: '',
    passwordConform: ''
}

export const validations = {
    email: {minLength: 5, isEmail: true, maxLength: 50},
    name: {minLength: 5, maxLength: 50},
    password: {minLength: 5, maxLength: 50},
    passwordConform: {minLength: 5, maxLength: 50}
}
