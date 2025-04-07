import * as React from "react";

const Help: React.FC = () => {
    return (
        <div className={`flex flex-col gap-1 p-4`}>
            <div className={`text-sm text-gray-500`}>
                This is an open-source project. If you're interested, feel free to fork it to your own repository for
                further development. And if you find it helpful, a star would be greatly appreciated!
            </div>
            <a href={`https://github.com/MR5356/chrome-extension-resizer`} target={`_blank`}>
                <img
                    src={`https://github-readme-stats.vercel.app/api/pin/?username=MR5356&repo=chrome-extension-resizer`}
                    alt={`GitHub Stats`}
                />
            </a>
            <div className={`text-sm text-gray-500`}>I’ve also worked on some other projects, you’re welcome to check
                them out if you’re interested!
            </div>
            <div className={`flex flex-col gap-2 pl-4 border-l-4 border-gray-300`}>
                <a href={`https://github.com/MR5356/aurora`} target={`_blank`}>
                    <img
                        src={`https://github-readme-stats.vercel.app/api/pin/?username=MR5356&repo=aurora`}
                        alt={`GitHub Stats`}
                    />
                </a>
                <a href={`https://github.com/MR5356/elune-aio`} target={`_blank`}>
                    <img
                        src={`https://github-readme-stats.vercel.app/api/pin/?username=MR5356&repo=elune-aio`}
                        alt={`GitHub Stats`}
                    />
                </a>
            </div>
        </div>
    )
}

export default Help
