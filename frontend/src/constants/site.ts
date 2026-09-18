/**
 * 站点级公共常量（单一数据源）。
 *
 * 全站备案信息（ICP + 公安）唯一来源：日后修改备案信息（替换备案号、切换备案系统链接等）
 * 只需改这里，所有引用方（各页脚、布局）都会自动同步生效。
 */

/**
 * ICP 备案号。
 *
 * 备案号属于法定标识，禁止走 i18n 翻译：中英文界面下都必须显示同一串中文备案号。
 */
export const ICP_LICENSE_NUMBER = '蜀ICP备2026055344号' as const

/**
 * 工信部 ICP/IP 地址/域名信息备案管理系统地址。
 *
 * 合规要求：备案号必须可点击跳转到官方备案系统。
 */
export const ICP_LICENSE_URL = 'https://beian.miit.gov.cn/' as const

/**
 * 公安联网备案号。
 *
 * 备案号属于法定标识，禁止走 i18n 翻译：中英文界面下都必须显示同一串中文备案号。
 */
export const PUBLIC_SECURITY_LICENSE_NUMBER = '渝公网安备50022402001092号' as const

/**
 * 全国互联网安全管理服务平台（公安部）备案查询地址。
 *
 * 合规要求：公安备案号必须可点击跳转到官方备案系统。
 */
export const PUBLIC_SECURITY_LICENSE_URL =
  'https://beian.mps.gov.cn/#/query/webSearch?code=50022402001092' as const
