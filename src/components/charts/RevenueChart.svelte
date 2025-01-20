<script>
  import { scaleTime, scaleOrdinal } from "d3-scale";
  import { format as formatDate } from "date-fns";
  import { Chart, Svg, Axis, Spline, Highlight, Tooltip } from "layerchart";

  let screenMetrics = { width: 0, height: 0 };
  function updateScreenSize(event) {
    screenMetrics = event;
  }

  export function trackResize(node, callback) {
    const updateMetrics = () => {
      callback({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return {
      destroy() {
        window.removeEventListener("resize", updateMetrics);
      },
    };
  }

  const revenueData = [
    { date: new Date(2024, 0, 1), amount: 20000, category: "Total Revenue" },
    { date: new Date(2024, 0, 5), amount: 15000, category: "Total Revenue" },
    { date: new Date(2024, 0, 9), amount: 15000, category: "Total Revenue" },
    { date: new Date(2024, 0, 13), amount: 10000, category: "Total Revenue" },
    { date: new Date(2024, 0, 17), amount: 30000, category: "Total Revenue" },
    { date: new Date(2024, 0, 21), amount: 30000, category: "Total Revenue" },
    { date: new Date(2024, 0, 25), amount: 1000, category: "Total Revenue" },
    { date: new Date(2024, 0, 29), amount: 8000, category: "Total Revenue" },
    { date: new Date(2024, 0, 31), amount: 2000, category: "Total Revenue" },
    { date: new Date(2024, 0, 1), amount: 5000, category: "Previous Period" },
    { date: new Date(2024, 0, 5), amount: 30000, category: "Previous Period" },
    { date: new Date(2024, 0, 9), amount: 24000, category: "Previous Period" },
    { date: new Date(2024, 0, 13), amount: 5000, category: "Previous Period" },
    { date: new Date(2024, 0, 17), amount: 7000, category: "Previous Period" },
    { date: new Date(2024, 0, 21), amount: 20000, category: "Previous Period" },
    { date: new Date(2024, 0, 25), amount: 12000, category: "Previous Period" },
    { date: new Date(2024, 0, 29), amount: 27000, category: "Previous Period" },
    { date: new Date(2024, 0, 31), amount: 18000, category: "Previous Period" },
  ];

  const dataByCategory = Object.entries(
    revenueData.reduce((acc, { category, ...rest }) => {
      acc[category] = acc[category] || [];
      acc[category].push(rest);
      return acc;
    }, {})
  );

  const categoryColors = {
    "Total Revenue": "#2563EB",
    "Previous Period": "#2563EB",
  };
</script>

<div class="space-y-4" use:trackResize={updateScreenSize}>
  <div class="h-[301px]">
    <Chart
      data={revenueData}
      x="date"
      xScale={scaleTime()}
      y="amount"
      yDomain={[0, 40000]}
      yNice
      c="category"
      cScale={scaleOrdinal()}
      cDomain={Object.keys(categoryColors)}
      cRange={Object.values(categoryColors)}
      padding={{ left: 48, bottom: 24, right: 24, top: 24 }}
      tooltip={{ mode: "voronoi" }}
      let:cScale
    >
      <Svg>
        <Axis
          placement="left"
          rule
          grid={{ stroke: "#E5E7EB", strokeWidth: "0.5px" }}
          ticks={[0, 10000, 20000, 30000, 40000]}
          format={(d) => `$${d.toLocaleString()}`}
        />
        <Axis
          placement="bottom"
          format={(d) => formatDate(d, "dd MMM")}
          rule
          ticks={screenMetrics.width >= 768
            ? [
                new Date(2024, 0, 1),
                new Date(2024, 0, 5),
                new Date(2024, 0, 10),
                new Date(2024, 0, 15),
                new Date(2024, 0, 20),
                new Date(2024, 0, 25),
                new Date(2024, 0, 31),
              ]
            : [
                new Date(2024, 0, 1),
                new Date(2024, 0, 15),
                new Date(2024, 0, 31),
              ]}
        />
        {#each dataByCategory as [category, data]}
          <Spline
            {data}
            stroke={cScale?.(category)}
            class="stroke-[2]"
            style="stroke-dasharray: {category === 'Previous Period'
              ? '4,4'
              : 'none'}; opacity: {category === 'Previous Period'
              ? '0.5'
              : '1'}"
          />
        {/each}
        <Highlight points lines />
      </Svg>
      <Tooltip.Root let:data>
        <Tooltip.Header>
          {formatDate(data.date, "eee, MMM dd")}
        </Tooltip.Header>
        <Tooltip.List>
          <Tooltip.Item
            label={data.category}
            value={`$${data.amount.toLocaleString()}`}
          />
        </Tooltip.List>
      </Tooltip.Root>
    </Chart>
  </div>
  <div class="flex items-center gap-4 pt-2">
    {#each Object.entries(categoryColors) as [category, color]}
      <div class="flex items-center gap-2">
        <div
          class="w-4 h-0.5"
          style="background-color: {color};
                 {category === 'Previous Period'
            ? 'border-top: 2px dashed #2563EB; background-color: transparent;'
            : ''}"
        ></div>
        <span class="text-sm text-gray-600">{category}</span>
      </div>
    {/each}
  </div>
</div>
