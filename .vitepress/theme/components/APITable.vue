<script setup lang="ts">
import { capitalize } from 'vue'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/lib/registry/default/ui/tooltip'

defineProps<{
    type: 'prop' | 'emit' | 'slot' | 'method'
    data: {
        name: string
        description: string
        type: string
        required: boolean
        default: string
    }[]
}>()
</script>

<template>
    <div>
        <div
            v-for="(item, index) in data"
            :key="index"
            class="py-4 border-b text-sm">
            <div class="flex items-center gap-2 flex-wrap">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger
                            ><h5 class="text-sm">
                                <code>{{ item.name }}</code>
                            </h5></TooltipTrigger
                        >
                        <TooltipContent>
                            <p>{{ type }} name</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger
                            ><code>{{ item.type }}</code></TooltipTrigger
                        >
                        <TooltipContent>
                            <p>{{ type }} type</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger
                            ><code v-if="item.default">{{
                                item.default
                            }}</code></TooltipTrigger
                        >
                        <TooltipContent>
                            <p>{{ type }} default value</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <span
                    v-if="item.required"
                    class="font-normal text-red-500 text-xs"
                    >Required*</span
                >
            </div>

            <div
                class="[&_p]:!my-2 ml-1"
                v-html="item.description" />
        </div>
    </div>
</template>
