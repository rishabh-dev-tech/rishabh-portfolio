import SkillCircle from "./SkillCircle";

const skills = [
  { name: "React", value: 85 },
  { name: "JavaScript", value: 80 },
  { name: "Node.js", value: 75 },
  { name: "Express", value: 70 },
  { name: "MongoDB", value: 78 },
  { name: "Tailwind CSS", value: 82 },
  { name: "JWT / Auth", value: 72 },
  { name: "REST APIs", value: 76 },
];

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-14">
      {skills.map((s) => (
        <SkillCircle
          key={s.name}
          name={s.name}
          percentage={s.value}
        />
      ))}
    </div>
  );
}