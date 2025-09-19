import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="containter max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Kolbi
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Lee
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Software </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Developer
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a Junior CS and Math double major at{" "}
            <a
              href="https://www.jmu.edu/index.shtml"
              target="_blank"
              className="hover:text-primary transition-colors duration-200"
            >
              James Madison University
            </a>{" "}
            who loves to code. I work on all sorts of things from video games to
            front-end projects using a plethora of languages like Lua, Java, C,
            and Python among others. I'm currently looking for an internship
            opportunity and would be happy to hear from you if you're intrested!
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <div className="pt-4">
              <div className="flex space-x-6 justify-center">
                <a
                  href="https://www.linkedin.com/in/kolbi-lee-b1a679265/"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/10 border hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/Kolbi5822"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/10 border hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  <Github />
                </a>
                <a
                  href="mailto:kolbi5822@gmail.com"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/10 border hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  <Mail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 right-1/2 transform -translate x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
