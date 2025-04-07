import React from "react";
import Image from "../Image";

const Header: React.FC = () => {
    return (
        <div className={`w-full p-2`}>
            <div className={`flex items-center justify-between`}>
                <div className={`flex items-center gap-2`}>
                    <Image
                        src={`/logo.png`}
                        style={{width: '3.5rem', height: '3.5rem'}}
                    />
                    <div className={`flex flex-col gap-0`}>
                        <div className={`text-lg font-bold`}>Window Resizer</div>
                        <div className={`text-sm text-gray-500`}>Change your browser size</div>
                    </div>
                </div>
                <div>
                    {/*<Image*/}
                    {/*    src={`/github.svg`}*/}
                    {/*    shadowSrc={`/transparent.svg`}*/}
                    {/*    style={{width: '2rem', height: '2rem'}}*/}
                    {/*/>*/}
                </div>
            </div>

            {/*<Divider/>*/}
        </div>
    )
}

export default Header
