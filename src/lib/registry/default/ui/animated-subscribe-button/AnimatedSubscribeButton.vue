<template>
    <button
        ref="buttonRef"
        class="relative flex w-[200px] cursor-pointer items-center justify-center rounded-md border-none p-[10px]"
        :style="{ backgroundColor: buttonColor, color: buttonTextColor }"
        @click="toggleSubscription">
        <span class="relative flex font-semibold">
            <slot
                name="subscribed"
                v-if="!isSubscribed" />
            <slot
                name="unsubscribed"
                v-else />
        </span>
    </button>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import gsap from 'gsap'

interface AnimatedSubscribeButtonProps {
    buttonColor: string
    buttonTextColor?: string
    subscribeStatus: boolean
}

const props = defineProps<AnimatedSubscribeButtonProps>()

const isSubscribed = ref<boolean>(props.subscribeStatus)
const buttonRef = ref<HTMLElement | null>(null)

const toggleSubscription = () => {
    isSubscribed.value = !isSubscribed.value
}

const handleAnimations = () => {
    if (buttonRef.value) {
        gsap.to(buttonRef.value, {
            backgroundColor: isSubscribed.value ? 'white' : props.buttonColor,
            color: isSubscribed.value
                ? props.buttonColor
                : props.buttonTextColor,
            duration: 0.5,
            ease: 'sine',
        })

        gsap.fromTo(
            buttonRef.value.querySelector('span'),
            { y: isSubscribed.value ? 20 : 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'sine' }
        )
    }
}

onMounted(() => {
    handleAnimations()
})

watch(isSubscribed, () => {
    handleAnimations()
})
</script>
