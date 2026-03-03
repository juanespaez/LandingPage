const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold font-serif">
              Mentor<span className="text-primary">.</span>
            </p>
            <p className="text-background/60 mt-2 text-sm">
              Transforming lives through guidance and mentorship.
            </p>
          </div>

          <div className="flex gap-6">
            {["LinkedIn", "Twitter", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-background/60 hover:text-primary transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} Mentor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
