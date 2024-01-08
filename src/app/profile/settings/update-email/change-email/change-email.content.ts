export const dictionary = {
    en: {
        title: 'Update your email',
        form: {
            email: 'new email',
            password: 'current password',
        },
        save: 'Save email'
    },
    ru: {
        title: 'Обновите вашу почту',
        form: {
            email: 'Новый email',
            password: 'Текущий пароль',
        },
        save: 'Сохранить почту'
    }
}

export const initValues = {
    email: '',
    password: ''
}

export const validations = {
    email: {minLength: 5, isEmail: true},
    password: {minLength: 5}
}
