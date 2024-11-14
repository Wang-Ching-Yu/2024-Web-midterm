import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "選手-操作",
    icon: "bi bi-bell",
    color: "primary",
    date: "角色",
  },
  {
    title: "選手-操作",
    icon: "bi bi-person",
    color: "info",
    date: "角色",
  },
  {
    title: "選手-操作",
    icon: "bi bi-hdd",
    color: "danger",
    date: "角色",
  },
  {
    title: "選手-操作",
    icon: "bi bi-bag-check",
    color: "success",
    date: "角色",
  },
  {
    title: "選手-操作",
    icon: "bi bi-bell",
    color: "dark",
    date: "角色",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">精華片段</CardTitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
