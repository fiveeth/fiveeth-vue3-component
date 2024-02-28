<template>
    <div class="x-button">
        <button :style="[buttonStyle, buttonSize]" @click="clickTo">
            <slot>default</slot>
        </button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits } from "vue";

interface Props {
    size: string;
    type: string;
}

const $emits = defineEmits<
    {
        (e: "clickTo"): void
    }
>()

const $props = withDefaults(defineProps<Props>(), {
    size: "normal",
    type: "default",
})

const clickTo = () => {
    $emits("clickTo")
}

const buttonStyle = computed(() => {
    switch ($props.type) {
        case "primary": return {
            color: "#fff",
            background: "#409eff",
        };
        case "success": return {
            color: "#fff",
            background: "#40ff89",
        };
        case "warnning": return {
            color: "#fff",
            background: "#fcff40",
        };
        case "error": return {
            color: "#fff",
            background: "#ff6340",
        };
        default: return {
            color: "#333",
            background: "#fff",
            border: "1px solid #e7e7e7"
        }
    }
})

const buttonSize = computed(() => {
    switch ($props.size) {
        case "large": return {
            height: "40px",
            "line-height": "40px",
        };
        case "small": return {
            height: "20px",
            "line-height": "20px",
        };
        default: return {
            height: "30px",
            "line-height": "30px",
        }
    }
})
</script>

<style scoped lang="less">
.x-button {
    button {
        border: none;
        border-radius: 4px;
        padding: 0 10px;
    }
}
</style>