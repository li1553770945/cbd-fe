<template>
    <h2>Scope of Conference</h2>
    <p>The International Conference on Advanced Cloud and Big Data (CBD) provides a forum for both academics and
        practitioners working on cloud computing and big data technologies to explore new ideas, share their experiences
        and leverage each other's perspectives. Besides the latest research achievements, this conference also covers
        cloud/big data industry practices and their broad applications, and gives all participants a chance to identify
        the new/emerging “hot” trends in these areas. We solicit original papers on a wide range of cloud computing and
        big data topics that can be divided into three tracks but are not limited to:</p>

    <table style="margin-left: auto; margin-right: auto;">
        <tr>
            <td>
                <h2>Research Track</h2>
                <ul>
                    <li>Cloud Security and Privacy</li>
                    <li>Cloud Data Center Networking</li>
                    <li>Cloud Virtualization</li>
                    <li>Cloud Storage</li>
                    <li>Cloud Resource Management</li>
                    <li>Multi/Hybrid/Inter Cloud</li>
                    <li>Big Data Processing/Mining/Query</li>
                    <li>Cloud Workflow Scheduling</li>
                    <li>Cloud based AI /Deep Learning</li>
                    <li>Cloud based Industrial Internet</li>
                    <li>Edge Computing Architecture and Algorithm</li>
                    <li>Machine Learning and AI at Edge</li>
                </ul>
            </td>
            <td>
                <h2>Industry Track</h2>
                <ul>
                    <li>Cloud Computing Solutions</li>
                    <li>Cloud Computing Specifications/Standards</li>
                    <li>Big Data in Economic Analytics</li>
                    <li>Big Data in Smart City/Home</li>
                    <li>Big Data in Industry Practices</li>
                </ul>
                <h2>Application Track</h2>
                <ul>
                    <li> Industrial Internet</li>
                    <li> Mobile Edge Computing</li>
                    <li> Machine/Deep Learning</li>
                    <li> Social Networking</li>
                    <li> Knowledge Graph</li>
                </ul>
            </td>
        </tr>
    </table>

    <h2>Organized By</h2>
    <div class="logo-container">
        <el-image :src="usqSrc" fit="scale-down" class="organizer-logo"></el-image>
        <el-image :src="seuSrc" fit="scale-down" class="organizer-logo"></el-image>
    </div>
    <h2>Sponsored By</h2>
    <div class="logo-container">
        <el-image :src="tciiSrc" fit="scale-down" class="sponsor-logo"></el-image>
        <el-image :src="acmSrc" fit="scale-down" class="sponsor-logo"></el-image>
        <el-image :src="jcsSrc" fit="scale-down" class="sponsor-logo"></el-image>

    </div>
</template>

<script setup lang="ts">
const seuSrc = new URL('@/assets/images/seu.png', import.meta.url).href;
const usqSrc = new URL('@/assets/images/usq.svg', import.meta.url).href;
const tciiSrc = new URL('@/assets/images/tcii.png', import.meta.url).href;
const jcsSrc = new URL('@/assets/images/jcs.png', import.meta.url).href;
const acmSrc = new URL('@/assets/images/acm.png', import.meta.url).href;

</script>

<style scoped>
h2 {
    color: #005f98;
}

.logo-container {
    display: flex;
    align-items: left; 
    height:6em;
}
.organizer-logo{
    margin-left: 30px;
}
.sponsor-logo{
    margin-left: 30px;
}
</style>