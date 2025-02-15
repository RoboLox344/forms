import { ErrorMessage, Field } from "formik";
import ReqSymbol from "./ReqSymbol";
import { SelectInterface } from "../../interface";
import CustomSelect from "./CustomSelect";


export default function SelcetCustomWp({isReq, textSelect, selectName,selectValues}:SelectInterface){
    return <div className="form-input-wp">
    <label style={{textAlign:'start'}}>{textSelect}{isReq && <ReqSymbol/>}</label>
    <Field  as="select" name={selectName} component={CustomSelect}
    options={[...selectValues]}
    />
    
    <ErrorMessage name={selectName} component="div" className="error" />
</div>
}