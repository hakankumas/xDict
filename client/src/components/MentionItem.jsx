import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
function MentionItem({ item }) {
    const { topic, content, createdAt, updatedAt } = item;
    const nfd_createdAt = new Date(createdAt);
    const new_createdAt = nfd_createdAt.toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const nfd_updatedAt = new Date(updatedAt);
    const new_updatedAt = nfd_updatedAt.toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    return (
        <Card sx={{ marginBottom: "10px" }}>
            <CardActions
                sx={{
                    justifyContent: "flex-end",
                    padding: "5px 15px 0px 5px",
                }}
            >
                <Button size="small" color="success" sx={{ minWidth: "0px" }}>
                    <FaEdit size={20} />
                </Button>
                <Button size="small" color="error" sx={{ minWidth: "0px" }}>
                    <RiDeleteBin6Line size={20} />
                </Button>
            </CardActions>
            <CardContent
                sx={{
                    textAlign: "left",
                    padding: "0px 20px",
                }}
            >
                <Typography
                    gutterBottom
                    variant="h1"
                    component="div"
                    sx={{
                        fontWeight: "bold",
                        fontSize: "17px",
                    }}
                >
                    {topic.topic_name}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "15px",
                        maxHeight: "100px",
                        overflow: "auto",
                    }}
                >
                    {content}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "12px",
                        display: "flex",
                        justifyContent: "end",
                        margin: "10px 0px -10px 0px",
                    }}
                >
                    {new_createdAt === new_updatedAt
                        ? `${new_createdAt}`
                        : `Edited: ${new_updatedAt}`}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MentionItem;
