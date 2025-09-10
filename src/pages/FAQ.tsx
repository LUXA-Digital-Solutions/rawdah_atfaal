import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  BookOpen,
  Users,
  CreditCard,
  Clock,
  Globe,
  MessageSquare,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("enrollment");

  const categories = [
    { id: "enrollment", label: "Enrollment", icon: Users },
    { id: "curriculum", label: "Curriculum", icon: BookOpen },
    { id: "payment", label: "Payment", icon: CreditCard },
    { id: "classes", label: "Classes", icon: Clock },
    { id: "technical", label: "Technical", icon: Globe },
  ];

  const faqs = {
    enrollment: [
      {
        question: "What are the age requirements for enrollment?",
        answer:
          "Our programs are designed for children aged 4-15 years. We have age-appropriate curriculum for different developmental stages.",
      },
      {
        question: "Do I need prior Islamic knowledge for my child to enroll?",
        answer:
          "No prior knowledge is required! Our programs are designed for beginners and build foundational knowledge progressively. We assess each child's current level during the initial consultation.",
      },
      {
        question: "How do I enroll my child in a program?",
        answer:
          "Enrollment is simple: 1) Contact us for a free assessment, 2) Choose your preferred program and payment plan, 3) Complete the enrollment form, 4) Receive necessary credentials for classes. The entire process takes less than 30 minutes.",
      },
      {
        question: "Can I enroll multiple children?",
        answer:
          "Yes! We offer family discounts for multiple children. Contact us for details on our sibling discount program.",
      },
      {
        question: "What if my child misses a class?",
        answer:
          "If a student has a genuine reason for missing a class and informs us at least one hour before, we provide a make-up class to ensure they don’t fall behind. Our instructors are always available for additional support.",
      },
    ],
    curriculum: [
      {
        question: "What methodology do you use for Quranic teaching?",
        answer:
          "We use the proven Qāʿidah Nūrāniyyah/Fathu Rahman method for Quranic reading, combined with modern teaching techniques. This systematic approach ensures proper pronunciation (Tajweed) and understanding.",
      },
      {
        question: "How is the Hadith program structured?",
        answer:
          "Our Hadith program uses 'At-tifl al-labiib' textbook with story-based learning. We cover essential Islamic values including kindness, honesty, respect for parents, helping others, good manners, and prayer & worship.",
      },
      {
        question: "Do you provide learning materials?",
        answer:
          "Yes! All required digital textbooks, workbooks, and other digital resources are included in your tuition.",
      },
      {
        question: "How do you assess student progress?",
        answer:
          "We use continuous assessment through weekly quizzes, monthly progress reports, and quarterly comprehensive evaluations. Parents receive detailed feedback and can schedule conferences with instructors.",
      },
      {
        question: "What Arabic language support do you provide?",
        answer:
          "Our Arabic instruction focuses on classical Arabic for Quranic understanding. We teach proper pronunciation, basic vocabulary, and reading skills appropriate for each age group.",
      },
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers as well as trusted online platforms like Sendwave, Remitly, and others. Payments can be made in major currencies, and we ensure secure and reliable processing for your convenience.",
      },
      {
        question: "Are there payment plans available?",
        answer:
          "Yes! We offer flexible payment options: 1) One-time payment for the full program duration, 2) Monthly payments, 3) 5-month installment plan for Quran program. Early payment discounts are available.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "We do not offer refunds. However, we provide a free trial class before enrollment so you can experience our program and ensure it’s the right fit for your child.",
      },
      {
        question: "Do you offer financial assistance or scholarships?",
        answer:
          "At the moment, we do not offer scholarships or financial assistance programs. We truly value making our classes accessible and hope to introduce such options in the future, in shaa’ Allah.",
      },
      {
        question: "Can I sponsor a student’s education?",
        answer:
          "Yes, we warmly welcome anyone who wishes to sponsor free education for students in need. Your support can help spread knowledge and benefit others. Please contact us if you are interested in sponsoring, and we will guide you through the process.",
      },
      {
        question: "When are payments due?",
        answer:
          "Monthly payments are due on the 1st of each month. One-time payments can be made at enrollment. Late payment grace periods are available, and we send reminder notifications.",
      },
    ],
    classes: [
      {
        question: "How long are the classes?",
        answer:
          "Each class is 40 minutes long, designed to maintain children's attention while providing comprehensive learning. This includes instruction, practice, and interactive activities.",
      },
      {
        question: "How many classes per week?",
        answer:
          "We offer 3 classes per week for optimal learning without overwhelming students. Classes are scheduled at convenient times and can be adjusted based on your timezone.",
      },
      {
        question: "What is the class size?",
        answer:
          "Maximum of 1 student per instructor ensures personalized attention. This allows for strong feedback and interactive learning.",
      },
      {
        question: "Are classes recorded?",
        answer:
          "Yes, all classes are recorded with the parent's permission. Students can review lessons, and parents can monitor their child's progress. Recordings are available for the duration of enrollment.",
      },
      {
        question: "What if I need to reschedule a class?",
        answer:
          "We understand scheduling conflicts. Classes can be rescheduled up to 24 hours in advance. Make-up classes are provided, and alternative times are offered when needed.",
      },
    ],
    technical: [
      {
        question: "What technical requirements do I need?",
        answer:
          "You'll need a computer/tablet with internet connection, webcam, microphone, and speakers. We support Windows, Mac, iOS, and Android devices. No special software required beyond a modern web browser.",
      },
      {
        question: "Is internet speed important?",
        answer:
          "A stable internet connection with at least 1 Mbps download speed is recommended. We use optimized video streaming to work with various connection speeds.",
      },
      {
        question: "What platform do you use for classes?",
        answer:
          "We use industry-standard video conferencing platforms (Zoom/Google Meet) that are secure, reliable, and easy to use. Links are provided in advance of each class.",
      },
      {
        question: "Do you provide technical support?",
        answer:
          "Yes! Our technical support team is available during business hours to help with setup, connectivity issues, and platform navigation. Emergency technical support is available 24/7 via email.",
      },
      {
        question: "Can I access classes from multiple devices?",
        answer:
          "Yes, students can access their account from multiple devices. However, we recommend using the same device for consistency and to maintain learning progress tracking.",
      },
    ],
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our programs, enrollment,
              curriculum, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a category to find answers to your specific questions
            </p>
          </div>

          <div
            className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center space-x-2 animate-fade-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label}</span>
              </Button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div
            className="max-w-4xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 animate-fade-up"
                  style={{ animationDelay: `${1 + index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "1.2s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Still Need Help?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Can't find the answer you're looking for? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card
              className="text-center hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: "1.4s" }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Live Chat</CardTitle>
                <CardDescription>
                  Chat with our support team instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: "1.6s" }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                  <HelpCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Contact Support</CardTitle>
                <CardDescription>
                  Send us a detailed message about your question
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: "1.8s" }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Schedule Consultation</CardTitle>
                <CardDescription>
                  Book a free consultation with our education advisors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-center space-y-4 mb-12 animate-fade-up"
              style={{ animationDelay: "2s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Popular Topics
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to our most frequently asked questions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                className="animate-fade-up"
                style={{ animationDelay: "2.2s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-primary" />
                    Program Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Ages 4-20 years old</li>
                    <li>• Internet connection</li>
                    <li>• Computer/tablet with camera</li>
                    <li>• No prior Islamic knowledge required</li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="animate-fade-up"
                style={{ animationDelay: "2.4s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-primary" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multiple payment options available</li>
                    <li>• Flexible payment plans</li>
                    <li>• Family discounts for multiple children</li>
                    <li>• No refund after payment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="animate-fade-up"
                style={{ animationDelay: "2.6s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Class Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3 classes per week</li>
                    <li>• 40 minutes per class</li>
                    <li>• Recorded sessions available</li>
                    <li>• Flexible rescheduling options</li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="animate-fade-up"
                style={{ animationDelay: "2.8s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Student Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Maximum of 1 student per class</li>
                    <li>• Progress tracking and reports</li>
                    <li>• Parent-teacher communication</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
