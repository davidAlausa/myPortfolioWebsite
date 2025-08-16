<script setup>
import * as d3 from 'd3'
import { onMounted, ref} from 'vue'

const container = ref(null)

const drawChart = () => {
const data = [10, 20, 30, 40, 50], width = 300, height=300;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(container.value)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie();
    const arc = d3.arc()
        .innerRadius(100)
        .outerRadius(radius);

    const color = d3.scaleOrdinal(["#3E5F44", "#5E936C", "#93DA97", "#E8FFD7"]);

    svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('fill', (d, i) => color(i))
        .transition()
        .duration(1000) 
        .attrTween("d", function(d) {
        const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function(t) {
            return arc(i(t));
        };
    });
}

onMounted(() => drawChart())

</script>
<template>
    <section ref="container"></section>
</template>   