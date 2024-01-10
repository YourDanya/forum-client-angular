export const dictionary = {
    en: {
        title: 'Update your password',
        form: {
            currentPassword: 'current password',
            newPassword: 'new password',
            newPasswordConfirm: 'confirm new password',
        },
        save: 'Save'
    },
    ru: {
        title: 'Обновите ваш пароль',
        form: {
            currentPassword: 'текущий пароль',
            newPassword: 'новый пароль',
            newPasswordConfirm: 'подтверждение пароля',
        },
        save: 'Сохранить'
    }
}

export const initValues = {
    currentPassword: '',
    newPassword: '',
    newPasswordConfirm: ''
}

export const validations = {
    currentPassword: {minLength: 5},
    newPassword: {minLength: 5},
    newPasswordConfirm: {minLength: 5}
}
