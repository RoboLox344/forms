import ChangeReqBtn from "./btns/ChangeRerBtn";
import addresSvg from '../assets/addressSvg.svg'
import metroSvg from '../assets/merto.svg'
import React from "react";
import { CardInterface } from "../interface";



const  ReqCard = React.memo(({id,address,dateBegin,experience,metro,nameVacancy,region,salBegin}:CardInterface) => {

    const dateFormat = dateBegin.split('T').slice(0,1).join('').split('-').reverse().join('.')
    return <div className="request-item-wp" id={String(id)}>
    <div className='req-haeder'>
        <p style={{margin:0}}>Дата публикации:{dateFormat && dateFormat}</p>
        <ChangeReqBtn id={id}/>
    </div>
    <div className='req-body'>
        <div className='req-name-wp'>
            <h2  className="name-req"style={{textAlign:'start'}}>{nameVacancy && nameVacancy}</h2>
        </div>
        <div className='req-more-info-wp'>
            <div className='req-address-wp'>
                <img src={addresSvg} alt="addresSvg" />
                <p className='supp-text'>{region && region}, {address && address}</p>
            </div>
            <div className='req-metro-salary-wp'>
                <div style={{display:'flex' ,gap:5, alignItems:'center'}}>
                    <p className='req-price'>от {salBegin && salBegin.toLocaleString('ru')}</p>
                    <span className='supp-text'>на руки</span>
                </div>
                <div style={{display:'flex' ,gap:5, alignItems:'center'}}>
                <span className='supp-text'>Требуемый опыт:</span>
                <p className='req-price'>{experience && experience}</p>
                </div>
                <div style={{display:'flex' ,gap:5, alignItems:'center'}}>
                    <img src={metroSvg} alt="metroSvg" />
                    <p className='supp-text'>{metro && metro}</p>
                </div>
            </div>
        </div>
    </div>
</div>
})

export default ReqCard