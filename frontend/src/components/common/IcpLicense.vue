<template>
  <!-- 备案信息（法定标识）：同时承载公安联网备案号与 ICP 备案号，中英文界面均显示同一串中文备案号 -->
  <div class="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
    <!-- 公安联网备案（在前）：徽标 + 备案号，可点击跳转全国互联网安全管理服务平台 -->
    <a
      :href="PUBLIC_SECURITY_LICENSE_URL"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block break-all text-sm text-gray-400 transition-colors [overflow-wrap:anywhere] hover:text-gray-600 dark:text-dark-500 dark:hover:text-white"
    >
      <img
        :src="gonganIcon"
        alt="公安备案"
        class="mr-1 inline-block h-4 w-auto align-middle"
      />
      {{ PUBLIC_SECURITY_LICENSE_NUMBER }}
    </a>

    <!-- ICP 备案（在后）：可点击跳转工信部备案系统 -->
    <a
      :href="ICP_LICENSE_URL"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block break-all text-sm text-gray-400 transition-colors [overflow-wrap:anywhere] hover:text-gray-600 dark:text-dark-500 dark:hover:text-white"
    >
      {{ ICP_LICENSE_NUMBER }}
    </a>
  </div>
</template>

<script setup lang="ts">
// 全站备案信息唯一来源，见 src/constants/site.ts
import {
  ICP_LICENSE_NUMBER,
  ICP_LICENSE_URL,
  PUBLIC_SECURITY_LICENSE_NUMBER,
  PUBLIC_SECURITY_LICENSE_URL,
} from '@/constants/site'
import gonganIcon from '@/assets/icons/gongan-beian.png'
</script>
