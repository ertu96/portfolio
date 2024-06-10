<script lang="ts">
	import TimelineMiddle from '$lib/icons/TimelineMiddle.svelte';
	import BuwLogo from '$lib/images/buw-logo.png';
	import PlansoLogo from '$lib/images/planso-logo.webp';
	import OitLogo from '$lib/images/oit-logo.png';
	import DgnLogo from '$lib/images/dgn-logo.png';
	import JustRelateLogo from '$lib/images/justrelate-logo.webp';
	import ImmocloudLogo from '$lib/images/immocloud-logo.png';
	import TimelineDialog from '../dialogs/TimelineDialog.svelte';
	import type { Experience } from '../../interfaces/Experience';

	let experiences = [
		{
			duration: '01/2024-current',
			city: 'Dusseldorf',
			country: 'de',
			title: 'immocloud GmbH',
			description: 'As a full stack developer for a SaaS real estate management platform, I contributed to both frontend and backend development using Vue.js and Spring Boot, respectively, with MongoDB as the database. Working in an Agile environment with Scrum, I was involved in regular sprints, stand-ups, and retrospectives to ensure continuous improvement and delivery. I gained substantial experience in testing methodologies and frameworks, particularly with JUnit and Mockito for backend testing and Vitest for frontend testing, enhancing the overall quality and reliability of the application. Additionally, I collaborated closely with cross-functional teams to integrate new features and optimize performance, ensuring the platform met the evolving needs of users in the real estate sector.',
			role: 'Full-Stack Developer',
			technologies: ['Vue.js', 'Spring Boot', 'MongoDB'],
			logo: ImmocloudLogo,
			url: 'https://www.immocloud.de/'

		},
		{
			duration: '07/2023-12/2023',
			city: 'Berlin',
			country: 'de',
			title: 'JustRelate Germany GmbH',
			description: 'At JustRelate, a remote position was held focusing on consulting and project development. The primary responsibility was the customization of an internal CRM software called PiSA Sales, which is widely used by large companies. This role involved making adjustments using Java and SQL, specifically with Oracle and PostgreSQL databases, to tailor the software to meet the unique needs of various clients. Additionally, the position required frequent customer appointments to understand their requirements, provide consultation, and ensure the effective implementation of customized solutions. This experience highlights a strong ability to work remotely, manage client relationships, and apply technical expertise to enhance enterprise-level CRM systems.',
			role: 'Project Developer',
			technologies: ['Java', 'AWS', 'SQL', 'Docker'],
			logo: JustRelateLogo,
			url: 'https://www.justrelate.com/'
		},
		{
			duration: '11/2021-06/2023',
			city: 'Dusseldorf',
			country: 'de',
			title: 'Deutsches Gesundheitsnetz Service GmbH',
			description: 'At Deutsches Gesundheitsnetz Service GmbH, a company operating within the medical industry, significant contributions were made as part of the development team. Utilizing technologies such as Angular, React, and Java (Quarkus), involvement spanned across multiple projects that were critical to the company\'s operations. Key projects included rewriting a hardware management tool to enhance efficiency and reliability, developing an online shop for card prints to streamline customer orders, and creating a robust mail client to improve communication capabilities. These diverse projects not only demonstrated proficiency in various technologies but also underscored the ability to apply technical skills effectively within the medical industry, addressing specific needs and improving overall functionality.',
			role: 'Full-Stack Developer',
			technologies: ['React', 'Angular', 'Java'],
			logo: DgnLogo,
			url: 'https://www.dgn.de/'
		},
		{
			duration: '02/2019-10/2021',
			city: 'Dusseldorf',
			country: 'de',
			title: 'PlanSo GmbH',
			description: 'The professional journey commenced with a two-month internship at PlanSo GmbH, where initial exposure to software development led to a part-time role as a software developer. This foundational experience transitioned seamlessly into the first full-time position as a Full-Stack Developer at PlanSo GmbH, a company specializing in ERP SaaS solutions for the automobile industry, aimed at digitalizing workflows for car shops. In this role, responsibilities included developing and maintaining software using jQuery, PHP, and MySQL, and providing IT support to enhance overall system functionality.\n\nAdditionally, there was significant contribution to a machine learning application, specifically the implementation of an app designed to create cost estimates for repair orders in the body and paint industry through photo capture using artificial intelligence. This project, involved developing an application for creating cost estimates for repair orders in the body and paint industry through photo capture using artificial intelligence. This showcased the ability to integrate advanced technologies to solve industry-specific problems.\n\nThis diverse range of experiences has fostered a robust skill set in full-stack development, machine learning, and IT support, making a versatile and knowledgeable professional in the tech industry.',
			role: 'Full-Stack Developer',
			technologies: ['jQuery', 'PHP', 'MySQL'],
			logo: PlansoLogo,
			url: 'https://www.planso.de/'
		},
		{
			duration: '04/2018-09/2018',
			city: 'Hirakata',
			country: 'jp',
			title: 'Osaka Institute of Technology',
			description: 'A six-month study abroad research activity was conducted in the Multimedia Department, focusing on the development of a prototype for a running game designed for Android smartphones. Utilizing Unity and C#, the research involved extensive development and testing to create an engaging and functional game prototype. This experience provided a deepened expertise in mobile game development, strengthened programming skills in C#, and offered valuable insights into the practical application of multimedia technologies.',
			role: 'Student',
			technologies: ['C#', 'Unity'],
			logo: OitLogo,
			url: 'https://www.oit.ac.jp/english/'
		},
		{
			duration: '10/2015-03/2021',
			city: 'Wuppertal',
			country: 'de',
			title: 'University of Wuppertal',
			description: 'I hold a Bachelor\'s degree in Information Science, where I developed a comprehensive understanding of both theoretical and practical aspects of the field. My academic journey was enriched with a strong emphasis on electrical engineering and programming, allowing me to acquire and refine technical skills in languages such as C, C++, and database management with MySQL. During my studies, I completed an internship as a software developer, gaining hands-on experience in coding, software design, and problem-solving in a professional setting. Additionally, I had the opportunity to study abroad in Japan, an experience that not only expanded my technical knowledge but also enhanced my cultural awareness and adaptability in diverse environments. This blend of technical expertise and global experience equips me with a unique perspective and a versatile skill set, making me well-prepared for challenges in the tech industry.',
			role: 'Student',
			technologies: ['C', 'C++', 'MySQL'],
			logo: BuwLogo,
			url: 'https://www.uni-wuppertal.de/en/'
		}
	];

	let selectedExperience: Experience;

	const openDialog = (experience: Experience) => {
		selectedExperience = experience;
		const dialog = document.getElementById('timeline-modal');
		if (!dialog) return;
		dialog.showModal();
	};
</script>

<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
	{#each experiences as experience, index}
		<li>
			{#if index > 0}
				<hr />
			{/if}
			<div class="timeline-middle">
				<TimelineMiddle />
			</div>
			<div class={`timeline-${index%2===0 ? 'start': 'end'} ${index%2===0 && 'md:text-end'} mb-10 cursor-pointer`}
					 on:click={() => openDialog(experience)} role="button" tabIndex={0}
			>
				<time class="font-mono italic bg-success dark:text-black p-1 rounded-sm">{experience.duration}</time>
				<div class="text-lg font-black">{experience.title}</div>
				<p>{experience.role}</p>
				<ul class={`hidden px-2 md:flex flex-col gap-0.5 ${index%2===0 && 'items-end'}`}>
					{#each experience.technologies as technology}
						<li
							class="badge badge-lg bg-black/10 dark:bg-white/10 dark:text-white border-0 text-sm font-light">{technology}</li>
					{/each}
				</ul>
			</div>
			{#if index < experiences.length - 1}
				<hr />
			{/if}
		</li>
	{/each}
</ul>
<TimelineDialog experience={selectedExperience} />
