import * as React from "react";
import {LabelO} from "@react-vant/icons"

const Help: React.FC = () => {
    return (
        <div className={`flex flex-col gap-2 p-4`}>
            <div className={`text-sm text-gray-500`}>
                This is an open-source project. If you're interested, feel free to fork it to your own repository for
                further development. And if you find it helpful, a star would be greatly appreciated!
            </div>

            <a href={`https://github.com/MR5356/chrome-extension-resizer`} target={`_blank`}>
                <div className={`p-4 flex flex-col gap-2 w-full border rounded border-gray-200`}>
                    <div className={`flex items-center gap-2`}>
                        <LabelO/>
                        <div className={`text-blue-600`}>chrome-extension-resizer</div>
                    </div>
                    <div className={`text-xs text-gray-500`}>
                        Change your browser size
                    </div>
                </div>
            </a>
            <div className={`text-sm text-gray-500`}>I’ve also worked on some other projects, you’re welcome to check
                them out if you’re interested!
            </div>
            <div className={`flex flex-col gap-2 pl-4 border-l-3 border-gray-300`}>
                <a href={`https://github.com/MR5356/aurora`} target={`_blank`}>
                    <div className={`p-4 flex flex-col gap-2 w-full border rounded border-gray-200`}>
                        <div className={`flex items-center gap-2`}>
                            <LabelO/>
                            <div className={`text-blue-600`}>aurora</div>
                        </div>
                        <div className={`text-xs text-gray-500`}>
                            Aurora is an open source system for DevOps.
                        </div>
                    </div>
                </a>
                <a href={`https://github.com/MR5356/elune-aio`} target={`_blank`}>
                    <div className={`p-4 flex flex-col gap-2 w-full border rounded border-gray-200`}>
                        <div className={`flex items-center gap-2`}>
                            <LabelO/>
                            <div className={`text-blue-600`}>elune-aio</div>
                        </div>
                        <div className={`text-xs text-gray-500`}>
                            Elune 一站式运维工具平台, DevOps Tools.
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Help
