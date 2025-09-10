import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  BookOpen,
  Star,
  GraduationCap,
  Heart,
  Clock,
  Globe,
} from "lucide-react";
import Layout from "@/components/Layout";

const Teachers = () => {
  const teachers = [
    {
      name: "Ustadh Ahmad Al-Rashid",
      role: "Lead Quran Instructor & Founder",
      image: "/src/assets/teacher1.jpg",
      qualifications: [
        "PhD in Islamic Studies - Al-Azhar University",
        "Ijazah in Quran Recitation (10 Qira'at)",
        "Certified Quran Teacher - 15+ years experience",
        "Masters in Education - University of Medina",
      ],
      specializations: [
        "Quranic Recitation",
        "Tajweed",
        "Arabic Language",
        "Islamic Studies",
      ],
      experience: "15+ years",
      languages: ["Arabic", "English", "Urdu"],
      rating: 4.9,
      students: 500,
      description:
        "Ustadh Ahmad brings over 15 years of experience in teaching Quran with the traditional Qāʿidah Nūrāniyyah/Fathu Rahman method. His passion for Islamic education and child-centered approach has helped hundreds of students develop a deep connection with the Quran.",
      achievements: [
        "Trained 500+ students in proper Quranic recitation",
        "Developed customized curriculum for different age groups",
        "Recipient of Islamic Education Excellence Award 2023",
        "Published author on modern Islamic teaching methods",
      ],
    },
    {
      name: "Ustadha Fatima Al-Zahra",
      role: "Hadith Specialist & Character Development",
      image: "/src/assets/teacher2.jpg",
      qualifications: [
        "PhD in Hadith Sciences - Islamic University of Medina",
        "Masters in Islamic Psychology",
        "Certified Child Psychologist",
        "Advanced Diploma in Islamic Education",
      ],
      specializations: [
        "Hadith Studies",
        "Islamic Ethics",
        "Character Development",
        "Child Psychology",
      ],
      experience: "12+ years",
      languages: ["Arabic", "English", "French"],
      rating: 4.8,
      students: 350,
      description:
        "Ustadha Fatima specializes in making Islamic teachings accessible and meaningful for children. Her expertise in child psychology combined with deep knowledge of Hadith creates an engaging learning environment that builds strong Islamic character.",
      achievements: [
        "Developed story-based Hadith curriculum",
        "Counseled 200+ families on Islamic upbringing",
        "Published research on Islamic child psychology",
        "Featured speaker at international Islamic education conferences",
      ],
    },
    {
      name: "Ustadh Khalid Ibn Umar",
      role: "Arabic Language & Linguistics Expert",
      image: "/src/assets/teacher3.jpg",
      qualifications: [
        "PhD in Arabic Linguistics - Cairo University",
        "Native Arabic Speaker (Classical & Modern)",
        "TESOL Certified",
        "Masters in Teaching Arabic as Second Language",
      ],
      specializations: [
        "Arabic Grammar",
        "Classical Arabic",
        "Modern Standard Arabic",
        "Language Acquisition",
      ],
      experience: "10+ years",
      languages: ["Arabic", "English", "Persian"],
      rating: 4.7,
      students: 280,
      description:
        "Ustadh Khalid's expertise in Arabic linguistics and language acquisition makes complex Arabic concepts accessible to children. His systematic approach ensures students develop both spoken and written Arabic proficiency.",
      achievements: [
        "Designed Arabic curriculum for non-native speakers",
        "Achieved 95% student Arabic proficiency rate",
        "Developed innovative Arabic teaching methods",
        "Trained teachers in Arabic language instruction",
      ],
    },
    {
      name: "Ustadha Aisha Bint Abdullah",
      role: "Islamic Studies & Women's Islamic Education",
      image: "/src/assets/teacher4.jpg",
      qualifications: [
        "Masters in Islamic Jurisprudence - Al-Azhar University",
        "Certified Islamic Family Counselor",
        "Advanced Diploma in Women's Islamic Studies",
        "Child Development Specialist",
      ],
      specializations: [
        "Islamic Jurisprudence",
        "Women's Issues in Islam",
        "Family Education",
        "Islamic Counseling",
      ],
      experience: "8+ years",
      languages: ["Arabic", "English", "Malay"],
      rating: 4.9,
      students: 220,
      description:
        "Ustadha Aisha brings a unique perspective to Islamic education, focusing on women's roles in Islam and family dynamics. Her compassionate approach helps students understand Islamic teachings in the context of modern life.",
      achievements: [
        "Established women's Islamic study circles",
        "Counseled 150+ families on Islamic family life",
        "Developed curriculum for Islamic women's education",
        "Community outreach coordinator for Islamic education",
      ],
    },
    {
      name: "Ustadh Omar Al-Hasan",
      role: "Quran Memorization (Hifz) Specialist",
      image: "/src/assets/teacher5.jpg",
      qualifications: [
        "Hafiz al-Quran (Complete Memorization)",
        "Ijazah in Hifz - Multiple Chains of Narration",
        "Masters in Islamic Education",
        "Certified Quran Memorization Instructor",
      ],
      specializations: [
        "Quran Memorization",
        "Hifz Techniques",
        "Tajweed",
        "Islamic Recitation",
      ],
      experience: "14+ years",
      languages: ["Arabic", "English", "Turkish"],
      rating: 4.8,
      students: 180,
      description:
        "Ustadh Omar specializes in Quran memorization using proven techniques that make Hifz accessible and sustainable for children. His gentle, encouraging approach has helped numerous students complete their Quran memorization journey.",
      achievements: [
        "Guided 50+ students to complete Quran memorization",
        "Developed child-friendly Hifz methodology",
        "Established Quran memorization support groups",
        "Award-winning Quran recitation competitions coach",
      ],
    },
    {
      name: "Ustadha Maryam Al-Khalifa",
      role: "Early Childhood Islamic Education",
      image: "/src/assets/teacher6.jpg",
      qualifications: [
        "Masters in Early Childhood Education",
        "Certified Montessori Teacher",
        "Islamic Studies Diploma",
        "Child Development Specialist",
      ],
      specializations: [
        "Early Childhood Education",
        "Montessori Method",
        "Islamic Stories",
        "Play-Based Learning",
      ],
      experience: "9+ years",
      languages: ["Arabic", "English", "Spanish"],
      rating: 4.9,
      students: 320,
      description:
        "Ustadha Maryam combines Montessori principles with Islamic education to create engaging learning experiences for young children. Her play-based approach makes Islamic teachings memorable and enjoyable for ages 4-7.",
      achievements: [
        "Developed Islamic Montessori curriculum",
        "Trained 100+ parents in Islamic early childhood education",
        "Established Islamic preschool program",
        "Published articles on Islamic early learning methods",
      ],
    },
  ];

  const stats = [
    { number: "15+", label: "Years Combined Experience" },
    { number: "50+", label: "Countries Served" },
    { number: "1000+", label: "Students Taught" },
    { number: "95%", label: "Student Satisfaction" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Meet Our Expert Instructors
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our qualified Islamic scholars and educators are dedicated to
              providing your child with authentic Islamic education based on the
              pure teachings of Quran and Sunnah.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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

      {/* Teachers Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teachers.map((teacher, index) => (
              <Card
                key={index}
                className="hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-warm flex items-center justify-center mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {teacher.role}
                  </CardDescription>
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-gold fill-current" />
                      <span className="text-sm font-medium">
                        {teacher.rating}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">
                        {teacher.students} students
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">{teacher.experience}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-sm">
                    {teacher.description}
                  </p>

                  {/* Qualifications */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Qualifications
                    </h4>
                    <ul className="space-y-1">
                      {teacher.qualifications.map((qual, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specializations */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.specializations.map((spec, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      Languages
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.languages.map((lang, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {teacher.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Teaching Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    Compassionate Teaching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We teach with love, patience, and understanding, following
                    the methodologies of the pious predecessors, creating a
                    nurturing environment where children feel safe to learn and
                    grow.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Authentic Knowledge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We deliver genuine Islamic education based on authentic
                    sources and traditional scholarship, following the
                    understanding of the early generations of Islam, ensuring
                    accuracy and depth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    Individual Attention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Small class sizes ensure every child receives personalized
                    attention, feedback, and support tailored to their learning
                    needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-islamic">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Learn with Our Expert Instructors?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of families who trust our qualified educators to
              provide their children with exceptional Islamic education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-gold">
                <BookOpen className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teachers;
