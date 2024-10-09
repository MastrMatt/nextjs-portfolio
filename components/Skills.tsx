import React from "react";
import { Button } from "./ui/MovingBorders";
import { skillCategories } from "../data-acess";

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
										className="text-sm md:text-base bg-purple-100 dark:bg-purple-900 rounded-full px-3 py-1"
									>
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
