<template>
    <div>
        <svg>
            <a v-for = 'tag in allTags' href = ''>
                <text >{{tag}}</text>
            </a>
        </svg>
    </div>
</template>
<script>
export default{
    props:[allTags],
    mounted(){

    },
    methods:{
        init(){}
    }
}
</script>

<style>

</style>