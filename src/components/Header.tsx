import { useLocation } from 'preact-iso';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { LanguageButton } from './index';
import { useLanguage } from '../contexts/index'
import { BASEURL } from '../shared/variables.ts'

export function Header() {
	const { url } = useLocation();
	const { t } = useLanguage();	

	return (
		<header>
			<nav>
				<a href={BASEURL} class={url == `/` && 'active'}>
					{t.menuHome}
				</a>												
				<a href={`${BASEURL}media`} class={url == `/media` && 'active'}>
					{t.menuMedia}
				</a>				
			</nav>
			<a href="https://discord.gg/nnAKASFDF" target="_blank" rel="noopener noreferrer" class={url == 'https://discord.gg/nnAKASFDF' && 'active'}>
				<FaDiscord size="1.2rem"/>	
			</a>			
			<a href="https://github.com/rafaelsouzars/qcodelicious" target="_blank" rel="noopener noreferrer" class={url == 'https://github.com/slothhtml' && 'active'}>
				<FaGithub size="1.2rem"/>	
			</a>
			<LanguageButton/>						
		</header>
	);
}
