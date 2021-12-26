import React from "react";
import Card from "./Card";

export default function Cards() {
  const data = [
    { title: "Treadmill", duration: "58:32", calories: "230" },
    { title: "Stretching", duration: "58:32", calories: "230" },
    { title: "Yoga", duration: "58:32", calories: "230" },
    { title: "Running", duration: "58:32", calories: "230" },
    { title: "Lifting", duration: "58:32", calories: "230" },
    { title: "Pushup", duration: "58:32", calories: "230" },
  ];
  return (
    <>
      {data.map((data) => {
        return (
          <Card
            title={data.title}
            duration={data.duration}
            calories={data.calories}
            img={data.title.toLowerCase() + ".png"}
          />
        );
      })}
    </>
  );
}
