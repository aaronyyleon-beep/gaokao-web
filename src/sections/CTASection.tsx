import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Apple, CheckCircle2, Sparkles, Gift } from 'lucide-react';

const benefits = [
  '免费使用所有功能',
  'AI智能无限次推荐',
  '专家一对一咨询',
  '录取结果实时跟踪',
];

export default function CTASection() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 sm:p-12 lg:p-16">
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '0s' }}>
              <Sparkles className="w-8 h-8 text-white/30" />
            </div>
            <div className="absolute bottom-10 left-10 animate-float" style={{ animationDelay: '0.5s' }}>
              <Gift className="w-10 h-10 text-white/20" />
            </div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div 
              className={`text-center lg:text-left transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">限时福利</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                立即下载，开启你的
                <span className="block text-amber-300">志愿填报之旅</span>
              </h2>

              <p className="text-lg text-blue-100 mb-8 max-w-lg mx-auto lg:mx-0">
                现在下载即可获得免费VIP体验，享受AI智能推荐、专家咨询等全部高级功能
              </p>

              {/* Benefits List */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-300 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 px-8 py-6 text-lg rounded-xl shadow-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Android下载
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-6 text-lg rounded-xl hover:bg-white/30 transition-all duration-300"
                >
                  <Apple className="w-5 h-5 mr-2" />
                  iOS下载
                </Button>
              </div>
            </div>

            {/* Right Content - QR Code & Stats */}
            <div 
              className={`flex flex-col items-center justify-center transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* QR Code Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-800 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <div className="grid grid-cols-5 gap-1 p-2">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-4 h-4 ${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">扫码下载APP</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">高考志愿助手</p>
                  <p className="text-sm text-gray-500">v3.2.0 最新版本</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-sm text-blue-200">用户评分</div>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <div className="text-2xl font-bold text-white">500万+</div>
                  <div className="text-sm text-blue-200">下载量</div>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-blue-200">好评率</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
