import React from "react";
import { Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

function ModalDeleteMentionItem({ deleteModal, setDeleteModal, handleDelete }) {
    return (
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
    );
}

export default ModalDeleteMentionItem;
