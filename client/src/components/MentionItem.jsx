import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deletePost } from "../redux/features/post/postSlice";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: "1px 1px 3px 1px black",
    pt: 2,
    px: 4,
    pb: 3,
};

const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));

function MentionItem({ item }) {
    const { _id, topic, content, createdAt, updatedAt } = item;
    const ls_token = localStorage?.getItem("token");

    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const dispatch = useDispatch();

    const handleDelete = () => {
        const condition = {
            _id,
            token: ls_token,
        };
        dispatch(deletePost(condition));
        setDeleteModal(false);
    };

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
                <Button
                    size="small"
                    color="success"
                    sx={{ minWidth: "0px" }}
                    onClick={() => setEditModal(true)}
                >
                    <FaEdit size={20} />
                </Button>
                <Button
                    size="small"
                    color="error"
                    sx={{ minWidth: "0px" }}
                    onClick={() => setDeleteModal(true)}
                >
                    <RiDeleteBin6Line size={20} />
                </Button>
            </CardActions>
            <Modal
                open={editModal}
                onClose={() => setEditModal(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">Text in a modal</h2>
                    <p id="parent-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </p>
                </Box>
            </Modal>
            <Modal
                open={deleteModal}
                onClose={() => setDeleteModal(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400, height: 150 }}>
                    <Stack>
                        <Item>
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: "bold", textAlign: "left" }}
                            >
                                Are you sure you want to delete this?
                            </Typography>
                        </Item>
                    </Stack>
                    <Stack>
                        <Item
                            sx={{
                                display: "flex",
                                justifyContent: "end",
                                gap: "10px",
                                marginTop: "30px",
                            }}
                        >
                            <Button
                                variant="contained"
                                color="error"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: "gray" }}
                                onClick={() => setDeleteModal(false)}
                            >
                                Cancel
                            </Button>
                        </Item>
                    </Stack>
                </Box>
            </Modal>
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
