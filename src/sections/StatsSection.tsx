import { useEffect, useRef, useState } from 'react';
import { Users, School, BookOpen, TrendingUp, Award, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '万+',
    label: '累计用户',
    description: '覆盖全国各省市考生',
  },
  {
    icon: School,
    value: 2800,
    suffix: '+',
    label: '合作院校',
    description: '全国高校数据覆盖',
  },
  {
    icon: BookOpen,
    value: 1300,
    suffix: '+',
    label: '专业库',
    description: '详细专业信息解析',
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: '%',
    label: '录取成功率',
    description: '用户满意度极高',
  },
];

const highlights = [
  {
    icon: Award,
    title: '权威数据源',
    description: '教育部官方数据对接',
  },
  {
    icon: Star,
    title: 'AI算法领先',
    description: '自研智能推荐引擎',
  },
  {
    icon: Users,
    title: '专家团队',
    description: '10年+填报指导经验',
  },
];

function AnimatedNumber({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4">
            数据实力
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            用数据说话，让选择更
            <span className="text-gradient">精准</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            强大的数据支撑，为你的志愿填报决策提供可靠依据
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative group bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </div>
                
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(stats.length + index) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{highlight.title}</div>
                  <div className="text-sm text-gray-500">{highlight.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
