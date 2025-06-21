import { Monitor, Smartphone, Cloud, Database, Palette, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and responsive design for optimal user experience.",
      features: ["React & Next.js", "Full-Stack Development", "E-commerce Solutions", "Progressive Web Apps"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional performance and user engagement.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps services to ensure reliability and performance at scale.",
      features: ["AWS & Azure", "Microservices", "CI/CD Pipelines", "Serverless Architecture"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: ["Data Visualization", "Machine Learning", "Business Intelligence", "Real-time Analytics"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive designs that create memorable user experiences and drive engagement.",
      features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"]
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
      features: ["SEO Optimization", "Content Strategy", "Social Media", "Performance Marketing"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift group transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
