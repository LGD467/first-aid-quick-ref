export type Locale = "zh" | "en";

export interface Translations {
  // 通用
  appName: string;
  appSubtitle: string;
  search: string;
  searchPlaceholder: string;
  viewDetails: string;
  back: string;
  loading: string;
  notFound: string;
  notFoundDesc: string;
  returnHome: string;

  // 首页
  emergency: string;
  emergencySubtitle: string;
  categories: string;
  categoryCount: string;

  // 详情页
  steps: string;
  warnings: string;
  whenToSeeDoctor: string;
  disclaimer: string;
  viewFullDisclaimer: string;

  // 搜索页
  searchResults: string;
  resultCount: string;
  noResults: string;
  noResultsHint: string;
  minSearchLength: string;
  matchTitle: string;
  matchKeywords: string;
  matchDescription: string;
  matchSteps: string;

  // 紧急页
  emergencyPageTitle: string;
  emergencyWarning: string;
  emergencyFooter: string;

  // 关于页
  aboutTitle: string;
  version: string;
  aboutDesc: string;
  dataSource: string;
  dataSource1: string;
  dataSource2: string;
  dataSource3: string;
  dataSource4: string;
  disclaimerTitle: string;
  d1: string;
  d2: string;
  d3: string;
  d4: string;
  d5: string;
  d6: string;
  techInfo: string;

  // 底部
  footerDisclaimer: string;
  footerDisclaimerLink: string;

  // 反馈页
  feedbackTitle: string;
  feedbackSubtitle: string;
  feedbackDesc: string;
  feedbackSelectType: string;
  feedbackType: string;
  feedbackTypeSuggestion: string;
  feedbackTypeSuggestionDesc: string;
  feedbackTypeBug: string;
  feedbackTypeBugDesc: string;
  feedbackTypeGeneral: string;
  feedbackTypeGeneralDesc: string;
  feedbackSubject: string;
  feedbackSubjectPlaceholder: string;
  feedbackContent: string;
  feedbackContentPlaceholder: string;
  feedbackSubmit: string;
  feedbackDirectContact: string;
  feedbackResponseTime: string;
  feedbackSentFrom: string;
}

export const zh: Translations = {
  appName: "外伤急救速查",
  appSubtitle: "关键时刻的正确指引",
  search: "搜索",
  searchPlaceholder: "搜索伤情或症状...",
  viewDetails: "查看详情",
  back: "返回",
  loading: "加载中...",
  notFound: "未找到该伤情信息",
  notFoundDesc: "请检查链接或返回首页重新选择",
  returnHome: "返回首页",

  emergency: "紧急情况速查",
  emergencySubtitle: "严重出血 · 心脏骤停 · 气道梗阻",
  categories: "常见伤情",
  categoryCount: "种伤情类型",

  steps: "处理步骤",
  warnings: "禁忌事项",
  whenToSeeDoctor: "必须就医的指征",
  disclaimer: "查看完整免责声明",
  viewFullDisclaimer: "查看完整免责声明",

  searchResults: "条相关结果",
  resultCount: "找到",
  noResults: "未找到相关结果",
  noResultsHint: "试试其他关键词，如「烫伤」「出血」「狗咬」等",
  minSearchLength: "请输入至少2个字符进行搜索",
  matchTitle: "标题",
  matchKeywords: "关键词",
  matchDescription: "描述",
  matchSteps: "步骤",

  emergencyPageTitle: "极危情况速查",
  emergencyWarning: "以下为危及生命的情况，请在施救的同时立即拨打 120",
  emergencyFooter: "本页面内容仅供急救参考 · 紧急情况请第一时间呼叫专业救援",

  aboutTitle: "关于与免责",
  version: "版本 1.0.0",
  aboutDesc:
    "一款即开即用的外伤处理知识工具，帮助非专业人员在意外发生时快速找到正确、简洁的处理步骤。覆盖六大常见伤情类型，支持离线访问，适合家庭、户外等多种场景使用。",
  dataSource: "数据来源说明",
  dataSource1:
    "本工具所有急救知识参考中国红十字会、国家卫生健康委员会等权威机构发布的急救指南整理而成。",
  dataSource2: "内容经过多方交叉验证，但可能存在更新滞后或不适用于特殊情况的问题。",
  dataSource3: "本工具不构成任何形式的医疗诊断、治疗建议或医疗行为指导。",
  dataSource4: "如有医疗需求，请务必咨询具备资质的医疗机构和执业医师。",
  disclaimerTitle: "免责声明",
  d1: "本应用提供的所有信息仅用于健康教育和科普目的，不能替代专业的医疗诊断、治疗或急救服务。",
  d2: "用户在使用本应用提供的任何信息时，应自行判断其适用性并承担相应责任。对于因使用、误用或依赖本应用信息而导致的任何直接或间接损失、伤害或其他后果，开发者概不负责。",
  d3: "在遇到真实紧急情况时，用户应立即拨打当地急救电话（如中国大陆地区 120）或前往最近的医疗机构寻求专业救助，不应延迟或替代专业医疗干预。",
  d4: "本应用中的内容可能包含错误、遗漏或不准确之处。开发者不对内容的准确性、完整性、时效性或适用性做任何明示或暗示的保证。",
  d5: "对于儿童、孕妇、老年人或有特殊健康状况的人群，本应用的通用建议可能不完全适用，此类人群在受伤后应优先寻求专业医疗帮助。",
  d6: "使用本应用即表示您已阅读、理解并同意以上全部条款。",
  techInfo: "开源项目 · 基于 React + Vite 构建",

  footerDisclaimer:
    "本工具仅供参考，不能替代专业医疗建议。紧急情况请立即拨打 ",
  footerDisclaimerLink: "了解更多与免责声明 →",

  // 反馈页
  feedbackTitle: "意见反馈",
  feedbackSubtitle: "我们期待你的声音",
  feedbackDesc:
    "你想了解哪些外伤急救知识？或者在使用中遇到了什么问题？欢迎随时告诉我们，我们会认真考虑每一条反馈。",
  feedbackSelectType: "选择反馈类型",
  feedbackType: "类型",
  feedbackTypeSuggestion: "内容建议",
  feedbackTypeSuggestionDesc: "希望增加的伤情类型或急救知识",
  feedbackTypeBug: "问题报告",
  feedbackTypeBugDesc: "使用中发现的问题或错误信息",
  feedbackTypeGeneral: "其他反馈",
  feedbackTypeGeneralDesc: "使用体验、功能建议或其他想法",
  feedbackSubject: "主题（可选）",
  feedbackSubjectPlaceholder: "简要描述你的反馈主题...",
  feedbackContent: "详细内容",
  feedbackContentPlaceholder: "请详细描述你的建议或遇到的问题...",
  feedbackSubmit: "发送反馈邮件",
  feedbackDirectContact: "也可以直接通过邮箱联系我们：",
  feedbackResponseTime: "通常会在 1-3 个工作日内回复",
  feedbackSentFrom: "此邮件来自「外伤急救速查」用户反馈",
};

export const en: Translations = {
  appName: "First Aid Quick Ref",
  appSubtitle: "Right guidance at critical moments",
  search: "Search",
  searchPlaceholder: "Search injuries or symptoms...",
  viewDetails: "View Details",
  back: "Back",
  loading: "Loading...",
  notFound: "Injury information not found",
  notFoundDesc: "Please check the link or go back to home",
  returnHome: "Back to Home",

  emergency: "Emergency Quick Reference",
  emergencySubtitle: "Severe Bleeding · Cardiac Arrest · Choking",
  categories: "Common Injuries",
  categoryCount: "injury types",

  steps: "Treatment Steps",
  warnings: "What NOT To Do",
  whenToSeeDoctor: "When To See A Doctor",
  disclaimer: "View Full Disclaimer",
  viewFullDisclaimer: "View Full Disclaimer",

  searchResults: "results found",
  resultCount: "Found",
  noResults: "No results found",
  noResultsHint: "Try other keywords like \"burn\", \"bleeding\", \"dog bite\"",
  minSearchLength: "Enter at least 2 characters to search",
  matchTitle: "Title",
  matchKeywords: "Keywords",
  matchDescription: "Description",
  matchSteps: "Steps",

  emergencyPageTitle: "Life-Threatening Emergencies",
  emergencyWarning:
    "The following are life-threatening situations — call emergency services (911/120) while providing aid",
  emergencyFooter:
    "This page is for reference only — call professional help immediately in emergencies",

  aboutTitle: "About & Disclaimer",
  version: "Version 1.0.0",
  aboutDesc:
    "A ready-to-use first aid knowledge tool that helps non-professionals quickly find correct, concise treatment steps when accidents happen. Covers 6 common injury types with offline access support.",
  dataSource: "Data Sources",
  dataSource1:
    "All first aid content is compiled from guidelines published by authoritative organizations including the Red Cross and national health authorities.",
  dataSource2:
    "Content has been cross-verified but may contain outdated information or not apply to all situations.",
  dataSource3:
    "This tool does not constitute any form of medical diagnosis, treatment advice, or medical practice guidance.",
  dataSource4:
    "For medical needs, always consult qualified medical institutions and licensed physicians.",
  disclaimerTitle: "Disclaimer",
  d1: "All information provided by this application is for health education and general knowledge purposes only and cannot replace professional medical diagnosis, treatment, or first aid services.",
  d2: "Users are responsible for judging the applicability of any information and assume full responsibility. The developer is not liable for any direct or indirect losses, harm, or other consequences resulting from use, misuse, or reliance on this application's information.",
  d3: "In real emergencies, users should immediately call local emergency services (e.g., 911 / 120) or seek help from the nearest medical facility. Do not delay or substitute professional medical intervention.",
  d4: "Content may contain errors, omissions, or inaccuracies. No express or implied warranties are made regarding accuracy, completeness, timeliness, or applicability.",
  d5: "General recommendations may not fully apply to children, pregnant women, elderly persons, or those with special health conditions. Such individuals should prioritize seeking professional medical care after injury.",
  d6: "By using this application, you acknowledge that you have read, understood, and agree to all terms above.",
  techInfo: "Open Source Project · Built with React + Vite",

  footerDisclaimer:
    "For reference only — does not replace professional medical advice. In emergencies, call ",
  footerDisclaimerLink: "Learn more & Disclaimer →",

  // 反馈页
  feedbackTitle: "Feedback",
  feedbackSubtitle: "We'd love to hear from you",
  feedbackDesc:
    "What first aid topics would you like to see added? Or did you encounter any issues while using this app? We welcome all feedback and take every suggestion seriously.",
  feedbackSelectType: "Select Feedback Type",
  feedbackType: "Type",
  feedbackTypeSuggestion: "Content Suggestion",
  feedbackTypeSuggestionDesc: "New injury types or first aid topics to add",
  feedbackTypeBug: "Bug Report",
  feedbackTypeBugDesc: "Issues or errors found while using the app",
  feedbackTypeGeneral: "Other Feedback",
  feedbackTypeGeneralDesc: "User experience, feature requests, or other thoughts",
  feedbackSubject: "Subject (optional)",
  feedbackSubjectPlaceholder: "Briefly describe your feedback topic...",
  feedbackContent: "Details",
  feedbackContentPlaceholder: "Please describe your suggestion or issue in detail...",
  feedbackSubmit: "Send Feedback Email",
  feedbackDirectContact: "Or contact us directly via email:",
  feedbackResponseTime: "Usually responds within 1-3 business days",
  feedbackSentFrom: "Sent from First Aid Quick Ref User Feedback",
};

export const translations: Record<Locale, Translations> = { zh, en };
