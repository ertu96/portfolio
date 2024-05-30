import type { PageLoad } from './$types';
import BuwLogo from '$lib/images/buw-logo.png';
import PlansoLogo from '$lib/images/planso-logo.png';
import DgnLogo from '$lib/images/dgn-logo.png';
import JustRelateLogo from '$lib/images/justrelate-logo.webp';
import ImmocloudLogo from '$lib/images/immocloud-logo.png';

export const load = (() => {
	return {
		technologies: [
			{
				page: 'https://angular.io',
				svg: 'https://angular.io/assets/images/logos/angular/angular.svg',
				alt: 'Angular'
			},
			{
				page: 'https://getbootstrap.com',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
				alt: 'Bootstrap'
			},
			{
				page: 'https://www.cprogramming.com/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
				alt: 'C'
			},
			{
				page: 'https://www.w3schools.com/cpp/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
				alt: 'C++'
			},
			{
				page: 'https://www.w3schools.com/cs/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
				alt: 'C#'
			},
			{
				page: 'https://www.w3schools.com/css/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
				alt: 'CSS3'
			},
			{
				page: 'https://expressjs.com',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
				alt: 'Express'
			},
			{
				page: 'https://www.figma.com/',
				svg: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
				alt: 'Figma'
			},
			{
				page: 'https://git-scm.com/',
				svg: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
				alt: 'git'
			},
			{
				page: 'https://www.w3.org/html/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
				alt: 'HTML5'
			},
			{
				page: 'https://www.java.com',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
				alt: 'Java'
			},
			{
				page: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
				alt: 'JavaScript'
			},
			{
				page: 'https://jestjs.io',
				svg: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
				alt: 'Jest'
			},
			{
				page: 'https://www.linux.org/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
				alt: 'Linux'
			},
			{
				page: 'https://www.mysql.com/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
				alt: 'MySQL'
			},
			{
				page: 'https://nestjs.com/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg',
				alt: 'NestJS'
			},
			{
				page: 'https://nextjs.org/',
				svg: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
				alt: 'Next.js'
			},
			{
				page: 'https://nodejs.org',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
				alt: 'Node.js'
			},
			{
				page: 'https://nuxtjs.org/',
				svg: 'https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg',
				alt: 'Nuxt.js'
			},
			{
				page: 'https://www.php.net',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
				alt: 'PHP'
			},
			{
				page: 'https://reactjs.org/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
				alt: 'React'
			},
			{
				page: 'https://sass-lang.com',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
				alt: 'Sass'
			},
			{
				page: 'https://tailwindcss.com/',
				svg: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
				alt: 'tailwind'
			},
			{
				page: 'https://www.typescriptlang.org/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
				alt: 'TypeScript'
			},
			{
				page: 'https://vuejs.org/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
				alt: 'Vue.js'
			},
			{
				page: 'https://mui.com/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
				alt: 'MUI'
			},
			{
				page: 'https://svelte.dev/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg',
				alt: 'Svelte'
			},
			{
				page: 'https://mongodb.com/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
				alt: 'MongoDB'
			}
		],
		experiences: [
			{
				title: 'immocloud GmbH',
				technologies: ['Vue.js', 'Spring Boot', 'MongoDB'],
				role: 'Full-Stack Developer',
				logo: ImmocloudLogo,
				url: 'https://www.immocloud.de/'
			},
			{
				title: 'JustRelate Germany GmbH',
				logo: JustRelateLogo,
				technologies: ['Java', 'AWS', 'SQL', 'Docker'],
				role: 'Project Developer',
				url: 'https://www.justrelate.com/'
			},
			{
				title: 'Deutsches Gesundheitsnetz Service GmbH',
				technologies: ['React', 'Angular', 'Java'],
				role: 'Full-Stack Developer',
				logo: DgnLogo,
				url: 'https://www.dgn.de/'
			},
			{
				title: 'PlanSo GmbH',
				technologies: ['jQuery', 'PHP', 'MySQL'],
				role: 'Full-Stack Developer',
				logo: PlansoLogo,
				url: 'https://www.planso.de/'
			},
			{
				logo: BuwLogo,
				title: 'University of Wuppertal',
				technologies: ['C', 'C++'],
				role: 'Student',
				url: 'https://www.uni-wuppertal.de/en/'
			}
		]
	};
}) satisfies PageLoad;

export const prerender = 'auto';
export const csr = true;
export const ssr = false;
