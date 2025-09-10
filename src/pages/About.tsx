import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  Users,
  BookOpen,
  Award,
  Target,
  Eye,
  Star,
  GraduationCap,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Teaching",
      description:
        "We teach with love, patience, and understanding, creating a nurturing environment for every child.",
    },
    {
      icon: BookOpen,
      title: "Authentic Knowledge",
      description:
        "Delivering genuine Islamic education based on authentic sources and traditional scholarship, following the understanding of the early generations of Islam.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Building strong Muslim communities through shared learning and spiritual growth.",
    },
    {
      icon: Award,
      title: "Excellence in Education",
      description:
        "Committed to the highest standards of Islamic education and character development.",
    },
  ];

  const team = [
    {
      name: "Ustadh Ahmad",
      role: "Founder & Lead Instructor",
      qualifications:
        "Masters in Islamic Studies, 15+ years teaching experience",
      image: "/src/assets/teacher1.jpg",
      description:
        "Specializes in Quranic recitation and Islamic jurisprudence with a passion for child-centered learning.",
    },
    {
      name: "Ustadha Fatima",
      role: "Hadith Specialist",
      qualifications: "PhD in Hadith Sciences, Certified Islamic Educator",
      image: "/src/assets/teacher2.jpg",
      description:
        "Expert in Hadith authentication and child-friendly storytelling methods.",
    },
    {
      name: "Ustadh Khalid",
      role: "Arabic Language Instructor",
      qualifications: "Native Arabic speaker, Masters in Arabic Linguistics",
      image: "/src/assets/teacher3.jpg",
      description:
        "Focuses on proper pronunciation and Arabic language acquisition for children.",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Students" },
    { number: "50+", label: "Countries Reached" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Parent Satisfaction" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              About Rawdah Education
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated to providing authentic Islamic education with love,
              compassion, and excellence since 2009. We follow the methodologies
              of the pious predecessors and teach based on the pure creed and
              teachings of Quran and Sunnah.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  To nurture young hearts and minds with authentic Islamic
                  knowledge, fostering spiritual growth, moral character, and
                  academic excellence in a loving, child-friendly environment.
                  We are people upon the Sunnah, teaching based on the
                  methodologies of the pious predecessors of the Ummah.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  To be the leading provider of online Islamic education,
                  empowering Muslim families worldwide with accessible,
                  high-quality Quranic and Islamic studies programs rooted in
                  the pure teachings of Quran and Sunnah.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-warm rounded-3xl flex items-center justify-center shadow-card">
                <div className="text-center space-y-4 p-8">
                  <GraduationCap className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Building Future Leaders
                  </h3>
                  <p className="text-muted-foreground">
                    Equipping the next generation with knowledge, faith, and
                    character
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Rawdah Education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to Islamic education
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Expert Instructors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Qualified Islamic scholars and educators dedicated to your child's
              learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-warm flex items-center justify-center mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground font-medium">
                    {member.qualifications}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
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
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Experience the difference that authentic Islamic education can
              make in your child's life. Join thousands of families worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="shadow-gold">
                  <Users className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
              </Link>
              <Link to="/quran">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
