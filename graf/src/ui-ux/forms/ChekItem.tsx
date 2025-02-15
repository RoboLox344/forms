import { Field } from "formik";
import {  RadioBtnsInterfaceCp } from "../../interface";


export default function ChekItem({radioName, radioValue, nameInput}:RadioBtnsInterfaceCp){
    return <div style={{display:'flex', gap:8, alignItems:'center'}}>
                    <Field className='form-chek-wp' type="radio" name={nameInput} value={radioValue}/>
                    <label htmlFor="">{radioName}</label>
            </div>
}