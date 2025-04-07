import React from "react";
import Device, {Resolution} from "../Device";


const Index: React.FC = () => {
    const resolutions: Resolution[] = [
        {width: 1920 * 2, height: 1080 * 2},
        {width: 2560, height: 2048},
        {width: 2560, height: 1920},
        {width: 2560, height: 1600},
        {width: 2560, height: 1440},
        {width: 2048, height: 1536},
        {width: 2048, height: 1152},
        {width: 1920, height: 1440},
        {width: 1920, height: 1200},
        {width: 1920, height: 1080},
        {width: 1856, height: 1392},
        {width: 1792, height: 1344},
        {width: 1680, height: 1050},
        {width: 1600, height: 1200},
        {width: 1600, height: 900},
        {width: 1440, height: 900},
        {width: 1400, height: 1050},
        {width: 1366, height: 768},
        {width: 1360, height: 768},
        {width: 1280, height: 1024},
        {width: 1280, height: 960},
        {width: 1280, height: 800},
        {width: 1280, height: 768},
        {width: 1280, height: 720},
        {width: 1280, height: 600},
        {width: 1152, height: 864},
        {width: 1024, height: 768},
        {width: 800, height: 600},
        {width: 414, height: 896},
    ]

    const onResize = (r: Resolution) => {
        chrome.windows.getCurrent(function (window) {
            chrome.windows.update(window.id!, {
                width: r.width,
                height: r.height,
            })
        })
    }
    return (
        <div className={`p-2 flex flex-col gap-2`}>
            <div></div>
            <div className={`grid grid-cols-2 gap-2`}>
                {resolutions.map((resolution, i) => (
                    <div
                        key={i}
                        className={`bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer flex flex-col items-center justify-center gap-1 p-4`}
                        onClick={() => {
                            onResize(resolution)
                        }}
                    >
                        <Device key={i} width={resolution.width} height={resolution.height}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index
