import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend
} from "recharts";


const EventGenre = ({
  events
}) => {

  const [data, setData] = useState([]);

  useEffect(
    () => {
      setData(
        () => getData(events)
      );

    }, [events]
  );


  const getData = (events) => {

    const genres = [
      'React',
      'Javascript',
      'Node',
      'jQuery',
      'AngularJS'
    ];

    const data = genres.map(

      (genre) => {

        const value = events.filter(

          ({ summary }) => summary.split(' ').includes(genre)
        ).length;

        return { name: genre, value };

      }
    );

    return data;
  };

  const colors = [
    '#ee5454',
    '#5f74f0',
    '#69eb13',
    '#13ebeb',
    '#eb13c7'
  ];

  return (

    <ResponsiveContainer
      height={400}
    >
      <PieChart
        width={400}
        height={400}
      >
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
          label={({
            name,
            percent
          }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {
            data.map(
              (entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index]}
                  name={entry.name}
                />
              )
            )
          }
        </Pie>
        <Legend
          verticalAlign='top'
          layout='horizontal'
          align='center'
        />
      </PieChart>
    </ResponsiveContainer >
  );

};

export default EventGenre;