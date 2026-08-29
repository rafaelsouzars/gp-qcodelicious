import { type CSSProperties } from 'preact';

interface PropsImageLink {
    className?: string,
    url?: string,
    src?: string,
    alt?: string,
    width?: number,
    height?: number, 
    style?: CSSProperties   
};

/**
 * Component ImageLink.
 * 
 * Renders an image wrapped in a link.
 *
 * @param props - Component properties.
 * @param props.className - Component class name.
 * @param props.url - The destination link when clicking the image.
 * @param props.src - The image path or URL.
 * @param props.alt - The accessibility alt text for the image.
 * @param props.width - The optional image width.
 * @param props.height - The optional image height.
 * @param props.style - Custom inline styles. 
 */
export function ImageLink ({ 
    className,
    url = '#', 
    src, 
    alt, 
    width = 50, 
    height = 50, 
    style, 
}: PropsImageLink) {

    return (
        <>
            <a className={className} href={url} target="_blank" rel="noopener noreferrer" style={{...style, width, height}}>
                <img src={src} alt={alt} height={height} width={width} />
            </a>
        </>
    );
}