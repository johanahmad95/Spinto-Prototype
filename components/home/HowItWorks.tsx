'use client';

import { Search, UserCheck, CreditCard, Trophy } from 'lucide-react';
import { Card3D } from '@/components/ui';

const STEPS = [
  {
    icon: Search,
    title: 'Find',
    description: 'Pick your venue in Klang Valley.',
  },
  {
    icon: UserCheck,
    title: 'Profile',
    description: 'Quick sign-up to get started.',
  },
  {
    icon: CreditCard,
    title: 'Secure',
    description: 'One-tap, secure payment.',
  },
  {
    icon: Trophy,
    title: 'Play',
    description: 'Show up and hit the court.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-slate-800"
            style={{ fontFamily: 'var(--font-nunito), "Nunito", sans-serif' }}
          >
            Sprinto the court.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((step, index) => (
            <Card3D
              key={index}
              variant="clay"
              hover="lift"
              padding="lg"
              className="text-center group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="relative inline-flex mb-6">
                {/* 3D Icon background */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-gray-50
                  shadow-[6px_6px_12px_rgba(0,0,0,0.08),-4px_-4px_10px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8)]
                  flex items-center justify-center
                  group-hover:shadow-[8px_8px_16px_rgba(0,0,0,0.1),-5px_-5px_12px_rgba(255,255,255,0.95)]
                  transition-shadow duration-300"
                >
                  <step.icon className="w-8 h-8 text-teal-dark" strokeWidth={1.5} />
                </div>
                
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-chartreuse 
                  flex items-center justify-center text-sm font-bold text-gray-800
                  shadow-[0_0_10px_rgba(214,247,76,0.5)]"
                >
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
