

export type Action = {type: 'INCREASE'}|{type: 'DECREASE'}|{type:'DECREASE'}
export const increase = ():Action =>({
    type: 'INCREASE',
})

export const decrease = ():Action => ({
    type:'DECREASE',
})