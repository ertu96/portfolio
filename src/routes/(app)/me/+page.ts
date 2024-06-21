import type { PageLoad } from './$types';
import BuwLogo from '$lib/images/buw-logo.png';
import PlansoLogo from '$lib/images/planso-logo.webp';
import DgnLogo from '$lib/images/dgn-logo.png';
import JustRelateLogo from '$lib/images/justrelate-logo.webp';
import ImmocloudLogo from '$lib/images/immocloud-logo.png';

export const load = (() => {
	return {
		technologies: [
			{
				page: 'https://www.java.com',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
				alt: 'Java'
			},
			{
				page: 'https://www.typescriptlang.org/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
				alt: 'TypeScript'
			},
			{
				page: 'https://docker.com/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
				alt: 'Docker'
			},
			{
				page: 'https://nestjs.com/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg',
				alt: 'NestJS'
			},
			{
				page: 'https://sass-lang.com',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
				alt: 'Sass'
			},
			{
				page: 'https://reactjs.org/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
				alt: 'React'
			},
			{
				page: 'https://vuejs.org/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
				alt: 'Vue.js'
			},
			{
				page: 'https://spring.io/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',
				alt: 'Spring Boot'
			},
			{
				page: 'https://vitest.dev/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vitest/vitest-original.svg',
				alt: 'vitest'
			},
			{
				page: 'https://junit.org/junit5/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/junit/junit-original.svg',
				alt: 'JUnit 5'
			},
			{
				page: 'https://www.postgresql.org/',
				svg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
				alt: 'PostgreSQL'
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
