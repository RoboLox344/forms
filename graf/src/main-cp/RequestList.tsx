import { useEffect, useState } from "react"
import ReqCard from "../ui-ux/ReqCard"
import { getReqAll } from "../api"
import { CardInterface } from "../interface"




export default function RequestList(){

    const [cards, setCards] = useState<CardInterface[]>([])

    const CartList  = async () => {
        try {
            const result  = await getReqAll()
            if(result){
                setCards([...result])
            }
        } catch (error) {
            console.error('error', error)
        }
    }

    useEffect(() => {
        CartList()
    },[])

    return <main>
        <section id="requestList">
            <div className="container" style={{display:'flex', flexDirection:'column', gap:56, marginBottom:106}}>
                <h1 style={{textAlign:'start', color:'#4c73e3'}}>Заявки на размещение вакансий</h1>

                <div className="request-list-wp">
                    {cards && cards.map(card => <ReqCard key={card.id} {...card}/>)}
                </div>
            </div>
            
        </section>
    </main>
}