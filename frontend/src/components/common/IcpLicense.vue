<template>
  <!-- ICP 备案号（法定标识）：可点击跳转工信部备案系统，中英文界面均显示同一串中文备案号 -->
  <a
    :href="ICP_LICENSE_URL"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-block break-all text-xs text-gray-400 transition-colors [overflow-wrap:anywhere] hover:text-gray-600 dark:text-dark-500 dark:hover:text-white"
  >
    {{ ICP_LICENSE_NUMBER }}
  </a>
</template>

<script setup lang="ts">
// 全站备案号唯一来源，见 src/constants/site.ts
import { ICP_LICENSE_NUMBER, ICP_LICENSE_URL } from '@/constants/site'
</script>
