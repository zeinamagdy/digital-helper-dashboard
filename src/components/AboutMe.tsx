import img from "../assets/react.svg";
export const AboutMe = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white border-4 border-berlin-blue rounded-3xl shadow-2xl mt-10">
      <div className="flex flex-col items-center text-center">
        {/* Profile Picture Placeholder */}
        <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-berlin-blue mb-6 overflow-hidden">
          <img
            src={img}
            alt="Zeinab Mohamed"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-4xl font-black mb-2">Zeinab Mohamed</h2>
        <p className="text-xl text-berlin-blue font-bold mb-6">
          Software Engineer & AWO Volunteer
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          I am Zeinab, a Berlin-based Software Engineer with a passion for
          inclusive technology. After a professional sabbatical to focus on my
          family, I returned to the tech world by modernizing my stack with
          React 18 and TypeScript. This project was born from my volunteer work
          at AWO Berlin, where I help seniors navigate the digital world. I
          realized that 'Standard' web design often excludes elderly users, so I
          built this dashboard to demonstrate how High-Contrast (A11y) and
          Simplified UX can create digital independence. Technical Stack: React,
          TypeScript, Tailwind CSS, Lucide Icons.
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/zeinab-magdy/"
            className="px-6 py-3 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/zeinamagdy"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
