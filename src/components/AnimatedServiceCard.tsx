import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  index: number;
}

const AnimatedServiceCard = ({ title, description, icon, link, index }: AnimatedServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <motion.div 
            className="flex justify-center mb-4"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 mb-4 text-center">
            {description}
          </CardDescription>
          <div className="text-center">
            <Link to={link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white transition-all duration-300"
                >
                  En savoir plus
                </Button>
              </motion.div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedServiceCard;
