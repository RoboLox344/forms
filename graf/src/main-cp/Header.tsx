import { Link, useNavigate } from "react-router"


const Header = () => {

    const navigate = useNavigate()

    const handelReqAdd = () => {
        navigate('request/add')
    }
    const handelReqAll = () => {
        navigate('request/all')
    }


    return <header style={{display:'flex',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0 150px',
        boxSizing:'border-box',
        backgroundColor:'#4c73e3'
    }}
        className="container">
        <div >
            <Link to={'/'} style={{width:31, height:31, backgroundColor:'#fff', borderRadius:100, display:'block'}}/>
        </div>

        <nav style={{width:'100%', display:'flex', justifyContent:'end'}}>
            <button  className="header-btn" onClick={handelReqAll}>Все заявки</button>
            <button  className="header-btn" onClick={handelReqAdd}>Создание заявки</button>
        </nav>
            
        
    </header>
}




export default Header