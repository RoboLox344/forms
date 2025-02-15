import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const QreateRequest = lazy(() => import('../main-cp/QreateRequest'))
const Home = lazy(() => import('../main-cp/Home'))
const RequestList = lazy(() => import('../main-cp/RequestList'))
const ChangeReq = lazy (() => import('../main-cp/CahngeReq'))

export default function MainRoots(){
    return <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
            <Route path={'/request/add'} element={<QreateRequest/>}/>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/request/all'} element={<RequestList/>}/>
            <Route path={'/request/:id'} element={<ChangeReq/>}/>
        </Routes>
    </Suspense>
}