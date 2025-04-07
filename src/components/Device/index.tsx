import React from "react";

export interface Resolution {
    width: number;
    height: number;
}

const Device: React.FC<Resolution> = ({width, height}) => {
    return (
        <div className={`bg-gray-500 rounded relative overflow-hidden`} style={{
            height: `72px`,
            aspectRatio: width / height,
        }}>
            {/* 内部白色矩形区域 */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded w-[calc(100%-4px)] h-[calc(100%-4px)] flex items-center justify-center overflow-hidden">
                {/* 动态对角线，使用SVG确保准确连接左下到右上角 */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    {/* 主对角线 */}
                    <line
                        x1="0"
                        y1="100%"
                        x2="100%"
                        y2="0"
                        stroke="var(--color-gray-500)"
                        strokeWidth="2"
                    />

                    {/* 两端的箭头可以通过SVG标记实现 */}
                    <defs>
                        <marker
                            id="arrowstart"
                            markerWidth="6"
                            markerHeight="6"
                            refX="0"
                            refY="3"
                            orient="auto"
                            markerUnits="strokeWidth">
                            <polygon points="0 0, 6 3, 0 6" fill="var(--color-gray-500)"/>
                        </marker>
                        <marker
                            id="arrowend"
                            markerWidth="6"
                            markerHeight="6"
                            refX="6"
                            refY="3"
                            orient="auto"
                            markerUnits="strokeWidth">
                            <polygon points="6 0, 0 3, 6 6" fill="var(--color-gray-500)"/>
                        </marker>
                    </defs>

                    {/* 带箭头的线 */}
                    <line
                        x1="0"
                        y1="100%"
                        x2="100%"
                        y2="0"
                        stroke="white"
                        strokeWidth="1"
                        markerStart="url(#arrowstart)"
                        markerEnd="url(#arrowend)"
                    />
                </svg>

                {/* 尺寸文字 */}
                <span
                    className="text-gray-500 font-bold text-xs z-10 text-center">{width} x {height}</span>
            </div>
        </div>
    )
}

export default Device;
