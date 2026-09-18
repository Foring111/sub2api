import { describe, expect, it } from 'vitest'
import {
  ICP_LICENSE_NUMBER,
  ICP_LICENSE_URL,
  PUBLIC_SECURITY_LICENSE_NUMBER,
  PUBLIC_SECURITY_LICENSE_URL,
} from '@/constants/site'

describe('site constants', () => {
  it('exposes the required ICP filing number', () => {
    expect(ICP_LICENSE_NUMBER).toBe('蜀ICP备2026055344号')
  })

  it('points the filing link at the official MIIT system', () => {
    expect(ICP_LICENSE_URL).toBe('https://beian.miit.gov.cn/')
  })

  it('exposes the required public security filing number', () => {
    expect(PUBLIC_SECURITY_LICENSE_NUMBER).toBe('渝公网安备50022402001092号')
  })

  it('points the public security filing link at the official MPS system', () => {
    expect(PUBLIC_SECURITY_LICENSE_URL).toBe(
      'https://beian.mps.gov.cn/#/query/webSearch?code=50022402001092',
    )
  })
})
