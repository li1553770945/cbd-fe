<template>
    <el-row class="menu-row">
        <Menu class="menu"></Menu>
    </el-row>
</template>

<script setup lang="ts">

</script>


<style scoped>
.title {
    font-family: Cabin;
    font-weight: 700;
    font-size: 1.5em;
    padding-top: 1em;
}

.subtitle {
    font-family: Cabin;
    font-weight: 500;
    font-size: 1.1em;

}

.menu {
    width: 100%;
    height:4em;
}
.seulogo-container {
   
    display: flex;
    justify-content: center;
    align-items: center;
}
.seulogo{
    width: 50%;
}

.usqlogo-container {
   
   display: flex;
   justify-content: left;
   align-items: center;
}
.usqlogo{
   height:80%;
}
.menu-row{
}
</style>