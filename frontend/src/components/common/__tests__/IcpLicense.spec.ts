import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import IcpLicense from '../IcpLicense.vue'
import { ICP_LICENSE_NUMBER, ICP_LICENSE_URL } from '@/constants/site'

describe('IcpLicense', () => {
  it('renders the ICP filing number from the single source of truth', () => {
    const wrapper = mount(IcpLicense)
    expect(wrapper.get('a').text()).toBe(ICP_LICENSE_NUMBER)
  })

  it('links to the official MIIT filing system in a new tab', () => {
    const wrapper = mount(IcpLicense)
    const link = wrapper.get('a')

    expect(link.attributes('href')).toBe(ICP_LICENSE_URL)
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })

  it('never translates the filing number (same text in every locale)', () => {
    expect(ICP_LICENSE_NUMBER).toBe('蜀ICP备2026055344号')
    expect(ICP_LICENSE_URL).toBe('https://beian.miit.gov.cn/')
  })
})
