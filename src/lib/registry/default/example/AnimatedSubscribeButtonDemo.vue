<template>
    <AnimatedSubscribeButton
        buttonColor="#000000"
        buttonTextColor="#ffffff"
        :subscribeStatus="false"
        initialText='
        <span className="group inline-flex items-center">
          Subscribe{" "}
          <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      '
        changeText='
        <span className="group inline-flex items-center">
          <Check className="mr-2 h-4 w-4" />
          Subscribed{" "}
        </span>
      '>
        <template #subscribed>
            <span className="group inline-flex items-center">
                Subscribe
                <ChevronRight
                    className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
        </template>
        <template #unsubscribed>
            <span className="group inline-flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Subscribed
            </span>
        </template>
    </AnimatedSubscribeButton>
</template>

<script setup lang="ts">
import { AnimatedSubscribeButton } from '@/lib/registry/default/ui/animated-subscribe-button'
import { Check, ChevronRight } from 'lucide-vue-next'
</script>
