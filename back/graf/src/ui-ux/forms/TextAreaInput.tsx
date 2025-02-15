import { Field, useField } from "formik";
import { TextAreaInterface } from "../../interface";
import { useEffect} from "react";


export default function TextAreaInput({nameInput,textInput,placText, text}:TextAreaInterface){

    const [field, meta, helpers] = useField(nameInput);

    useEffect(() => {
        if (text && text !== null && text !== undefined) {
          const formattedText = text.split(";").map((item) => `• ${item.trim()}`).join("\n");
          helpers.setValue(formattedText); 
        }
      }, [text, helpers]);
    
      const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let inputValue = e.target.value.trim();
    
        // Разбиваем по строкам
        let formattedText = inputValue
          .split("\n")
          .map((line) => {
            if (!line.startsWith("•")) {
              return `• ${line.trim()}`;
            }
            return line; 
          })
          .join("\n"); 
    
        helpers.setValue(formattedText); 
      };

    return <div className="text-area-input-wp">
        <label style={{textAlign:'start'}}>{textInput}</label>
        <Field
        {...field} 
        className="form-textarea-input"
        as="textarea"
        placeholder={placText}
        value={field.value} 
        onChange={handleChange}
      />
      {meta.touched && meta.error && (
        <div className="error-message">{meta.error}</div> 
      )}
    </div>
}