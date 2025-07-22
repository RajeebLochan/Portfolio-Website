import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "html5",
    "css3",
    "javascript",
    "react",
    "tailwindcss",
    "vitejs",
    "python",
    "django",
    "azure",
    "digitalocean",
    "linux",
    "git",
    "github",
    "postman",
    "sqlite",
    "sql",
    "excel",
    "numpy",
    "pandas",
    "tensorflow",
    "pytorch",
    "opencv",
    "powerbi",
    "streamlit",
    "cisco",
  ];
  
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={35}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={22} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
