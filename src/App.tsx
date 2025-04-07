import './App.css'

interface Resolution {
    width: number;
    height: number;
}

function App() {
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
        <div className={`w-full h-full p-2 overflow-hidden flex flex-col gap-1 max-h-[600px] rounded-lg`}>
            <div className={`flex flex-col`}>
                <div className={`text-lg font-bold`}>Window Resizer</div>
                <div className={`text-sm text-gray-500`}>Change your browser size</div>
                <div className={`h-[1px] my-1 w-full bg-gray-200`}></div>
            </div>
            <div className={`flex flex-col p-2 gap-2 overflow-y-auto`}>
                {resolutions.map((resolution, i) => (
                    <div
                        key={i}
                        className={`bg-slate-200 p-1 rounded cursor-pointer text-center`}
                        onClick={() => {
                            onResize(resolution)
                        }}
                    >{resolution.width} x {resolution.height}</div>
                ))}
            </div>
            <div className={`flex flex-col`}>
                <div className={`text-[0.67rem] text-gray-500 text-center`}>Powered By <a target="_blank" href={`https://github.com/MR5356`}>MR5356</a></div>
            </div>
        </div>
    )
}

export default App
