import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Clock, 
  Globe2, 
  Code2, 
  GraduationCap, 
  HeartHandshake,
  MessageSquare
} from 'lucide-react';
import { MENTORS } from '../data/showcaseData';
import { LinkConfig, MentorProfile } from '../types';
import { DEFAULT_CONFIG } from '../utils/config';

interface MentorSectionProps {
  onOpenRegistration: (track?: string, eventTitle?: string) => void;
  config?: LinkConfig;
}

const MentorCard: React.FC<{ mentor: MentorProfile }> = ({ mentor }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between group"
    >
      <div className="space-y-3.5">
        {/* Mentor Image Container with Placeholder Photo and Fallback */}
        <div className="relative w-full h-52 sm:h-48 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-xs">
          {!imgError && mentor.imageUrl ? (
            <img 
              src={mentor.imageUrl} 
              alt={mentor.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-tr ${mentor.imagePlaceholderColor || 'from-indigo-600 to-violet-700'} text-white font-extrabold text-2xl flex items-center justify-center`}>
              {mentor.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>
          )}
          
          <div className="absolute top-2.5 right-2.5">
            <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold tracking-wide shadow-xs">
              Mentor
            </span>
          </div>
        </div>

        {/* Mentor Details */}
        <div>
          <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {mentor.name}
          </h4>
          <p className="text-xs text-indigo-600 font-semibold mt-0.5">
            {mentor.role}
          </p>
          <p className="text-xs text-slate-500 font-medium mt-1">
            {mentor.affiliation}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
            <span className="font-semibold text-slate-700">Focus: </span>
            {mentor.specialization}
          </p>
        </div>
      </div>
    </div>
  );
};

export const MentorSection: React.FC<MentorSectionProps> = ({
  onOpenRegistration,
  config = DEFAULT_CONFIG
}) => {
  const safeConfig = config || DEFAULT_CONFIG;

  const mentorTracks = [
    {
      icon: Code2,
      title: 'Project & Technical Mentor',
      description: 'Guide student teams through hands-on AI experiments with Python, Google Colab, Teachable Machine, and computer vision models.',
      badge: 'Technical Track'
    },
    {
      icon: GraduationCap,
      title: 'Guest Speaker & Career Guide',
      description: 'Deliver inspiring guest lectures, demystify real-world machine learning careers, and share ethical AI perspectives with school classrooms.',
      badge: 'Outreach Track'
    },
    {
      icon: Award,
      title: 'Showcase Judge & Reviewer',
      description: 'Evaluate innovative student capstone projects, provide constructive feedback, and select standout youth innovators at regional showcases.',
      badge: 'Evaluation Track'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Flexible Commitment',
      desc: 'Contribute just 2–4 hours per month via remote mentoring sessions or weekend regional workshops.'
    },
    {
      icon: Award,
      title: 'Official Recognition',
      desc: 'Receive an official agami.ai Mentor Certificate, verifiable digital credential, and public recognition.'
    },
    {
      icon: Globe2,
      title: 'Nationwide Grassroots Impact',
      desc: 'Directly empower students aged 11–18 across all 8 divisions and underrepresented districts in Bangladesh.'
    },
    {
      icon: Users,
      title: 'Professional Community',
      desc: 'Connect with a vibrant network of AI researchers, industry engineers, and university faculty members.'
    }
  ];

  return (
    <section id="mentors" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Community & Mentorship Network</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Be a Mentor at agami.ai
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Empower Bangladesh's next generation of AI innovators. Volunteer your expertise to mentor high school and college students, support educators, and shape a thriving, ethical AI ecosystem.
          </p>
        </div>

        {/* 3 Mentor Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {mentorTracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all flex flex-col"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50/80 px-2.5 py-1 rounded-full border border-indigo-100/60">
                      {track.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {track.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {track.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Mentor With Us (4 Pillars) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-10 mb-16 shadow-xs">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Why Volunteer as an agami.ai Mentor?
            </h3>
            <p className="text-sm text-slate-600">
              We make volunteering impactful, flexible, and rewarding for industry practitioners and academic researchers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-indigo-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Mentors & Advisors */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Mentor Community</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Meet Featured Mentors & Advisors
              </h3>
            </div>
            <button
              onClick={() => onOpenRegistration('Mentor', 'Mentor Application')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 self-start sm:self-auto cursor-pointer"
            >
              <span>Join our mentor roster</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MENTORS.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Ready to Make an Impact?</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              Inspire the Next Generation of Bangladeshi AI Innovators
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl">
              Whether you are a software developer, data scientist, graduate researcher, university faculty, or passionate tech educator, your mentorship can open doors for a young student.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenRegistration('Mentor', 'agami.ai Mentor Application')}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Apply as an agami.ai Mentor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={`mailto:${safeConfig.contactEmail || 'agamiai@gmail.com'}?subject=Mentor%20Inquiry%20-%20agami.ai`}
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Contact Mentorship Team</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Open to undergraduate/graduate students & industry professionals
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% Volunteer basis with verified certification
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
