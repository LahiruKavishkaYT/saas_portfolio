
import { Target, Eye, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">TechCorp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of technology enthusiasts dedicated to delivering innovative solutions that transform businesses and create meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Pioneering Digital Innovation Since 2019
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded with a vision to bridge the gap between complex technology and business needs, TechCorp has grown into a trusted partner for companies seeking digital transformation. Our expertise spans across web development, mobile applications, cloud solutions, and emerging technologies.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe in the power of technology to solve real-world problems and create value for businesses of all sizes. Our approach combines technical excellence with creative thinking to deliver solutions that not only meet but exceed expectations.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-16 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              <div>
                <p className="font-semibold text-gray-900">Our Commitment</p>
                <p className="text-gray-600">Delivering excellence through innovation, collaboration, and continuous learning.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl hover-lift">
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">Empowering businesses through innovative technology solutions</p>
              </div>
              <div className="glass-card p-6 rounded-2xl hover-lift">
                <Eye className="w-10 h-10 text-purple-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-gray-600 text-sm">To be the leading technology partner for digital transformation</p>
              </div>
              <div className="glass-card p-6 rounded-2xl hover-lift">
                <Award className="w-10 h-10 text-indigo-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600 text-sm">Committed to delivering the highest quality solutions</p>
              </div>
              <div className="glass-card p-6 rounded-2xl hover-lift">
                <TrendingUp className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Growth</h4>
                <p className="text-gray-600 text-sm">Driving continuous growth and innovation for our clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
