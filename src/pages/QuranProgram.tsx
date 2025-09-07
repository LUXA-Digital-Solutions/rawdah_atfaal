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
      title: "Qāʿidah Nūrāniyyah",
      description: "Master Quranic reading with a proven step-by-step method",
    },
    {
      icon: Users,
      title: "Small Group Classes",
      description:
        "Maximum of 3 students per teacher for personalized attention",
    },
    {
      icon: Clock,
      title: "Structured Learning",
      description: "3 classes per week, 45 minutes each for optimal progress",
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
      description: "Master Qāʿidah Nūrāniyyah basics and proper pronunciation",
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

  const ageGroups = [
    {
      age: "4-6 years",
      focus: "Basic Recognition",
      description:
        "Introduction to Arabic letters and basic sounds through fun activities",
    },
    {
      age: "7-10 years",
      focus: "Core Learning",
      description: "Systematic Qāʿidah study and beginning Quran recitation",
    },
    {
      age: "11-15 years",
      focus: "Advanced Progress",
      description: "Advanced tajweed rules and memorization techniques",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-card">
              <img
                src={quranIcon}
                alt="Qur'an Program"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Rawdatul Atfaal Qur'an Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master Quranic recitation with the proven Qāʿidah Nūrāniyyah
              method in small, interactive classes with expert teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                className="animate-gentle-bounce"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Schedule Free Assessment
              </Button>
              <Button variant="outline" size="lg">
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Our Qur'an Program?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine traditional Islamic teaching methods with modern,
              child-friendly approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
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
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Learning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured, gentle approach to Qur'anic education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
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
      <section className="py-20">
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
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Teaching Methodology
              </h2>
              <p className="text-lg text-muted-foreground">
                We use the proven Qāʿidah Nūrāniyyah method combined with modern
                teaching techniques to ensure effective learning and proper
                Quranic recitation.
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

              <Button variant="program" size="lg" className="mt-8">
                <BookOpen className="w-5 h-5 mr-2" />
                Begin Assessment
              </Button>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-warm rounded-3xl p-8 shadow-card">
                <div className="h-full flex flex-col justify-center space-y-6">
                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Class Schedule
                    </div>
                    <p className="text-muted-foreground">3 classes per week</p>
                    <p className="text-muted-foreground">
                      45 minutes per class
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Class Size
                    </div>
                    <p className="text-muted-foreground">
                      Maximum 3 students per teacher
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Learning Materials
                    </div>
                    <p className="text-muted-foreground">
                      Qāʿidah Nūrāniyyah book provided
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-islamic">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Begin Your Child's Quranic Journey
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Our structured program with the Qāʿidah Nūrāniyyah method ensures
              proper Quranic reading and understanding. Three classes per week,
              maximum 3 students per teacher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-gold">
                <BookOpen className="w-5 h-5 mr-2" />
                Schedule Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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
