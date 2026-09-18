import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import IcpLicense from '../IcpLicense.vue'
import {
  ICP_LICENSE_NUMBER,
  ICP_LICENSE_URL,
  PUBLIC_SECURITY_LICENSE_NUMBER,
  PUBLIC_SECURITY_LICENSE_URL,
} from '@/constants/site'

describe('IcpLicense', () => {
  it('renders the public security filing link (badge + number) with safe link attributes', () => {
    const wrapper = mount(IcpLicense)
    const gonganLink = wrapper.get(`a[href="${PUBLIC_SECURITY_LICENSE_URL}"]`)

    expect(gonganLink.text()).toContain(PUBLIC_SECURITY_LICENSE_NUMBER)
    expect(gonganLink.attributes('target')).toBe('_blank')
    expect(gonganLink.attributes('rel')).toContain('noopener')
  })

  it('renders the public security badge with the correct alt text', () => {
    const wrapper = mount(IcpLicense)
    const badge = wrapper.get('img')

    expect(badge.attributes('alt')).toBe('公安备案')
    expect(badge.attributes('src')).toBeTruthy()
  })

  it('renders the ICP filing number from the single source of truth with safe link attributes', () => {
    const wrapper = mount(IcpLicense)
    const icpLink = wrapper.get(`a[href="${ICP_LICENSE_URL}"]`)

    expect(icpLink.text()).toBe(ICP_LICENSE_NUMBER)
    expect(icpLink.attributes('target')).toBe('_blank')
    expect(icpLink.attributes('rel')).toContain('noopener')
  })

  it('orders the public security filing before the ICP filing', () => {
    const wrapper = mount(IcpLicense)
    const hrefs = wrapper.findAll('a').map((link) => link.attributes('href'))

    expect(hrefs).toEqual([PUBLIC_SECURITY_LICENSE_URL, ICP_LICENSE_URL])
  })

  it('uses the same font size for both filing numbers (aligned with the copyright line)', () => {
    const wrapper = mount(IcpLicense)

    expect(wrapper.get('div').classes()).toContain('text-sm')

    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2)
    links.forEach((link) => {
      expect(link.classes()).toContain('text-sm')
    })
  })

  it('never translates the filing numbers (same text in every locale)', () => {
    expect(ICP_LICENSE_NUMBER).toBe('蜀ICP备2026055344号')
    expect(ICP_LICENSE_URL).toBe('https://beian.miit.gov.cn/')
    expect(PUBLIC_SECURITY_LICENSE_NUMBER).toBe('渝公网安备50022402001092号')
    expect(PUBLIC_SECURITY_LICENSE_URL).toBe(
      'https://beian.mps.gov.cn/#/query/webSearch?code=50022402001092',
    )
  })
})
