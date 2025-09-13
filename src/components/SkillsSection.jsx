import { useState } from "react";
import { cn } from "@/lib/utils";
import { act } from "react";

const skills = [
  // Languages
  { name: "Lua/Luau", level: 90, category: "Languages" },
  { name: "LaTeX", level: 70, category: "Languages" },
  { name: "Java", level: 60, category: "Languages" },
  { name: "C", level: 50, category: "Languages" },
  { name: "Python", level: 40, category: "Languages" },
  { name: "HTML/CSS", level: 25, category: "Languages" },
  { name: "Javascript", level: 10, category: "Languages" },

  //Tools
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Overleaf", level: 75, category: "Tools" },
  { name: "GitHub", level: 50, category: "Tools" },
];

const categories = ["All", "Languages", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flext-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {" "}
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-xl">{skill.name}</h3>
                </div>
                <div className="text-right mb-4">
                  <span className="text-md text-muted-foreground">
                    {" "}
                    {skill.level}%{" "}
                  </span>
                </div>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
