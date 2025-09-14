import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MessageSquare, Calendar } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "markazulbayaan9@gmail.com",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our enrollment specialist",
      contact: "+234 808 928 7065",
      action: "Call Now",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with us instantly during business hours",
      contact: "Available 9 AM - 6 PM GMT",
      action: "Start Chat",
    },
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a free consultation with our education advisors",
      contact: "30-minute sessions available",
      action: "Book Now",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our programs? Need help with enrollment?
              We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to reach us. We're committed to providing
              excellent support to all our families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="font-medium text-primary">
                    {method.contact}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Check out our comprehensive FAQ section for quick answers to
              common questions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                className="text-left animate-fade-up"
                style={{ animationDelay: "1s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Enrollment Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn about our simple enrollment process, requirements, and
                    what to expect.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="text-left animate-fade-up"
                style={{ animationDelay: "1.2s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Payment & Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Information about our pricing, payment methods, and
                    financial assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="animate-fade-up"
              style={{ animationDelay: "1.4s" }}
            >
              <a href="/faq">View All FAQs</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
