import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Heart, Star, Clock, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-image.jpg";
import quranIcon from "@/assets/quran-icon.jpg";
import hadithIcon from "@/assets/hadith-icon.jpg";

const Index = () => {
  const benefits = [
    {
      icon: Users,
      title: "1-on-1 Learning",
      description: "Personalized attention for each child's unique learning style",
    },
    {
      icon: Heart,
      title: "Child-Friendly Methods",
      description: "Age-appropriate teaching that makes learning fun and engaging",
    },
    {
      icon: Award,
      title: "Islamic Values",
      description: "Building strong moral character alongside academic knowledge",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Classes that fit your family's busy lifestyle",
    },
  ];

  const testimonials = [
    {
      name: "Fatima Al-Zahra",
      text: "My daughter Aisha loves her Qur'an classes! She's memorized 3 surahs already and asks when the next class is. The teachers are so patient and kind.",
      rating: 5,
    },
    {
      name: "Ahmad Hassan",
      text: "The Hadith program has helped my son understand Islamic values better. He now practices what he learns and shows more respect and kindness.",
      rating: 5,
    },
    {
      name: "Maryam Ibrahim",
      text: "Rawdah has been a blessing for our family. Both my children are enrolled and love their classes. Highly recommend to all Muslim parents!",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Helping children learn{" "}
                <span className="text-primary">Qur'an and Hadith</span>{" "}
                with love and guidance
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Give your child the gift of authentic Islamic education in a caring, 
                child-friendly environment that nurtures both mind and heart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="animate-gentle-bounce">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Our Programs
                </Button>
                <Button variant="outline" size="lg">
                  Book Free Consultation
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-card">
                <img 
                  src={heroImage} 
                  alt="Children learning Quran in beautiful environment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-islamic rounded-2xl flex items-center justify-center shadow-gold">
                <div className="text-center text-primary-foreground">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Happy Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Islamic Education Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Islamic learning designed specifically for children
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Qur'an Program Card */}
            <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary-soft to-accent-blue">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-soft mb-4">
                  <img src={quranIcon} alt="Qur'an Program" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl text-foreground">Qur'an Learning Program</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Beautiful recitation, memorization, and understanding with proper Tajweed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Proper Tajweed and pronunciation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Memorization support (Hifz)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Interactive learning activities</span>
                  </div>
                </div>
                <Link to="/quran">
                  <Button variant="program" className="w-full group-hover:shadow-lg">
                    Learn More About Qur'an Program
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Hadith Program Card */}
            <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent-coral to-accent-yellow">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-soft mb-4">
                  <img src={hadithIcon} alt="Hadith Program" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-2xl text-foreground">Hadith Learning Program</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Character building through beautiful teachings of Prophet Muhammad (PBUH)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Authentic Hadith stories</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Moral and character development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Interactive storytelling</span>
                  </div>
                </div>
                <Link to="/hadith">
                  <Button variant="program" className="w-full group-hover:shadow-lg">
                    Learn More About Hadith Program
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Rawdah Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Rawdah?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine traditional Islamic education with modern, child-friendly teaching methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Parents Are Saying
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from families who chose Rawdah for their children's Islamic education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-primary">- {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-islamic">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Start Your Child's Learning Journey Today
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join our community of Muslim families committed to providing their children with 
              authentic Islamic education in a loving, nurturing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-gold">
                <BookOpen className="w-5 h-5 mr-2" />
                Schedule Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Users className="w-5 h-5 mr-2" />
                Speak with Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
