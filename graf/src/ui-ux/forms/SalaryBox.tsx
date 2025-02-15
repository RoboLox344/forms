
import ChekItem from "./ChekItem";
import ReqSymbol from "./ReqSymbol";
import InpputText from "./InputText";
import { SalaryBoxInterface } from "../../interface";


export default function SalaryBox({isReq, boxName,radioBtns,typeSalary, salBegin, salEnd, placText,typeInput}:SalaryBoxInterface){


    return <div style={{display:'flex', flexDirection:'column', gap:16,position:'relative', paddingBottom:20, boxSizing:'border-box'}}>
                <div className="form-input-wp form-input--long" style={{maxWidth:'auto'}}>
                    <div style={{textAlign:'start'}}>{boxName}{isReq && <ReqSymbol/>}</div>
                    <div style={{display:'flex',gap:20,alignItems:'center'}}>
                        {radioBtns.map(radio => <ChekItem key={radio.radioValue} {...radio} nameInput={typeSalary}/>)}
                    </div>
                </div>
                <div style={{display:'flex', gap:16, alignItems:'center'}}>
                    <div style={{display:'flex', gap:7, color:'black', alignItems:'center', maxWidth:125}}>
                        <label>
                            от
                        </label>
                        <InpputText nameInput={salBegin} placText={placText} typeInput={typeInput}/>
                    </div>
                    <div style={{display:'flex', gap:7, color:'black', alignItems:'center', maxWidth:125}}>
                        <label>
                            до
                        </label>
                        <InpputText nameInput={salEnd} placText={placText} typeInput={typeInput}/>
                    </div>
                </div>

            </div>
}