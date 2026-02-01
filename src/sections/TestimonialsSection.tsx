import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: '张同学',
    avatar: 'Z',
    province: '山东',
    score: '628分',
    university: '山东大学',
    major: '计算机科学与技术',
    content: '高考志愿助手真的帮了大忙！AI推荐的冲稳保梯度非常合理，最终我被第一志愿录取了。特别感谢录取预测功能，让我对自己有清晰的定位。',
    rating: 5,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: '李同学',
    avatar: 'L',
    province: '河南',
    score: '591分',
    university: '郑州大学',
    major: '临床医学',
    content: '本来对志愿填报一无所知，用了这个APP后清晰多了。专业解析功能让我了解了很多专业的真实情况，避免了盲目选择。强烈推荐！',
    rating: 5,
    color: 'bg-emerald-500',
  },
  {
    id: 3,
    name: '王同学',
    avatar: 'W',
    province: '四川',
    score: '605分',
    university: '电子科技大学',
    major: '电子信息工程',
    content: '数据非常全面，历年分数线查询很方便。最喜欢的是智能推荐功能，根据我的分数和兴趣给出了很多不错的建议，省了很多时间。',
    rating: 5,
    color: 'bg-violet-500',
  },
  {
    id: 4,
    name: '陈同学',
    avatar: 'C',
    province: '广东',
    score: '612分',
    university: '华南理工大学',
    major: '建筑学',
    content: '界面简洁易用，功能强大。特别是院校库，每个学校的详细信息都有，还有校园VR可以看，填报志愿时心里更有底了。',
    rating: 5,
    color: 'bg-amber-500',
  },
  {
    id: 5,
    name: '刘同学',
    avatar: 'L',
    province: '湖北',
    score: '598分',
    university: '武汉大学',
    major: '法学',
    content: '用了好几个志愿填报APP，这个是最满意的。预测准确率很高，推荐的学校和专业都很符合我的预期，已经成功录取啦！',
    rating: 5,
    color: 'bg-rose-500',
  },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 0;
      const gap = 24;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section ref={sectionRef} className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
            用户好评
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            他们的成功，是我们的
            <span className="text-gradient">骄傲</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            听听已经成功录取的学长学姐们怎么说
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg border-gray-200 hover:bg-blue-50 hover:border-blue-300"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg border-gray-200 hover:bg-blue-50 hover:border-blue-300"
              onClick={handleNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex-shrink-0 w-[320px] sm:w-[380px] snap-start transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 h-full hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-blue-200" />
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {testimonial.content}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.province} · {testimonial.score}
                      </div>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="text-xs text-gray-500 mb-1">录取结果</div>
                    <div className="font-semibold text-gray-900">{testimonial.university}</div>
                    <div className="text-sm text-blue-600">{testimonial.major}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
