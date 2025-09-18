import { Briefcase, Code, Gamepad2 } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Coder & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              With over 8 years of experience coding in some shape or form, I
              enjoy the problem solving process and can learn quick. I find the
              process of coding to be a joy and am always open to new
              technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about solving all sorts of problems, whether big or
              small, seeing my work come together to create a working product is
              something I greatly enjoy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                {/* PUT RESUME DOWNLOAD LINK HERE */}
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Coding Languages</h4>
                  <p className="text-muted-foreground">
                    Lua, Java, C, Python, html, css, Javascript
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Videogame Development
                  </h4>
                  <p className="text-muted-foreground">
                    A majority of my personal coding experience has been through
                    videogame development in Lua/Luau on the Roblox game
                    platform
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Something Else</h4>
                  <p className="text-muted-foreground">
                    Some other skill or something
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
