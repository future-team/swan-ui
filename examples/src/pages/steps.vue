<template>
    <div>
        <sw-steps :currentStep="0"
                  :list="['合作信息','公司信息','资质信息']"></sw-steps>

        <sw-steps readOnly
                  :currentStep="0"
                  :list="['合作信息','公司信息','资质信息']"></sw-steps>
    </div>
</template>

<script>
    export default {
        name: 'Steps'
    }
</script>