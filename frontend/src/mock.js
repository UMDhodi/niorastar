// Mock data for Niora Star Agency Website

export const mockData = {
  // Brand logos for trust section
  brandLogos: [
    { name: 'TechCorp', id: 1 },
    { name: 'InnovateLab', id: 2 },
    { name: 'DigitalPro', id: 3 },
    { name: 'CreativeStudio', id: 4 },
    { name: 'FutureWorks', id: 5 },
    { name: 'BrandCo', id: 6 },
  ],

  // Services
  services: [
    {
      id: 1,
      title: 'Digital Marketing',
      subheading: 'Grow your brand with data-driven strategies',
      description: 'From social media campaigns to SEO optimization, we craft digital strategies that deliver measurable results and scale your business.',
      icon: 'TrendingUp'
    },
    {
      id: 2,
      title: 'Product Photography',
      subheading: 'Professional shoots that make products irresistible',
      description: 'High-quality product photography that showcases your offerings in the best light, driving conversions and building trust.',
      icon: 'Camera'
    },
    {
      id: 3,
      title: 'Website Design',
      subheading: 'Turn your website into a revenue-generating machine',
      description: 'Custom-built, conversion-optimized websites that look stunning and perform even better. Mobile-first and built to scale.',
      icon: 'Globe'
    },
    {
      id: 4,
      title: 'Logo Design',
      subheading: 'Visual identity that commands premium pricing',
      description: 'Memorable logos and brand identities that communicate your value instantly and make you stand out in any market.',
      icon: 'Palette'
    },
    {
      id: 5,
      title: 'Motion Graphics',
      subheading: 'Captivate your YouTube audience with stunning visuals',
      description: 'Eye-catching animations and motion graphics that boost engagement, increase watch time, and elevate your content.',
      icon: 'Film'
    },
    {
      id: 6,
      title: 'AI Automation',
      subheading: 'Work smarter with intelligent automation',
      description: 'Custom AI solutions that automate repetitive tasks, enhance productivity, and give you a competitive edge in your industry.',
      icon: 'Sparkles'
    },
    {
      id: 7,
      title: 'Power BI Dashboard',
      subheading: 'Transform data into actionable business insights',
      description: 'Professional data analytics and interactive Power BI dashboards that help you make informed decisions and drive business growth.',
      icon: 'BarChart3'
    }
  ],

  // Features
  features: [
    {
      id: 1,
      title: 'Revision Support Provided',
      description: 'We refine every detail to ensure your complete satisfaction because your success deserves nothing less',
      icon: 'RefreshCw'
    },
    {
      id: 2,
      title: 'Fast Turnaround Time',
      description: 'Get your projects delivered in weeks, not months. We move fast without compromising on quality or attention to detail.',
      icon: 'Zap'
    },
    {
      id: 3,
      title: 'Everything Under One Team',
      description: 'No more juggling multiple agencies. From design to development to marketing, we handle it all seamlessly.',
      icon: 'Users'
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: 'Aman',
      role: 'Owner',
      company: 'Glam n Glow',
      rating: 5,
      text: 'Niora Star transformed our online presence completely. Our conversion rate doubled within the first month. Absolutely worth every penny.',
      avatar: 'AM'
    },
    {
      id: 2,
      name: 'Hitesh',
      role: 'Founder',
      company: 'Tech Daddy',
      rating: 5,
      text: 'The team at Niora Star delivered beyond our expectations. Professional, fast, and the results speak for themselves. Highly recommend!',
      avatar: 'HT'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'BrandVision',
      rating: 5,
      text: 'Working with Niora Star was seamless. They understood our vision immediately and executed flawlessly. Our brand has never looked better.',
      avatar: 'ER'
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'Owner',
      company: 'InnovateNow',
      rating: 5,
      text: 'The ROI from our new website has been incredible. Niora Star knows how to build experiences that convert visitors into paying customers.',
      avatar: 'MC'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Freelancer',
      company: 'CreativeCo',
      rating: 5,
      text: 'From logo design to full website, Niora Star handled everything with professionalism. They are our go-to agency for all design needs.',
      avatar: 'LA'
    },
    {
      id: 6,
      name: 'Virender Kumar',
      role: 'CEO',
      company: 'NextGen Media',
      rating: 5,
      text: 'The motion graphics they created for our YouTube channel took our content to the next level. Engagement is up 300%. Phenomenal work!',
      avatar: 'DK'
    }
  ],

  // Pricing Plans
  pricingPlans: [
    {
      id: 1,
      title: 'Digital Marketing',
      price: '$499',
      period: '/month',
      description: 'Complete digital marketing strategy and execution',
      features: [
        'Social Media Management',
        'SEO Optimization',
        'Content Strategy',
        'Performance Analytics',
        'Monthly Reporting',
        'Ad Campaign Management'
      ],
      popular: false
    },
    {
      id: 2,
      title: 'Product Photography',
      price: '$299',
      period: '/session',
      description: 'Professional product shoots that drive sales',
      features: [
        'Up to 50 Products',
        'Multiple Angles',
        'Professional Editing',
        'High-Resolution Files',
        'Lifestyle Shots',
        'Fast Turnaround'
      ],
      popular: false
    },
    {
      id: 3,
      title: 'Website Design',
      price: '$1,999',
      period: '/project',
      description: 'Custom websites that convert visitors to customers',
      features: [
        'Custom Design',
        'Responsive & Mobile-First',
        'SEO Optimized',
        'Fast Loading Speed',
        'Content Management',
        'Ongoing Support'
      ],
      popular: true
    },
    {
      id: 4,
      title: 'Logo Design',
      price: '$199',
      period: '/project',
      description: 'Brand identity that commands attention',
      features: [
        '5 Unique Concepts',
        'Unlimited Revisions',
        'Vector Files',
        'Brand Guidelines',
        'Social Media Kit',
        'Fast Delivery'
      ],
      popular: false
    },
    {
      id: 5,
      title: 'Motion Graphics',
      price: '$799',
      period: '/video',
      description: 'Engaging animations for YouTube and social media',
      features: [
        'Custom Animations',
        'Multiple graphics',
        'HD Quality',
        'Music & Sound Effects',
        'Multiple Revisions',
        '7-Day Turnaround'
      ],
      popular: false
    },
    {
      id: 6,
      title: 'AI Automation',
      price: '$1,499',
      period: '/project',
      description: 'Smart automation solutions for your business',
      features: [
        'Custom AI Workflows',
        'Process Automation',
        'Integration Setup',
        'Training & Documentation',
        'Ongoing Optimization',
        'Priority Support'
      ],
      popular: false
    },
    {
      id: 7,
      title: 'Power BI Dashboard',
      price: '$1,299',
      period: '/project',
      description: 'Data analytics and visualization dashboards',
      features: [
        'Custom Dashboard Design',
        'Data Integration',
        'Interactive Visualizations',
        'Real-time Reporting',
        'Training & Support',
        'Ongoing Maintenance'
      ],
      popular: false
    }
  ]
};
