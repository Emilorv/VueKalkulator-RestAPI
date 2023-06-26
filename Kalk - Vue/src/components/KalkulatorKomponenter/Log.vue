<template>
    <div class="container">
        <h3>Log</h3>
        <h5 v-for="l in logs">{{l}}</h5>
    </div>
</template>

<script>
export default {
    name:"Log",
    props:{
    logs:Array
    }
    
}
</script>