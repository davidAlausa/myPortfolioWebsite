<script setup>
import * as d3 from 'd3'
import { onMounted, ref, defineProps} from 'vue'


const { type } = defineProps({ type: String });

const container = ref(null)

const drawChart = async () => {
    const dataJSON = await fetch('data/skills.json').then(res => res.json());
    const data = dataJSON.skills[type] 
    console.log(data)
    const size = 300;
    const radius = size / 2;

    const svg = d3.select(container.value)
        .append('svg')
        .attr('viewBox', `0 0 ${size} ${size}`)
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .classed('w-full h-auto', true)
        .append('g')
        .attr('transform', `translate(${size / 2}, ${size / 2})`);

    const pie = d3.pie().value(d => d.projects);
    const arc = d3.arc()
        .innerRadius(100)
        .outerRadius(radius);

    const color = d3.scaleOrdinal([
        "#00441B", // lime
        "#006D2C", // olive
        "#238845", // emerald
        "#41AB6D", // green
        "#74C476", // dark green
        "#A1D99B", // mint
        "#C7E9C0", // light green
        "#E5F5E0", // teal green
        "#F7FCF5", // deep green
        "#d9f99d"  // pale green
    ]);

    const tooltip = d3.select('#tooltip');

    svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('fill', (d, i) => color(i))
        .on('mouseover', function(event, d) {
            const datum = d.data;
            tooltip.style('display', 'block').style('color', 'black')
                .html(`<strong>${datum.name}</strong><br>Last Used: ${datum.lastUsed}<br>Notes: ${datum.notes || ''}`);
        })
        .on('mousemove', function(event) {
            tooltip.style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY + 10) + 'px');
        })
        .on('mouseout', function() {
            tooltip.style('display', 'none');
        })
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
    <div id="tooltip" style="position: absolute; pointer-events: none; background: #fff; border: 1px solid #ccc; padding: 8px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); display: none; z-index: 1000;"></div>
</template>