export interface InputTextInterface{
    isReq:boolean,
    nameInput:string,
    placText:string,
    textInput:string,
    typeInput:string,
    customClass?:boolean,
}

export interface DataInputInterface{
    isReq:boolean,
    nameInput:string,
    textInput:string
}

export interface RadioBtnsInterface{
    radioName:string,
    radioValue:string
}

export interface RadioBtnsInterfaceCp{
    radioName:string,
    radioValue:string,
    nameInput:string,
}

export interface ChekboxInputInterface{
    isReq:boolean,
    nameInput:string,
    chekName:string,
    radioBtns:RadioBtnsInterface[]
}
export interface SelectValuesInterface{
    label:string,
    value:string
}

export interface SelectInterface{
    isReq:boolean,
    textSelect:string,
    selectName:string,
    selectValues:SelectValuesInterface[]

}

export interface SalaryBoxInterface{
    isReq:boolean,
    boxName:string,
    radioBtns:RadioBtnsInterface[],
    typeSalary:string,
    salEnd:string,
    salBegin:string,
    placText:string,
    typeInput:string
}
export interface TextAreaInterface{
    nameInput:string,
    textInput:string,
    placText:string,
    text?:string | null,
}

export interface CardInterface{
    id:number,
    address:string,
    dateBegin:string,
    experience:string,
    metro:string,
    nameVacancy:string,
    region:string,
    salBegin:number
}
