import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Truck, Award, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';

const tomatoesImg = 'https://i.ibb.co/Mk0HxSTb/Ivorymyrrh-1-1.jpg';
const grindingImg = 'https://i.ibb.co/99sfCYCz/Ivorymyrrh-17-1.jpg';
const pepperImg = 'https://i.ibb.co/vt6Vwcm/Ivorymyrrh-2-1.jpg';
const onionImg = 'https://i.ibb.co/Sw9j025S/Ivorymyrrh-3-1.jpg';
const potatoesImg = 'https://i.ibb.co/RksLH2Sg/Ivorymyrrh-4-1.jpg';
const yamImg = 'https://i.ibb.co/bRD9Krkg/Ivorymyrrh-5-1.jpg';
const fishImg = 'https://i.ibb.co/WvZ8j1d1/Ivorymyrrh-6-1.jpg';
const cowsImg = 'https://i.ibb.co/3yJkYnw7/Ivorymyrrh-7-1.jpg';
const butcheringImg = 'https://i.ibb.co/rKfZDkZd/Ivorymyrrh-8-1.jpg';
const processingImg = 'https://i.ibb.co/b5DHNFTV/Ivorymyrrh-9-1.jpg';

const products = [
  { name: 'Fresh Tomatoes', image: tomatoesImg, description: 'Vine-ripened, premium quality tomatoes' },
  { name: 'Pepper', image: pepperImg, description: 'Colorful bell and chili peppers' },
  { name: 'Onions', image: onionImg, description: 'Fresh purple and white onions' },
  { name: 'Potatoes', image: potatoesImg, description: 'Quality farm-fresh potatoes' },
  { name: 'Yam', image: yamImg, description: 'Premium African yam tubers' },
  { name: 'Fish', image: fishImg, description: 'Fresh catch from trusted sources' },
];

const services = [
  {
    title: 'Cow Butchering',
    description: 'Professional on-site or off-site butchering services with precision cuts.',
    image: butcheringImg,
  },
  {
    title: 'Meat Processing',
    description: 'Hygienic processing facilities ensuring the highest quality standards.',
    image: processingImg,
  },
  {
    title: 'Pepper Grinding',
    description: 'Multiple grinding machines for fast, efficient pepper grinding services.',
    image: grindingImg,
  },
];

const whyChooseUs = [
  { icon: Leaf, title: 'Farm Fresh Quality', description: 'Direct from trusted farms to your doorstep' },
  { icon: Shield, title: 'Hygiene Standards', description: 'Strict adherence to food safety protocols' },
  { icon: Truck, title: 'Reliable Delivery', description: 'Timely and efficient logistics network' },
  { icon: Award, title: 'Industry Expertise', description: 'Years of agricultural excellence' },
];

const testimonials = [
  {
    name: 'Chief Adebayo',
    role: 'Restaurant Owner',
    content: 'Ivorymyrrh has been our trusted supplier for over 3 years. Their produce quality is unmatched!',
    rating: 5,
  },
  {
    name: 'Mrs. Okonkwo',
    role: 'Caterer',
    content: 'The meat processing service is exceptional. Always hygienic and professionally handled.',
    rating: 5,
  },
  {
    name: 'Alhaji Musa',
    role: 'Wholesaler',
    content: 'Consistent quality and competitive pricing. They understand the business perfectly.',
    rating: 5,
  },
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/MdLJcPM/Ivorymyrrh.jpg"
            alt="Ivorymyrrh Resources Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Premium Agricultural Supply
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Fresh Produce & <br />
              <span className="text-gradient-primary">Premium Meat</span> Processing
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Your trusted partner for fresh tomatoes, pepper, onion, potatoes, yam, fish, 
              cows, and professional butchering services. Quality you can trust.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/products">
                  Explore Products <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/get-quote">Request Quote</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Us Preview Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Your Trusted Partner in <span className="text-gradient-primary">Agricultural Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ivorymyrrh Resources Ltd is a registered Nigerian company dedicated to supplying premium agricultural products and professional meat processing services. We bridge the gap between farms and consumers with integrity, quality, and reliability.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Fresh produce sourced directly from trusted local farms</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Professional butchering and meat processing services</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Nationwide delivery and export capabilities</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-background border border-border">
                <Shield className="w-10 h-10 text-brand shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">CAC Registered</p>
                  <p className="text-lg font-semibold text-foreground">RC NO. 8524204</p>
                </div>
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={cowsImg}
                  alt="Ivorymyrrh Resources - Premium Livestock"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Our Products"
            title="Premium Agricultural Produce"
            description="We source only the finest produce from trusted farms and suppliers across the region."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden bg-background shadow-card"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-brand mb-1 transition-colors group-hover:text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Products <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="Professional Meat Processing"
            description="Expert butchering and meat processing services with the highest hygiene standards."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2 line-clamp-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{service.description}</p>
                  <Button variant="hero" size="sm" asChild>
                    <Link to="/service-booking">Book Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Why Choose Us"
            title="Excellence in Every Detail"
            description="We're committed to delivering the best agricultural products and services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            description="Trusted by businesses and individuals across the region."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-background rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Contact us today for premium agricultural products or professional meat processing services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/get-quote">
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline-accent"
                size="lg"
                asChild
              >
                <Link to="/service-booking">Book a Service</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;