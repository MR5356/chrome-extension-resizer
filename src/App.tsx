import './App.css'
import {EmptyProps, Tabbar} from 'react-vant';
import {ExpandO, StarO} from '@react-vant/icons'
import React, {FC, LazyExoticComponent, useState} from "react";
import {LazyLoad} from "./components/LazyLoad";
import Header from "./components/Header";

type MenuId = 'index' | 'home' | 'setting'

function App() {
    const [current, setCurrent] = useState<MenuId>("index")

    const onChange = (v: MenuId) => {
        setCurrent(v)
    }

    const components: Record<MenuId, LazyExoticComponent<FC<EmptyProps>>> = {
        index: React.lazy(() => import('./components/Index')),
        home: React.lazy(() => import('./components/Help')),
        setting: React.lazy(() => import('./components/Setting'))
    }

    return (
        <div className={`w-full overflow-hidden flex flex-col h-[600px] max-h-[600px] relative rounded-lg`}>
            <Header/>

            <div className={`flex-grow overflow-y-auto pb-[50px]`}>
                <LazyLoad component={components[current]}/>
            </div>

            <Tabbar value={current} onChange={v => onChange(v as MenuId)}>
                <Tabbar.Item name={`index`} icon={<ExpandO/>}></Tabbar.Item>
                <Tabbar.Item name={`home`} icon={<StarO/>}></Tabbar.Item>
                {/*<Tabbar.Item name={`setting`} icon={<ManagerO/>}></Tabbar.Item>*/}
            </Tabbar>
        </div>
    )
}

export default App
