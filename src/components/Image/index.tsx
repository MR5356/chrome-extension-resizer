import React from "react";

export interface ImageProps {
    src: string
    alt?: string
    style?: React.CSSProperties
    shadowSrc?: string
}

const Image: React.FC<ImageProps> = (
    {
        src,
        alt = '',
        style = {},
        shadowSrc,
    }
) => {
    const shadowImage = shadowSrc || src;

    return (
        <div
            style={{
                position: 'relative',
                width: '200px',
                height: '200px',
                ...style
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 2,
                    objectFit: 'cover'
                }}
            />
            <div
                style={{
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '10%',
                    width: '100%',
                    height: '100%',
                    borderRadius: '100%',
                    background: `url(${shadowImage}) no-repeat center/cover`,
                    filter: 'blur(10px) brightness(80%) opacity(0.8)',
                    transform: 'scale(0.95)',
                    zIndex: 1
                }}
            />
        </div>
    );
};

export default Image;
