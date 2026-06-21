import { ArrowLeft, FileText, Github, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-50">
      {/* 头部导航 */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-lg border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors"
          >
            <ArrowLeft className="w-4.5 h-4.5 text-stone-600" />
          </button>
          <h1 className="font-bold text-stone-800 text-lg">关于与免责</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* 产品介绍 */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🏥</span>
            <div>
              <h2 className="font-bold text-stone-800 text-xl">外伤急救速查</h2>
              <p className="text-stone-400 text-sm">版本 1.0.0</p>
            </div>
          </div>
          <p className="text-stone-600 leading-relaxed">
            一款即开即用的外伤处理知识工具，帮助非专业人员在意外发生时快速找到正确、简洁的处理步骤。
            覆盖六大常见伤情类型，支持离线访问，适合家庭、户外等多种场景使用。
          </p>
        </section>

        {/* 数据来源 */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-2.5 mb-4">
            <FileText className="w-5 h-5 text-teal-600" />
            <h3 className="font-bold text-stone-800 text-lg">数据来源说明</h3>
          </div>
          <ul className="space-y-2.5 text-stone-600 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>本工具所有急救知识参考中国红十字会、国家卫生健康委员会等权威机构发布的急救指南整理而成。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>内容经过多方交叉验证，但可能存在更新滞后或不适用于特殊情况的问题。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>本工具不构成任何形式的医疗诊断、治疗建议或医疗行为指导。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>如有医疗需求，请务必咨询具备资质的医疗机构和执业医师。</span>
            </li>
          </ul>
        </section>

        {/* 完整免责声明 */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
          <div className="flex items-center gap-2.5 mb-4">
            <Heart className="w-5 h-5 text-red-500" />
            <h3 className="font-bold text-red-800 text-lg">免责声明</h3>
          </div>
          <div className="space-y-3 text-red-900/80 text-sm leading-relaxed">
            <p>
              <strong>1.</strong> 本应用提供的所有信息仅用于健康教育和科普目的，不能替代专业的医疗诊断、治疗或急救服务。
            </p>
            <p>
              <strong>2.</strong> 用户在使用本应用提供的任何信息时，应自行判断其适用性并承担相应责任。对于因使用、误用或依赖本应用信息而导致的任何直接或间接损失、伤害或其他后果，开发者概不负责。
            </p>
            <p>
              <strong>3.</strong> 在遇到真实紧急情况时，用户应立即拨打当地急救电话（如中国大陆地区 120）或前往最近的医疗机构寻求专业救助，不应延迟或替代专业医疗干预。
            </p>
            <p>
              <strong>4.</strong> 本应用中的内容可能包含错误、遗漏或不准确之处。开发者不对内容的准确性、完整性、时效性或适用性做任何明示或暗示的保证。
            </p>
            <p>
              <strong>5.</strong> 对于儿童、孕妇、老年人或有特殊健康状况的人群，本应用的通用建议可能不完全适用，此类人群在受伤后应优先寻求专业医疗帮助。
            </p>
            <p>
              <strong>6.</strong> 使用本应用即表示您已阅读、理解并同意以上全部条款。
            </p>
          </div>
        </section>

        {/* 技术信息 */}
        <section className="text-center py-6">
          <div className="flex items-center justify-center gap-2 text-stone-400 text-sm">
            <Github className="w-4 h-4" />
            <span>开源项目 · 基于 React + Vite 构建</span>
          </div>
          <p className="text-stone-300 text-xs mt-2">Made with care for safety</p>
        </section>
      </main>
    </div>
  );
}
