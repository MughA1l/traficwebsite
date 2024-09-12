export const menuData = {
    products: {
      name: 'Products',
      subItems: [
        { name: 'Web dev', path: '/products/web-dev' },
        { name: 'Prod Design', path: '/products/prod-design' },
        { name: 'ANPR', path: '/products/anpr' },
        { name: 'Comp vision application', path: '/products/comp-vision' },
        { name: 'AI Automation', path: '/products/ai-automation' }
      ]
    },
    services: {
      name: 'Services',
      subItems: [
        { name: 'Inlights Traffic Sol', path: '/services/inlights-traffic' },
        { name: 'ANPR', path: '/services/anpr' }
      ]
    },
    company: {
      name: 'Company',
      subItems: [
        { name: 'About the company', path: '/company/about' },
        { name: 'Meet The Team', path: '/company/team' },
        { name: 'Careers', path: '/company/careers' }
      ]
    }
  };
  
  export type MenuKey = keyof typeof menuData;