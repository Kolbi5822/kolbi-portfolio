import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 pt-3 flex flex-wrap justify-between items-center">
      {" "}
      <div className="flex space-x-3">
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
      <p className="text-lg text-muted-foreground">
        {" "}
        Kolbi Lee &copy; {new Date().getFullYear()}
      </p>
      <a
        href="#home"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
