const Hero = () => {
  return (
    <section className="flex flex-col items-start gap-4 px-4 md:px-12 mt-20">
      <h2 className="text-4xl font-bold">Hi, I’m Chloe Lee 👋</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
        I’m a full stack software developer with a background in Computer
        Science and a passion for building clean, modern web applications using
        React, TypeScript, Firebase, and Azure. I also love integrating AI into
        products to create smart, user-friendly experiences.
      </p>
      <a
        href="#projects"
        className="mt-4 inline-block px-6 py-2 border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
