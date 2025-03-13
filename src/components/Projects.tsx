const Projects = () => {
  return (
    <section id="projects" className="px-4 md:px-12 mt-24">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Project 1 */}
        <div className="border p-4 rounded shadow hover:shadow-md transition">
          <h4 className="text-lg font-semibold">AI Tax Assistant</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            A smart web app that assists with basic tax guidance using OpenAI’s
            API and Firebase. Built with React and Tailwind CSS.
          </p>
          <div className="mt-3 text-sm text-blue-500 space-x-4">
            <a
              href="https://github.com/ChloeLeeFullStackDeveloper/ai_tax_preparation_tool"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://https://ai-tax-prep.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border p-4 rounded shadow hover:shadow-md transition">
          <h4 className="text-lg font-semibold">
            Azure Data Migration Dashboard
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            A full stack dashboard for visualizing ETL migration metrics. React
            frontend + .NET backend + Azure SQL + Data Factory.
          </p>
          <div className="mt-3 text-sm text-blue-500 space-x-4">
            <a
              href="https://github.com/ChloeLeeFullStackDeveloper/Microservice"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
