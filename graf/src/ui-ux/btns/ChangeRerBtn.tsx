import { useNavigate } from 'react-router'
import ChangeSvg from '../../assets/changesvg.svg'


export default function ChangeReqBtn({id}:{id:number}){
    
    const navigate  = useNavigate()

    const handelClikc = () => {
        if(id){
            navigate(`/request/${id}`)
        }
    }

    return <button className='change-btn' onClick={handelClikc}>
        <img src={ChangeSvg} alt="ChangeBtn" />
    </button>
}