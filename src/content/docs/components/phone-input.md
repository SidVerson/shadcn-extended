---
title: Phone Input
description: An implementation of a Phone Input component built.
source: apps/www/src/lib/registry/default/ui/dropdown-menu
primitive: https://www.radix-vue.com/components/dropdown-menu.html
---

<ComponentPreview name="PhoneInputDemo" />

## About

The Phone Input component is provided by [basic-vue-phone-input](https://www.npmjs.com/package/base-vue-phone-input?activeTab=readme).

## Installation

<Steps>

### Install necessary package

```bash
npm install base-vue-phone-input
```

### Copy and paste the following code into your project

```vue title="App.vue"
<script lang="ts" setup>
import PhoneInput from 'base-vue-phone-input'
import { useFocus } from '@vueuse/core'
import { ChevronsUpDown } from 'lucide-vue-next'
import { ref } from 'vue'
import { Input } from '@/lib/registry/default/ui/input'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/lib/registry/default/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/lib/registry/default/ui/popover'
import { Button } from '@/lib/registry/default/ui/button'
const open = ref(false)
const phoneInput = ref(null)
const { focused } = useFocus(phoneInput)
</script>

<template>
    <PhoneInput
        noUseBrowserLocale
        fetchCountry
        class="flex"
        :ignored-countries="['AC']">
        <template #selector="{ inputValue, updateInputValue, countries }">
            <Popover v-model:open="open">
                <PopoverTrigger>
                    <Button
                        variant="outline"
                        class="flex gap-1 rounded-e-none rounded-s-lg px-3">
                        <span
                            class="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm">
                            <img
                                v-if="inputValue"
                                :src="`https://flagcdn.com/w40/${inputValue.toLowerCase()}.png`" />
                        </span>
                        <ChevronsUpDown class="-mr-2 h-4 w-4 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent class="w-[300px] p-0">
                    <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandList>
                            <CommandGroup>
                                <CommandItem
                                    v-for="option in countries"
                                    :key="option.iso2"
                                    :value="option.name"
                                    class="gap-2"
                                    @select="
                                        () => {
                                            updateInputValue(option.iso2)
                                            open = false
                                            focused = true
                                        }
                                    ">
                                    <span
                                        class="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm">
                                        <img
                                            v-if="inputValue"
                                            :src="`https://flagcdn.com/w40/${option?.iso2.toLowerCase()}.png`" />
                                    </span>
                                    <span class="flex-1 text-sm">{{
                                        option.name
                                    }}</span>
                                    <span class="text-foreground/50 text-sm">{{
                                        option.dialCode
                                    }}</span>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </template>

        <template #input="{ inputValue, updateInputValue, placeholder }">
            <Input
                ref="phoneInput"
                class="rounded-e-lg rounded-s-none"
                type="text"
                :model-value="inputValue"
                @input="updateInputValue"
                :placeholder="placeholder" />
        </template>
    </PhoneInput>
</template>
```

</Steps>

## Examples

### Setting default country

<ComponentPreview name="PhoneInputDefaultDemo" />

### Internationalization

<ComponentPreview name="PhoneInputIntDemo" />

### Form

<ComponentPreview name="PhoneInputFormDemo" />
