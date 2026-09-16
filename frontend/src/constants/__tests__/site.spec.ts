import { describe, expect, it } from 'vitest'
import { ICP_LICENSE_NUMBER, ICP_LICENSE_URL } from '@/constants/site'

describe('site constants', () => {
  it('exposes the required ICP filing number', () => {
    expect(ICP_LICENSE_NUMBER).toBe('蜀ICP备2026055344号')
  })

  it('points the filing link at the official MIIT system', () => {
    expect(ICP_LICENSE_URL).toBe('https://beian.miit.gov.cn/')
  })
})
