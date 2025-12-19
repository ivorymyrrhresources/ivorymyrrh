import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuoteSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <CheckCircle className="w-12 h-12 text-primary" />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quote Request Received!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Thank you for your interest in our products. Our team will review your request 
            and get back to you within 24 hours with a detailed quote.
          </p>

          <div className="p-6 rounded-2xl bg-card border border-border mb-8">
            <h2 className="font-semibold text-foreground mb-3">What happens next?</h2>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">1.</span>
                Our team reviews your requirements
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">2.</span>
                We prepare a competitive quote for you
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">3.</span>
                You receive the quote via email or phone
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" asChild>
              <Link to="/">
                <Home className="w-5 h-5" /> Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/products">
                Browse Products <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSuccess;