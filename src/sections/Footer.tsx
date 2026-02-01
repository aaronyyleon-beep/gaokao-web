import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  product: {
    title: '产品功能',
    links: [
      { name: 'AI智能推荐', href: '#' },
      { name: '院校库查询', href: '#' },
      { name: '专业解析', href: '#' },
      { name: '录取预测', href: '#' },
      { name: '志愿填报', href: '#' },
    ],
  },
  support: {
    title: '帮助支持',
    links: [
      { name: '使用教程', href: '#' },
      { name: '常见问题', href: '#' },
      { name: '视频指南', href: '#' },
      { name: '专家咨询', href: '#' },
      { name: '意见反馈', href: '#' },
    ],
  },
  about: {
    title: '关于我们',
    links: [
      { name: '公司介绍', href: '#' },
      { name: '联系我们', href: '#' },
      { name: '加入我们', href: '#' },
      { name: '合作伙伴', href: '#' },
      { name: '新闻动态', href: '#' },
    ],
  },
  legal: {
    title: '法律条款',
    links: [
      { name: '用户协议', href: '#' },
      { name: '隐私政策', href: '#' },
      { name: '免责声明', href: '#' },
      { name: '版权声明', href: '#' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">高考志愿助手</span>
                <p className="text-xs text-gray-500">智能填报，助梦未来</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              高考志愿助手是一款基于AI智能算法的高考志愿填报辅助工具，致力于帮助每一位考生找到最适合自己的大学和专业。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>support@gaokaozhushou.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>北京市海淀区中关村大街1号</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2025 高考志愿助手. All rights reserved. 京ICP备12345678号
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              用户协议
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              免责声明
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
