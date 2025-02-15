import { DataInputInterface } from "../../interface";
import {AnimatePresence, motion} from 'framer-motion'
import { ErrorMessage, Field,} from "formik"
import ReqSymbol from "./ReqSymbol";

import DatePickerCustom from "./DataPickerCustom";


;

export default function DateInput({isReq, nameInput, textInput}:DataInputInterface){
    return  <div className="form-input-wp">
            <label style={{textAlign:'start'}}>{textInput}{isReq && <ReqSymbol/>}</label>
            <Field className='form-text-wp' type="date" name={nameInput}
            component={DatePickerCustom}
            >
            </Field>
            <AnimatePresence>
                <ErrorMessage name={nameInput} 
                render={(msg) => (
                    <motion.div
                    className="error"
                    initial={{ opacity: 0, y:10 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                    {msg}
                    </motion.div>
                )}
                />
            </AnimatePresence>
        </div>
}