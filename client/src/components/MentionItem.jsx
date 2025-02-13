import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import { deletePost } from "../redux/features/post/postSlice";
import ModalDeleteMentionItem from "./ModalDeleteMentionItem";
import ModalUpdateMentionItem from "./ModalUpdateMentionItem";
import useDateReturn from "../hooks/useDateReturn";
import { useCustomSnackBar } from "../hooks/useCustomSnackBar";
function MentionItem({ item }) {
    const { snackBar_success, snackBar_error } = useCustomSnackBar();

    const { _id, topic, content, createdAt, updatedAt } = item;
    const ls_token = localStorage?.getItem("token");

    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const dispatch = useDispatch();

    const handleDelete = () => {
        try {
            const condition = {
                _id,
                token: ls_token,
            };
            dispatch(deletePost(condition));
            snackBar_success();
        } catch (error) {
            snackBar_error();
        }
        setDeleteModal(false);
    };

    const { new_createdAt, new_updatedAt } = useDateReturn({
        createdAt,
        updatedAt,
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
                    onClick={() => setUpdateModal(true)}
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
            <ModalDeleteMentionItem
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                handleDelete={handleDelete}
            />
            <ModalUpdateMentionItem
                updateModal={updateModal}
                setUpdateModal={setUpdateModal}
                item={item}
            />
        </Card>
    );
}

export default MentionItem;
