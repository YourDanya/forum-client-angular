export const dictionary = {
    en: {
        title: 'Update your data',
        form: {
            name: 'name',
            description: 'description'
        },
        save: 'Save'
    },
    ru: {
        title: 'Обновите ваши данные',
        form: {
            name: 'имя',
            description: 'описание'
        },
        save: 'Сохранить'
    }
}

export const initValues = {
    name: '',
    description: ''
}

export const validations = {
    name: {minLength: 5},
    description: {minLength: 5}
}
