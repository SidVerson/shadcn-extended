const n=`<script setup>
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { toTypedSchema } from '@vee-validate/zod'
import { Button } from '@/lib/registry/default/ui/button'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/lib/registry/default/ui/form'
import { ref } from 'vue'
import { PhoneInput } from '@/lib/registry/default/ui/phone-input'

import * as z from 'zod'
const phoneNumber = ref('')
const formSchema = toTypedSchema(
    z.object({
        phone: z.object({
            countryCode: z.string(),
            isValid: z.boolean(),
            isPossible: z.boolean(),
            countryCallingCode: z.string(),
            nationalNumber: z.string(),
            formatInternational: z.string(),
            formatNational: z.string(),
            uri: z.string(),
            e164: z.string(),
            rfc3966: z.string(),
        }),
    })
)

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    toast.message('You submitted the following values:', {
        description: \`\${JSON.stringify(values.phone, null, 3)}\`,
    })
})
<\/script>

<template>
    <form
        @submit="onSubmit"
        class="flex flex-col items-start space-y-8 justify-center">
        <FormField
            v-slot="{ handleChange, handleBlur }"
            name="phone">
            <FormItem class="flex flex-col items-start">
                <FormLabel class="text-left">Phone Number</FormLabel>
                <FormControl class="w-full">
                    <PhoneInput
                        v-model="phoneNumber"
                        @update="handleChange" />
                </FormControl>
                <FormDescription class="text-left">
                    Enter a phone number
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button type="submit"> Submit </Button>
    </form>
</template>
`;export{n as default};
