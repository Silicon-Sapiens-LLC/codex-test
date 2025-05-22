import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

function Chart({ option }: { option: echarts.EChartsOption }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const chart = echarts.init(ref.current)
    chart.setOption(option)
    return () => {
      chart.dispose()
    }
  }, [option])

  return <div ref={ref} className="w-full h-64" />
}

export default function Dashboard() {
  const barOption: echarts.EChartsOption = {
    title: { text: 'Bar Chart' },
    xAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E'] },
    yAxis: { type: 'value' },
    series: [{ type: 'bar', data: [5, 20, 36, 10, 10] }],
  }

  const lineOption: echarts.EChartsOption = {
    title: { text: 'Line Chart' },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
    yAxis: { type: 'value' },
    series: [{ type: 'line', data: [1, 3, 2, 5, 4] }],
  }

  return (
    <div className="space-y-8">
      <Chart option={barOption} />
      <Chart option={lineOption} />
    </div>
  )
}
