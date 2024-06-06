<template>

    <h2> Paper Submission </h2>

    Submitted manuscripts must be formatted in <a
        href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank">standard
        IEEE US Letter Format</a> and must be submitted via <a href="https://easychair.org/conferences/?conf=cbd2024"
        target="_blank">EasyChair</a> as PDF files. The review version is limited to 6 pages (IEEE proceedings format),
    including references and illustrations. Submitted papers should not be previously published in or be under
    consideration for publication in another conference or journal. Submission of a paper should be regarded as an
    undertaking that, should the paper be accepted, at least one of the authors will attend the conference to present
    the paper.
    <div class="button-container">
        <el-button type="primary" class="cfp-button" @click="downloadCFP">Download CFP</el-button>
    </div>
    <h2> Publication</h2>

    All submitted papers will be reviewed by program committee members and selected based on their originality,
    significance, relevance, and clarity of presentation. Accepted papers will be all published by Conference Publishing
    Services (CPS) and will be submitted for indexing to EI (Compendex). Authors of selected papers will be invited to
    submit revised and expanded version of their papers to be considered for publication in special issues of well-known
    international journals such as Tsinghua Science and Technology(SCI), Big Data Mining and Analytics(IEEE), Web
    Intelligence etc.

    <h2>Scope of Conference</h2>
    <p>The International Conference on Advanced Cloud and Big Data (CBD) provides a forum for both academics and
        practitioners working on cloud computing and big data technologies to explore new ideas, share their experiences
        and leverage each other's perspectives. Besides the latest research achievements, this conference also covers
        cloud/big data industry practices and their broad applications, and gives all participants a chance to identify
        the new/emerging "hot" trends in these areas. We solicit original papers on a wide range of cloud computing and
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

<h2>Contact Us</h2>

Jinghui Zhang, Southeast University

<br>
<a href="mailto:jhzhang@seu.edu.cn">jhzhang@seu.edu.cn</a>
<br>
Di Wu, University of Southern Queensland
<br>    
<a href="mailto:Di.Wu@unisq.edu.au">Di.Wu@unisq.edu.au</a>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useYearStore } from '@/stores/useYearStore';

const yearStore = useYearStore();
const cfpUrl = ref<string>('');

watchEffect(() => {
    if (yearStore.currentYear) {
        try {
            cfpUrl.value = new URL(`../../assets/${yearStore.currentYear}/pages/cfp.pdf`, import.meta.url).href;
        } catch (error) {
            console.error('Failed to cfp pdf:', error);
        }
    }
});

const downloadCFP = () => {
    // 指定你想下载的文件的 URL

    // 创建一个隐藏的 A 元素用于下载
    window.open(cfpUrl.value);
}
</script>
<style scoped>
h2 {
    color: #005f98;
}

ul {
    list-style-type: none;
}

table {
    width: 100%;
}

td {
    width: 50%;
    vertical-align: top;
}

li {
    margin-bottom: 10px;
}

.button-container {
    display: flex;
    justify-content: center;
}

.cfp-button {
    margin-top: 20px;
    width: 40%;
    height: 3em;
}



/* .seulogo,
.usqlogo {
    height:10em;
} */





</style>