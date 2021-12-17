import { Grid, Typography } from "@mui/material";
import React from "react";
import Head from "../components/Head";
import SingleNews from "../components/SingleNews";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from BBC News",
  },
];

export default function Home({ news }) {
  if (!news.length) {
    return (
      <Grid container spacing={1}>
        {infoCards.map((val, key) => {
          return (
            <Grid item xs={12} sm={6} md={4}  key={key}>
              <div
                style={{
                  background: val.color,
                  height: "300px",
                  color: "white",
                  padding: "10px",
                  textAlign: "center",
                  borderRadius: "10px",
                  margin: "10px",
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">{val.title}</Typography>
                {val.info ? (
                  <Typography variant="h6">
                    <strong>
                      {val.title.split(" ")[2]}:
                      <br />
                      {val.info}
                    </strong>
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try saying: <br /> <i>{val.text}</i>
                </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    );
  }
  return (
    <div>
      <Head />

      <Grid container spacing={4} style={{ padding: "20px" }}>
        {news.map((val, key) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <SingleNews key={key} news={val} num={key} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
