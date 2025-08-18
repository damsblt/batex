import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElement from "@/components/FloatingElement";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if EmailJS is properly configured
      if (emailjsConfig.serviceId === 'YOUR_SERVICE_ID' || 
          emailjsConfig.templateId === 'YOUR_TEMPLATE_ID' || 
          emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS not configured');
      }

      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        to_name: "Bâtex",
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show appropriate error message
      if (error instanceof Error && error.message === 'EmailJS not configured') {
        toast({
          title: "Configuration requise",
          description: "Le formulaire de contact n'est pas encore configuré. Veuillez nous contacter directement par téléphone ou email.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite lors de l'envoi du message. Veuillez nous contacter directement.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  useScrollToTop();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Contactez-nous
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Une question ? Un projet ? Notre équipe réactive est à votre écoute
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <AnimatedSection direction="left" delay={0.4}>
            <div className="space-y-8">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <CardTitle className="text-2xl text-gray-900">
                        Nos coordonnées
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { icon: <Phone className="h-6 w-6 text-amber-600 mt-1" />, title: "Téléphone", value: "+41 78 400 41 66", subtitle: "" },
                      { icon: <Mail className="h-6 w-6 text-amber-600 mt-1" />, title: "Email", value: "info@batex-renovations.ch", subtitle: "Réponse sous 24h garantie" },
                      { icon: <MapPin className="h-6 w-6 text-amber-600 mt-1" />, title: "Adresse", value: "1227 Acacias, Suisse", subtitle: "" },
                      { icon: <Clock className="h-6 w-6 text-amber-600 mt-1" />, title: "Horaires", value: "Lundi - Vendredi : 8h00 - 18h00\nSamedi : 9h00 - 17h00\nDimanche : Fermé", subtitle: "" }
                    ].map((contact, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {contact.icon}
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{contact.title}</h3>
                          <p className="text-gray-600">{contact.value}</p>
                          {contact.subtitle && (
                            <p className="text-sm text-gray-500 mt-1">
                              {contact.subtitle}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                className="bg-amber-50 rounded-lg p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Notre engagement
                </motion.h3>
                <motion.p 
                  className="text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  Réactifs et à l'écoute, nous nous engageons à vous rappeler rapidement. 
                  Baris Ozcan et son équipe mettent un point d'honneur à livrer des travaux 
                  de qualité, réalisés avec soin et professionnalisme.
                </motion.p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Formulaire de contact */}
          <AnimatedSection direction="right" delay={0.6}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <CardTitle className="text-2xl text-gray-900">
                      Demande de devis gratuit
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Votre nom et prénom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+41 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez votre projet *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full"
                    placeholder="Décrivez-nous votre projet de rénovation..."
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>
                </motion.div>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires. Vos données sont traitées en toute confidentialité.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
