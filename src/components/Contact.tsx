const Contact = () => {
  return (
    <section id="contact" className="px-4 md:px-12 mt-24 mb-20">
      <h3 className="text-2xl font-semibold mb-4">Contact</h3>
      <p className="text-gray-700 dark:text-gray-300">
        If you’d like to connect, feel free to reach out:
      </p>
      <ul className="mt-4 space-y-2 text-blue-500 text-sm">
        <li>
          📧{" "}
          <a href="mailto:chloe.lee0436@gmail.com" className="underline">
            chloe.lee0436@gmail.com
          </a>
        </li>
        <li>
          💼{" "}
          <a
            href="https://www.linkedin.com/in/eunsuk-lee/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          🐙{" "}
          <a
            href="https://github.com/ChloeLeeFullStackDeveloper"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
