<template>
    <div class="not-prose mx-auto w-full">
        <div class="flex w-full justify-center">
            <div class="flex flex-wrap items-center gap-3">
                <Kbd size="xs"><span class="text-xs">⌘</span>K</Kbd
                ><Kbd size="sm"><span class="text-xs">⌘</span>K</Kbd
                ><Kbd size="md"><span class="text-xs">⌘</span>K</Kbd>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Kbd } from '@/lib/registry/default/ui/kbd'
</script>
