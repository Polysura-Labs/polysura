import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Coins, 
  BarChart3, 
  Users, 
  Bot, 
  Network, 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking on a nav link
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold">Polysura</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#ecosystem" className="hover:text-purple-400 transition-colors">Ecosystem</a>
              <a href="#roadmap" className="hover:text-purple-400 transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-purple-400 transition-colors">Community</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Launch App
              </button>
              <button 
                className="md:hidden text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            <a 
              href="#features" 
              className="block py-2 px-4 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={handleNavLinkClick}
            >
              Features
            </a>
            <a 
              href="#ecosystem" 
              className="block py-2 px-4 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={handleNavLinkClick}
            >
              Ecosystem
            </a>
            <a 
              href="#roadmap" 
              className="block py-2 px-4 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={handleNavLinkClick}
            >
              Roadmap
            </a>
            <a 
              href="#community" 
              className="block py-2 px-4 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={handleNavLinkClick}
            >
              Community
            </a>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Decentralized</span> Ecosystem
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Combining AI, Web3, DeFi, and community-driven innovation into a single powerful platform
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border border-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-600/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Core Features</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Our platform combines cutting-edge technologies to create a seamless ecosystem for Web3 innovation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            icon={<Brain className="h-10 w-10 text-purple-500" />}
            title="AI-Driven Marketplace"
            description="Create, trade, and monetize AI models, datasets, and algorithms with low-cost transactions on Polygon."
          />
          <FeatureCard 
            icon={<Coins className="h-10 w-10 text-purple-500" />}
            title="Tokenization Engine"
            description="Tokenize real-world assets, AI models, or memecoins with support for fractional ownership and trading."
          />
          <FeatureCard 
            icon={<BarChart3 className="h-10 w-10 text-purple-500" />}
            title="DeFi Integration"
            description="Stake, lend, and farm yields with AI-powered tools for portfolio management and risk assessment."
          />
          <FeatureCard 
            icon={<Users className="h-10 w-10 text-purple-500" />}
            title="Memecoin & Community"
            description="Launch and promote memecoins with gamified features and SocialFi to build engaged communities."
          />
          <FeatureCard 
            icon={<Bot className="h-10 w-10 text-purple-500" />}
            title="AI Agents"
            description="Deploy AI bots that can hold funds, execute trades, and interact with smart contracts on your behalf."
          />
          <FeatureCard 
            icon={<Network className="h-10 w-10 text-purple-500" />}
            title="DePIN Integration"
            description="Connect IoT devices for data monetization and tokenization using decentralized infrastructure."
          />
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Ecosystem</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            A comprehensive platform designed for all participants in the Web3 space
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">For Developers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-purple-500" />
                  </div>
                  <span>Access to powerful AI models and datasets</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-purple-500" />
                  </div>
                  <span>Build and monetize AI-powered dApps</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-purple-500" />
                  </div>
                  <span>Integrate with Polygon for scalable solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-purple-500" />
                  </div>
                  <span>Comprehensive SDK and API documentation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">For Investors</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-purple-500" />
                  </div>
                  <span>Fractional ownership of AI models and assets</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-purple-500" />
                  </div>
                  <span>AI-powered portfolio management tools</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-purple-500" />
                  </div>
                  <span>Yield farming and staking opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500/20 p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-purple-500" />
                  </div>
                  <span>Early access to innovative AI and Web3 projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Roadmap</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Our vision for the future of Polysura and the milestones we aim to achieve
        </p>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600/30"></div>
          <div className="space-y-20">
            <RoadmapItem 
              phase="Q3 2025"
              title="Platform Launch"
              items={[
                "Initial marketplace for AI models",
                "Basic tokenization features",
                "Integration with Polygon network",
                "Community building and user onboarding"
              ]}
              isLeft={true}
            />
            <RoadmapItem 
              phase="Q4 2025"
              title="DeFi Integration"
              items={[
                "Staking and yield farming",
                "AI-powered portfolio management",
                "Risk assessment tools",
                "Enhanced tokenization features"
              ]}
              isLeft={false}
            />
            <RoadmapItem 
              phase="Q1 2026"
              title="AI Agents & Memecoin Launchpad"
              items={[
                "AI bots for onchain interactions",
                "Memecoin creation and promotion tools",
                "SocialFi features for community building",
                "Enhanced security and governance"
              ]}
              isLeft={true}
            />
            <RoadmapItem 
              phase="Q2 2026"
              title="DePIN & Ecosystem Expansion"
              items={[
                "IoT device integration",
                "Decentralized infrastructure for data handling",
                "Cross-chain compatibility",
                "Advanced AI model marketplace"
              ]}
              isLeft={false}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard value="$10M+" label="Total Value Locked" />
            <StatCard value="50+" label="AI Models" />
            <StatCard value="10,000+" label="Community Members" />
            <StatCard value="25+" label="Partner Projects" />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Join Our Community</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Be part of the revolution in AI and Web3 innovation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors text-center">
            <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Twitter className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Twitter</h3>
            <p className="text-gray-400 mb-6">Follow us for the latest updates and announcements</p>
            <button className="bg-transparent border border-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-600/10 transition-colors w-full">
              Follow
            </button>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors text-center">
            <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Discord</h3>
            <p className="text-gray-400 mb-6">Join our community to connect with developers and users</p>
            <button className="bg-transparent border border-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-600/10 transition-colors w-full">
              Join Discord
            </button>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors text-center">
            <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Github className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className="text-gray-400 mb-6">Contribute to our open-source projects and documentation</p>
            <button className="bg-transparent border border-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-600/10 transition-colors w-full">
              View GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-10 rounded-2xl border border-purple-700/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest updates, announcements, and early access opportunities.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Brain className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold">Polysura</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Polysura. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for feature cards
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors">
      <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

// Component for roadmap items
function RoadmapItem({ phase, title, items, isLeft }) {
  return (
    <div className={`relative ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'} md:w-1/2 ${isLeft ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
      <div className="absolute top-0 left-1/2 md:left-auto md:top-6 transform -translate-x-1/2 md:translate-x-0 md:translate-y-0 w-8 h-8 bg-purple-600 rounded-full border-4 border-gray-900 z-10"></div>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors">
        <span className="inline-block bg-purple-600/20 text-purple-400 px-4 py-1 rounded-full text-sm font-medium mb-3">
          {phase}
        </span>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded mr-3 mt-1 flex-shrink-0">
                <ArrowRight className="h-3 w-3 text-purple-500" />
              </div>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Component for stat cards
function StatCard({ value, label }) {
  return (
    <div className="p-6">
      <p className="text-4xl font-bold text-purple-500 mb-2">{value}</p>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

export default App;