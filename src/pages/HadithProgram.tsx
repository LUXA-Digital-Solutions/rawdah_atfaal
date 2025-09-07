import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scroll, Users, Heart, BookOpen, Star, Award } from "lucide-react";
import Layout from "@/components/Layout";
import hadithIcon from "@/assets/hadith-icon.jpg";

const HadithProgram = () => {
  const features = [
    {
      icon: Scroll,
      title: "Authentic Hadith",
      description: "Carefully selected authentic sayings of Prophet Muhammad (PBUH)",
    },
    {
      icon: Heart,
      title: "Character Building",
      description: "Stories that teach kindness, honesty, and good manners",
    },
    {
      icon: Users,
      title: "Interactive Stories",
      description: "Engaging storytelling that brings Islamic values to life",
    },
    {
      icon: Award,
      title: "Life Applications",
      description: "Practical ways to implement Islamic teachings daily",
    },
  ];

  const topics = [
    {
      title: "Kindness & Compassion",
      description: "Learning to be gentle and caring towards all creation",
      icon: "💕",
    },
    {
      title: "Honesty & Truthfulness",
      description: "The importance of always speaking the truth",
      icon: "✨",
    },
    {
      title: "Respect for Parents",
      description: "Understanding our duties towards our mothers and fathers",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Helping Others",
      description: "Stories about sharing and caring for those in need",
      icon: "🤝",
    },
    {
      title: "Good Manners",
      description: "Islamic etiquette and beautiful behavior",
      icon: "🌟",
    },
    {
      title: "Prayer & Worship",
      description: "Understanding why and how we worship Allah",
      icon: "🤲",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-card">
              <img src={hadithIcon} alt="Hadith Program" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Hadith Learning Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the beautiful teachings of Prophet Muhammad (PBUH) through engaging stories 
              that build character and strengthen Islamic values in young hearts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="animate-gentle-bounce">
                <Scroll className="w-5 h-5 mr-2" />
                Enroll in Hadith Program
              </Button>
              <Button variant="outline" size="lg">
                View Sample Stories
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
              Learning Through Beautiful Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make Hadith learning engaging and memorable for children through interactive storytelling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-accent-coral rounded-2xl flex items-center justify-center mb-4">
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

      {/* Topics Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Your Child Will Learn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Age-appropriate Hadith topics that build strong Islamic character
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{topic.icon}</span>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{topic.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Method */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-warm rounded-3xl flex items-center justify-center shadow-card">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-background rounded-2xl flex items-center justify-center shadow-soft">
                    <Scroll className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Story-Based Learning</h3>
                  <p className="text-muted-foreground px-8">
                    Making Islamic teachings memorable through engaging narratives
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Child-Friendly Approach
              </h2>
              <p className="text-lg text-muted-foreground">
                We understand that children learn best through stories and examples. Our Hadith program 
                uses age-appropriate narratives to teach profound Islamic values in ways children can 
                understand and remember.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Interactive Storytelling</h4>
                    <p className="text-muted-foreground">Engaging narratives with visual aids and activities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Character Development</h4>
                    <p className="text-muted-foreground">Focus on building beautiful Islamic manners</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Practical Application</h4>
                    <p className="text-muted-foreground">Real-life examples children can relate to and practice</p>
                  </div>
                </div>
              </div>

              <Button variant="program" size="lg" className="mt-8">
                <Scroll className="w-5 h-5 mr-2" />
                Start Learning Hadith
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Hadith Education Matters
              </h2>
              <p className="text-lg text-muted-foreground">
                The sayings and actions of Prophet Muhammad (PBUH) provide the perfect example 
                for how to live as good Muslims and good human beings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Moral Foundation</h3>
                <p className="text-muted-foreground">
                  Building strong ethical values based on Islamic teachings
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent-yellow rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Social Skills</h3>
                <p className="text-muted-foreground">
                  Learning how to interact kindly and respectfully with others
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent-coral rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Character Building</h3>
                <p className="text-muted-foreground">
                  Developing honesty, kindness, and other beautiful qualities
                </p>
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
              Help Your Child Follow the Best Example
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Give your child the gift of learning from the most beautiful character - Prophet Muhammad (PBUH). 
              Start their journey of character development today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-gold">
                <Scroll className="w-5 h-5 mr-2" />
                Begin Hadith Journey
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HadithProgram;