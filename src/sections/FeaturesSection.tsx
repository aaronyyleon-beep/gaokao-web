import { useEffect, useRef, useState } from 'react';
import { Brain, Building2, BookOpen, TrendingUp, CheckCircle2 } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Brain,
    title: 'AI智能推荐',
    subtitle: '精准匹配',
    description: '基于大数据和人工智能算法，根据你的分数、兴趣和职业规划，智能推荐最适合的院校和专业。',
    image: '/images/feature-ai.jpg',
    benefits: ['个性化志愿方案', '冲稳保梯度分析', '专业就业前景预测'],
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    icon: Building2,
    title: '院校库查询',
    subtitle: '全面覆盖',
    description: '收录全国2800+所高校详细信息，包括历年分数线、招生计划、校园环境等全方位数据。',
    image: '/images/feature-schools.jpg',
    benefits: ['2800+院校信息', '历年录取数据', '校园实景VR'],
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 3,
    icon: BookOpen,
    title: '专业解析',
    subtitle: '深度解读',
    description: '详细解读各个专业的培养目标、课程设置、就业方向，帮助你找到真正感兴趣的专业。',
    image: '/images/feature-majors.jpg',
    benefits: ['1300+专业介绍', '课程体系解析', '就业方向指导'],
    color: 'from-violet-500 to-purple-400',
    bgColor: 'bg-violet-50',
  },
  {
    id: 4,
    icon: TrendingUp,
    title: '录取预测',
    subtitle: '科学评估',
    description: '根据历年录取数据和你的高考成绩，科学预测录取概率，让志愿填报更有把握。',
    image: '/images/feature-prediction.jpg',
    benefits: ['录取概率分析', '位次换算工具', '风险评估报告'],
    color: 'from-amber-500 to-orange-400',
    bgColor: 'bg-amber-50',
  },
];

export default function FeaturesSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set([...prev, index]));
              observer.unobserve(ref);
            }
          },
          { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            核心功能
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            全方位志愿填报
            <span className="text-gradient">解决方案</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从智能推荐到录取预测，为你的高考志愿填报保驾护航
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12 lg:space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleItems.has(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={feature.id}
                ref={el => { itemRefs.current[index] = el; }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div 
                  className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'} transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-2xl opacity-20 scale-105`} />
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div 
                  className={`${isEven ? 'lg:order-2' : 'lg:order-1'} transition-all duration-700 delay-200 ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-8' : '-translate-x-8'}`
                  }`}
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${feature.bgColor} rounded-lg mb-4`}>
                    <Icon className={`w-4 h-4 bg-gradient-to-r ${feature.color} bg-clip-text`} style={{ color: 'inherit' }} />
                    <span className={`text-sm font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 bg-gradient-to-r ${feature.color}`} style={{ color: 'inherit' }} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
