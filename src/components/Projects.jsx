import Fade from "react-reveal/Fade";

const Projects = () => {
  const projects = [
    {
     
      name: "Human-Computer interaction using facial and gesture recognition",
      description: "The main objective of this project is to develop a virtual device which acts same as like a conventional mouse",
      link: "https://ieeexplore.ieee.org/document/6694276",
    },
    {
      name: "Employing Block Chain In Agriculture",
      description: "The main objective of this project is to design Blockchain based online application for farmers, distributors, and Miller. Farmers can upload crop details, view orders from distributors or millers and can view fertilizers or pesticides details.",
      link: "https://rejolut.com/blog/blockchain-in-agriculture/",
    },
  ];
  return (
    <Fade right>
      <section className="max-w-screen-md mx-auto mt-10 mb-[4.5rem]">
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="shadow-lg flex flex-col dark:bg-gray-900"
                >
                  <div className="flex flex-col justify-center items-center flex-1 p-6 bg-container-color rounded">
                    <img src={project.imageURL} alt="" />
                    <h1 className="text-left mt-4">{project.name}</h1>
                    <p>{project.description}</p>
                    <div className=" flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 text-blue-700">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer"
                      >
                        View More{" "}
                        <i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </Fade>
  );
};

export default Projects;
