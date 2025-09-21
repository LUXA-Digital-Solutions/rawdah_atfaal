import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Users, Clock, Award, Heart, Star } from "lucide-react";
import Layout from "@/components/Layout";
import quranIcon from "@/assets/quran-icon.jpg";

const QuranProgram = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Qāʿidah Nūrāniyyah/Noorul Bayaan",
      description: "Master Quranic reading with a proven step-by-step method",
    },
    {
      icon: Users,
      title: "One-on-One Classes",
      description:
        "Personalized learning with dedicated attention from your teacher.",
    },
    {
      icon: Clock,
      title: "Structured Learning",
      description: "3 classes per week, 40 minutes each for optimal progress",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Official certification upon completion of each level",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Foundation",
      description:
        "Master Qāʿidah Nūrāniyyah/Noorul Bayaan basics and proper pronunciation",
    },
    {
      number: "02",
      title: "Quranic Reading",
      description: "Progress to reading directly from the Quran with tajweed",
    },
    {
      number: "03",
      title: "Memorization",
      description: "Begin Hifz program with short surahs and daily practice",
    },
    {
      number: "04",
      title: "Advanced Studies",
      description: "Learn translation and deeper understanding of verses",
    },
  ];

  // const ageGroups = [
  //   {
  //     age: "4-6 years",
  //     focus: "Basic Recognition",
  //     description:
  //       "Introduction to Arabic letters and basic sounds through fun activities",
  //   },
  //   {
  //     age: "7-10 years",
  //     focus: "Core Learning",
  //     description: "Systematic Qāʿidah study and beginning Quran recitation",
  //   },
  //   {
  //     age: "11-15 years",
  //     focus: "Advanced Progress",
  //     description: "Advanced tajweed rules and memorization techniques",
  //   },
  // ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <div
              className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-card animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={quranIcon}
                alt="Qur'an Program"
                className="w-full h-full object-cover"
              />
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold text-foreground animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Rawdatul Atfaal Qur'an Program
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              Master Quranic recitation with the proven Qāʿidah Nūrāniyyah/Fathu
              Rahman method in small, interactive classes with expert teachers.
              We teach based on authentic Islamic teachings and give great
              importance to correct creed and methodology.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="https://calendly.com/markazulbayaan9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="animate-gentle-bounce hover:animate-pulse"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Schedule Free Trial
                </Button>
              </a>
              <a
                href="https://docs.google.com/document/d/1J0MkKcpnumZBqoy4Cxv9R88Ko1d-w33VmVD1uE6VHZI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  View Syllabus
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Our Qur'an Program?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine traditional Islamic teaching methods with modern,
              child-friendly approaches, ensuring authentic Islamic education
              based on correct creed and methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "1.6s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Learning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured, gentle approach to Qur'anic education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${1.8 + index * 0.2}s` }}
              >
                <div className="bg-background rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Age-Appropriate Learning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our program is tailored to different age groups, ensuring the most
              effective learning approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card
                key={index}
                className="hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {group.age}
                  </div>
                  <CardTitle className="text-lg">{group.focus}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {group.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="space-y-6 animate-fade-up"
              style={{ animationDelay: "2.2s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Teaching Methodology
              </h2>
              <p className="text-lg text-muted-foreground">
                We use the proven Qāʿidah Nūrāniyyah/Noorul Bayaan method
                combined with modern teaching techniques to ensure effective
                learning and proper Quranic recitation. Our approach is rooted
                in authentic Islamic teachings with great emphasis on correct
                creed and methodology.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Systematic Progression
                    </h4>
                    <p className="text-muted-foreground">
                      Step-by-step learning from basic to advanced levels
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Regular Assessment
                    </h4>
                    <p className="text-muted-foreground">
                      Continuous monitoring and progress tracking
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Certified Program
                    </h4>
                    <p className="text-muted-foreground">
                      Official certification upon completion of each level
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://calendly.com/markazulbayaan9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="program" size="lg" className="mt-8">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Begin Trial
                </Button>
              </a>
            </div>

            <div
              className="relative animate-fade-up"
              style={{ animationDelay: "2.4s" }}
            >
              <div className="w-full h-96 bg-gradient-warm rounded-3xl p-8 shadow-card">
                <div className="h-full flex flex-col justify-center space-y-6">
                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Class Schedule
                    </div>
                    <p className="text-muted-foreground">3 classes per week</p>
                    <p className="text-muted-foreground">
                      40 minutes per class
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Class Size
                    </div>
                    <p className="text-muted-foreground">
                      Maximum 1 student per teacher
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Learning Materials
                    </div>
                    <p className="text-muted-foreground">
                      Qāʿidah Nūrāniyyah/Noorul Bayaan book
                    </p>
                    <p className="text-muted-foreground">
                      Digital learning resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Choose Your Payment Plan
              </h2>
              <p className="text-lg text-muted-foreground">
                Flexible options for your child's Quranic journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Monthly Plan */}
              <Card className="relative hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4 space-y-4">
                  <CardTitle className="text-2xl">Monthly Plan</CardTitle>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        Ongoing
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        Flexible
                      </span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-primary">
                      $150
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Qāʿidah Nūrāniyyah/Noorul Bayaan textbook</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>3 classes per week, 40 minutes each</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>One-on-One Classes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Progress tracking and assessments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Certification upon completion</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Choose Monthly
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 5-Month Package */}
              <Card className="relative hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-primary">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Best Value
                  </span>
                </div>
                <CardHeader className="text-center pb-4 space-y-4">
                  <CardTitle className="text-2xl">5-Month Package</CardTitle>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        5 Months
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        Save $50
                      </span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-primary">
                      $700
                    </span>
                    <span className="text-muted-foreground"> total</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Qāʿidah Nūrāniyyah/Noorul Bayaan textbook</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>3 classes per week, 40 minutes each</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>One-on-One Classes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Progress tracking and assessments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Certification upon completion</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button variant="program" className="w-full">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Get Started Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Special Discounts */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Special Discounts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="hover:shadow-card transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Multiple Students</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-2xl font-bold text-primary">5% OFF</p>
                    <p className="text-muted-foreground">
                      For 2 or more students
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Pay in Full</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-2xl font-bold text-primary">5% OFF</p>
                    <p className="text-muted-foreground">
                      One-time payment discount
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Both Programs</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-2xl font-bold text-primary">10% OFF</p>
                    <p className="text-muted-foreground">
                      Quran + Hadith combined
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              * All packages include access to digital learning resources
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-islamic">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up"
            style={{ animationDelay: "2.6s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Begin Your Child's Quranic Journey
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Our structured program with the Qāʿidah Nūrāniyyah/Noorul Bayaan
              method ensures proper Quranic reading and understanding. Three
              classes per week, maximum 1 student per teacher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/markazulbayaan9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" className="shadow-gold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Schedule Trial
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary"
              >
                View Class Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuranProgram;
