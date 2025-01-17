<script>
  import { scaleTime, scaleOrdinal } from "d3-scale";
  import { format as formatDate } from "date-fns";
  import { Chart, Svg, Axis, Spline, Highlight, Tooltip } from "layerchart";

  const data = [
    { date: new Date(2024, 6, 1), value: 1000, category: "Total Revenue" },
    { date: new Date(2024, 7, 1), value: 2000, category: "Total Revenue" },
    { date: new Date(2024, 8, 1), value: 1500, category: "Total Revenue" },
    { date: new Date(2024, 9, 1), value: 3000, category: "Total Revenue" },
    { date: new Date(2024, 10, 1), value: 2500, category: "Total Revenue" },
    { date: new Date(2024, 11, 1), value: 4000, category: "Total Revenue" },
    { date: new Date(2025, 0, 1), value: 5000, category: "Total Revenue" },
    { date: new Date(2024, 6, 1), value: 3000, category: "Previous Period" },
    { date: new Date(2024, 7, 1), value: 1000, category: "Previous Period" },
    { date: new Date(2024, 8, 1), value: 2000, category: "Previous Period" },
    { date: new Date(2024, 9, 1), value: 2800, category: "Previous Period" },
    { date: new Date(2024, 10, 1), value: 3200, category: "Previous Period" },
    { date: new Date(2024, 11, 1), value: 2500, category: "Previous Period" },
    { date: new Date(2025, 0, 1), value: 2000, category: "Previous Period" },
  ];

  const dataByCategory = Object.entries(
    data.reduce((acc, d) => {
      if (!acc[d.category]) acc[d.category] = [];
      acc[d.category].push(d);
      return acc;
    }, {})
  );

  const categoryColors = {
    "Total Revenue": "#3F83F8",
    "Previous Period": "#3F83F8",
  };
</script>

<div class="h-[300px] pl-10 pr-5 pt-4">
  <Chart
    {data}
    x="date"
    xScale={scaleTime()}
    y="value"
    yDomain={[0, null]}
    yNice
    c="category"
    cScale={scaleOrdinal()}
    cDomain={Object.keys(categoryColors)}
    cRange={Object.values(categoryColors)}
    tooltip={{ mode: "voronoi" }}
    let:cScale
  >
    <Svg>
      <Axis
        placement="left"
        grid
        format={(d) => `$${d.toLocaleString()}`}
        stroke="#333"
        gridStroke="#e2e8f0"
        strokeWidth={1}
        gridStrokeWidth={1}
        baseline={true}
        baselineStroke="#333"
        baselineStrokeWidth={1}
      />
      <Axis
        placement="bottom"
        format={(d) => formatDate(d, "MMM yyyy")}
        grid
        stroke="#333"
        gridStroke="#e2e8f0"
        strokeWidth={1}
        gridStrokeWidth={1}
        baseline={true}
        baselineStroke="#333"
        baselineStrokeWidth={1}
      />
      {#each dataByCategory as [category, data]}
        {@const color = cScale?.(category)}
        <Spline
          {data}
          stroke={color}
          class="stroke-[2]"
          style="stroke-dasharray: {category === 'Previous Period'
            ? '4,4'
            : 'none'}"
        />
      {/each}
      <Highlight points lines />
    </Svg>

    <Tooltip.Root let:data>
      <Tooltip.Header>{formatDate(data.date, "MMM yyyy")}</Tooltip.Header>
      <Tooltip.List>
        <Tooltip.Item
          label={data.category}
          value={`$${data.value.toLocaleString()}`}
        />
      </Tooltip.List>
    </Tooltip.Root>
  </Chart>
</div>

<div class="flex items-center space-x-3 pt-8">
  <div class="flex items-center space-x-1">
    <div class="w-5 h-[2px] bg-[#3F83F8]"></div>
    <p class="text-gray-500 font-medium text-xs">Total Revenue</p>
  </div>
  <div class="flex items-center space-x-1">
    <div class="w-5 border-t-2 border-dashed border-[#3F83F8]"></div>
    <p class="text-gray-500 font-medium text-xs">Previous Period</p>
  </div>
</div>