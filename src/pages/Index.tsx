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
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="https://bit.ly/rawdah-director"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="hero"
                    size="lg"
                    className="animate-gentle-bounce hover:animate-pulse"
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

            <div
              className="relative animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Decorative floating elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-12 right-12 w-20 h-20 bg-accent-coral/15 rounded-full blur-2xl animate-bounce"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent-yellow/20 rounded-full blur-lg animate-ping"></div>

              <div className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 backdrop-blur-md border border-white/30 shadow-2xl p-8 relative">
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="flex-1 md:space-y-8 space-y-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="md:w-28 w-14 md:h-28 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center shadow-inner">
                      <BookOpen className="md:w-14 w-8 md:h-14 h-8 text-primary drop-shadow-lg" />
                    </div>
                    <div className="text-black">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                        Quranic Learning
                      </h3>
                      <p className="text-sm md:text-base opacity-90 text-muted-foreground leading-relaxed">
                        Mastering Tajweed and understanding the divine words
                      </p>
                    </div>
                  </div>

                  {/* Modern divider */}
                  <div className="hidden md:block w-1 h-48 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40 rounded-full shadow-lg"></div>

                  <div className="flex-1 md:space-y-8 space-y-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="md:w-28 w-14 md:h-28 h-14 bg-gradient-to-br from-accent-coral/20 to-accent-yellow/10 rounded-3xl flex items-center justify-center shadow-inner">
                      <Scroll className="md:w-14 w-8 md:h-14 h-8 text-primary drop-shadow-lg" />
                    </div>
                    <div className="text-black">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                        Hadith Studies
                      </h3>
                      <p className="text-sm md:text-base opacity-90 text-muted-foreground leading-relaxed">
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
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Islamic Education Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Islamic learning designed specifically for children
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Qur'an Program Card */}
            <Card
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary-soft to-accent-blue animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
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
                <div className="space-y-3 pb-4">
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
            <Card
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent-coral to-accent-yellow animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
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
                  Nurturing character through the beautiful teachings of Prophet
                  Muhammad ﷺ, upon the sound ʿAqeedah and worship (‘Ibaadah) as
                  understood by the Salaf.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">
                      Authentic Hadith from At-tifl al-labiib
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
                      Interactive and engaging lessons
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
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
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
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
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
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "1.6s" }}
          >
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
                className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${1.8 + index * 0.2}s` }}
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
          <div
            className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up"
            style={{ animationDelay: "2.2s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Start Your Child's Learning Journey Today
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join our community of Muslim families committed to providing their
              children with authentic Islamic education in a loving, nurturing
              environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/markazulbayaan9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" className="shadow-gold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Schedule Free Trial
                </Button>
              </a>
              <a
                href="https://bit.ly/rawdah-director"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Speak with the Director
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
