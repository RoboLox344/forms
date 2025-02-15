import ReqSymbol from "./ReqSymbol"
import { InputTextInterface } from "../../interface"
import InpputText from "./InputText"





export default function TextInputWp({isReq, nameInput, placText,textInput, typeInput, customClass}:InputTextInterface){


    return <div className={`form-input-wp ${customClass && 'form-custom'}`}>
    <label style={{textAlign:'start'}}>{textInput}{isReq && <ReqSymbol/>}</label>
    <InpputText nameInput={nameInput} placText={placText} typeInput={typeInput}/>
</div>
}