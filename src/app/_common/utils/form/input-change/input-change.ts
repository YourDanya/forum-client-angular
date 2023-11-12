import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import {ChangeValue} from 'src/app/_common/types/form/change-value.type'
import {InputValues} from 'src/app/_common/types/form/input-values.type'

const inputChange = <ValuesT extends InputValues> (event: InputEvent) => {
    let {value, name}: {value: string | number, name: string} = event.currentTarget
    if (typeof value === 'number') {
        value = +value
    }
    return {value, name} as ChangeValue<ValuesT>
}

export default inputChange
