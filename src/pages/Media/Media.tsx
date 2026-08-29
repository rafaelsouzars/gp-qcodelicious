import { Card } from '../../components/index';
import img01 from '../../assets/img/screenshot01.png';
import img02 from '../../assets/img/screenshot02.png';
import img03 from '../../assets/img/screenshot03.png';
import img04 from '../../assets/img/screenshot04.png';
import img05 from '../../assets/img/screenshot05.png';
import img06 from '../../assets/img/screenshot06.png';
import './Media.css';

export function Media() {
    return(
        <div className="media">
            <section className="flex-media">
                <div className="media-item">
                    <img src={img01}/>
                </div>                    
                <div className="media-item">
                        <img src={img02}/>
                </div> 
                <div className="media-item">
                        <img src={img03}/>
                </div> 
                <div className="media-item">
                        <img src={img04}/>
                </div> 
                <div className="media-item">
                        <img src={img05}/>
                </div> 
                <div className="media-item">
                        <img src={img06}/>
                </div>                 
            </section>
            
        </div>
    );
}