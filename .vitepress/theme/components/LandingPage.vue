<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import PageHeaderHeading from '../components/PageHeaderHeading.vue'
import PageHeaderDescription from '../components/PageHeaderDescription.vue'
import PageAction from '../components/PageAction.vue'
import ExamplesNav from '../components/ExamplesNav.vue'
import Announcement from '../components/Announcement.vue'
import GitHubIcon from '~icons/radix-icons/github-logo'

import { buttonVariants } from '@/lib/registry/default/ui/button'
import { cn } from '@/lib/utils'

</script>

<template>
  <PageHeader class="page-header pb-8">
    <Announcement />
    <PageHeaderHeading>Build your component library.</PageHeaderHeading>
    <PageHeaderDescription>
      Beautifully designed components that you can copy and paste into your
      apps. Accessible. Customizable. Open Source.
    </PageHeaderDescription>

    <PageAction>
      <a
        href="/docs/introduction"
        :class="cn(buttonVariants(), 'rounded-[6px]')"
      >
        Get Started
      </a>
      <a
        href="https://github.com/radix-vue/shadcn-vue"
        target="_blank"
        :class="cn(
          buttonVariants({ variant: 'outline' }),
          'rounded-[6px]',
        )"
      >
        <GitHubIcon class="mr-2 h-4 w-4" />
        GitHub
      </a>
    </PageAction>
  </PageHeader>

</template>
