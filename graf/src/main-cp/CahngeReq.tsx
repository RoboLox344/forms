

import {Formik ,Form } from "formik"
// import '../assets/svgCalendar.svg' 
import * as Yup from "yup"
import "react-datepicker/dist/react-datepicker.css"; 
import { ChekboxInputInterface, DataInputInterface, InputTextInterface, SalaryBoxInterface, SelectInterface, TextAreaInterface } from "../interface";
import DateInput from "../ui-ux/forms/DateInput";
import CheckBoxCustom from "../ui-ux/forms/ChekboxCustom";
import SelcetCustomWp from "../ui-ux/forms/SelcetCustom";
import TextInputWp from "../ui-ux/forms/TextInputWp";
import SalaryBox from "../ui-ux/forms/SalaryBox";
import TextAreaInput from "../ui-ux/forms/TextAreaInput";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { createReq, getReqByID, updateReq } from "../api";



type FormValues = {
    namePosition: string;
    nameVacancy: string;
    department: string;
    dateBegin: string;
    dateEnd: string;
    gender: string;
    education: string;
    typeSalary: string;
    salBegin: number;
    salEnd: number;
    region: string;
    address: string;
    metro: string;
    experience: string;
    workSchedule: string;
    functionalResponsibilities: string;
    wishes: string;
    advantage: string;
    weOffer: string;
    employmentType: string;
};




const validationSchema = Yup.object({
    namePosition: Yup.string(),
    nameVacancy:Yup.string().required('Укажите наименование'),
    department:Yup.string().required('Укажите отдел'),
    dateBegin: Yup.date().required('Выберите дату открытия'),
    dateEnd: Yup.date().required('Выберите дату закрытия')
    .test('is-valid-data', 'Дата закрытия должна быть позже даты открытия', function (value) {
        const { dateBegin } = this.parent;
        if (value && dateBegin) {
            return new Date(value).getTime() > new Date(dateBegin).getTime();
          }
        return true;
    }),
    gender:Yup.string().required('Выберите пол'),
    education:Yup.string().required('Выберите образование'),
    typeSalary:Yup.string(),
    salBegin:Yup.number().min(0, 'хочешь отрицательную зарплату??'),
    salEnd:Yup.number().min(0, 'хочешь отрицательную зарплату??')
    .test('is-greater', 'Конечная зп >= нач ?!', function (value) {
        const { salBegin } = this.parent;
        return value === undefined || salBegin === undefined || value >= salBegin;
    }),
    region:Yup.string().required('Укажите регион'),
    address:Yup.string().required('Введите полный адрес. Например, Походный проезд, 3с1')
    .test('is-valid-address', 'Адрес должен быть в формате: улица, номер дома/корпуса', value => {
        const addressRegex = /^[А-Яа-яЁёA-Za-z\s]+,\s*\d+[А-Яа-яЁёA-Za-z0-9\-]+$/;
        return addressRegex.test(value);
      }),
    metro:Yup.string(),
    experience:Yup.string().required('Укажите опыт работы'),
    workSchedule:Yup.string().required('Укажите график работы'),
    employmentType: Yup.string().required('Выберите тип занятости'),
    functionalResponsibilities:Yup.string(),
    wishes:Yup.string(),
    advantage:Yup.string(),
    weOffer:Yup.string(),


})




const textInputsBlock1 : InputTextInterface[] = [
    {
        isReq:false,
        nameInput:'namePosition',
        placText:'',
        textInput:'Форма размещения заявки',
        typeInput:'text'
    },
    {
        isReq:true,
        nameInput:'nameVacancy',
        placText:'',
        textInput:'Наименование вакансии',
        typeInput:'text'
    },
    {
        isReq:true,
        nameInput:'department',
        placText:'',
        textInput:'Отдел',
        typeInput:'text'
    },
]
const dataInputBlock1 :DataInputInterface[] = [
    {
        nameInput:'dateBegin',
        isReq:true,
        textInput:'Дата открытия'
    },
    {
        nameInput:'dateEnd',
        isReq:true,
        textInput:'Плановая дата закрытия'
    },
]
const RadioBtnsBlock1 : ChekboxInputInterface= {
        isReq:true,
        nameInput:'gender',
        chekName:'Пол',
        radioBtns:[
            {
                radioName:'Мужской',
                radioValue:'male',

            },
            {
                radioName:'Женский',
                radioValue:'female',

            }
        ]

}
const SelectBlock1: SelectInterface  ={
        isReq:true,
        selectName:'education',
        textSelect:'Образование',
        selectValues:[
            { label: "Высшее", value: "higher" },
            { label: "Среднее", value: "average" }
        ]
}
const SalaryBoxBlock2 : SalaryBoxInterface ={
    isReq:false,
    boxName:'Зарплата',
    radioBtns:[
        {
            radioName:'На руки',
            radioValue:'cash',

        },
        {
            radioName:'До вычета налогов',
            radioValue:'beforeDeduction',

        }
    ],
    typeSalary:'typeSalary',
    salEnd:'salEnd',
    salBegin:'salBegin',
    placText:'',
    typeInput:'number'
}
const dataInputBLock2 :InputTextInterface[] = [
    {
        isReq:true,
        nameInput:'region',
        placText:'',
        textInput:'Регион',
        typeInput:'search'
    },
    {
        isReq:true,
        nameInput:'address',
        placText:'',
        textInput:'Адрес',
        typeInput:'text',
        customClass:true
    },
    {
        isReq:false,
        nameInput:'metro',
        placText:'',
        textInput:'Станция метро, МЦД',
        typeInput:'text'
    },
]
const textInputBlock2 : InputTextInterface = {
        isReq:true,
        nameInput:'experience',
        placText:'',
        textInput:'Опыт работы',
        typeInput:'text'
}
const selectBoxBlock2 :SelectInterface = {
    isReq:true,
    selectName:'workSchedule',
    textSelect:'График работы',
    selectValues:[
        { label: "Полный день", value: "fullDay" },
        { label: "Сменный 5/2", value: "Replaceable5/2" },
        { label: "Сменный 2/2", value: "Replaceable2/2" }
    ]
}
const radioBtnsBlock2 :ChekboxInputInterface ={
    isReq:true,
    nameInput:'employmentType',
    chekName:'Тип занятости',
    radioBtns:[
        {
            radioName:'Полная занятость',
            radioValue:'fullEmployment',
        },
        {
            radioName:'Частичная занятость',
            radioValue:'partTime',
        },
        {
            radioName:'Стажировка',
            radioValue:'internship',
        }
    ]
}
const textareaInputsBlock3 : TextAreaInterface[] = [
    {
        nameInput:'functionalResponsibilities',
        textInput:'Функциональные обязанности',
        placText:'Какую работу будет выполнять сотрудник',
        text:null
    },
    {
        nameInput:'wishes',
        textInput:'Пожелания к кандидату',
        placText:'Ключевые навыки, достижения',
        text:null
    },
    {
        nameInput:'advantage',
        textInput:'Преимуществом будет',
        placText:'Дополнительные специальные навыки',
        text:null
    },
    {
        nameInput:'weOffer',
        textInput:'Мы предлагаем',
        placText:'',
        text:'Дружный коллектив, интересные задачи и возможность быть услышанным; Приобретение навыков работы в большой, разветвлённой и сложноподчинённой структуре, задействованной в сфере ИТ; Оформление в соответствии с ТК РФ; Полностью официальная заработная плата'
    },
] 




export default function ChangeReq(){

    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    const [initialValues, setInitialValues] = useState<FormValues>({
        namePosition: '',
        nameVacancy: '',
        department: '',
        dateBegin: '',
        dateEnd: '',
        gender: '',
        education: '',
        typeSalary: '',
        salEnd: 0,
        salBegin: 0,
        region: '',
        address: '',
        metro: '',
        experience: '',
        workSchedule: '',
        functionalResponsibilities: '',
        wishes: '',
        advantage: '',
        weOffer: '',
        employmentType: ''
    });


    const InfoByID = async () => {
        if (id && id !== null && id !== undefined) {
            try {
                const result = await getReqByID(Number(id));
                console.log(result);
               
                setInitialValues({
                    namePosition: result.namePosition || '',
                    nameVacancy: result.nameVacancy || '',
                    department: result.department || '',
                    dateBegin: result.dateBegin || '',
                    dateEnd: result.dateEnd || '',
                    gender: result.gender || '',
                    education: result.education || '',
                    typeSalary: result.typeSalary || '',
                    salEnd: result.salEnd || '',
                    salBegin: result.salBegin || '',
                    region: result.region || '',
                    address: result.address || '',
                    metro: result.metro || '',
                    experience: result.experience || '',
                    workSchedule: result.workSchedule || '',
                    functionalResponsibilities: result.functionalResponsibilities || '',
                    wishes: result.wishes || '',
                    advantage: result.advantage || '',
                    weOffer: result.weOffer || '',
                    employmentType: result.employmentType || ''
                });
                setLoading(false);  
            } catch (error) {
                console.error('server err', error);
                setLoading(false);  
            }
        }
    };


    useEffect(() =>{
        setLoading(true);
        InfoByID()
    },[id])

    return <main>
        <section id="qreateReauest">
            <div className="container" style={{display:'flex', flexDirection:'column', gap:56, marginBottom:106}}>
                <h1 style={{textAlign:'start', color:'#4c73e3'}}>Форма размещения заявки</h1>
                {loading ? <div>Load</div> : 
                
                <Formik
                key={id}
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={async (values) => {
                try {

                if (id) {
                    await updateReq(Number(id), values);  
                    console.log("Запись обновлена!");
                } else {

                    await createReq(values);  
                    console.log("Запись создана!");
                }

                } catch (error) {
                console.error("Ошибка при отправке данных", error);

                }
            }}
                >
                {({resetForm}) => <Form style={{display:'flex', flexDirection:'column', gap:32}}>
                    <div className="form-container">
                        <div className="form-section">
                            {textInputsBlock1.map(block => <TextInputWp key={block.nameInput} {...block}/>)}
                        </div>

                        <div className="form-section">
                            {dataInputBlock1.map(block => <DateInput key={block.nameInput} {...block}/>)}
                        </div>

                        <div className="form-section">
                            <CheckBoxCustom {...RadioBtnsBlock1}/>

                            <SelcetCustomWp {...SelectBlock1}/>
                        </div>
                    </div>

                    <div className="form-container">
                        <div className="form-section">
                            <SalaryBox {...SalaryBoxBlock2}/>
                        </div>

                        <div className="form-section">
                            {dataInputBLock2.map(block => <TextInputWp key={block.nameInput} {...block}/>)}
                        </div>

                        <div className="form-section">
                            <TextInputWp {...textInputBlock2}/>
                            <SelcetCustomWp {...selectBoxBlock2}/>
                            <CheckBoxCustom {...radioBtnsBlock2}/>
                        </div>
                        
                    </div>

                    <div className="form-container">
                        {textareaInputsBlock3.map(block => <div className="form-section">
                            <TextAreaInput key={block.nameInput} {...block}/>
                        </div>)
                        }
                    </div>

                    <div className="btns-wp">
                        <button className="btn-sumbit" type="submit">Отправить</button>
                        <button className="btn-reset" onClick={() => {
            resetForm({
              values: {
                namePosition: '',
                nameVacancy: '',
                department: '',
                dateBegin: '',
                dateEnd: '',
                gender: '',
                education: '',
                typeSalary: '',
                salBegin: 0,
                salEnd: 0,
                region: '',
                address: '',
                metro: '',
                experience: '',
                workSchedule: '',
                functionalResponsibilities: '',
                wishes: '',
                advantage: '',
                weOffer: '',
                employmentType: ''
              }
            });
          }}>Сбросить</button>
                    </div>
                    
                </Form>
                }
                </Formik>
                }
                
            </div>
        </section>
    </main>
}






  

  
 
  
  
  
  
  
  
  
  