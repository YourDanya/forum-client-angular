export const dictionary = {
    en: {
        reset: 'Reset password',
        policy: 'Tell us the email address associated with your account, and we’ll send you an email with a link to reset your password.',
        form: {
            email: 'email'
        },
        login: 'log in',
        signup: 'Sign up',
    },
    ru: {
        reset: 'Сбросить пароль',
        policy: 'Сообщите нам адрес электронной почты, связанный с вашей учетной записью, и мы отправим вам электронное письмо со ссылкой для сброса пароля.',
        or: 'или',
        form: {
            email: 'email',
        },
        login: 'войти',
        signup: 'регистрация',
    }
}
export const initValues = {
    email: ''
}

export const initErrors = {
    email: ''
}

export const validations = {
    email: {minLength: 5, isEmail: true, maxLength: 50}
}
