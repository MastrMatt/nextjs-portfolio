import React from "react";
import { Button } from "./ui/MovingBorders";
import {
	GitOriginal,
	DockerOriginal,
	PostgresqlOriginal,
	SqliteOriginal,
	MongodbOriginal,
	JavaOriginal,
	PythonOriginal,
	JuliaOriginal,
	ROriginal,
	COriginal,
	Html5Original,
	Css3Original,
	JavascriptOriginal,
	TypescriptOriginal,
	ReactOriginal,
	NextjsOriginal,
	TailwindcssOriginal,
	DjangoPlain,
	NodejsOriginal,
	ExpressOriginal,
	CypressioLine,
	JestPlain,
	SwaggerPlain,
	SocketioOriginal,
} from "devicons-react";

const skillCategories = [
	{
		id: 1,
		title: "Languages and Tools",
		skills: [
			"Git",
			"Docker",
			"PostgreSQL",
			"SQLite3",
			"MongoDB",
			"Java",
			"Python",
			"Julia",
			"R",
			"C",
			"RISC-V Assembly",
		],
	},
	{
		id: 2,
		title: "Web Technologies",
		skills: [
			"HTML/CSS/JS",
			"TypeScript",
			"React",
			"Next.js",
			"Tailwind CSS",
			"Shadcn/UI",
			"Django",
			"Node.js",
			"Express.js",
			"Jest",
			"Cypress",
			"JSDoc",
			"Swagger",
			"Socket.io",
		],
	},
];

const getSkillIcon = (skill: string) => {
	const iconMap: { [key: string]: React.ReactNode } = {
		Git: <GitOriginal className="w-5 h-5 mr-2" />,
		Docker: <DockerOriginal className="w-5 h-5 mr-2" />,
		PostgreSQL: <PostgresqlOriginal className="w-5 h-5 mr-2" />,
		SQLite3: <SqliteOriginal className="w-5 h-5 mr-2" />,
		MongoDB: <MongodbOriginal className="w-5 h-5 mr-2" />,
		Java: <JavaOriginal className="w-5 h-5 mr-2" />,
		Python: <PythonOriginal className="w-5 h-5 mr-2" />,
		Julia: <JuliaOriginal className="w-5 h-5 mr-2" />,
		R: <ROriginal className="w-5 h-5 mr-2" />,
		C: <COriginal className="w-5 h-5 mr-2" />,
		"HTML/CSS/JS": (
			<>
				<Html5Original className="w-5 h-5 mr-1" />
				<Css3Original className="w-5 h-5 mr-1" />
				<JavascriptOriginal className="w-5 h-5 mr-2" />
			</>
		),
		TypeScript: <TypescriptOriginal className="w-5 h-5 mr-2" />,
		React: <ReactOriginal className="w-5 h-5 mr-2" />,
		"Next.js": <NextjsOriginal className="w-5 h-5 mr-2" />,
		"Tailwind CSS": <TailwindcssOriginal className="w-5 h-5 mr-2" />,
		Django: <DjangoPlain className="w-5 h-5 mr-2" />,
		"Node.js": <NodejsOriginal className="w-5 h-5 mr-2" />,
		"Express.js": <ExpressOriginal className="w-5 h-5 mr-2" />,
		Jest: <JestPlain className="w-5 h-5 mr-2" />,
		Cypress: <CypressioLine className="w-5 h-5 mr-2" />,
		Swagger: <SwaggerPlain className="w-5 h-5 mr-2" />,
		"Socket.io": <SocketioOriginal className="w-5 h-5 mr-2" />,
	};

	return iconMap[skill] || null;
};

const Skills = () => {
	return (
		<div className="py-20 w-full">
			<h1 className="heading">
				My <span className="text-purple">ToolBox</span>
			</h1>

			<div className="w-full mt-12 flex flex-wrap justify-center gap-4">
				{skillCategories.map((category) => (
					<Button
						key={category.id}
						duration={Math.floor(Math.random() * 10000) + 15000}
						borderRadius="1.75rem"
						style={{
							background: "rgb(4,7,29)",
							backgroundColor:
								"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
							borderRadius: `calc(1.75rem * 0.96)`,
						}}
						className="flex-shrink-0 text-black dark:text-white border-neutral-200 dark:border-slate-800"
					>
						<div className="p-4 md:p-6">
							<h2 className="text-xl md:text-2xl font-bold mb-2">
								{category.title}
							</h2>
							<ul className="flex flex-wrap gap-2">
								{category.skills.map((skill, index) => (
									<li
										key={index}
										className="text-sm md:text-base bg-white dark:bg-gray-800 rounded-full px-3 py-1 flex items-center"
									>
										{getSkillIcon(skill)}
										{skill}
									</li>
								))}
							</ul>
						</div>
					</Button>
				))}
			</div>
		</div>
	);
};

export default Skills;
