import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Users, Building, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import butcheringImg from '@/assets/services/butchering.jpg';
import processingImg from '@/assets/services/processing.jpg';

const services = [
  {
    title: 'Professional Cow Butchering',
    description: 'Expert butchering services for individuals and businesses. Our trained professionals ensure precise cuts and minimal waste.',
    image: butcheringImg,
    features: [
      'On-site or off-site butchering available',
      'Professional and trained butchers',
      'Precision cuts to your specifications',
      'Minimal waste and maximum yield',
      'Quick turnaround time',
    ],
  },
  {
    title: 'Meat Processing Services',
    description: 'State-of-the-art processing facilities ensuring the highest quality and hygiene standards for all meat products.',
    image: processingImg,
    features: [
      'Hygienic processing environment',
      'Temperature-controlled storage',
      'Custom packaging options',
      'Quality assurance at every step',
      'Bulk processing available',
    ],
  },
];

const hygieneStandards = [
  'Stainless steel equipment and surfaces',
  'Regular sanitation and sterilization',
  'Temperature monitoring systems',
  'Trained and certified staff',
  'Health and safety compliance',
  'Quality inspection at every stage',
];

const targetCustomers = [
  { icon: Users, title: 'Individuals & Families', description: 'Personal events, celebrations, and regular household needs' },
  { icon: Store, title: 'Restaurants & Hotels', description: 'Commercial establishments requiring regular meat supply' },
  { icon: Building, title: 'Caterers & Event Planners', description: 'Large-scale events and occasions' },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-gradient-primary">Meat Processing</span> Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert butchering and processing services with the highest standards of hygiene and quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover aspect-video"
                  />
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="hero" size="lg" asChild>
                  <Link to="/service-booking">
                    Book This Service <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hygiene Standards */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Hygiene Standards
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We maintain the highest levels of cleanliness and food safety in all our 
                processing facilities. Your health and safety are our top priorities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hygieneStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{standard}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-primary p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold text-primary-foreground mb-4">100%</div>
                  <div className="text-xl text-primary-foreground/80">Hygiene Compliance</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Who We Serve"
            title="Our Target Customers"
            description="We cater to a diverse range of clients with varying needs."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {targetCustomers.map((customer, index) => (
              <motion.div
                key={customer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <customer.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{customer.title}</h3>
                <p className="text-muted-foreground">{customer.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/service-booking">
                Book Your Service Now <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;