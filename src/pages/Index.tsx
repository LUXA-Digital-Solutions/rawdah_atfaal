import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Heart,
  Star,
  Clock,
  Award,
  ChevronRight,
  Scroll,
} from "lucide-react";
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
      description:
        "Personalized attention for each child's unique learning style",
    },
    {
      icon: Heart,
      title: "Child-Friendly Methods",
      description:
        "Age-appropriate teaching that makes learning fun and engaging",
    },
    {
      icon: Award,
      title: "Islamic Values",
      description:
        "Building strong moral character alongside academic knowledge",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Classes that fit your family's busy lifestyle",
    },
  ];

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Helping children learn{" "}
                <span className="text-primary">Qur'an and Hadith</span> with
                love and guidance
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Give your child the gift of authentic Islamic education in a
                caring, child-friendly environment that nurtures both mind and
                heart. We follow the methodologies of the pious predecessors and
                teach based on the pure creed and teachings of Quran and Sunnah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://bit.ly/rawdah-director"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="hero"
                    size="lg"
                    className="animate-gentle-bounce"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Enroll now
                  </Button>
                </a>
                <a
                  href="https://calendly.com/markazulbayaan9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    Book Free Trial
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-tr p-8">
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="flex-1 space-y-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary" />
                    </div>
                    <div className="text-black">
                      <h3 className="text-2xl font-bold mb-2">
                        Quranic Learning
                      </h3>
                      <p className="opacity-90">
                        Mastering Tajweed and understanding the divine words
                      </p>
                    </div>
                  </div>

                  <div className="w-px h-48 bg-primary/20 hidden md:block"></div>

                  <div className="flex-1 space-y-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Scroll className="w-12 h-12 text-primary" />
                    </div>
                    <div className="text-black">
                      <h3 className="text-2xl font-bold mb-2">
                        Hadith Studies
                      </h3>
                      <p className="opacity-90">
                        Building knowledge through authentic teachings
                      </p>
                    </div>
                  </div>
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
                  <img
                    src={quranIcon}
                    alt="Qur'an Program"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  Qur'an Learning Program
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Beautiful recitation, memorization, and understanding with
                  proper Tajweed, following traditional methodologies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">
                      Proper Tajweed and pronunciation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">
                      Memorization support (Hifz)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">
                      Interactive learning activities
                    </span>
                  </div>
                </div>
                <Link to="/quran">
                  <Button
                    variant="program"
                    className="w-full group-hover:shadow-lg"
                  >
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
                  <img
                    src={hadithIcon}
                    alt="Hadith Program"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  Hadith Learning Program
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Character building through beautiful teachings of Prophet
                  Muhammad, peace and blessings of Allah be upon him, following
                  the understanding of the Salaf
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">
                      Authentic Hadith stories
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">
                      Moral and character development
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">
                      Interactive storytelling
                    </span>
                  </div>
                </div>
                <Link to="/hadith">
                  <Button
                    variant="program"
                    className="w-full group-hover:shadow-lg"
                  >
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
              We combine traditional Islamic education with modern,
              child-friendly teaching methods, following the methodologies of
              the pious predecessors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
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
              Real experiences from families who chose Rawdah for their
              children's Islamic education
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
                  <div className="font-semibold text-primary">
                    - {testimonial.name}
                  </div>
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
              Join our community of Muslim families committed to providing their
              children with authentic Islamic education in a loving, nurturing
              environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-gold">
                <BookOpen className="w-5 h-5 mr-2" />
                Schedule Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary"
              >
                <Users className="w-5 h-5 mr-2" />
                Speak with the Director
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
