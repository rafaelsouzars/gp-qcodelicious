import type { ComponentChildren, CSSProperties } from 'preact';
import './style.css';

interface PropsCard {
  style?: CSSProperties,
  children?: ComponentChildren,  
};

export function Card({ children, style }: PropsCard) {  
  return (
    <div className="card" style={style}>
      { children }
    </div>
  )
}

