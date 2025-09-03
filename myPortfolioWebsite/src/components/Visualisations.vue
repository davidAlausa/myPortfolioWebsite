<script setup>
import * as d3 from 'd3'
import { onMounted, ref, defineProps } from 'vue'

const props = defineProps({ type: String, colorScheme: Array })
const container = ref(null)

let pathData 

const drawChart = async () => {
    const dataJSON = await fetch('data/skills.json').then(res => res.json())
    const data = dataJSON.skills[props.type]
    const size = 300
    const radius = size / 2

    const svg = d3.select(container.value)
        .append('svg')
        .attr('viewBox', `0 0 ${size} ${size}`)
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .classed('w-full h-auto', true)
        .append('g')
        .attr('transform', `translate(${size/2}, ${size/2})`)

    const pie = d3.pie().value(d => d.projects)
    const arc = d3.arc().innerRadius(50).outerRadius(radius)

    //const color = d3.scaleOrdinal(["#2E005E","#00A676","#D97706","#2563EB","#DC2626","#9333EA","#F59E0B","#10B981","#3B82F6","#F43F5E"])
    const color = d3.scaleOrdinal(props.colorScheme);    
    const tooltip = d3.select('#tooltip')

    pathData = svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('fill', (d,i) => color(i))
        .attr('stroke', '#000000ff')
        .attr('stroke-width', 2)
        .on('mouseover', (event,d) => {
            const datum = d.data
            tooltip.style('display','block')
                .style('color','black')
                .html(`<strong>${datum.name}</strong><br>Last Used: ${datum.lastUsed}<br>Notes: ${datum.notes || ''}`)
        })
        .on('mousemove', event => {
            tooltip.style('left', (event.pageX + 10)+'px')
                   .style('top', (event.pageY + 10)+'px')
        })
        .on('mouseout', () => tooltip.style('display','none'))
        .transition()
        .duration(1000)
        .attrTween("d", d => {
            const i = d3.interpolate({startAngle:0,endAngle:0}, d)
            return t => arc(i(t))
        })
}
onMounted(() => drawChart())
</script>

<template>
    <section ref="container"></section>
    <div id="tooltip" style="position: absolute; pointer-events: none; background: #fff; border: 1px solid #ccc; padding: 8px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); display: none; z-index: 1000;"></div>
</template>