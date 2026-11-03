import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';

import tomatoesAsset from '@/assets/products/tomatoes.jpg.asset.json';
import pepperAsset from '@/assets/products/pepper.jpg.asset.json';
import cowsAsset from '@/assets/products/cows.jpg.asset.json';
import driedFishAsset from '@/assets/products/dried-catfish.jpg.asset.json';
import goatMeatAsset from '@/assets/products/goat-meat.jpg.asset.json';
import riceAsset from '@/assets/products/rice.jpg.asset.json';
import beansAsset from '@/assets/products/beans.jpg.asset.json';
import garriAsset from '@/assets/products/garri.jpg.asset.json';
import palmOilAsset from '@/assets/products/palm-oil.jpg.asset.json';
import groundnutOilAsset from '@/assets/products/groundnut-oil.jpg.asset.json';

const tomatoesImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793673036/Ivorymyrrh_Tomato_Market_Display_1.png";
const pepperImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793674402/Untitled_design_1.jpg";
const onionImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793694710/Ivorymyrrh.jpg";
const potatoesImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793694956/Ivorymyrrh_1.jpg";
const yamImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793695280/Ivorymyrrh_2.jpg";
const fishImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793695482/Ivorymyrrh_3.jpg";
const cowsImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793699774/Ivorymyrrh_5.jpg";
const driedFishImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793699483/Ivorymyrrh_4.jpg";
const goatMeatImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793700294/Ivorymyrrh_6.jpg";
const riceImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793700889/Ivorymyrrh_7.jpg";
const beansImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793701309/Ivorymyrrh_8.jpg";
const garriImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793701572/Ivorymyrrh_9.jpg";
const palmOilImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793701907/Ivorymyrrh_10.jpg";
const groundnutOilImg = "https://res.cloudinary.com/titznrnk/image/upload/v1793702211/Ivorymyrrh_11.jpg";

const products = [
  {
    name: 'Fresh Tomatoes',
    image: tomatoesImg,
    description: 'Premium vine-ripened tomatoes sourced directly from trusted farms. Perfect for cooking, salads, and processing.',
    category: 'Vegetables',
    features: ['Farm Fresh', 'Vine Ripened', 'Bulk Available'],
  },
  {
    name: 'Pepper',
    image: pepperImg,
    description: 'Colorful assortment of bell peppers and fresh chili varieties. Great for spicing up your dishes.',
    category: 'Vegetables',
    features: ['Mixed Varieties', 'Fresh Daily', 'Wholesale Pricing'],
  },
  {
    name: 'Onions',
    image: onionImg,
    description: 'Quality purple and white onions with excellent flavor profile. Essential for every kitchen.',
    category: 'Vegetables',
    features: ['Long Shelf Life', 'Premium Quality', 'Bulk Orders'],
  },
  {
    name: 'Potatoes',
    image: potatoesImg,
    description: 'Fresh, high-quality potatoes ideal for frying, boiling, or baking. Consistently great taste.',
    category: 'Tubers',
    features: ['Farm Direct', 'Multiple Sizes', 'Quality Checked'],
  },
  {
    name: 'Yam',
    image: yamImg,
    description: 'Premium African yam tubers known for their excellent taste and texture. A staple in many cuisines.',
    category: 'Tubers',
    features: ['Premium Grade', 'Fresh Harvest', 'Wholesale Available'],
  },
  {
    name: 'Fresh Fish',
    image: fishImg,
    description: 'Fresh catch from trusted fishing communities. Properly stored and handled for maximum freshness.',
    category: 'Seafood',
    features: ['Daily Fresh', 'Ice Packed', 'Various Species'],
  },
  {
    name: 'Dried Catfish',
    image: driedFishImg,
    description: 'Traditionally smoked and dried fish with rich flavor. Long shelf life and perfect for stews and soups.',
    category: 'Seafood',
    features: ['Smoke Dried', 'Long Lasting', 'Bulk Available'],
  },
  {
    name: 'Cows',
    image: cowsImg,
    description: 'Healthy, well-fed livestock from quality farms. Available for purchase with optional butchering services.',
    category: 'Livestock',
    features: ['Health Certified', 'Various Breeds', 'Butchering Available'],
  },
  {
    name: 'Goat Meat',
    image: goatMeatImg,
    description: 'Premium quality goat meat from well-raised livestock. Fresh cuts available for all culinary needs.',
    category: 'Livestock',
    features: ['Fresh Cuts', 'Quality Assured', 'Custom Portions'],
  },
  {
    name: 'Rice',
    image: riceImg,
    description: 'Premium quality rice sourced from trusted suppliers. Perfect for everyday meals and bulk orders.',
    category: 'Grains',
    features: ['Premium Grade', 'Multiple Varieties', 'Bulk Pricing'],
  },
  {
    name: 'Beans',
    image: beansImg,
    description: 'Quality beans including honey beans and black-eyed peas. Nutritious and essential for Nigerian cuisine.',
    category: 'Grains',
    features: ['Multiple Varieties', 'Nutritious', 'Wholesale Available'],
  },
  {
    name: 'Garri',
    image: garriImg,
    description: 'Premium cassava flakes processed to perfection. A staple food with versatile uses in Nigerian cuisine.',
    category: 'Processed',
    features: ['Premium Quality', 'Well Processed', 'Bulk Orders'],
  },
  {
    name: 'Red Palm Oil',
    image: palmOilImg,
    description: 'Pure, naturally extracted red palm oil. Essential for authentic Nigerian cooking and recipes.',
    category: 'Oils',
    features: ['100% Pure', 'Natural Extract', 'Bulk Available'],
  },
  {
    name: 'Groundnut Oil',
    image: groundnutOilImg,
    description: 'High-quality groundnut (peanut) oil perfect for cooking and frying. Rich flavor and healthy choice.',
    category: 'Oils',
    features: ['Premium Quality', 'Cold Pressed', 'Wholesale Pricing'],
  },
];

const categories = ['All', 'Vegetables', 'Tubers', 'Seafood', 'Livestock', 'Grains', 'Processed', 'Oils'];

const Products = () => {
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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Premium <span className="text-gradient-primary">Agricultural</span> Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Fresh produce, quality livestock, grains, and oils sourced directly from trusted farms and suppliers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-lg bg-muted text-muted-foreground text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/get-quote">Request Quote</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Services Section */}
      <section className="py-24 bg-card">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We Export <span className="text-gradient-primary">Worldwide</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ivorymyrrh Resources Ltd is open to the export of agro products and processed meat 
              to clients anywhere in the world. We handle international logistics and ensure 
              your products arrive fresh and on time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-quote">
                  Request Export Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need a Custom Order?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We handle orders of all sizes. Contact us for bulk pricing and custom requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-quote">
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Products;
