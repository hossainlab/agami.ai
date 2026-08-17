import React from 'react';
import { 
  Mail,
  Linkedin,
  Facebook,
  Twitter,
  Github,
  Youtube
} from 'lucide-react';
import { LinkConfig } from '../types';
import { DEFAULT_CONFIG } from '../utils/config';

interface FooterProps {
  onOpenConfig?: () => void;
  config?: LinkConfig;
}

export const Footer: React.FC<FooterProps> = ({
  config = DEFAULT_CONFIG
}) => {
  const safeConfig = config || DEFAULT_CONFIG;
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', hoverColor: 'hover:text-blue-400 hover:bg-blue-500/10' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', hoverColor: 'hover:text-sky-400 hover:bg-sky-500/10' },
    { name: 'Twitter / X', icon: Twitter, href: 'https://x.com', hoverColor: 'hover:text-indigo-400 hover:bg-indigo-500/10' },
    { name: 'GitHub', icon: Github, href: 'https://github.com', hoverColor: 'hover:text-white hover:bg-white/10' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', hoverColor: 'hover:text-red-400 hover:bg-red-500/10' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 sm:pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-baseline font-extrabold text-2xl tracking-tight text-white cursor-pointer group text-left"
              >
                <span>agami<span className="text-indigo-400">.ai</span></span>
                <sup className="ml-1 text-[11px] font-bold text-indigo-400 tracking-wider select-none uppercase -top-2">
                  BD
                </sup>
              </button>
              
              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-md">
                Empowering school and college students and educators across Bangladesh with foundational Artificial Intelligence and Machine Learning literacy, ethical reasoning, and hands-on skills.
              </p>
            </div>
          </div>

          {/* Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button 
                  onClick={() => scrollTo('overview')} 
                  className="hover:text-white transition-colors cursor-pointer py-1"
                >
                  Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('curriculum')} 
                  className="hover:text-white transition-colors cursor-pointer py-1"
                >
                  Curriculum
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('mentors')} 
                  className="hover:text-white transition-colors cursor-pointer py-1"
                >
                  Be a Mentor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('faq')} 
                  className="hover:text-white transition-colors cursor-pointer py-1"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Get in Touch
            </h4>
            
            <div className="space-y-3 text-xs">
              <a 
                href={`mailto:${safeConfig.contactEmail || 'agamiai@gmail.com'}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium break-all py-1"
              >
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>{safeConfig.contactEmail || 'agamiai@gmail.com'}</span>
              </a>

              {/* Social Links */}
              <div className="pt-1">
                <p className="text-[11px] text-slate-500 font-medium mb-2.5 uppercase tracking-wider">
                  Community & Social
                </p>
                <div className="flex items-center gap-2.5 flex-wrap">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center transition-all ${social.hoverColor}`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} agami.ai<sup className="text-[10px] font-bold text-indigo-400 ml-0.5">BD</sup>. All materials free under CC BY-NC-SA 4.0.
          </p>

          <div className="flex items-center gap-1.5 text-slate-400 flex-wrap justify-center">
            <span>Collaboration with</span>
            <span className="text-slate-200 font-semibold">DeepBio</span>
            <span>•</span>
            <span className="text-slate-200 font-semibold">Raspberry Pi Foundation</span>
            <span>•</span>
            <span className="text-slate-200 font-semibold">Google DeepMind</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
