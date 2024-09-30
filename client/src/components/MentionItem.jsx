import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
function MentionItem() {
    return (
        <Card>
            <CardActions
                sx={{
                    justifyContent: "flex-end",
                    padding: "5px 5px 0px 5px",
                }}
            >
                <Button size="small">
                    <FaEdit size={20} />
                </Button>
                <Button size="small">
                    <RiDeleteBin6Line size={20} />
                </Button>
            </CardActions>
            <CardContent
                sx={{
                    textAlign: "left",
                    padding: "0px 10px",
                }}
            >
                <Typography gutterBottom variant="h6" component="div">
                    topic_name
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    content
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MentionItem;
