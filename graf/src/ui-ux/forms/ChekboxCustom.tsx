import {  ErrorMessage } from "formik";
import ReqSymbol from "./ReqSymbol";
import { ChekboxInputInterface } from "../../interface";
import ChekItem from "./ChekItem";




export default function CheckBoxCustom({isReq, nameInput,chekName,radioBtns }:ChekboxInputInterface){
    return <div className="form-input-wp">
                <div style={{textAlign:'start'}}>{chekName}{isReq && <ReqSymbol/>}</div>
                    {radioBtns.map(radio => <ChekItem {...radio} nameInput={nameInput}/>)}
                <ErrorMessage name={nameInput} component="div" className="error" />
            </div>
}