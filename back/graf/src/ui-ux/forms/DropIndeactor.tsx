
import { components, DropdownIndicatorProps } from "react-select";


const CustomDropdownIndicator = <OptionType,>(props: DropdownIndicatorProps<OptionType>) => {

    const { selectProps } = props;
    const isDropdownOpen = selectProps.menuIsOpen;
    return (
      <components.DropdownIndicator {...props}>
        <svg className={`svg-arrow `} style={{
          transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", 
          transition: "transform 0.3s ease",
        }} viewBox="0 0 20 20" fill="none" >
            <path d="M1.5 7.29138L9.5 12.7086L18 7.29138" stroke="#4C73E3" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
        </svg>
      </components.DropdownIndicator>
    );
  };

  export default CustomDropdownIndicator