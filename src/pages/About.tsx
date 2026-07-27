import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TargetIcon, EyeIcon, HeartIcon, BoltIcon } from "@/components/icons";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/structuredData";

const values = [
  {
    icon: TargetIcon,
    title: "Mission",
    description: "To get companies off spreadsheets and manual processes with CRM, ERP, and automation systems built around how they actually work.",
    iconGradient: "icon-gradient-electric",
  },
  {
    icon: EyeIcon,
    title: "Vision",
    description: "To be the go-to technology partner for companies that have outgrown Excel but aren't ready for a bloated off-the-shelf platform.",
    iconGradient: "icon-gradient-gold",
  },
  {
    icon: HeartIcon,
    title: "Values",
    description: "Integrity, plain-language communication, and a client-first approach guide everything we do. We build long-term partnerships, not one-off projects.",
    iconGradient: "icon-gradient-pink",
  },
  {
    icon: BoltIcon,
    title: "Focus",
    description: "We specialize in CRM, ERP, and workflow automation, not a generalist mix of everything, so every project gets that specific expertise.",
    iconGradient: "icon-gradient-electric-gold",
  },
];

const About = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://craftmind.co.in";
  const aboutUrl = `${baseUrl}/about`;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "About", url: aboutUrl },
  ]);

  const organizationSchema = getOrganizationSchema({
    name: "CraftMind",
    url: baseUrl,
    logo: `${baseUrl}/placeholder.svg`,
    description: "CraftMind builds custom CRM, ERP, and workflow automation systems for companies still running operations on spreadsheets and manual processes.",
    contactPoint: {
      email: "harsharora.work@gmail.com",
      telephone: "+91 9136474511",
      contactType: "Customer Service",
      areaServed: ["IN", "Worldwide"],
    },
  });

  const structuredData = [breadcrumbSchema, organizationSchema];

  return (
    <>
      <SEO
        title="About CraftMind | Custom CRM, ERP & Automation, Chennai, India"
        description="CraftMind builds custom CRM, ERP, and workflow automation systems for companies still running operations on spreadsheets and manual processes. Based in Chennai, India."
        image={`${baseUrl}/placeholder.svg`}
        url={aboutUrl}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-cesta-dark text-foreground">
        <Navbar />
      
      {/* Header Section */}
      <section className="gradient-hero border-b border-border py-24 md:py-32">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            About <span className="holographic-text">CraftMind</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-soft md:text-xl">
            Custom CRM, ERP, and workflow automation for companies still running on spreadsheets
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-transparent py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-border bg-white p-10 shadow-cesta-card animate-fade-in">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Our <span className="holographic-text">Story</span>
            </h2>
            <p className="text-lg leading-relaxed text-soft">
              CraftMind was founded to solve a specific problem: companies that have outgrown Excel but haven't
              found software that actually fits how they work. We kept seeing the same pattern, sales tracked in
              spreadsheets, inventory reconciled by hand, approvals chased over email, and generic off-the-shelf
              tools that force a business to change its process to fit the software instead of the other way around.
            </p>
            <p className="text-lg leading-relaxed text-soft">
              Today, we focus on exactly three things: CRM systems, ERP systems, and workflow automation. Not a
              broad mix of web, mobile, and AI work, one specific problem, solved well.
            </p>
            <p className="text-lg leading-relaxed text-soft">
              What sets us apart is our commitment to understanding your unique challenges and goals. We don't offer
              one-size-fits-all solutions. Instead, we take the time to learn about your business, your industry,
              and your process, then build custom software that drives real results.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl animate-fade-in">
            What Drives <span className="holographic-text">Us</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass-card glass-border transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${value.iconGradient} shadow-cesta-glow`}>
                    <value.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-soft">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-transparent py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-center animate-fade-in">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Our <span className="holographic-text">Team</span>
            </h2>
            <p className="text-lg leading-relaxed text-soft">
              Behind CraftMind is a team of dedicated professionals with diverse backgrounds in software engineering, 
              design, project management, and business strategy. Each team member brings unique expertise and a 
              shared passion for technology and innovation.
            </p>
            <p className="text-lg leading-relaxed text-soft">
              We foster a culture of continuous learning and collaboration, ensuring that we stay at the forefront 
              of technological advancements and deliver the best possible solutions to our clients.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="glass-card glass-border rounded-3xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow">
                <div className="mb-2 text-4xl font-bold text-primary">50+</div>
                <p className="text-soft">Projects Delivered</p>
              </div>
              <div className="glass-card glass-border rounded-3xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow">
                <div className="mb-2 text-4xl font-bold text-primary">30+</div>
                <p className="text-soft">Expert Developers</p>
              </div>
              <div className="glass-card glass-border rounded-3xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow">
                <div className="mb-2 text-4xl font-bold text-primary">100%</div>
                <p className="text-soft">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default About;
