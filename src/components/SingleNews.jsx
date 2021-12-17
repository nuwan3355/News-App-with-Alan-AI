import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function SingleNews({ news, num,url }) {
  console.log(news);
  return (
    <Card style={{ height: "400px", position: "relative" }}>
      <CardActionArea href={url} target="_blank">
        <img
          src={
            news.urlToImage ||
            "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="
          }
          alt="da"
          style={{ width: "100%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Typography variant="body2">
            {new Date(news.publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" component="h2">
            {news.source.name}
          </Typography>
        </div>
        <Typography variant=" body2" component="h2" style={{ padding: "10px" }}>
          {news.title}
        </Typography>
        <CardContent>
          <typography variant="body2" component="h2">
            {news.description}
          </typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          position: "absolute",
          bottom: "0px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="p" component="p">
          {num + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}
