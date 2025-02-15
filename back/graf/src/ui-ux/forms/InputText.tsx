import { ErrorMessage, Field } from "formik";
import { AnimatePresence, motion } from "framer-motion";

export interface InputTextInterface{
    nameInput:string,
    placText:string,
    typeInput:string
}

export default function InpputText({nameInput,placText,typeInput}:InputTextInterface){
    return <>
    <Field className='form-text-wp' type={typeInput} name={nameInput} 
    placeholder={placText}
    />
    <AnimatePresence>
    <ErrorMessage name={nameInput}
    render={(msg) => (
        <motion.div
        className="error"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
        {msg}
        </motion.div>
    )}
    />
    </AnimatePresence>
    </>
}