import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, CheckCircle, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
const aboutTeamImg = 'https://i.ibb.co/MdLJcPM/Ivorymyrrh.jpg';

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and transparency in all our dealings.',
  },
  {
    icon: Target,
    title: 'Quality',
    description: 'We never compromise on the quality of our products and services.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do.',
  },
];

const promises = [
  'Fresh, high-quality produce sourced from trusted farms',
  'Hygienic handling and processing of all products',
  'Timely delivery and reliable service',
  'Competitive and transparent pricing',
  'Professional customer support at all times',
  'Worldwide export services available',
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Your Trusted Partner in <span className="text-gradient-primary">Agricultural Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ivorymyrrh Resources Ltd is a leading supplier of premium agricultural produce and 
                professional meat processing services. With years of industry experience, we have 
                built a reputation for quality, reliability, and customer satisfaction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From fresh tomatoes and vegetables to quality livestock and expert butchering services, 
                we are committed to meeting the diverse needs of our clients with excellence and integrity.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-muted-foreground">CAC Registration:</span>
                <span className="text-sm font-bold text-primary">RC NO. 8524204</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutTeamImg}
                  alt="Ivorymyrrh Team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 shadow-glow">
                <div className="text-4xl font-bold text-primary-foreground">10+</div>
                <div className="text-primary-foreground/80 text-sm">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-12 rounded-2xl bg-background border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-brand" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide premium quality agricultural products and meat processing services that 
                meet the highest standards of freshness, hygiene, and customer satisfaction. We 
                strive to be the preferred supplier for individuals and businesses seeking 
                reliable, affordable, and excellent agro-services.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 lg:p-12 rounded-2xl bg-background border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading and most trusted agricultural supply and meat processing 
                company in Nigeria and beyond. We envision a future where every home and business 
                has access to fresh, quality produce and professional services that enhance their 
                culinary experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Core Values"
            title="What Drives Us"
            description="Our values form the foundation of everything we do."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Our Promise"
                title="Customer Experience Promise"
                description="We are committed to exceeding your expectations at every touchpoint."
                centered={false}
              />
              
              <ul className="space-y-4">
                {promises.map((promise, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                    <span className="text-foreground">{promise}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 lg:p-12 rounded-2xl bg-gradient-primary"
            >
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Experience Excellence?
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                Join hundreds of satisfied customers who trust Ivorymyrrh Resources for their 
                agricultural needs.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/get-quote">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe className="w-10 h-10 text-brand" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              International Reach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We Export <span className="text-gradient-primary">Worldwide</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ivorymyrrh Resources Ltd is open to the export of agro products and processed meat 
              to clients anywhere in the world. Whether you need fresh produce, processed goods, 
              or livestock products, we can deliver to your location with reliable international logistics.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/get-quote">
                Request Export Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;