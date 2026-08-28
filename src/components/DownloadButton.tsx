import { FaWindows } from 'react-icons/fa';

export function DownloadButton ({ children }) {
  return (
    <>
      <button className="download-button button">
        <FaWindows/>
        { children }
      </button>
    </>
  )
}