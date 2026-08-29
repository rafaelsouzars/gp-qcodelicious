import type { PropsWithChildren } from 'preact/compat';
import { FaWindows } from 'react-icons/fa';

interface DownloadButtonProps {
  className?: string;
  url?: string;  
}

export function DownloadButton ({ 
  children, 
  className = "download-button",
  url = "#", 
}:PropsWithChildren<DownloadButtonProps>) {
  return (
    <>
      <button className={className}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <FaWindows/>
          { children }
        </a>        
      </button>
    </>
  )
}