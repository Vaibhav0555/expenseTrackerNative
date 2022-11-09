export const getFullDate=(date)=>{

    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

export const getDateMinusDay=(date,day)=>{
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - day);
}