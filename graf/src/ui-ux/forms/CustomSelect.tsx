import Select from "react-select";
import { FieldProps } from "formik";
import CustomDropdownIndicator from "./DropIndeactor";



const CustomSelect = ({ field, form, options }: FieldProps & { options: { label: string; value: string }[] }) => {
    const handleChange = (selectedOption: any) => {
      form.setFieldValue(field.name, selectedOption ? selectedOption.value : "");
    };


  
    return (
        
      <Select
        options={options}
        value={options.find(option => option.value === field.value)}
        onChange={handleChange}
        placeholder="Выберите..."
        components={{ DropdownIndicator: CustomDropdownIndicator,
            IndicatorSeparator: () => null,
         }}
        // className="form-text-wp"
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "16px",
            textAlign:'start',
            padding:'0 20px',
            width:'100%',
            border:'1px solid black',
            boxSizing:'border-box',
            height:'43px',
            boxShadow: "none",
            "&:hover": { borderColor: "#4c73e3" }
            
          }),
          menu:(base) => ({
            ...base,
            boxShadow:"none"
          }),
          menuList: (base) => ({
            ...base,
            borderBottom:'1px solid  #f0f4ff',
            
          }),
          option: (base) => ({
            ...base,
            borderBottom:'1px solid  #f0f4ff',
            color:'#4f4f55',
            '&:hover': {
                backgroundColor: '#f0f4ff', 
            },
        })
        }}
      />
    );
  };

  export default CustomSelect