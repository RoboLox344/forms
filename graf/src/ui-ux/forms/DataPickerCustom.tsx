import DatePicker from "react-datepicker";
import svg from  '../../assets/svgCalendar.svg'; 
import { FieldProps } from 'formik';

interface DatePickerCustomProps extends FieldProps {

  }

  const DatePickerCustom: React.FC<DatePickerCustomProps> = ({ field, form, ...props }) =>(
        <div className="date-picker-container">
          <DatePicker 
            selected={field.value ? new Date(field.value) : null}
            onChange={(date) => form.setFieldValue(field.name, date)}
            dateFormat="dd.MM.yyyy"
            placeholderText="дд.мм.гггг"
            {...props}
          />
          <div className="btn-calandar-wp">
                <img src={svg} alt="svg" />
          </div>
        </div>
);

export default DatePickerCustom
