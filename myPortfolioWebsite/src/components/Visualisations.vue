<script setup>
import * as d3 from 'd3'
import { onMounted, ref, defineProps, watchEffect } from 'vue'
import { useDark } from '@vueuse/core'

const isDark = useDark()
const { type } = defineProps({ type: String })
const container = ref(null)

let pathData 

const drawChart = async () => {
    const dataJSON = await fetch('data/skills.json').then(res => res.json())
    const data = dataJSON.skills[type]
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
    const arc = d3.arc().innerRadius(100).outerRadius(radius)

    const lightPalette = ["#10061f","#bc82c4","#70437f","#96529b","#3c274e","#cda7d2","#341054","#462167","#1e0b37","#2e0f48"]
    const darkPalette  = ["#00441B","#006D2C","#238845","#41AB6D","#74C476","#A1D99B","#C7E9C0","#E5F5E0","#F7FCF5","#d9f99d"]

    const color = d3.scaleOrdinal(isDark.value ? darkPalette : lightPalette)

    const tooltip = d3.select('#tooltip')

    pathData = svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('fill', (d,i) => color(i))
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

watchEffect(() => {
    if (!pathData) return
    const palette = isDark.value 
        ? ["#00441B","#006D2C","#238845","#41AB6D","#74C476","#A1D99B","#C7E9C0","#E5F5E0","#F7FCF5","#d9f99d"]
        : ["#0f172a","#1e293b","#334155","#475569","#64748b","#94a3b8","#cbd5e1","#e2e8f0","#f1f5f9","#f8fafc"]
    const color = d3.scaleOrdinal(palette)
    pathData.transition().duration(500).attr('fill', (d,i) => color(i))
})

onMounted(() => drawChart())
</script>

<template>
    <section ref="container"></section>
    <div id="tooltip" style="position: absolute; pointer-events: none; background: #fff; border: 1px solid #ccc; padding: 8px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); display: none; z-index: 1000;"></div>
</template>