const transformer = (portfolio, language) => {
  return {
    jobTitle: portfolio[language]['Job Title'],
    about: portfolio[language].About,
    github: `https://github.com/${portfolio.github}`,
    linkedin: `https://www.linkedin.com/in/${portfolio.linkedin}/`,
    skills: portfolio.Skills,
  };
};

export default transformer;
