import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Scroll,
  Users,
  Heart,
  BookOpen,
  Star,
  Award,
  Clock,
} from "lucide-react";
import Layout from "@/components/Layout";
import hadithIcon from "@/assets/hadith-icon.jpg";

const HadithProgram = () => {
  const testimonials = [
    {
      name: "Umm Firdaus",
      location: "Belgium",
      text: "I am very satisfied with your accessibility, willingness to help, and flexibility. You go above and beyond to assist, offering Arabic, Aqeedah, Quran, and more. I would definitely recommend signing your kids up for these courses.",
      rating: 5,
    },
    {
      name: "Umm Abibaki",
      location: "Ghana",
      text: "Markazul Bayaan is one of the best Quranic institutes I have ever come across. Their teachers have patience which makes learning easy. The class is fixed to suit your schedule. It has deepened my Islamic knowledge.",
      rating: 5,
    },
    {
      name: "Sister Iqra Kareem",
      location: "India",
      text: "I took Islamic studies, Arabic speaking, and Quran classes for my daughter. The teacher was patient and dedicated. I really saw an improvement in my daughter's memorization in less than a month.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "At-tifl al-labiib",
      description:
        "Learn from our carefully curated hadith textbook designed for children",
    },
    {
      icon: Clock,
      title: "3-Month Program",
      description:
        "Comprehensive course covering essential hadith for children",
    },
    {
      icon: Users,
      title: "Limited Slots",
      description: "Only 15 slots available for focused attention",
    },
    {
      icon: Award,
      title: "Early Bird Discount",
      description: "5% off for the first 5 enrollments",
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
      icon: "🤲",
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
      icon: "📖",
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
                src={hadithIcon}
                alt="Hadith Program"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                3-Month Hadith Program
              </h1>
              <div className="flex items-center justify-center space-x-4">
                <span className="px-4 py-1 bg-primary/10 rounded-full text-primary font-medium">
                  Only 15 Slots
                </span>
                <span className="px-4 py-1 bg-primary/10 rounded-full text-primary font-medium">
                  Early Bird Discount
                </span>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn authentic hadith from the book At-tifl al-labiib, specially
              designed to build strong Islamic character in children through the
              teachings of Prophet Muhammad (PBUH).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                className="animate-gentle-bounce"
              >
                <Scroll className="w-5 h-5 mr-2" />
                Reserve Your Slot Now
              </Button>
              <Button variant="outline" size="lg">
                Download Course Details
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
              Program Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive hadith program designed specifically for children
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-accent-coral rounded-2xl flex items-center justify-center mb-4">
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

      {/* Topics Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Course Curriculum
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key topics covered in the At-tifl al-labiib textbook
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Card
                key={index}
                className="hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{topic.icon}</span>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {topic.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Parents Are Saying
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our wonderful community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold fill-current"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Method */}
      <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-96 bg-gradient-warm rounded-3xl flex items-center justify-center shadow-card">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-background rounded-2xl flex items-center justify-center shadow-soft">
                  <Scroll className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Story-Based Learning
                </h3>
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
              We understand that children learn best through stories and
              examples. Our Hadith program uses age-appropriate narratives to
              teach profound Islamic values in ways children can understand and
              remember.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-3 h-3 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Interactive Storytelling
                  </h4>
                  <p className="text-muted-foreground">
                    Engaging narratives with visual aids and activities
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-3 h-3 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Character Development
                  </h4>
                  <p className="text-muted-foreground">
                    Focus on building beautiful Islamic manners
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="w-3 h-3 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Practical Application
                  </h4>
                  <p className="text-muted-foreground">
                    Real-life examples children can relate to and practice
                  </p>
                </div>
              </div>
            </div>

            <Button variant="program" size="lg" className="mt-8">
              <Scroll className="w-5 h-5 mr-2" />
              Start Learning Hadith
            </Button>
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
                Flexible options to fit your needs. Limited slots available.
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
                        3 Months
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        15 Slots Only
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
                      <span>At-tifl al-labiib textbook provided</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Interactive weekly classes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Progress tracking and assessments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Flexible monthly payments</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      <Scroll className="w-5 h-5 mr-2" />
                      Choose Monthly
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* One-Time Payment */}
              <Card className="relative hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-primary">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center pb-4 space-y-4">
                  <CardTitle className="text-2xl">One-Time Payment</CardTitle>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        3 Months
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
                      $400
                    </span>
                    <span className="text-muted-foreground"> one-time</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>At-tifl al-labiib textbook provided</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Interactive weekly classes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Progress tracking and assessments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>5% discount for first 5 enrollments</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button variant="program" className="w-full">
                      <Scroll className="w-5 h-5 mr-2" />
                      Secure Your Spot Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-sm text-muted-foreground">
              * Early bird discount of 5% available for the first 5 enrollments
              only
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-islamic">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Limited Time Opportunity
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Only 15 slots available for our upcoming batch. Secure your
              child's spot today and benefit from our early bird discount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-gold">
                <Scroll className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HadithProgram;
