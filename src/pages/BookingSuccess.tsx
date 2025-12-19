import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BookingSuccess = () => {
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
            <Calendar className="w-12 h-12 text-brand" />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Booking Confirmed!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Your service booking has been received. Our team will contact you shortly 
            to confirm the details and schedule.
          </p>

          <div className="p-6 rounded-2xl bg-card border border-border mb-8">
            <h2 className="font-semibold text-foreground mb-3">What happens next?</h2>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">1.</span>
                We review your booking details
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">2.</span>
                Our team calls to confirm schedule
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">3.</span>
                We arrive at the agreed time and location
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">4.</span>
                Professional service delivery
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
              <Link to="/services">
                View Services <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSuccess;