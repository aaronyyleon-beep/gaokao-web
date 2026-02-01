import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronRight, Sparkles, GraduationCap, BookOpen, Target } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] animate-float" style={{ animationDelay: '0s' }}>
          <GraduationCap className="w-8 h-8 text-blue-300/50" />
        </div>
        <div className="absolute top-40 right-[15%] animate-float" style={{ animationDelay: '0.5s' }}>
          <BookOpen className="w-6 h-6 text-cyan-300/50" />
        </div>
        <div className="absolute bottom-40 left-[20%] animate-float" style={{ animationDelay: '1s' }}>
          <Target className="w-7 h-7 text-amber-300/50" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-12 lg:py-0">
        {/* Left Content */}
        <div 
          className={`flex-1 text-center lg:text-left transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">2025高考志愿填报神器</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            高考志愿
            <span className="text-gradient">助手</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-2">
            智能填报，助梦未来
          </p>
          
          <p className="text-base text-gray-500 mb-8 max-w-md mx-auto lg:mx-0">
            AI智能推荐 + 大数据分析，精准匹配最适合你的大学和专业，让志愿填报不再迷茫
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-blue text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 animate-pulse-glow"
            >
              <Download className="w-5 h-5 mr-2" />
              立即下载APP
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg rounded-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              了解更多
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>500万+用户信赖</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>98%录取成功率</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>免费使用</span>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div 
          className={`flex-1 flex justify-center items-center transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl blur-2xl scale-110" />
            
            {/* Main Image */}
            <img 
              src="/images/hero-image.jpg" 
              alt="高考志愿助手APP" 
              className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">录取预测</p>
                  <p className="text-lg font-bold text-green-600">92.5%</p>
                </div>
              </div>
            </div>
            
            {/* Floating Schools Card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">覆盖院校</p>
                  <p className="text-lg font-bold text-blue-600">2800+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
