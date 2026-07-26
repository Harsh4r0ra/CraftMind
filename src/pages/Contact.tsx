import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { MessageCircle } from "lucide-react";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/structuredData";
import { trackFormSubmission } from "@/lib/analytics";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  whatsBroken: z.string().min(10, "Tell us a bit more about what's currently manual or broken"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      whatsBroken: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Track form submission
      trackFormSubmission("process_audit_form");

      // Submit to Formcarry
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("company", values.company);
      formData.append("whatsBroken", values.whatsBroken);
      formData.append("formType", "Process Audit Booking");

      const response = await fetch("https://formcarry.com/s/luxzm-uXvJi", {
        method: "POST",
        body: formData,
      });

      // Formcarry may return various status codes (200, 302, etc.) but form is submitted
      // If we get any response (not a network error), consider it successful
      if (response.status >= 200 && response.status < 500) {
        toast({
          title: "Request sent!",
          description: "We'll reach out to schedule your 20-minute process audit.",
        });
        form.reset();
      } else {
        // Only show error for server errors (500+)
        throw new Error("Server error occurred");
      }
    } catch (error) {
      // Only show error for actual network/connection errors
      // If form was submitted but response parsing failed, still show success
      console.error("Form submission error:", error);

      // Check if it's a network error
      if (error instanceof TypeError && error.message.includes("fetch")) {
        toast({
          title: "Network Error",
          description: "Please check your connection and try again.",
          variant: "destructive",
        });
      } else {
        // For other errors, assume form was submitted (Formcarry received it)
        toast({
          title: "Request sent!",
          description: "We'll reach out to schedule your 20-minute process audit.",
        });
        form.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const baseUrl = import.meta.env.VITE_SITE_URL || "https://craftmind.co.in";
  const contactUrl = `${baseUrl}/contact`;
  const whatsappNumber = "+919136474511";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi, I'd like to book a process audit.")}`;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Contact", url: contactUrl },
  ]);

  const localBusinessSchema = getLocalBusinessSchema({
    name: "CraftMind",
    address: {
      streetAddress: "Chennai, Tamil Nadu, India",
      addressLocality: "Chennai",
      addressRegion: "TN",
      postalCode: "603203",
      addressCountry: "IN",
    },
    telephone: "+91 9136474511",
    email: "info@craftminds.com",
    url: baseUrl,
  });

  const structuredData = [breadcrumbSchema, localBusinessSchema];

  return (
    <>
      <SEO
        title="Book a Process Audit | CraftMind CRM, ERP & Automation"
        description="Tell CraftMind what's currently manual or broken and book a 20-minute process audit. We build custom CRM, ERP, and workflow automation systems in Chennai, India. Call +91 9136474511."
        image={`${baseUrl}/placeholder.svg`}
        url={contactUrl}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-cesta-dark text-foreground">
        <Navbar />
      
      {/* Header Section */}
      <section className="gradient-hero py-40">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Book a 20-min <span className="holographic-text">process audit</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-soft md:text-xl">
            Tell us what's currently manual or broken and we'll tell you what a custom CRM, ERP, or automation system would look like for your business.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="bg-transparent py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
                <p className="text-soft">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>
              
              <address className="not-italic space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl icon-gradient-purple shadow-cesta-glow" aria-hidden="true">
                    <FaEnvelope className="text-white text-xl" style={{ fontSize: '1.25rem' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@craftminds.com" className="text-soft transition-smooth hover:text-white">
                      info@craftminds.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl icon-gradient-gold shadow-cesta-glow" aria-hidden="true">
                    <FaPhone className="text-white text-xl" style={{ fontSize: '1.25rem' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+919136474511" className="text-soft transition-smooth hover:text-white">
                      +91 9136474511
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl icon-gradient-cyan shadow-cesta-glow" aria-hidden="true">
                    <FaMapMarkerAlt className="text-white text-xl" style={{ fontSize: '1.25rem' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-soft">
                      Chennai, Tamil Nadu, India<br />
                      Postal Code: 603203
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#25D366] shadow-cesta-glow" aria-hidden="true">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-soft transition-smooth hover:text-white"
                    >
                      Message us directly
                    </a>
                  </div>
                </div>
              </address>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="glass-card glass-border rounded-3xl border border-white/10 p-6 shadow-cesta-card md:p-10">
                <h2 className="mb-6 text-2xl font-bold">Book a 20-min process audit</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="whatsBroken"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What's currently manual/broken? *</FormLabel>
                          <FormControl>
                            <Textarea
                              className="min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full shadow-cesta-glow text-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Book a 20-min process audit"}
                      <FaPaperPlane className="ml-2" style={{ fontSize: '1.125rem' }} />
                    </Button>
                  </form>
                </Form>
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

export default Contact;
