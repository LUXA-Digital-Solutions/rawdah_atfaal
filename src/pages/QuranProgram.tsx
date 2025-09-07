import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Clock, Award, Heart, Star } from "lucide-react";
import Layout from "@/components/Layout";
import quranIcon from "@/assets/quran-icon.jpg";

const QuranProgram = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Proper Tajweed",
      description: "Learn beautiful Qur'anic recitation with correct pronunciation and rules",
    },
    {
      icon: Users,
      title: "1-on-1 Learning",
      description: "Personalized attention from qualified Islamic teachers",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Classes that fit your family's busy lifestyle",
    },
    {
      icon: Award,
      title: "Memorization Support",
      description: "Gentle and effective Hifz program for young minds",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "We evaluate your child's current level and learning style",
    },
    {
      number: "02",
      title: "Personalized Plan",
      description: "Custom learning path created specifically for your child",
    },
    {
      number: "03",
      title: "Interactive Learning",
      description: "Engaging lessons with games, stories, and visual aids",
    },
    {
      number: "04",
      title: "Progress Tracking",
      description: "Regular updates and celebrations of achievements",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-card">
              <img src={quranIcon} alt="Qur'an Program" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Qur'an Learning Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help your child connect with the Holy Qur'an through beautiful recitation, 
              memorization, and understanding in a loving, supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="animate-gentle-bounce">
                <BookOpen className="w-5 h-5 mr-2" />
                Enroll in Qur'an Program
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo Class
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
              We combine traditional Islamic teaching methods with modern, child-friendly approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
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
                  <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Building Strong Islamic Foundation
              </h2>
              <p className="text-lg text-muted-foreground">
                Our Qur'an program goes beyond just recitation. We help children develop a deep, 
                loving relationship with Allah's words while building confidence and Islamic character.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Age-Appropriate Teaching</h4>
                    <p className="text-muted-foreground">Methods tailored to your child's developmental stage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Loving Environment</h4>
                    <p className="text-muted-foreground">Patient teachers who understand children's needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Certified Teachers</h4>
                    <p className="text-muted-foreground">Qualified Islamic educators with Ijazah credentials</p>
                  </div>
                </div>
              </div>

              <Button variant="program" size="lg" className="mt-8">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Your Child's Journey
              </Button>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-warm rounded-3xl flex items-center justify-center shadow-card">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-background rounded-2xl flex items-center justify-center shadow-soft">
                    <BookOpen className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Interactive Learning</h3>
                  <p className="text-muted-foreground px-8">
                    Engaging activities that make Qur'an learning fun and memorable
                  </p>
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
              Ready to Begin This Sacred Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join hundreds of families who have chosen Rawdah for their children's Qur'anic education. 
              Start with a free trial class today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-gold">
                <BookOpen className="w-5 h-5 mr-2" />
                Book Free Trial Class
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Speak with Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuranProgram;