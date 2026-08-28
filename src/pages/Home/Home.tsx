import qCodeliciousLogo from '../../assets/qcodelicious.png';
import electrobunLogo from '../../assets/electrobun-logo.png';
import aceEditorLogo from '../../assets/ace-logo.png';
import swalLogo from '../../assets/SweetAlert2.png';
import muiLogo from '../../assets/material-ui.svg';
import { Card, DownloadButton, ImageLink } from '../../components/index';
import './Home.css';

export function Home() {	

	return (
		<div className="home">
			<section className="flex">
				<div className="title-content">
					<a href="https://github.com/rafaelsouzars/qcodelicious" target="_blank">
						<img src={qCodeliciousLogo} alt="qCodelicious logo" height="140" width="140" />
					</a>
					<h1>qCodelicious</h1>
					<p>A simple code editor</p>
					<Card style={{						
						display: 'flex',
						alignItems: 'center',					 
						justifyContent: 'space-around', 
						gap: '10px'}}>					
					<ImageLink src={electrobunLogo} alt="Electrobun" url="https://blackboard.sh/electrobun/"/>	
					<ImageLink src={aceEditorLogo} alt="Ace Editor" url="https://ace.c9.io"/>
					<ImageLink src={swalLogo} alt="SweetAlert2" url="https://sweetalert2.github.io"/>
					<ImageLink src={muiLogo} alt="Electrobun" url="https://blackboard.sh/electrobun/"/>					
				</Card>
				</div>
				<Card style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}>
					<p style={{ maxWidth: '300px', textAlign: 'justify' }}>An editor for those who just want to write and quickly preview, without visual clutter.</p>
					<div>
						<DownloadButton>Latest Download</DownloadButton>
					</div>									
				</Card>
			</section>				
		</div>
	);
}
