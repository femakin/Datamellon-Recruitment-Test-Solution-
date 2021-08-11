import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Pie,
  ScatterChart,
  Scatter,
  PieChart,
} from "recharts";

import { renderActiveShape } from "./components/RenderActiveShape";
import ReactLoading from "react-loading";
import "./index.css";

export default function App() {
  const [loading, setLoading] = React.useState(false);

  const [itemData, setItemData] = React.useState([]);

  const [states, setStates] = React.useState([]);

  const [segments, setSegments] = React.useState([]);

  const [category, setCategory] = React.useState([]);

  const [filtered, setFiltered] = React.useState([]);

  const [filterState, setFilterState] = React.useState("Ohio");
  const [filterSegment, setFilterSegment] = React.useState("Corporate");
  const [filterCategory, setFilterCategory] = React.useState("Furniture");

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      data.append("angular_test", "angular_developer");
      const res = await axios({
        method: "post",
        url: "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",
        data: { angular_test: "angular_developer" },
        // responseType: "stream",
      });

      setItemData(
        res.data.map((d, index) => ({
          productName: d[`Product Name`],
          sales: d[`Sales`],
          profit: d[`Profit`],
          discount: d[`Discount`],
          orderDate: d[`Order Date`],
          shipDate: d[`Ship Date`],
          quantity: d[`Quantity`],
          state: d[`State`],
          segment: d[`Segment`],
          category: d[`Category`],
        }))
      );

      setStates([
        ...new Set(
          res.data.map((re, index) => {
            return re[`State`];
          })
        ),
      ]);

      setSegments([
        ...new Set(
          res.data.map((re, index) => {
            return re[`Segment`];
          })
        ),
      ]);

      setCategory([
        ...new Set(
          res.data.map((re, index) => {
            return re[`Category`];
          })
        ),
      ]);

      setFiltered(
        res.filter(
          (item, index) =>
            item.segment
              .toLocaleLowerCase()
              .includes(`${segments[0].toLocaleLowerCase()}`) &&
            item.state.toLocaleLowerCase() ===
              `${states[0].toLocaleLowerCase()}` &&
            item.category.toLocaleLowerCase() ===
              `${category[0].toLocaleLowerCase()}`
        )
      );

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
      return e;
    }
  };

  const onFilter = async ({ type, color }) => {
    setLoading(true);
    try {
      setFiltered(
        itemData.filter(
          (item, index) =>
            item.segment
              .toLocaleLowerCase()
              .includes(`${filterSegment.toLocaleLowerCase()}`) &&
            item.state.toLocaleLowerCase() ===
              `${filterState.toLocaleLowerCase()}` &&
            item.category.toLocaleLowerCase() ===
              `${filterCategory.toLocaleLowerCase()}`
        )
      );
      setLoading(false);
      console.log("filtered...", filtered);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  // eslint-disable-next-line
  useEffect(
    React.useCallback(() => fetchData(), []), // eslint-disable-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="container">
      <div className="wrapper">
        {loading ? (
          // <h1>Please hold on! Data loading...</h1>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "Gray", fontSize: "32px" }}>
              Datamellon Assesment Test
            </h1>

            <h1
              style={{ color: "GrayText", fontSize: "22px", marginTop: "30px" }}
            >
              Please hold on! Data loading... This may take up to few seconds 🤦‍♂️{" "}
              <br />{" "}
              <span style={{ color: "red" }}>
                Please, Best desktop view presently.
              </span>
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ReactLoading
                type={"balls"}
                color={"gray"}
                height={667}
                width={375}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="select-div">
              <div>
                <div>
                  <label htmlFor="State" className="label">
                    State (U.S.A)
                  </label>
                </div>
                <div>
                  <select
                    onChange={(event) => setFilterState(event.target.value)}
                    name="selectList"
                    id="selectList"
                  >
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="Segment" className="label">
                    Segment
                  </label>
                </div>

                <div>
                  <select
                    onChange={(event) => setFilterSegment(event.target.value)}
                    name="selectList"
                    id="selectList"
                  >
                    {segments.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="Category" className="label">
                    Category
                  </label>
                </div>

                <div>
                  <select
                    onChange={(event) => setFilterCategory(event.target.value)}
                    name="selectList"
                    id="selectList"
                  >
                    {category.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* <div className="btn">
              <div className="vertical-center">
                <button onClick={onFilter}>Filter</button>
              </div>
            </div> */}

            <div className="center">
              <button onClick={onFilter}>Filter</button>
            </div>

            {filtered.length <= 0 ? (
              <div
                style={{
                  textAlign: "center",
                  marginTop: "30px",
                  color: "#f26d6b",
                  fontSize: "32px",
                }}
              >
                <h4>
                  No Product found for this filter criteria. Please use the
                  dropdown above
                </h4>
              </div>
            ) : (
              <>
                {" "}
                <div className="chart">
                  <h3 className="chartTitle">
                    This BarChart <br /> was plotted using <br /> ProductName,
                    Profit, Sales and Quantity{" "}
                  </h3>
                  <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <BarChart
                      width={1001}
                      height={1001}
                      data={filtered}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="productName" />
                      <YAxis dataKey="quantity" />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="profit"
                        stroke="#8884d8"
                        stackId="a"
                        fill="#8884d8"
                      />
                      <Bar
                        dataKey="sales"
                        stroke="#82ca9d"
                        stackId="a"
                        fill="#82ca9d"
                      />
                      <Bar dataKey="discount" fill="#5de242" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="chart">
                  <h3 className="chartTitle">
                    {" "}
                    This PieChart <br /> was plotted using <br /> ProductName,
                    and The Available Sales
                  </h3>
                  <ResponsiveContainer width="200%" aspect={4 / 1}>
                    <PieChart width={900} height={900}>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={filtered.map((item) => ({
                          name: item.productName,
                          value: Number(item.sales),
                        }))}
                        cx={200}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="chart">
                  <h3 className="chartTitle">
                    This ScatterChart <br /> was Plotted Using <br /> Sales and
                    Profit{" "}
                  </h3>
                  <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <ScatterChart
                      width={400}
                      height={400}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <CartesianGrid />
                      <XAxis
                        type="number"
                        dataKey="x"
                        name="sales"
                        unit="cur"
                      />
                      <YAxis type="number" dataKey="y" name="profit" unit="$" />
                      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                      <Scatter
                        name="A school"
                        data={filtered.map((item) => ({
                          x: Number(item.sales),
                          y: Number(item.quantity),
                          z: Number(item.profit),
                        }))}
                        fill="#8884d8"
                      />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
